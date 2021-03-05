import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import PulseButton, { Parfitbutton } from '../../Components/PulseButton'
import { useHistory } from "react-router-dom";
import { Typography } from '@material-ui/core';
import firebase, { heutigesDatum } from '../../firebase'
import { AuthContext } from '../../AuthProvider'
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


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

    const ongoing = document.Aufwärmen || document.Kraft || document.Yoga || document["Ausdauer/Fettverbrennung"]
    const finished = document.Aufwärmen && document.Kraft && document.Yoga && document["Ausdauer/Fettverbrennung"]
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
    const percentage = 66
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
        <div className="areaJumpingJacks">
            <div className="trainings__container">
                <Typography gutterBottom variant="h3" component="h1">Woche 1</Typography>
                <span style={{ color: "gray", fontSize: "1rem" }}>@Beta v1</span>
                <br />
                <span style={{ color: "#c79a87", fontSize: "1rem" }}>Sie trainieren gerade mit 21 weiteren Personen</span>
                <br/>

                {ButtonCoponent(workoutState, () => startWorkout())}
                <div style={{ width: "250px", height: "250px", marginTop: "20px" }}>
                    <CircularProgressbar value={percentage} text="2 / 3" styles={buildStyles({
                        textColor: "#fecdb7",
                        pathColor: "#f75c1a",
                        trailColor: "#fecdb7"
                    })} />
                </div>
                {/* <PulseButton buttonName="Pflicht Training Starten" buttonClicked={() => startWorkout()} /> */}
            </div >
        </div>
    )


}

export default TrainingsPage
