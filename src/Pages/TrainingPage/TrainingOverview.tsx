import React, {useContext, useEffect, useState} from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import {useHistory} from "react-router-dom";
import {Button} from '@material-ui/core';
import {AuthContext} from '../../AuthProvider'
import firebase, {heutigesDatum} from '../../firebase'
import {sequenceState} from "./trainingsUtils"

const style: any = {
    width: "100%",
    display: "flex",
    flexWrap: 'wrap',
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
}

const cardStyle = {
    padding: "100px",
    cursor: "pointer",
}

const TrainingOverview = () => {
    const history = useHistory()
    const startWorkout = (index: number) => {
        history.push("/training/overview/active/" + index)
    }

    const moods = ["Gut", "Sehr Gut", "Fantastisch"]

    return (

        <div style={{width: "100%", textAlign: "center"}}>
            <h1>Wie geht es dir heute?</h1>
            <div style={style}>
                {
                    moods.map((mood: string, index: number) => <div onClick={() => startWorkout(index)}
                                                                    style={cardStyle}><h1>{mood}</h1></div>)
                }
            </div>
        </div>

    )
}


export default TrainingOverview