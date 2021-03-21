import React, {useRef} from "react"


const MyItem: React.FC<any> = ({onClick, children, visible, workout, onPaused, onPlaying}) => {

    const video: any = useRef()
    console.log(video)

    return (
        <div
            style={{
                marginLeft: "auto",
                objectFit: "cover",
                overflow: "hidden",
                position: "relative",
                cursor: visible ? 'default' : 'pointer',
            }}
            onClick={onClick}
        >
            <div className="detTrainingStep">
                <video className="noSelect" onPlaying={(e) => onPlaying()} onPause={() => onPaused()}
                       preload="metadata" controls
                       style={{outline: "none", width: "100%", top: 0, objectFit: "contain"}} width="100%"
                       poster="">
                    <source src={workout.video?.url + "#t=0.5"} type="video/mp4"/>
                    <source src={workout.video?.url + "#t=0.5"} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                <div className="detTrainingWorkSets"
                     style={{padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div className="areaCategTraining">
                        {/* <h2 style={{ marginBottom: "20px" }}>{workout.workoutname}</h2> */}
                        <div className="rowSetsCategTraining">
                            <h2 className="purple1">Sets</h2>
                            <p>{workout.set}</p>
                        </div>
                        <div className="rowRepetitionsCategTraining">
                            <h2 className="purple1">Dauer in Sek</h2>
                            <p>{workout.rep}</p>
                        </div>
                        <div className="rowPauseCategTraining">
                            <h2 className="purple1">Pause in Sek</h2>
                            <p>{workout.pause}</p>
                        </div>
                    </div>

                </div>
            </div>
            {children}
        </div>
    )
};


export default MyItem


