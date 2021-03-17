import React from 'react';
import './Piechart.css';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import fitnessCouple from '../../../assets/fitness_couple.svg';

const Piecart = () => {
    const percentage = 63;

    return (
        <div className='piechartComp'>
            <div className='piechartContainer'>
                <div className='ctProgressbar'>
                    <div className='flipText'>
                        <CircularProgressbar
                            value={percentage}
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
            </div>
            <div className='piechartTitle'>Power-Couple</div>
            <p className='gray1'>180/250</p>
        </div>
    );
};

export default Piecart;
