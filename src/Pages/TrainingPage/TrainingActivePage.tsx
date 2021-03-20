import React from "react"

import VerticalLinearStepper from "./TrainingActiveMaterial"


export default function TraiingActivePage() {
    return <div>
        <VerticalLinearStepper stageNumer={0}/>
        <VerticalLinearStepper stageNumer={1}/>
        <VerticalLinearStepper stageNumer={2}/>
    </div>
}