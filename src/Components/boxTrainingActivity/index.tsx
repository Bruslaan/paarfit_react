import React from 'react'
import './index.css';
import { createStyles, makeStyles, Paper, Theme, Grid } from '@material-ui/core'
import {useHistory} from "react-router-dom";

const BoxTrainingActivityStyles = makeStyles((theme: Theme) =>
    createStyles({
            paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },

    }),
);

export default function BoxTrainingActivity() {



    const history = useHistory()
    const startWorkout = () => { history.push("/training/overview") }

    const classes = BoxTrainingActivityStyles();
    return (
        <Paper className={classes.paper}>
            <div className="areaHomeCol2">
                <div className="ctHomeCol2">
                        <div className="titleCol2 textWhite">today you<br/> gonna<br/> rock!</div>
                        <div className="subTitleCol2 yellow1">Guten Abend ihr zwei!</div>
                </div>
                <div className="ctTrainingCol2 whiteBg">
                    <div onClick={startWorkout} className="detailsTrainingCol2 blueBg2 big__button">
                        <h2 className="textWhite">training</h2>
                        <div className="ctGetStartedCol2">
                            <div className="iconGetStarted1"><img src="images/hantel.svg" alt=""/></div>
                            <div className="linkGetStarted">
                                <div className="iconGetStarted2"><img src="images/iconArrow.png" alt=""/></div>
                                <p  title="" className="textWhite">jetzt starten</p>
                            </div>
                        </div>
                        <div className="hereGoCol2"><a href="" title="" className="textWhite">los gehts</a></div>
                    </div>
                </div>
                <div className="ctActivitateCol2 whiteBg">
                    <div className="detailsActivCol2 purpleBg2">
                    <h2 className="textWhite">aktivität</h2>
                    <div className="ctAddCol2">
                            <div className="iconAddCol2"><img src="images/aktivitäten.svg" alt=""/></div>
                            <div className="linkAddCol2">
                                <a href="" title="" className="textWhite">+hinzufügen</a>
                            </div>
                        </div>
                        <div className="hereGoCol2"><a href="" title="" className="textWhite">egal ob Spazierengehen, Schwim-<br/> men oder Gartenarbeit</a></div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

