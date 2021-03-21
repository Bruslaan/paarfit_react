import React, {useState} from "react"

import VerticalLinearStepper from "./TrainingActiveMaterial"


export default function TraiingActivePage() {

    const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(1);

    return <div>
        <h1 style={{display:"flex", alignItems:"center"}}>Aufwärmen  {currentWorkoutIndex > 0 &&
        <svg style={{width:"50px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
        </svg>}</h1>
        {currentWorkoutIndex === 0 &&
        <VerticalLinearStepper stageNumber={0} onFinished={() => setCurrentWorkoutIndex(currentWorkoutIndex + 1)}/>}
        <br/><br/>
        <h1 style={{display:"flex", alignItems:"center"}}>Kraft  {currentWorkoutIndex > 1 &&
        <svg style={{width:"50px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
        </svg>}</h1>
        {currentWorkoutIndex === 1 &&
        <VerticalLinearStepper stageNumber={1} onFinished={() => setCurrentWorkoutIndex(currentWorkoutIndex + 1)}/>}
        <br/><br/>
        <h1 style={{display:"flex", alignItems:"center"}}>Ausdauer  {currentWorkoutIndex > 2 &&
        <svg style={{width:"50px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
        </svg>}</h1>
        {currentWorkoutIndex === 2 &&
        <VerticalLinearStepper stageNumber={2} onFinished={() => setCurrentWorkoutIndex(currentWorkoutIndex + 1)}/>}

    </div>
}