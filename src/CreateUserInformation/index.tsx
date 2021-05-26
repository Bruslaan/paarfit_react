import React, { useState, useContext } from 'react';
// import { User, auth } from "firebase";
import firebase from '../firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { AuthContext } from '../AuthProvider';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/wort_Bild_nebeneinander.svg';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

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
  teamname: string;
  stufe: string;
}
const UserInformation = () => {
  const classes = useStyles();
  const db = firebase.firestore();
  const { user } = useContext(AuthContext);

  const [values, setValues] = useState({
    teamname: '',
    stufe: 'Anfänger',
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
    if (values.teamname === '' || values.stufe === '') return;

    db.collection('users')
      .doc(user?.uid)
      .set({
        teamname: values.teamname,
        email: user?.email,
        stufe: values.stufe,
        userId: user?.uid,
        afterImgURL: '',
        beforeImgURL: '',
        points: 0,
      })
      .then(function (docRef) {
        window.location.reload();
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '10px' }}>
      <div className={classes.paper}>
        <a href='/'>
          <img className='PaarFit' src={logo} alt='PaarFit' width='200px' />
        </a>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            className={classes.root}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Gebt eueren Teamnamen ein'
            name='teamname'
            autoFocus
            value={values.teamname}
            onChange={handleChange}
          />

          <FormControl variant='outlined' className={classes.form}>
            <InputLabel id='demo-simple-select-outlined-label'>
              Schwierigkeits Stufe
            </InputLabel>
            <Select
              className={classes.root}
              required
              labelId='demo-simple-select-outlined-label'
              value={values.stufe}
              name='stufe'
              onChange={handleChange}
              label='Schwierigkeits Stufe'
            >
              {/* TODO get these from backend */}
              <MenuItem value='Anfänger'>Anfänger</MenuItem>
              <MenuItem value='Fortgeschrittene'>Fortgeschrittene</MenuItem>
              <MenuItem value='Profis'>Profis</MenuItem>
            </Select>
          </FormControl>

          <Button
            type='submit'
            fullWidth
            variant='contained'
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
            Speichern{' '}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserInformation;
