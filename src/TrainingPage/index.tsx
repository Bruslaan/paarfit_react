import React, { useState } from 'react'
import './index.css'
import PulseButton from '../PulseButton'
import { useHistory } from "react-router-dom";
import Drawer from '../react-bottom-drawer'

function TrainingsPage() {
    const history = useHistory()
    const [drawerVisible, setdrawerVisible] = useState(false)
    const startWorkout = () => { history.push("/training/active") }


    const openDrawer = () => {
        console.log("hallo")
        setdrawerVisible(true)
    }
    const closeDrawer = () => {
        setdrawerVisible(false)
    }
    return (
        <div className="trainings__container">

            <h1>Woche 1</h1>
            <PulseButton buttonName="Workout Starten" buttonClicked={() => startWorkout()} />
            <button onClick={() => openDrawer()}>Trainingstagebuch</button>



            <Drawer isVisible={drawerVisible} onClose={closeDrawer}>
                Trainingstagebuch
                <div style={{ height: "100vh"}}>

                </div>
            </Drawer>



        </div >
    )
}

export default TrainingsPage
