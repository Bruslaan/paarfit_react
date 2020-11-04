import React, { useContext, useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import './index.css'
import { handleLogout } from '../firebase'
import { AuthContext } from '../AuthProvider'
import LinearProgress from '@material-ui/core/LinearProgress';
import { createStyles, Theme, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import firebase from '../firebase'

const BorderLinearProgress = withStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 10,
            maxWidth: "400px",
            borderRadius: 5,
            marginTop: "10px"
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
            borderRadius: 5,
            backgroundColor: '#f75c1a"',
        },
    }),
)(LinearProgress);


const calculateLevelPoints = (info: any) => {
    if (info) {
        return info?.punkte / 1500 * 100
    }
    return 0
}

const Mapping: any = {
    "Anfänger": "Starter Paar",
}

export default function ProfilePage() {
    const { user } = useContext(AuthContext);
    const [userInformation, setuserInformation]: any = useState({})
    const db = firebase.firestore()
    useEffect(() => {

        db.collection("users").doc(user?.uid).get().then((document: any) => {

            document.exists && setuserInformation(document.data())
            console.log(document.data())

        }).catch((error: any) => {
            console.log("cannot load user information", error)
        })
    }, [])
    return (

        <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "400px", width: "90%" }}>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center", alignContent: "center" }}>
                <Avatar alt="Remy Sharp" src="https://avatars.dicebear.com/api/avataaars/seed.svg" style={{ marginRight: "20px", height: "100px", width: "100px" }} />
                <h3>{userInformation?.teamname}</h3>

            </div>

            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#f75c1a"}}>{Mapping[userInformation?.stufe]}</span>
                <span style={{ color: "gray" }}>{userInformation?.punkte}/1500 Punkte</span>
            </div>

            <br />
            <BorderLinearProgress variant="determinate" value={calculateLevelPoints(userInformation)} />
            <br />
            <Button variant="outlined" onClick={() => handleLogout()}>Logout</Button>
        </div>
    )
}
