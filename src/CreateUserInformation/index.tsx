import React, { useState, useContext } from "react";
// import { User, auth } from "firebase";
import firebase from "../firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../AuthProvider";
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { Logo } from "../Logo"

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

interface UserData {
    email: string;
    password: string;
}
const UserInformation = () => {
    const classes = useStyles();
    const db = firebase.firestore()
    const { user } = useContext(AuthContext);

    const [values, setValues] = useState({
        email: "",
        password: ""
    } as UserData);
    const handleChange = (event: any) => {
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();

        db.collection("users").doc(user?.uid).set({
            first: "Alan",
            middle: "Mathison",
            teamName: "Die Kartoschki",
            kilo: "200",
            userId: user?.uid
        }).then(function (docRef) {
            window.location.reload()
        })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    return (
        <div style={{ maxWidth: "500px", margin: "auto", padding: "10px" }}>

            <div className={classes.paper}>
                <Logo name="PaarFit"></Logo>

                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Name"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={values.email}
                        onChange={handleChange}
                    />

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        className={classes.submit}
                    >
                        Save
          </Button>
                </form>
            </div>


        </div>
    );
}


export default UserInformation;