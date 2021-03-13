import React, {useEffect, useState} from 'react';
import './EditableLabel.css';


const EditableLabel = ({payload, editMode, returnTheValues}: any) => {
    const [values, setValues]: any = useState({});

    useEffect(() => {
        if(!returnTheValues){
           return
        }
        returnTheValues(values)
    }, [values]);

    return (

        <div className='editableLabel'>
            <label htmlFor='name' id='userALbl' className='profInfoTitle'>
                {editMode ? (
                    <div className="" style={{display:"flex", flexDirection:"column"}}>
                        {
                            payload.map((payLoadEntry: any, index: number) => <input key={index}
                                                                                     placeholder={payLoadEntry.playHolderName}
                                                                                     className="teamNameInput"
                                                                                     style={{marginBottom:"10px"}}
                                                                                     onChange={(e) => setValues({[payLoadEntry.label]: e.target.value})}
                                                                                     value={payLoadEntry.value}
                                                                                     type="text"/>)
                        }
                    </div>
                ) : (
                    <div>
                        <div>  {
                            payload.map((payLoadEntry: any, index: number) =>
                                <p key={index}>{payLoadEntry.value || payLoadEntry.playHolderName}</p>)
                        }</div>
                    </div>
                )}
            </label>

        </div>
    );
};


export default EditableLabel;
