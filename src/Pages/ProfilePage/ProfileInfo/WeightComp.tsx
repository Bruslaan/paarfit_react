import React, {useEffect, useState} from 'react';
import './WeightComp.css';

const WeightComp = ({setUserWeight, weight, editMode}: any) => {


    {
        if(!editMode){
            return (
                <p style={{textAlign:"center"}}>{weight}</p>
            )
        }
    }

    return (
        <div className='weightContainer'>
            <div className='weightBtnContainer'>
                <button
                    className='weightM'
                >
                    <svg
                        className='weightBtnIcon'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M20 12H4'
                        />
                    </svg>
                </button>
                <input
                    disabled={!editMode}
                    onChange={(e) =>
                        setUserWeight(e.target.value)
                    }
                    className='weightInput'
                    type='string'
                    name='weightInput'
                    placeholder='0 Kg'
                    autoComplete='off'
                    value={weight}
                />
                <button
                    className='weightP'
                >
                    <svg
                        className='weightBtnIcon'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default WeightComp;
