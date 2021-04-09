import React, {useContext, useEffect, useState} from 'react';
import './ProfileInfo.css';
import DropDownComp from './DropDownComp';
import HeightComp from './HeightComp';
import WeightComp from './WeightComp';
import EditableLabel from './EditableLabel';
import defaultImgA from '../../../assets/baImgA.jpeg';
import {
    getUserInfo,
    updateUserInformaion,
} from '../../../Firebase/useProfileInformation';
import {AuthContext} from '../../../AuthProvider';
import {useBeforeAndAfterImage} from '../B&AComp/useBeforeAfter';
import {app} from '../../../firebase';
import ProfileImage from './ProfileImage';
import {MenuItem, Select} from '@material-ui/core';

const ProfileInfo = (userInfo: any) => {
    const genderArr = ['Male', 'Female', 'Diverse'];
    const [editMode, setEditMode] = useState(true);
    const [allInformations, setAllInformations]: any = useState();
    const {user} = useContext(AuthContext);

    const onSavePressed = async () => {
        const succ = await updateUserInformaion(user?.uid, allInformations);
        succ && console.log('Erfolgreich gespichert');
    };

    useEffect(() => {
        getUserInfoAndSetIt();
    }, []);

    const getUserInfoAndSetIt = async () => {
        const data = await getUserInfo(user?.uid);

        setAllInformations(data);
    };

    return (
        <div className='profileInfo '>
            <ProfileImage
                onFileUploaded={(url: string) =>
                    setAllInformations({...allInformations, profileImgURL: url})
                }
            />
            <div
                className='profileInfoImg'
                style={{
                    backgroundImage: `url(${
                        allInformations?.profileImgURL || defaultImgA
                    })`,
                }}
            />
            <div className='profileInfoTop fullWidth'>
                <div
                    className='proInfoTitleBox'
                    style={{color: 'rgb(92 94 235)', fontWeight: 'bold'}}
                >
                    <p>Team Name</p>
                    <EditableLabel
                        editMode={editMode}
                        payload={[
                            {
                                playHolderName: 'Team Name',
                                label: 'teamname',
                                value: allInformations?.teamname,
                            },
                        ]}
                        returnTheValues={(returnedValues: any) =>
                            setAllInformations({
                                ...allInformations,
                                ...returnedValues,
                            })
                        }
                    />
                    <br/>
                    <p>Schwierigkeitsstufe</p>
                    <br/>
                    <DropDownComp
                        editMode={editMode}
                        pickedValue={allInformations?.stufe}
                        onValuePicked={(stufe: any) =>
                            setAllInformations({
                                ...allInformations,
                                stufe,
                            })
                        }
                        genderArr={['Anfänger', 'Fortgeschrittene', 'Profis']}
                    />
                </div>
            </div>

            <hr className='profileInfoHR'/>


            <div className='fullWidth '>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: 'rgb(92 94 235)', fontWeight: 'bold'
                    }}
                >
                    <div className='grid-itemTitle' style={{textAlign: 'start'}}>
                        <p>Partner 1</p><br/>
                        <EditableLabel
                            editMode={editMode}
                            payload={[
                                {
                                    playHolderName: 'Name',
                                    label: 'nameA',
                                    value: allInformations?.nameA,
                                },
                            ]}
                            returnTheValues={(returnedValues: any) =>
                                setAllInformations({
                                    ...allInformations,
                                    ...returnedValues,
                                })
                            }
                        />
                    </div>
                    <div className='grid-itemTitle' style={{textAlign: 'end'}}>
                        <p>Partner 2</p>
                        <br/>
                        <EditableLabel
                            editMode={editMode}
                            payload={[
                                {
                                    playHolderName: 'Name',
                                    label: 'nameB',
                                    value: allInformations?.nameB,
                                },
                            ]}
                            returnTheValues={(returnedValues: any) =>
                                setAllInformations({
                                    ...allInformations,
                                    ...returnedValues,
                                })
                            }
                        />
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    <div className='grid-item'>
                        <DropDownComp
                            editMode={editMode}
                            pickedValue={allInformations?.genderA}
                            onValuePicked={(genderA: any) =>
                                setAllInformations({
                                    ...allInformations,
                                    genderA,
                                })
                            }
                            genderArr={genderArr}
                        />
                    </div>
                    <div className='grid-item'>
                        <svg
                            className='profileInfoIconGrid'
                            width='1.2em'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                            />
                        </svg>
                    </div>
                    <div className='grid-item'>
                        <DropDownComp
                            editMode={editMode}
                            pickedValue={allInformations?.genderB}
                            onValuePicked={(genderB: any) =>
                                setAllInformations({
                                    ...allInformations,
                                    genderB,
                                })
                            }
                            genderArr={genderArr}
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    <div className='grid-item'>
                        <HeightComp
                            editMode={editMode}
                            height={allInformations?.heightA}
                            setUserHeight={(heightA: any) =>
                                setAllInformations({
                                    ...allInformations,
                                    heightA,
                                })
                            }
                        />
                    </div>

                    <div className='grid-item'>
                        <svg
                            className='profileInfoIconGrid'
                            width='1.2em'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M8 9l4-4 4 4m0 6l-4 4-4-4'
                            />
                        </svg>
                    </div>
                    <div className='grid-item'>
                        <HeightComp
                            editMode={editMode}
                            height={allInformations?.heightB}
                            setUserHeight={(heightB: any) =>
                                setAllInformations({
                                    ...allInformations,
                                    heightB,
                                })
                            }
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    <div className='grid-item'>
                        <WeightComp
                            editMode={editMode}
                            weight={allInformations?.weightA}
                            setUserWeight={(weightA: any) =>
                                setAllInformations({
                                    ...allInformations,
                                    weightA,
                                })
                            }
                        />
                    </div>
                    <div className='grid-item'>
                        <svg
                            className='profileInfoIconGrid'
                            width='1.2em'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                            />
                        </svg>
                    </div>
                    <div className='grid-item'>
                        <WeightComp
                            editMode={editMode}
                            weight={allInformations?.weightB}
                            setUserWeight={(weightB: any) =>
                                setAllInformations({
                                    ...allInformations,
                                    weightB,
                                })
                            }
                        />
                    </div>
                </div>
            </div>
            {editMode && (
                <div
                    onClick={() => onSavePressed()}
                    style={{
                        display: 'flex',
                        width: '100%',
                        marginBottom: '10px',
                        justifyContent: 'center',
                    }}
                >
                    <button className='paarfit_button' style={{marginTop: '10px'}}>
                        Speichern
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileInfo;
