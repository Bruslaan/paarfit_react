import React from 'react'
import './index.css'


interface ButtonProps {
    buttonClicked: () => void
    buttonName: String
}

const Pulsebutton: React.FC<ButtonProps> = ({ buttonClicked, buttonName }) => {

    return (
        <div>
            <button className="blob orange pulse__button" onClick={() => buttonClicked()}>{buttonName}</button>
        </div>
    )
}

export const Parfitbutton: React.FC<ButtonProps> = ({ buttonClicked, buttonName }) => {

    return (
        <div>
            <button className=" orange pulse__button" onClick={() => buttonClicked()}>{buttonName}</button>
        </div>
    )
}

export default Pulsebutton
