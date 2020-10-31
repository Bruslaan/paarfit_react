import React from 'react'
import './index.css'
import PulseButton from '../PulseButton'
import { useHistory } from "react-router-dom";
import { Typography } from '@material-ui/core';

function TrainingsPage() {
    const history = useHistory()
    const startWorkout = () => { history.push("/training/overview") }

    return (
        <div className="trainings__container">

            <Typography gutterBottom variant="h3" component="h1">Woche 1</Typography>
            <PulseButton buttonName="Workout Starten" buttonClicked={() => startWorkout()} />
        </div >
    )
}

export default TrainingsPage
