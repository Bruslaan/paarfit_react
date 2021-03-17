import React, { useEffect, useState } from 'react'
import './index.css'
import { CircularProgress, createStyles, makeStyles, Paper, Theme, Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core';

import BoxWeek from '../../Components/boxWeek'
import BoxTrainingActivity from '../../Components/boxTrainingActivity'
import BoxResults from '../../Components/boxResults'
import BoxFlow from '../../Components/boxFlow'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        resetContainer: {
            // padding: theme.spacing(3),

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px"
        },
        root: {
            flexGrow: 1,
          },

    }),
);
export default function Dashboard() {
    const classes = useStyles();    
    return (
        <div className="content">
            <div className={classes.root}>
            
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={8}>
                        <Grid container direction="row-reverse" spacing={3}>
                            
                            <Grid item xs={12} sm={12} lg={6}>
                                <BoxTrainingActivity></BoxTrainingActivity>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={6}>
                                <BoxWeek></BoxWeek>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                       {/* <BoxResults></BoxResults>*/}
                     {/*   <BoxFlow></BoxFlow>*/}
                    </Grid>
                 </Grid>
            </div>
        </div>
    )
}
