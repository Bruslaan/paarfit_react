import React from 'react';
import './index.css';
import {
    createStyles,
    makeStyles,
    Paper,
    Theme,
    Grid,
} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {motQuoteArr} from '../../constants';
import moment from "moment"
import {AuthContext} from "../../AuthProvider";

const BoxTrainingActivityStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    })
);

export default function BoxTrainingActivity() {
  const history = useHistory();
  const [rng, setRng] = useState(Number);
  const startWorkout = () => {
    history.push('/training/overview');
  };

  const classes = BoxTrainingActivityStyles();

  // const schedule = require('node-schedule');
  // const rngTimer = schedule.scheduleJob('* 10 * * * *', function () {
  //   setRng(Math.floor(Math.random() * motQuoteArr.length));
  // });

  return (
    <Paper className={classes.paper}>
      <div className='areaHomeCol2'>
        <div className='ctHomeCol2'>
          <div className='titleCol2 textWhite'>
            {motQuoteArr[Math.floor(Math.random() * motQuoteArr.length)]}
          </div>
          <div className='subTitleCol2 yellow1'>Willkommen zurück!</div>
        </div>
        <div className='ctTrainingCol2 whiteBg'>
          <div
            onClick={startWorkout}
            className='detailsTrainingCol2 blueBg2 big__button'
          >
            <h2 className='textWhite'>training</h2>
            <div className='ctGetStartedCol2'>
              <div className='iconGetStarted1'>
                <img src='images/hantel.svg' alt='' />
              </div>
              <div className='linkGetStarted'>
                <div className='iconGetStarted2'>
                  <img src='images/iconArrow.png' alt='' />
                </div>
                <a title='' className='textWhite'>
                  jetzt starten
                </a>
              </div>
            </div>
            <div className='hereGoCol2'>
              <a href='' title='' className='textWhite'>
                los geht's
              </a>
            </div>
          </div>
        </div>
        <div className='ctActivitateCol2 whiteBg'>
          <div className='detailsActivCol2 purpleBg2 big__button'>
            <h2 className='textWhite'>aktivität</h2>
            <div className='ctAddCol2'>
              <div className='iconAddCol2'>
                <img src='images/aktivitäten.svg' alt='' />
              </div>
              <div className='linkAddCol2'>
                <a href='' title='' className='textWhite'>
                  +hinzufügen
                </a>
              </div>
            </div>
            <div className='hereGoCol2'>
              <a href='' title='' className='textWhite'>
                egal, ob spazieren gehen, schwimmen oder Gartenarbeit
              </a>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}
