import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import PulseButton, { Parfitbutton } from '../PulseButton'
import { useHistory } from "react-router-dom";
import { Typography } from '@material-ui/core';
import firebase, { heutigesDatum } from '../firebase'
import { AuthContext } from '../AuthProvider'


const ButtonCoponent = (state: string, calBackFunction: Function) => {

    switch (state) {
        case "ongoing":
            return <PulseButton buttonName="Pflicht Training Weiterführen" buttonClicked={() => calBackFunction()} />
        case "finished":
            return <Parfitbutton buttonName="Training Wiederholen" buttonClicked={() => calBackFunction()} />
        default:
            return <PulseButton buttonName="Training Starten" buttonClicked={() => calBackFunction()} />
    }

}


const CalculateState = (document: any) => {

    const ongoing = document.Aufwärmen || document.Dehnen || document.Kraft
    const finished = document.Aufwärmen && document.Dehnen && document.Kraft

    if (finished) {
        return "finished"
    } else if (ongoing) {
        return "ongoing"
    }

    return ""
}


function TrainingsPage() {
    const history = useHistory()
    const startWorkout = () => { history.push("/training/overview") }
    const { user } = useContext(AuthContext)
    const [workoutState, setworkoutState] = useState("")

    const firestore = firebase.firestore()
    useEffect(() => {
        firestore.collection("users").doc(user?.uid).collection("pflicht_workouts").doc("workout_" + heutigesDatum).get().then(doc => {
            if (doc.exists) {
                const data = doc.data()
                setworkoutState(CalculateState(data))
            }
        })
    }, [user])


    return (
        <div className="trainings__container">
            <Typography gutterBottom variant="h3" component="h1"><span style={{ color: "gray", fontSize: "2rem" }}>@Beta</span> Woche 1</Typography>
            <p style={{ color: "gray" }}>von 1.11.20 bis 1.12.20 </p>
            <br />
            {ButtonCoponent(workoutState, () => startWorkout())}
            {/* <PulseButton buttonName="Pflicht Training Starten" buttonClicked={() => startWorkout()} /> */}
        </div >
    )
}

export default TrainingsPage
