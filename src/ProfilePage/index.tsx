import React, { useContext } from 'react'
import Avatar from '@material-ui/core/Avatar';
import './index.css'
import { handleLogout } from '../firebase'
import { AuthContext } from '../AuthProvider'
import LinearProgress from '@material-ui/core/LinearProgress';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 10,
            maxWidth: "400px",
            borderRadius: 5,
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
            borderRadius: 5,
            backgroundColor: '#1a90ff',
        },
    }),
)(LinearProgress);


export default function ProfilePage() {
    const { user, userInformation } = useContext(AuthContext);
    return (

        <div style={{ marginLeft:"auto", marginRight:"auto", padding:"10px"}}>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent:"center", alignContent:"center" }}>
                <Avatar alt="Remy Sharp" src="https://avatars.dicebear.com/api/avataaars/seed.svg" style={{ marginRight: "20px", height: "100px", width: "100px" }} />
                <h3>{user?.email}</h3>
            </div>

            <br />
            <BorderLinearProgress variant="determinate" value={50} />
            <br />
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}
