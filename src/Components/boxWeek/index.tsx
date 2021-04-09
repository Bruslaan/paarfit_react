import React, {useContext, useEffect, useState} from 'react';
import './index.css';
import moment from "moment"
import {
    createStyles,
    makeStyles,
    Paper,
    Theme,
    Grid,
} from '@material-ui/core';
import {AuthContext} from '../../AuthProvider';
import {db, heutigesDatum} from "../../firebase";

const boxWeekStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    })
);

const DAYS = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"]
export default function BoxWeek() {

    const {userInformation, user} = useContext(
        AuthContext
    );

    const [days, setDays]: any = useState([]);
    const [state, setState] = useState("Loading");


    const mustTraingToday = userInformation.lastWorkoutDone ? moment().isAfter(moment(userInformation.lastWorkoutDone?.toDate()).add(2, "days"), "day") : true


    const isToday = (day: any) => {
        return moment().isSame(day, "day")
    }

    useEffect(() => {
        week()
    }, []);

    const week = async () => {
        let days = []
        let last7Workouts: any = []
        const currentDate = moment();
        const lastWorkoutDay = userInformation?.lastWorkoutDone
        let nextWorkout = moment(lastWorkoutDay?.toDate()).add(3, "days")
        const weekStart = currentDate.clone().startOf('isoWeek');
        const weekEnd = currentDate.clone().endOf('isoWeek');

        const documentSnapshots = await db.collection("users").doc(user?.uid).collection("last_workouts").orderBy("workoutDoneOn").limitToLast(7).get()
        documentSnapshots.forEach((document) => {
            last7Workouts.push(document.data().workoutDoneOn)
        })

        for (let i = 0; i <= 6; i++) {


            const newDate = moment(weekStart).add(i, 'days')


            const theWorkoutWasDone = last7Workouts.filter((workout: any) => newDate.isSame(workout.toDate(), "day"))


            if (theWorkoutWasDone.length > 0) {
                days.push(<Erledigt day={newDate}></Erledigt>)
                continue
            }

            if (isToday(moment(weekStart).add(i, 'days'))) {
                if (mustTraingToday) {
                    days.push(<AktivTraining day={newDate}/>)
                    continue
                } else {
                    days.push(<Pause day={newDate} active={true}/>)
                    continue
                }
            }

            if (newDate.isSame(nextWorkout, "day")) {
                console.log("kakaschki")
                days.push(<DoneTraining day={newDate}/>);
                nextWorkout = nextWorkout.add(2, "days")
                continue
            }


            days.push(<Pause day={newDate}/>);
        }

        setDays(days)
        setState(weekStart.locale("de").format("DD.MM.YY") + " - " + weekEnd.locale("de").format("DD.MM.YY"))
    }


    const classes = boxWeekStyles();
    return (
        <Paper className={classes.paper}>
            <div className='boxContent'>
                <div className='detailsBoxProg'>
                    <div className='titleBoxProg'>
                        <h2 className='black'>WOCHE</h2>
                        <h3 className='purple1'>{state}</h3>
                    </div>
                    <div className='contentProg mt40'>
                        {days.map((day: any, index: number) => <div key={index} className='boxTimeSchedule'>
                            {
                                day
                            }
                        </div>)}

                    </div>
                </div>
            </div>
        </Paper>
    );
}

const Pause = ({day, active}: any) => {
    return (
        <div className='tableTimeSchedule'>
            <div className='calendarLeft'>
                <div className='calendarLeftDate'>
                    <h2 className='gray2'>{day.date()}</h2>
                    <h3 className='blue1'>{DAYS[day.day()]}</h3>
                </div>
            </div>
            <div className='lineTimeSchedule'>
                <div className='ctBoxLine whiteBg'>
                    <div className='borderBoxLine'>
                        <div className='borderLineIns whiteBg'>
                            <div className={`dotLineCalendar ${active ? "purpleBg1" : "grayBg2"}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='detTrainingRight'>
                <div className='detTrainingBtnSm'>
                    <a href='' title='' className='grayBg1 gray1'>
                        <h2>PaarFit-Regeneration</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}


const DoneTraining = ({day}: any) => {
    return (
        <div className='tableTimeSchedule'>
            <div className='calendarLeft'>
                <div className='calendarLeftDate'>
                    <h2 className='gray2'>{day.date()}</h2>
                    <h3 className='blue1'>{DAYS[day.day()]}</h3>
                </div>
            </div>
            <div className='lineTimeSchedule'>
                <div className='ctBoxLine whiteBg'>
                    <div className='borderBoxLine grayBg2'>
                        <div className='borderLineIns whiteBg'>
                            <div className='dotLineCalendar purpleBg1'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='detTrainingRight'>
                <div className='detTrainingBtnSm'>
                    <a href='' title='' className='purpleBg1 textWhite'>
                        <h2>PaarFit-Training</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}

const Erledigt = ({day}: any) => {
    return (
        <div className='tableTimeSchedule'>
            <div className='calendarLeft'>
                <div className='calendarLeftDate'>
                    <h2 className='gray2'>{day.date()}</h2>
                    <h3 className='blue1'>{DAYS[day.day()]}</h3>
                </div>
            </div>
            <div className='lineTimeSchedule'>
                <div className='ctBoxLine whiteBg'>
                    <div className='borderBoxLine grayBg2'>
                        <div className='borderLineIns whiteBg'>
                            <div className='dotLineCalendar purpleBg1'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='detTrainingRight'>
                <div className='detTrainingBtnSm'>
                    <a href='' title='' className='yellowBg textWhite'>
                        <h2>Training wurde erfolgreich absolviert</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}
const AktivTraining = ({day}: any) => {

    return (
        <div className='tableTimeSchedule'>
            <div className='calendarLeft'>
                <div className='calendarLeftDate'>
                    <h2 className='gray2'>{day.date()}</h2>
                    <h3 className='blue1'>{DAYS[day.day()]}</h3>
                </div>
            </div>
            <div className='lineTimeSchedule'>
                <div className='ctBoxLine whiteBg'>
                    <div className='borderBoxLine purpleBg2'>
                        <div className='borderLineIns whiteBg'>
                            <div className='dotLineCalendar blueBg2'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='detTrainingRight'>
                <div className='detTrainingBtnLg'>
                    <a href='' title='' className='blueBg textWhite'>
                        <h2>PaarFit-Training</h2>
                        <div className='contentBtnLg'>
                            <div className='lineBtn whiteBg'></div>
                            <div className='detailsBtnLg'>
                                <h3>Training</h3>
                                <h4>+ 100 P.</h4>
                            </div>
                            <div className='detailsBtnLg'>
                                <h3>Aktivitäten</h3>
                                <h4>+90 P.</h4>
                            </div>
                        </div>
                        <div className='iconWeightBtnLg yellowBg'>
                            <img src='images/hantel.svg' alt=''/>
                        </div>
                        <div className='iconAddBtnLg purpleBg2 textWhite'>+</div>
                    </a>
                </div>
            </div>
        </div>
    )
}
