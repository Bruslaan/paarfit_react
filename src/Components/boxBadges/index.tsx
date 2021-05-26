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
    const getValue = () => {
        let niveau = 0;

        badgeArr.forEach((lv: any, idex: number) => {
            if (userTE >= lv.te) {
                niveau = lv.nr;
            }
        });

        return [niveau];
    };

    const [niveau] = getValue();

    return (
        <div className='areaUntilBadges whiteBg'>
            <div className='ctUntilBadges'>
                <h2>Abzeichen</h2>
                <div className='detUntilBadges'>
                    {badgeArr.map((item: any, index: number) => (
                        <div
                            key={index}
                            className={`contentBadges ${
                                niveau >= item.nr ? '' : `noSelectBadges`
                            }`}
                        >
                            <div className='boxtUntilBadges blueBg2 '>
                                <h2
                                    className='textWhite'
                                    style={{
                                        fontSize: '65px',
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}
                                >
                                    {item.te}
                                </h2>
                                <p
                                    className='textWhite'
                                    style={{fontSize: '12px', fontWeight: 'bold'}}
                                > optimale TE
                                </p>
                            </div>
                            <h3>{`${item.te} TE`}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
