import React, {useContext, useEffect, useRef} from 'react'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import trophy from '../../assets/trophy.gif'
import "./succModal.css"
import {db, heutigesDatum} from "../../firebase";
import {AuthContext} from "../../AuthProvider";


export default function SuccModal({open, onClosed}: any) {
    const classes = useStyles()
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle)
    const {user, userInformation} = useContext(AuthContext);
    const handleClose = () => {
        //setOpen(false)
        onClosed()
    }


    useEffect(() => {

        const succSound = new Audio("https://res.cloudinary.com/do4y3j1hu/video/upload/v1617987624/SF_Workout-abgeschlossen-Belohnung_u2kldd.mp3")
        if (open) {
            succSound.play()
        }

    }, [open]);


    // @ts-ignore
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className="modalBody">
                <img width="300px" src={trophy} alt="" className="animated"/>
                <br/>
                <h1 id="simple-modal-title">Glückwunsch</h1>
                <br/>
                <br/>
                <p id="simple-modal-description" style={{maxWidth: '300px'}}>
                    Macht weiter so!
                </p>
                <br/>
                <div className="gamificationCounter">+100 P</div>
                <br/>
                <button className="paarfit_button" onClick={() => onClosed()}>
                    Beenden
                </button>
            </div>
        </div>
    )

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {body}
            </Modal>
        </div>
    )
}

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    }
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            borderRadius: '20px',
            outline: 'none',
            position: 'absolute',
            backgroundColor: 'rgb(247,247,247)',
            padding: theme.spacing(2, 4, 3)
        },
        root: {
            borderRadius: '20px',
            padding: theme.spacing(1, 4, 1)
        }
    })
)
