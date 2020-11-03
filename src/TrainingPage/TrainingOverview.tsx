
import React, { useContext, useEffect, useState } from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import { AuthContext } from '../AuthProvider'
import firebase, { heutigesDatum } from '../firebase'
const style = {
    maxWidth: "500px",
    width: "100%",
    height: "150px",
    marginBottom: "10px",
    overflow: "hidden",
    borderRadius: "50px",
}


const TrainingOverview = () => {
    const history = useHistory()
    const startWorkout = (index: number) => {
        console.log("hallo world")
        history.push("/training/overview/active/" + index)
    }
    const { user } = useContext(AuthContext)
    const Sequence = [
        { name: "Aufwärmen", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" },
        { name: "Kraft", image: "https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" },
        { name: "Ausdauer/Fettverbrennung", image: "https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" },
        { name: "Yoga", image: "https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" },
    ]
    const sequenceState = {
        0: "Aufwärmen",
        1: "Kraft",
        2: "Ausdauer/Fettverbrennung",
        3: "Yoga",
        4: "Dehnen"
    }

    const [reactiveSequenceState, setSequenceState]: any = useState(sequenceState)
    const firestore = firebase.firestore()
    useEffect(() => {
        firestore.collection("users").doc(user?.uid).collection("pflicht_workouts").doc("workout_" + heutigesDatum).get().then((data: any) => {
            if (data.exists) {
                console.log(data.data()["Aufwärmen"])
                setSequenceState(data.data())
            } else {
                console.log("No workouts done today!")
            }
        }).catch(error => {
            console.log("Cannot fetch overview data ", error)
        })
    }, [])

    return (
        <div className="center__all" style={{ background: "white", width: "90%", margin: "auto" }}>
            <Stepper style={{ maxWidth: "500px", width: "100%", padding: "0px", overflow: "hidden" }} orientation="vertical" >
                {Sequence.map((sequence: any, index: number) => (
                    <Step completed={reactiveSequenceState[sequence.name]} active={true} key={index} >
                        <StepLabel>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
                                <h1 className="test">{sequence.name}</h1>
                                {/* <p style={{ color: "gray" }}>Max: 5 Min</p> */}
                            </div>
                        </StepLabel>
                        <StepContent>
                            <div key={index} style={{ margin: "5px", width: "100%" }} >
                                <div style={style} className="relative">

                                    <img style={{ objectFit: "cover", height: "100%", width: "100%" }} src={sequence.image} alt="" />
                                    {
                                        reactiveSequenceState[sequence.name] &&
                                        <div className="overlay center__all" style={{ color: "white" }}>
                                            <h2>Erlerdigt</h2>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="center__all">
                                <div style={{ display: "flex" }}>
                                    <Button onClick={() => startWorkout(index)}
                                        fullWidth
                                        variant="outlined"
                                        color="primary">
                                        {!reactiveSequenceState[sequence.name] ? "Starten" : "Wiederholen"}</Button>

                                </div>

                            </div>

                        </StepContent>


                    </Step>
                ))}
            </Stepper>

        <div style={{height:"100px"}}>

        </div>

        </div>
    )
}


export default TrainingOverview