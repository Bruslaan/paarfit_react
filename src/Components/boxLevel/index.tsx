import React, { useEffect, useState } from 'react';
import './index.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { userInfo } from 'os';

export default function BoxLevel({ lvlSystem, userInfo }: any) {
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
    <div className='areaUntilLevel whiteBg'>
      <div className='titleUntilLevel'>
        <h2>niveau</h2>
      </div>
      {lvlSystem?.map((item: any, index: number) => (
        <div
          key={index}
          className={`areaStartCouple ${
            niveau + 1 >= item?.id ? '' : `inactiveLevel`
          }`}
        >
          {console.log(item)}
          <h3 className='purple1'>{item.title}</h3>
          <div className={`${item.cssStyle}`}>
            <div className='flipText'>
              <CircularProgressbar
                value={niveau >= item.id ? 100 : getRestPercet(item)}
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
            {niveau >= item.id ? item.points : getRestPoints(item)}/
            {item.points}
          </p>
        </div>
      ))}
    </div>
  );
}
