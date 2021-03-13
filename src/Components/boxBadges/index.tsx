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
const boxBadgesStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export default function BoxBadges({ userTE, badgeArr }: any) {
  const classes = boxBadgesStyles();

  return (
    <div className='areaUntilBadges whiteBg'>
      <div className='ctUntilBadges'>
        <h2>BADGES </h2>
        <div className='detUntilBadges'>
          {badgeArr.map((item: any, index: number) => (
            <div
              key={index}
              className={`contentBadges ${
                userTE >= item.te ? '' : `noSelectBadges`
              }`}
            >
              <div className='boxtUntilBadges blueBg2'>
                <h2 className='textWhite'>{item.nr}</h2>
                <p className='textWhite'>{item.title}</p>
                <div className='iconBadges textWhite'>&#xe807;</div>
              </div>
              <h3>{`${item.te} TE`}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// <div className='contentBadges'>
//             <div className='boxtUntilBadges blueBg3'>
//               <h2 className='textWhite'>2</h2>
//               <p className='textWhite'>rochet</p>
//               <div className='iconBadges textWhite'>&#xe837;</div>
//             </div>
//             <h3>2 te</h3>
//           </div>
//           <div className='contentBadges'>
//             <div className='boxtUntilBadges blackBg'>
//               <h2 className='textWhite'>3</h2>
//               <p className='textWhite'>on fire</p>
//               <div className='iconBadges textWhite'>&#xe638;</div>
//             </div>
//             <h3>3 te</h3>
//           </div>
//           <div className='contentBadges'>
//             <div className='boxtUntilBadges yellowBg'>
//               <h2 className='textWhite'>5</h2>
//               <p className='textWhite'>gifted</p>
//               <div className='iconBadges textWhite'>&#xe7ff;</div>
//             </div>
//             <h3>5 te</h3>
//           </div>
//           <div className='contentBadges noSelectBadges'>
//             <div className='boxtUntilBadges blackBg'>
//               <h2 className='textWhite'>10</h2>
//               <p className='textWhite'></p>
//               <div className='iconBadges textWhite'>&#xe68d;</div>
//             </div>
//             <h3>10 te</h3>
//           </div>
//           <div className='contentBadges noSelectBadges'>
//             <div className='boxtUntilBadges blackBg'>
//               <h2 className='textWhite'>15</h2>
//               <p className='textWhite'></p>
//               <div className='iconBadges textWhite'>&#xe8ae;</div>
//             </div>
//             <h3>15 te</h3>
//           </div>
//           <div className='contentBadges noSelectBadges'>
//             <div className='boxtUntilBadges blackBg'>
//               <h2 className='textWhite'>20</h2>
//               <p className='textWhite'></p>
//               <div className='iconBadges textWhite'>&#xe649;</div>
//             </div>
//             <h3>20 te</h3>
//           </div>
//           <div className='contentBadges noSelectBadges'>
//             <div className='boxtUntilBadges blackBg'>
//               <h2 className='textWhite'>25</h2>
//               <p className='textWhite'></p>
//               <div className='iconBadges textWhite'>&#xe684;</div>
//             </div>
//             <h3>25 te</h3>
//           </div>
//           <div className='contentBadges noSelectBadges'>
//             <div className='boxtUntilBadges blackBg'>
//               <h2 className='textWhite'>50</h2>
//               <p className='textWhite'></p>
//               <div className='iconBadges textWhite'>&#xe861;</div>
//             </div>
//             <h3>50 te</h3>
//           </div>
//           <div className='contentBadges noSelectBadges'>
//             <div className='boxtUntilBadges blackBg'>
//               <h2 className='textWhite'>75</h2>
//               <p className='textWhite'></p>
//               <div className='iconBadges textWhite'>&#xe8d2;</div>
//             </div>
//             <h3>75 te</h3>
//           </div>
//           <div className='contentBadges noSelectBadges'>
//             <div className='boxtUntilBadges blackBg'>
//               <h2 className='textWhite minSizeBadges'>100</h2>
//               <p className='textWhite'></p>
//               <div className='iconBadges textWhite'>&#xe641;</div>
//             </div>
//             <h3>100 te</h3>
//           </div>
//           <div className='contentBadges noSelectBadges'>
//             <div className='boxtUntilBadges blackBg'>
//               <h2 className='textWhite minSizeBadges'>250</h2>
//               <p className='textWhite'></p>
//               <div className='iconBadges textWhite'>&#xe807;</div>
//             </div>
//             <h3>250 te</h3>
//           </div>
