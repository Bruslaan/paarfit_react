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
import {withStyles} from '@material-ui/core';


export default function BoxBadges({userTE, badgeArr}: any) {

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
                                {item.badgeIcn}
                            </div>
                            <h3>{`${item.te} TE`}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



