import React from 'react'
import './index.css';
import { createStyles, makeStyles, Paper, Theme, Grid } from '@material-ui/core'
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const boxResultsStyles = makeStyles((theme: Theme) =>
    createStyles({
            paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },

    }),
);

export default function BoxResults() {
    const classes = boxResultsStyles();
    const percentage = 63
    return (
        <div className="areaUntilCol3 whiteBg">
            <div className="titleUntilCol3"><h2>noch <span className="purple1">70 P.</span><br/> bis zum</h2></div>
            
            <div className="ctProgressbar">
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
                <p className="gray1">180/250</p>
            </div>
            <div className="textUntilCol3">
                <h3 className="purple1">Power-Couple</h3>  
                <p className="gray1">Als Power-Couple seid ihr unbesiegbar.<br/> Lorem ipsum dolor sit amet, consec</p>
            </div>
        </div>
    )
}

