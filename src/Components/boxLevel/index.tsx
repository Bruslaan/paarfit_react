import React, {useEffect, useState} from 'react';
import './index.css';
import {createStyles, makeStyles, Theme} from '@material-ui/core';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {userInfo} from "os";

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
                                     lvlSystem,
                                     userInfo
                                 }: any) {


    const getValue = (currentLvlSystem: any,) => {

        if (currentLvlSystem.id > userInfo.niveau) {
            return 0
        }
        const currentPoints = userInfo?.points


        const totalPoints = lvlSystem.reduce((accumulator: any, currentValue: any) => {
            if (userInfo.niveau === 1) {
                return 250
            }
            if (currentValue.id> userInfo.niveau-1) {
                return accumulator
            }
            return accumulator + currentValue.points
        }, 0)

        console.log(totalPoints)

        return currentPoints >= currentLvlSystem.points ? 100 : (currentPoints-totalPoints) * 100 / currentLvlSystem.points
    }

    return (
        <div className='areaUntilLevel whiteBg'>
            <div className='titleUntilLevel'>
                <h2>niveau</h2>
            </div>
            {lvlSystem?.map((item: any, index: number) => (
                <div
                    key={index}
                    className={`areaStartCouple ${
                        userInfo?.niveau >= item?.id ? '' : `inactiveLevel`
                    }`}
                >
                    <h3 className='purple1'>{item.title}</h3>
                    <div className={`${item.cssStyle}`}>
                        <div className='flipText'>
                            <CircularProgressbar
                                value={getValue(item)}
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
                        {userInfo?.userPoints >= item?.points ? item?.points : userInfo?.userPoints}/
                        {item.points}
                    </p>
                </div>
            ))}
        </div>
    );
}
