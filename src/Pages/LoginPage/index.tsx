import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import { User, auth } from "firebase";
import firebase from '../../firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { AuthContext } from '../../AuthProvider';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import logo from '../../assets/wort_Bild_nebeneinander.svg';

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
const Login = () => {
  const classes = useStyles();

  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  } as UserData);

  const handleChange = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res: any) => {
        authContext.setUser(res);
        console.log(res, 'res');
        history.push('/');
      })
      .catch((error: any) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  const CssTextField = withStyles({
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
  })(TextField);

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '10px' }}>
      <div className={classes.paper}>
        <a href='/landing-page'>
          <img className='PaarFit' src={logo} alt='PaarFit' width='200px' />
        </a>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <CssTextField
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
          <CssTextField
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
          <FormControlLabel
            color='primary'
            control={
              <Checkbox
                value='remember'
                style={{
                  color: 'rgb(148,	56,	245)',
                }}
              />
            }
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='outlined'
            color='primary'
            className={classes.submit}
            style={{
              borderRadius: 15,
              backgroundColor: 'rgb(92,	93,	234)',
              color: 'white',
              borderColor: 'unset',
              padding: '10px 20px',
            }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                href='#'
                variant='body2'
                style={{ color: 'rgb(148,	56,	245	)' }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href='/register'
                variant='body2'
                style={{ color: 'rgb(148,	56,	245	)' }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
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

export default Login;
