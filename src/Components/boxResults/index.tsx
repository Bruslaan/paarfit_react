import React from 'react';
import './index.css';
import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Grid,
} from '@material-ui/core';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const boxResultsStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export default function BoxResults({ userInfo, userPoints, lvlSystem }: any) {
  const getValue = () => {
    const currentPoints = userInfo?.points;
    if (!currentPoints) {
      return [0, 0, 0];
    }
    let niveau = 0;
    let maxPointsNeeded = 0;
    let restPercent = currentPoints;
    lvlSystem.forEach((lv: any, index: number) => {
      maxPointsNeeded += lv.points;
      if (currentPoints > maxPointsNeeded) {
        niveau = lv.id;
        restPercent -= lv.points;
      }
    });
    const percent = (restPercent * 100) / lvlSystem[niveau].points;
    return [niveau, percent, restPercent];
  };

  const [niveau, percent, restPercent] = getValue();

  const getRestPercet = (item: any) => {
    return niveau + 1 >= item?.id ? percent : 0;
  };

  const getRestPoints = (item: any) => {
    return niveau + 1 >= item?.id ? restPercent : 0;
  };

  return (
    <div className='areaUntilCol3 whiteBg'>
      <div className='titleUntilCol3'>
        <h2>
          noch{' '}
          <span className='purple1'>
            {userPoints === 0
              ? userPoints
              : lvlSystem?.[niveau].points - userPoints}{' '}
            P.
          </span>
          <br /> bis zum
        </h2>
      </div>

      <div className={`${lvlSystem?.[niveau]?.cssStyle}`}>
        <div className='flipText'>
          <CircularProgressbar
            value={
              niveau >= lvlSystem?.[niveau].id
                ? 100
                : getRestPercet(lvlSystem[niveau])
            }
            text=''
            styles={{
              path: {
                strokeWidth: '8',
                stroke: '#9529F9',
                strokeLinecap: 'round',
                transition: 'stroke-dashoffset 0.5s ease 0s',
              },
              trail: {
                strokeWidth: '4',
                stroke: '#EAEBEB',
                strokeLinecap: 'round',
              },
            }}
          />
        </div>
        <p className='gray1'>
          {niveau >= lvlSystem[niveau]?.id
            ? lvlSystem[niveau]?.points
            : getRestPoints(lvlSystem[niveau])}
          /{lvlSystem[niveau]?.points}
        </p>
      </div>
      <div className='textUntilCol3'>
        <h3 className='purple1'>{lvlSystem[niveau]?.title}</h3>
        <p className='gray1'>{lvlSystem[niveau]?.description}</p>
      </div>
    </div>
  );
}
