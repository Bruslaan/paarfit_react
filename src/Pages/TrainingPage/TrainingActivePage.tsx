import React, {useContext, useEffect, useState} from "react"
import firebase, {db, heutigesDatum, todayTimestamp} from '../../firebase';
import VerticalLinearStepper from "./TrainingActiveMaterial"
import {AuthContext} from "../../AuthProvider";
import SuccModal from "../../Components/SuccModal/SuccModal";
import {useHistory} from "react-router-dom"
import moment from "moment";


export default function TraiingActivePage() {


    const history = useHistory()
    const minimalNeededWorkouts = 3
    const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);
    const Workouts = ["Aufwärmen", "Kraft", "Ausdauer", "Dehnen"]
    const {user, userInformation} = useContext(AuthContext);
    const [showSuccModal, setShowSuccModal] = useState(false);
    const [isPflicht, setIsPflichtTraining] = useState(false);


    const isPflichtTraining = userInformation.lastWorkoutDone ? moment().isAfter(moment(userInformation.lastWorkoutDone?.toDate()).add(2, "days"), "day") : true


    useEffect(() => {
        calculateWorkoutStage()
    }, []);


    const calculateWorkoutStage = async () => {

        setIsPflichtTraining(isPflichtTraining)

        if (!isPflichtTraining) {
            setCurrentWorkoutIndex(0)
            return
        }

        const document = await db.collection("users").doc(user?.uid).collection("last_workouts").doc(heutigesDatum).get()
        if (!document.exists) {
            setCurrentWorkoutIndex(0)
            return
        }

        const lastDone = document.data()!["last_done"]
        setCurrentWorkoutIndex(lastDone < Workouts.length - 1 ? lastDone + 1 : Workouts.length)
    }


    const onWorkoutFinished = async () => {


        if (!isPflicht) {
            setCurrentWorkoutIndex(currentWorkoutIndex + 1)
            return
        }
        if (currentWorkoutIndex >= Workouts.length - 1) {
            await db.collection("users").doc(user?.uid).collection("last_workouts").doc(heutigesDatum).set({
                workoutDoneOn: todayTimestamp
            }, {merge: true})
            setShowSuccModal(true)
        }

        setCurrentWorkoutIndex(currentWorkoutIndex + 1)
        if (currentWorkoutIndex === minimalNeededWorkouts) {

            if (!userInformation?.lastWorkoutDone?.toDate()?.valueOf()) {
                await db.collection("users").doc(user?.uid).set({
                    lastWorkoutDone: todayTimestamp,
                    TE: 1
                }, {merge: true})

                return
            }

            const diffTime = Math.abs(userInformation?.lastWorkoutDone?.toDate()?.valueOf() - todayTimestamp.valueOf());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 2) {
                await db.collection("users").doc(user?.uid).set({
                    lastWorkoutDone: todayTimestamp,
                    TE: 1
                }, {merge: true})
            } else {
                await db.collection("users").doc(user?.uid).set({
                    lastWorkoutDone: todayTimestamp,
                    TE: firebase.firestore.FieldValue.increment(1)
                }, {merge: true})
            }
        }
    }

    return <div className="contentTrainingActive">

        {Workouts.map((workout: any, index: number) => {
            return (
                <div key={index}>
                    <h1 style={{display: "flex", alignItems: "center"}}>{workout} {currentWorkoutIndex > index &&
                    <svg style={{width: "50px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>}
                    </h1>
                    {currentWorkoutIndex === index &&
                    <VerticalLinearStepper stageNumber={index}
                                           onFinished={() => onWorkoutFinished()}/>}
                    <br/><br/>
                </div>)
        })}
        <SuccModal open={showSuccModal} onClosed={() => history.push("/")}/>
    </div>
}