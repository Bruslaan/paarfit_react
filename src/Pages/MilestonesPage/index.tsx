import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import {
  CircularProgress,
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Grid,
} from '@material-ui/core';
import { Typography } from '@material-ui/core';

import BoxLevel from '../../Components/boxLevel';
import BoxBadges from '../../Components/boxBadges';
import BoxResults from '../../Components/boxResults';
import BoxFlow from '../../Components/boxFlow';
import { AuthContext } from '../../AuthProvider';
import { getUserInfo } from '../../Firebase/useProfileInformation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resetContainer: {
      // padding: theme.spacing(3),

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
    },
    root: {
      flexGrow: 1,
    },
  })
);
export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [userPoints, setUserPoints] = useState(0);
  const [userLvl, setUserLvl] = useState(0);
  const [userTE, setUserTE] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [userFlow, setUserFlow] = useState(0);
  const [userBadge, setUserBadge] = useState(0);

  const getUserInfoAndSetIt = async () => {
    const data = await getUserInfo(user?.uid);
    setUserPoints(data?.points);
    setUserLvl(data?.level);
    setUserTE(data?.TE);
    setUserFlow(data?.flow);
    setUserBadge(data?.userBadge);
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

  const badgeArr = [
    {
      nr: 1,
      title: 'drop',
      te: 1,
      badgeIcn: '&#xe837;',
    },
    {
      nr: 2,
      title: 'rocket',
      te: 2,
      badgeIcn: '&#xe638;',
    },
    {
      nr: 3,
      title: 'on fire',
      te: 3,
      badgeIcn: '&#xe638;',
    },
    {
      nr: 4,
      title: 'gifted',
      te: 5,
      badgeIcn: '&#xe7ff;',
    },
    {
      nr: 5,
      title: 'star',
      te: 10,
      badgeIcn: '&#xe68d;',
    },
    {
      nr: 6,
      title: 'loud',
      te: 15,
      badgeIcn: '&#xe8ae;',
    },
    {
      nr: 7,
      title: 'moon',
      te: 20,
      badgeIcn: '&#xe649;',
    },
    {
      nr: 8,
      title: 'pac-man',
      te: 25,
      badgeIcn: '&#xe684;',
    },
    {
      nr: 9,
      title: 'weights',
      te: 50,
      badgeIcn: '&#xe861;',
    },
    {
      nr: 10,
      title: 'circle',
      te: 75,
      badgeIcn: '&#xe8d2;',
    },
    {
      nr: 11,
      title: 'rain',
      te: 100,
      badgeIcn: '&#xe641;',
    },
    {
      nr: 12,
      title: 'diamond',
      te: 250,
      badgeIcn: '&#xe807',
    },
  ];

  const classes = useStyles();
  return (
    <div className='content'>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={6}>
                <BoxLevel
                  userPoints={userPoints}
                  userLvl={userLvl}
                  lvlSystem={lvlSystem}
                  percentage={percentage}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <BoxBadges userTE={userTE} badgeArr={badgeArr} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <BoxResults
              userPoints={userPoints}
              lvlSystem={lvlSystem}
              percentage={percentage}
              userLvl={userLvl}
            />
            <BoxFlow
              userTE={userTE}
              userFlow={userFlow}
              badgeArr={badgeArr}
              userBadge={userBadge}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
