import React, { useEffect, useState } from 'react';
import './index.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const boxLevelStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export default function BoxLevel({
  userPoints,
  userLvl,
  lvlSystem,
  percentage,
}: any) {
  const classes = boxLevelStyles();
  return (
    <div className='areaUntilLevel whiteBg'>
      <div className='titleUntilLevel'>
        <h2>niveau</h2>
      </div>
      {lvlSystem.map((item: any, index: number) => (
        <div
          key={index}
          className={`areaStartCouple ${
            userLvl >= lvlSystem.indexOf(item) ? '' : `inactiveLevel`
          }`}
        >
          <h3 className='purple1'>{item.title}</h3>
          <div className={`${item.cssStyle}`}>
            <div className='flipText'>
              <CircularProgressbar
                value={userLvl === lvlSystem.indexOf(item) ? percentage : 100}
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
          </div>
          <p className='gray1'>
            {userLvl <= lvlSystem.indexOf(item) ? userPoints : item.points}/
            {item.points}
          </p>
        </div>
      ))}
    </div>
  );
}
