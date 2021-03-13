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
const calculateProgressBarLinear = (info: any) => {
  if (info) {
    return (info / 100) * 100;
  }
  return 0;
};
const boxFlowStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export default function BoxFlow({
  userTE,
  userFlow,
  badgeArr,
  userBadge,
}: any) {
  const classes = boxFlowStyles();

  console.log(userBadge);

  return (
    <div className='areaUntilCol4 whiteBg'>
      <div className='ctUntilCol4'>
        <h2>FLOW </h2>
        <div className='ctProgressbarLinear'>
          <LinearProgressStyle
            variant='determinate'
            value={calculateProgressBarLinear(userFlow)}
          />
        </div>
        <div className='detUntilCol4'>
          <div className='boxtUntilCol4 blackBg'>
            <h2 className='gray3'>{badgeArr[2].title}</h2>
            <p className='gray4'>{badgeArr[2].title}</p>
            <div className='iconFireUntil textWhite'>&#xe638;</div>
          </div>
          <div className='arrowUntilCol4'>
            <img src='images/kleiner_pfeil.svg' alt='' />
          </div>
          <div className='boxtUntilCol4_2 grayBg3'>
            <span className='iconGiftUntil'>&#xe7ff;</span>
          </div>
        </div>
        <div className='textUntilCol4'>
          <h2>{userTE} TE</h2>
        </div>
        <div className='descrUntilCol4'>
          <p>am optimalen Tag trainiert</p>
        </div>
      </div>
    </div>
  );
}
