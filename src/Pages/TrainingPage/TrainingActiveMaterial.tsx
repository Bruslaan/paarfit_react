import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import WorkoutItem from './WorkoutItem';
import { useHistory, useParams } from 'react-router';
import { AuthContext } from '../../AuthProvider';
import { CircularProgress } from '@material-ui/core';
import { Prompt } from 'react-router';
import firebase, { heutigesDatum } from '../../firebase';
import {
  ReturnLink,
  HandleData,
  getPoints,
  diff_minutes,
} from './trainingsUtils';
import { sequenceState } from './trainingsUtils';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },
    resetContainer: {
      // padding: theme.spacing(3),

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
    },
  })
);

function ColorlibStepIcon(props: any) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      <div className='customStepperIcon_ins1'>
        <div className='customStepperIcon_ins2'>{props.icon}</div>
      </div>
    </div>
  );
}
const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#F8CD4E;',
    zIndex: 1,
    color: '#fff',
    width: 44,
    height: 44,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#F8CD4E;',
  },
  completed: {
    backgroundColor: '#883EF0;',
  },
});

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setloading] = useState(false);
  const [workouts, setworkouts]: any = useState([]);
  const { user, userInformation } = useContext(AuthContext);
  const [startTime, setstartTime]: any = useState(null);
  const history = useHistory();

  let params: any = useParams();
  let currentID: number = Number(params['id']);
  let stage = sequenceState[currentID];

  let schwierigkeitsgrad: string = userInformation?.stufe;

  async function fetchWorkouts() {
    setloading(true);
    const link: string = ReturnLink(stage, schwierigkeitsgrad) as string;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        const filteredData = HandleData(stage, schwierigkeitsgrad, data);
        setworkouts(filteredData);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }

  useEffect(() => {
    const now = new Date();
    setstartTime(now);
    fetchWorkouts();
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleFinish = () => {
    uploadWorkoutTocloud();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const uploadWorkoutTocloud = async () => {
    // upload
    const workout: any = {};
    workout[stage] = true;
    console.log('workout to upload', workout);
    const fireastore = firebase.firestore();
    const doneWorkouts = await fireastore
      .collection('users')
      .doc(user?.uid)
      .collection('pflicht_workouts')
      .doc('workout_' + heutigesDatum)
      .get();
    const data = doneWorkouts?.data()!;
    const stageExists = doneWorkouts.exists && data[stage];

    if (!stageExists) {
      const increment = firebase.firestore.FieldValue.increment(
        getPoints(stage)
      );
      // Document reference
      const storyRef = fireastore.collection('users').doc(user?.uid);

      // Update read count
      await storyRef.update({ punkte: increment });
      console.log('Incremented');
      const doneWorkouts: any = {};
      const key: string = stage + '_workouts';
      const EndTime = new Date();
      const timeTaken = diff_minutes(EndTime, startTime);
      doneWorkouts[key] = workouts.map((workout: any) => {
        let newObject = {
          id: workout['_id'],
          workoutName: workout['workoutname'],
        };
        return newObject;
      });
      doneWorkouts['timeTaken'] = timeTaken;
      await storyRef
        .collection('pflicht_workouts')
        .doc('workout_' + heutigesDatum)
        .set(doneWorkouts, { merge: true });
      console.log('Pflich workouts set', doneWorkouts);
    }

    fireastore
      .collection('users')
      .doc(user?.uid)
      .collection('pflicht_workouts')
      .doc('workout_' + heutigesDatum)
      .set(workout, { merge: true })
      .then((doc) => {
        console.log('Workout gespeichert ', doc);
        history.push('/training/overview');
      })
      .catch((error) => {
        console.log('Workout konnte nicht gespeichert werden ', error);
      });
  };
  const percentage = 63;
  return (
    <div className='trainingStepperMob'>
      <div className='trainingStepperSt'>
        <div
          className='detTrainingWork'
          style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
          }}
        >
          <Stepper
            activeStep={activeStep}
            orientation='vertical'
            style={{ width: '100%', padding: '0' }}
          >
            {workouts.map((workout: any) => (
              <Step key={workout['_id']}>
                <StepLabel
                  className='titleTrainingStep'
                  StepIconComponent={ColorlibStepIcon}
                >
                  <h3 style={{ marginLeft: '20px' }}>{workout.workoutname}</h3>
                </StepLabel>
                <StepContent style={{ padding: '0' }}>
                  <div className='areaCtTrainingDet'>
                    <WorkoutItem workout={workout} stage={stage} />
                    <div className={classes.actionsContainer}>
                      <div className='detTrainingBtn btnDspNone'>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Zurück
                        </Button>
                        <Button
                          variant='contained'
                          onClick={
                            activeStep === workouts.length - 1
                              ? handleFinish
                              : handleNext
                          }
                          className={classes.button}
                        >
                          {activeStep === workouts.length - 1
                            ? 'Abschließen'
                            : 'Weiter'}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className='timeTrainingWork'>
                    <div className='boxTimeTraining'>
                      <h2>pause</h2>
                      <div className='lineProgressbar purpleBg2'></div>
                      <div className='boxTimeProgressbar'>
                        <div className='flipText'>
                          <CircularProgressbar
                            value={63}
                            text=''
                            styles={{
                              path: {
                                strokeWidth: '8',
                                stroke: '#9529F9',
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                              },
                              trail: {
                                strokeWidth: '4',
                                stroke: '#EAEBEB',
                                strokeLinecap: 'round',
                              },
                            }}
                          />
                        </div>
                        <div className='titleTimeProgressbar'>
                          <h3>00:05</h3>
                          <p className='purple1'>relax</p>
                        </div>
                      </div>
                      <div className='ctSetProgressbar'>
                        <div className='boxSetProgressbar gray2'>Set 1</div>
                        <div className='boxSetProgressbar purple1'>Set 2</div>
                        <div className='boxSetProgressbar gray2'>Set 3</div>
                      </div>
                      <div className='detTrainingBtn btnDspNoneDesk'>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Zurück
                        </Button>
                        <Button
                          variant='contained'
                          onClick={
                            activeStep === workouts.length - 1
                              ? handleFinish
                              : handleNext
                          }
                          className={classes.button}
                        >
                          {activeStep === workouts.length - 1
                            ? 'Abschließen'
                            : 'Weiter'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>

          {loading && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <p style={{ marginBottom: '20px' }}>Workouts werden geladen...</p>

              <CircularProgress />
            </Paper>
          )}

          <Prompt
            when={!(activeStep >= workouts.length - 1)}
            message='Du bist mitten im Workout, sicher dass du es abbrechen willst?'
          />
        </div>
      </div>
    </div>
  );
}