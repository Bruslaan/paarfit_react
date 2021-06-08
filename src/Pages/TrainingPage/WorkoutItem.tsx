import React, {useEffect, useRef, useState} from 'react';
import Button from '@material-ui/core/Button';

const MyItem: React.FC<any> = ({
                                   onClick,
                                   children,
                                   visible,
                                   workout,
                                   onPaused,
                                   onPlaying,
                                   firstVideo
                               }) => {
    function scrollToTargetAdjusted() {

        window.scrollTo({
            top: 300,
            behavior: "smooth"
        });
    }

    const video: any = useRef()

    const [workoutStarted, setWorkoutStarted] = useState(false);

    console.log(video)
    return (
        <div

            style={{
                marginLeft: 'auto',
                objectFit: 'cover',
                overflow: 'hidden',
                position: 'relative',
                cursor: visible ? 'default' : 'pointer',
            }}

            onClick={onClick}
        >
            <div className='detTrainingStep'>


                <video
                    autoPlay={!firstVideo}
                    className='noSelect'
                    ref={video}
                    onPlaying={(e) => onPlaying()}
                    onPause={() => onPaused()}
                    preload='metadata'
                    onEnded={(e) => {

                        const video = e.target as HTMLMediaElement
                        video.currentTime = 5
                    }
                    }
                    controls
                    style={{
                        outline: 'none',
                        width: '100%',
                        top: 0,
                        objectFit: 'contain',
                        position: "relative"
                    }}
                    width='100%'
                    poster=''
                >

                    <source src={workout.video?.url + '#t=1.5'} type='video/mp4'/>
                    <source src={workout.video?.url + '#t=1.5'} type='video/mp4'/>
                    Your browser does not support the video tag.
                </video>

                <div
                    className='detTrainingWorkSets'
                    style={{
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: "relative"
                    }}
                >


                    <div className='areaCategTraining' style={{position: "relative"}}>

                        {
                            firstVideo && !workoutStarted &&
                            <div style={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                                position: "absolute",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "white",
                            }}>
                                <Button variant='contained' style={{
                                    backgroundColor: '#F8CD4E',
                                    color: "white",
                                }} onClick={() => {
                                    setWorkoutStarted(true)
                                    video.current.play()
                                }}>Workout Starten</Button>
                            </div>}
                        {/* <h2 style={{ marginBottom: "20px" }}>{workout.workoutname}</h2> */}
                        <div className='rowSetsCategTraining'>
                            <h2 className='purple1'>Sätze</h2>
                            <p>{workout.set}</p>
                        </div>
                        <div className='rowRepetitionsCategTraining'>
                            <h2 className='purple1'>Dauer in Sek</h2>
                            <p>{workout.rep}</p>
                        </div>
                        <div className='rowPauseCategTraining'>
                            <h2 className='purple1'>Pause in Sek</h2>
                            <p>{workout.pause}</p>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default MyItem;
