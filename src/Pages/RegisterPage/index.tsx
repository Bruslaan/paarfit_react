import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
// import { User, auth } from "firebase";
import firebase, {db} from '../../firebase';
import 'firebase/auth';
import 'firebase/firestore';
import {AuthContext} from '../../AuthProvider';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import logo from '../../assets/wort_Bild_nebeneinander.svg';
import Footer from "../LandingPage/Footer/Footer";

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

    root: {
        '& label.Mui-focused': {
            color: 'rgb(92,	93,	234	)',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'red',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgb(92,	93,	234)',
            },
            '&:hover fieldset': {
                borderColor: 'rgb(148, 56, 245)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(92,	93,	234)',
            },
        },
    },
}));

interface UserData {
    email: string;
    password: string;
    passwordrepeat: string;
    name: string;
}

const Register = () => {
    const classes = useStyles();

    const authContext = useContext(AuthContext);
    const history = useHistory();
    const [error, seterror] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: '',
        passwordrepeat: '',
        name: '',
    } as UserData);

    const handleChange = (event: any) => {
        event.persist();
        console.log(event.target.name);
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (values.password !== values.passwordrepeat) {
            seterror('Passwörter stimmen nicht überein');
            return;
        }

        const response = await firebase
            .auth()
            .createUserWithEmailAndPassword(values.email, values.password).catch((error: any) => {
                console.log(error.message);
                alert(error.message);
                return
            });

        authContext.setUser(response.user);
        console.log(response.user.uid, 'res');
        const userID = response.user.uid

        await db.collection("users").doc(userID).set({registeredOn: firebase.firestore.FieldValue.serverTimestamp()},{merge:true})

        history.push('/')


    };

    return (
        <div style={{maxWidth: '500px', margin: 'auto', padding: '10px'}}>
            <div className={classes.paper}>
                <a href='/'>
                    <img className='PaarFit' src={logo} alt='PaarFit' width='200px'/>
                </a>

                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <TextField
                        className={classes.root}
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        autoFocus
                        value={values.email}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.root}
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.root}
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='passwordrepeat'
                        label='Repeat Password'
                        type='password'
                        id='password2'
                        value={values.passwordrepeat}
                        onChange={handleChange}
                    />
                    {error !== '' && <p style={{color: 'red'}}>{error}</p>}
                    <Button
                        type='submit'
                        fullWidth
                        variant='outlined'
                        color='primary'
                        className={classes.submit}
                        style={{
                            borderRadius: 10,
                            backgroundColor: 'rgb(92,	93,	234)',
                            color: 'white',
                            borderColor: 'unset',
                            padding: '10px 20px',
                        }}
                    >
                        Register
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link
                                href='/einloggen'
                                variant='body2'
                                style={{color: 'rgb(148,	56,	245	)'}}
                            >
                                {'Bereits registriert? Log dich hier ein'}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>

        </div>
    );
};

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://material-ui.com/'>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Register;
