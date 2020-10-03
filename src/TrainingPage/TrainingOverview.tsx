
import React from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { useHistory } from "react-router-dom";
import { createFalse } from 'typescript';


const style = {
    maxWidth: "500px",
    height: "150px",
    background: "cyan",
    marginBottom: "10px",
    overflow: "hidden",
    borderRadius: "50px",

}


const TrainingOverview = () => {

    const images = ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80",
        "https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        "https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"

    ]
    const history = useHistory()
    const startWorkout = () => {
        console.log("hallo world")
        history.push("/training/overview/active/1")
    }

    const mapping = [
        { erledigt: true, name: "Aufwärmen" },
        { erledigt: false, name: "Kraft" },
        { erledigt: false, name: "Dehnen" },

    ]
    return (
        <div className="center__all">
            <Stepper orientation="vertical" >
                {images.map((image, index) => (
                    <Step completed={mapping[index].erledigt} active={true} key={index} onClick={startWorkout} >
                        <StepLabel>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
                                <h1 className="test">{mapping[index].name}</h1>
                                <p>Max: 5 Min</p>
                            </div>
                        </StepLabel>
                        <StepContent style={{ border: "none" }}>
                            <div key={index} style={{ margin: "10px" }} >
                                <div style={style}>
                                    <img style={{ objectFit: "cover", height: "100%", width: "100%" }} src={image} alt="" />
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}


export default TrainingOverview