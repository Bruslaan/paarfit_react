import React from 'react'
import './index.css';
import { createStyles, makeStyles, Paper, Theme, Grid } from '@material-ui/core'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const boxLevelStyles = makeStyles((theme: Theme) =>
    createStyles({
            paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },

    }),
);

export default function BoxLevel() {
    const classes = boxLevelStyles();
    const percentage = 90
    return (
        <div className="areaUntilLevel whiteBg">
            <div className="titleUntilLevel"><h2>niveau</h2></div>
            <div className="areaStartCouple">
                <h3 className="purple1">Starter-Couple</h3>
                <div className="ctStartCouple">
                    <div className="flipText">
                    <CircularProgressbar value={percentage} text="" styles={{
                        path: {
                            strokeWidth: "8",
                            stroke: "#9529F9",
                            strokeLinecap: 'round',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                        },
                        trail: {
                            strokeWidth: "4",
                            stroke: "#EAEBEB",
                            strokeLinecap: 'round',
                        }
                        }} />
                    </div>
                </div>
                <p className="gray1">180/250</p>
            </div>
            <div className="areaPowerCouple inactiveLevel">
                <h3 className="purple1">Power-Couple</h3>
                <div className="ctPowerCouple">
                    <div className="flipText">
                    <CircularProgressbar value={20} text="" styles={{
                        path: {
                            strokeWidth: "8",
                            stroke: "#9529F9",
                            strokeLinecap: 'round',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                        },
                        trail: {
                            strokeWidth: "4",
                            stroke: "#EAEBEB",
                            strokeLinecap: 'round',
                        }
                        }} />
                    </div>
                </div>
                <p className="gray1">0/500</p>
            </div>
            <div className="areaFitnessCouple inactiveLevel">
                <h3 className="purple1">Fitness-Couple</h3>
                <div className="ctFitnessCouple">
                    <div className="flipText">
                    <CircularProgressbar value={0} text="" styles={{
                        path: {
                            strokeWidth: "8",
                            stroke: "#9529F9",
                            strokeLinecap: 'round',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                        },
                        trail: {
                            strokeWidth: "4",
                            stroke: "#EAEBEB",
                            strokeLinecap: 'round',
                        }
                        }} />
                    </div>
                </div>
                <p className="gray1">0/1000</p>
            </div>
            <div className="areaAdvancedCouple inactiveLevel">
                <h3 className="purple1">Advanced-Couple</h3>
                <div className="ctAdvancedCouple">
                    <div className="flipText">
                    <CircularProgressbar value={0} text="" styles={{
                        path: {
                            strokeWidth: "8",
                            stroke: "#9529F9",
                            strokeLinecap: 'round',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                        },
                        trail: {
                            strokeWidth: "4",
                            stroke: "#EAEBEB",
                            strokeLinecap: 'round',
                        }
                        }} />
                    </div>
                </div>
                <p className="gray1">0/2000</p>
            </div>
            <div className="areaSuperCouple inactiveLevel">
                <h3 className="purple1">Super-Couple</h3>
                <div className="ctSuperCouple">
                    <div className="flipText">
                    <CircularProgressbar value={0} text="" styles={{
                        path: {
                            strokeWidth: "8",
                            stroke: "#9529F9",
                            strokeLinecap: 'round',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                        },
                        trail: {
                            strokeWidth: "4",
                            stroke: "#EAEBEB",
                            strokeLinecap: 'round',
                        }
                        }} />
                    </div>
                </div>
                <p className="gray1"></p>
            </div>
        </div>
    )
}

