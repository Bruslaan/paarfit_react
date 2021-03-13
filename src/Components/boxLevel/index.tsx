import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getUserInfo } from '../../Firebase/useProfileInformation';
import { AuthContext } from '../../AuthProvider';

const boxLevelStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export default function BoxLevel() {
  const { user } = useContext(AuthContext);
  const [userPoints, setUserPoints] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [userLvl, setUserLvl] = useState(0);

  const getUserInfoAndSetIt = async () => {
    const data = await getUserInfo(user?.uid);
    setUserPoints(data?.points);
    setUserLvl(data?.level);
  };

  const getPercentage = (currPoints: number, totalPoints: number) => {
    setPercentage((100 / totalPoints) * currPoints);
  };

  useEffect(() => {
    getUserInfoAndSetIt();
    getPercentage(userPoints, lvlSystem[userLvl].points);
  }, []);

  const lvlSystem = [
    {
      title: 'Starter-Couple',
      points: 250,
      cssStyle: 'ctStartCouple',
      description:
        'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
    },
    {
      title: 'Power-Couple',
      points: 500,
      cssStyle: 'ctPowerCouple',
      description:
        'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
    },
    {
      title: 'Fitness-Couple',
      points: 1000,
      cssStyle: 'ctFitnessCouple',
      description:
        'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
    },
    {
      title: 'Advanced-Couple',
      points: 2000,
      cssStyle: 'ctAdvancedCouple',
      description:
        'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
    },
    {
      title: 'Super-Couple',
      points: 4000,
      cssStyle: 'ctSuperCouple',
      description:
        'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
    },
  ];

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
