import React from 'react';
import './HeightComp.css';

const HeightComp = ({setUserHeight, height, editMode}: any) => {


    {
        if (!editMode) {
            return (
                <p style={{textAlign: "center"}}>{height}</p>
            )
        }
    }


    return (
        <div>
            <div className='heightDiv'>
                <input
                    disabled={!editMode}
                    onChange={(e) => setUserHeight(e.target.value)}
                    type='text'
                    className='heightCompA'
                    placeholder='0 cm'
                    value={height}
                    autoComplete='off'
                />
            </div>
        </div>
    );
};

export default HeightComp;
