import React from 'react';
import './index.css';
import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Grid,
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core';

const LinearProgressStyle = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 13,
      maxWidth: '100%',
      borderRadius: 5,
      marginTop: '10px',
    },
    colorPrimary: {
      backgroundColor: '#DEDEFC',
    },
    bar: {
      borderRadius: '5px 0px 0px 5px',
      backgroundColor: '#5B58EE',
    },
  })
)(LinearProgress);
const calculateProgressBarLinear = (wert: any, gesammtWert: number) => {
  if (wert) {
    return (wert * 100) / gesammtWert;
  }
  return 0;
};

export default function BoxFlow({ userTE, badgeArr }: any) {
  const getValue = () => {
    let niveau = 0;
    let restTE = 0;
    let restAbsoluteTE = 0;
    badgeArr.forEach((lv: any, idex: number) => {
      if (userTE >= lv.te) {
        niveau = lv.nr;
        restTE = userTE - lv.te;
        restAbsoluteTE = badgeArr[niveau]?.te - lv.te;
      }
    });

    return [niveau, restTE, restAbsoluteTE];
  };

  const [niveau, restTE, restAbsoluteTE] = getValue();

  return (
    <div className='areaUntilCol4 whiteBg'>
      <div className='ctUntilCol4'>
        <h2>FLOW </h2>
        <div className='ctProgressbarLinear'>
          <LinearProgressStyle
            variant='determinate'
            value={calculateProgressBarLinear(restTE, restAbsoluteTE)}
          />
        </div>
        <div className='detUntilCol4'>
          <div
            className='boxtUntilCol4 yellowBg textWhite'
            style={{ fontSize: '50px', fontWeight: 'bold', padding: '5px' }}
          >
            {!userTE ? '0' : badgeArr[niveau - 1]?.te}
          </div>
          <div className='arrowUntilCol4'>
            <img src='images/kleiner_pfeil.svg' alt='' />
          </div>
          <div
            className='boxtUntilCol4_2 grayBg3'
            style={{
              fontSize: '50px',
              fontWeight: 'bold',
              color: 'grey',
              padding: '5px',
            }}
          >
            {badgeArr[niveau]?.te}
          </div>
        </div>
        <div className='textUntilCol4'>
          <h2>{userTE} TE</h2>
          <div className='descrUntilCol5'>(Trainingseinheit/en)</div>
        </div>
        <div className='descrUntilCol4'>
          <p>Trainingsplanung eingehalten</p>
        </div>
      </div>
    </div>
  );
}
