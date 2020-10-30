
import React, { useContext, useState } from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import { Context } from "../GlobalState/store"
import Confetti from 'react-confetti'

const style = {
    maxWidth: "500px",
    width: "100%",
    height: "150px",
    marginBottom: "10px",
    overflow: "hidden",
    borderRadius: "50px",
}



const TrainingOverview = () => {

    const images = ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80",
        "https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        "https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        // "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2594&q=80"
    ]
    const history = useHistory()
    const startWorkout = () => {
        console.log("hallo world")
        history.push("/training/overview/active/" + activeIndex)
    }

    const mapping = [
        { erledigt: true, name: "Aufwärmen" },
        { erledigt: true, name: "Kraft" },
        { erledigt: false, name: "Dehnen" },

    ]
    // { erledigt: false, name: "Yoga" },

    //const [activeIndex, setactiveIndex] = useState(0)
    const [state]: any = useContext(Context);
    let activeIndex = state.currentWorkout
    // let activeIndex = 2

    console.log(activeIndex)
    return (
        <div className="center__all" style={{ background: "white" }}>
            <Stepper style={{  maxWidth: "500px" }} orientation="vertical" >
                {images.map((image, index) => (
                    <Step completed={activeIndex > index} active={true} key={index} >
                        <StepLabel>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
                                <h1 className="test">{mapping[index].name}</h1>
                                {/* <p style={{ color: "gray" }}>Max: 5 Min</p> */}
                            </div>
                        </StepLabel>
                        <StepContent>
                            <div key={index} style={{ margin: "10px", width: "100%" }} >
                                <div style={style} className="relative">

                                    <img style={{ objectFit: "cover", height: "100%", width: "100%" }} src={image} alt="" />


                                    {
                                        activeIndex > index &&
                                        <div className="overlay center__all" style={{ color: "white" }}>
                                            <h2>Erlerdigt</h2>
                                        </div>
                                    }
                                </div>
                            </div>
                            {activeIndex === index && <div className="center__all">
                                <div style={{ display: "flex" }}>   <Button onClick={startWorkout} variant="outlined" >
                                    Starten</Button>
                                    <div style={{ width: "10px" }}></div>
                                    {/* <Button onClick={()=>setactiveIndex(activeIndex+1)} >
                                        Überspringen</Button> */}
                                </div>

                            </div>}

                        </StepContent>


                    </Step>
                ))}
            </Stepper>
            {
                activeIndex === 4 &&
                (
                    <div>
                        <Confetti
                            gravity={0.9}

                            recycle={false}
                            width={1000}
                            height={1000}
                        />

                    </div>
                )

            }

        </div>
    )
}


export default TrainingOverview