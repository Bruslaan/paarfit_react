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

type userInfo = {
  points: number;
  TE: number;
  flow: number;
};

type Levels = {
  id: number;
  title: string;
  points: number;
  cssStyle: string;
  description: string;
};

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo]: any = useState<userInfo>();

  const getUserInfoAndSetIt = async () => {
    const data = await getUserInfo(user?.uid);
    if (!data) {
      return;
    }

    setUserInfo({
      points: data?.points,
      TE: data?.TE,
      flow: data?.flow,
      level: data?.level,
      badge: data?.userBadge,
    });
  };

  useEffect(() => {
    getUserInfoAndSetIt();
  }, []);

  const lvlSystem: Array<Levels> = [
    {
      id: 1,
      title: 'Starter-Couple',
      points: 250,
      cssStyle: 'ctStartCouple',
      description:
        'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
    },
    {
      id: 2,
      title: 'Power-Couple',
      points: 500,
      cssStyle: 'ctPowerCouple',
      description:
        'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
    },
    {
      id: 3,
      title: 'Fitness-Couple',
      points: 1000,
      cssStyle: 'ctFitnessCouple',
      description:
        'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
    },
    {
      id: 4,
      title: 'Advanced-Couple',
      points: 2000,
      cssStyle: 'ctAdvancedCouple',
      description:
        'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
    },
    {
      id: 5,
      title: 'Super-Couple',
      points: 5000,
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
      badgeIcn: <div className='iconBadges textWhite'>&#xe641;</div>,
    },
    {
      nr: 2,
      title: 'rocket',
      te: 2,
      badgeIcn: <div className='iconBadges textWhite'>&#xe837;</div>,
    },
    {
      nr: 3,
      title: 'on fire',
      te: 3,
      badgeIcn: <div className='iconBadges textWhite'>&#xe638;</div>,
    },
    {
      nr: 4,
      title: 'gifted',
      te: 5,
      badgeIcn: <div className='iconBadges textWhite'>&#xe7ff;</div>,
    },
    {
      nr: 5,
      title: 'star',
      te: 10,
      badgeIcn: <div className='iconBadges textWhite'>&#xe68d;</div>,
    },
    {
      nr: 6,
      title: 'loud',
      te: 15,
      badgeIcn: <div className='iconBadges textWhite'>&#xe8ae;</div>,
    },
    {
      nr: 7,
      title: 'moon',
      te: 20,
      badgeIcn: <div className='iconBadges textWhite'>&#xe649;</div>,
    },
    {
      nr: 8,
      title: 'pac-man',
      te: 25,
      badgeIcn: <div className='iconBadges textWhite'>&#xe684;</div>,
    },
    {
      nr: 9,
      title: 'weights',
      te: 50,
      badgeIcn: <div className='iconBadges textWhite'>&#xe861;</div>,
    },
    {
      nr: 10,
      title: 'circle',
      te: 75,
      badgeIcn: <div className='iconBadges textWhite'>&#xe8d2;</div>,
    },
    {
      nr: 11,
      title: 'rain',
      te: 100,
      badgeIcn: <div className='iconBadges textWhite'>&#xe641;</div>,
    },
    {
      nr: 12,
      title: 'diamond',
      te: 250,
      badgeIcn: <div className='iconBadges textWhite'>&#xe807;</div>,
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
                <BoxLevel userInfo={userInfo || {}} lvlSystem={lvlSystem} />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <BoxBadges userTE={userInfo?.TE} badgeArr={badgeArr} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <BoxResults
              userInfo={userInfo}
              userPoints={userInfo?.points}
              lvlSystem={lvlSystem}
              userLvl={userInfo?.level}
            />
            <BoxFlow userTE={userInfo?.TE} badgeArr={badgeArr} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
