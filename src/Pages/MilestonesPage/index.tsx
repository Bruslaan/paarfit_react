import React, { useContext } from 'react';
import './index.css';
import { createStyles, makeStyles, Theme, Grid } from '@material-ui/core';

import BoxLevel from '../../Components/boxLevel';
import BoxBadges from '../../Components/boxBadges';
import BoxResults from '../../Components/boxResults';
import BoxFlow from '../../Components/boxFlow';
import { AuthContext } from '../../AuthProvider';
import { badgeArr, lvlSystem } from '../../constants';

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
  const { userInformation } = useContext(AuthContext);

  const classes = useStyles();
  return (
    <div className='content'>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={6}>
                <BoxLevel
                  userInfo={userInformation || {}}
                  lvlSystem={lvlSystem}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <BoxBadges userTE={userInformation?.TE} badgeArr={badgeArr} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <BoxResults
              userInfo={userInformation}
              userPoints={userInformation?.points}
              lvlSystem={lvlSystem || []}
              userLvl={userInformation?.level}
            />
            <BoxFlow userTE={userInformation?.TE} badgeArr={badgeArr} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
