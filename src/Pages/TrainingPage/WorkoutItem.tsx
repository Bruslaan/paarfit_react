import React from "react"


const MyItem: React.FC<any> = ({ onClick, children, visible, workout, stage }) => (
    <div
        style={{

            marginLeft: "auto",
            objectFit: "cover",
            overflow: "hidden",
            // background: "orange",
            position: "relative",


            cursor: visible ? 'default' : 'pointer',
        }}
        onClick={onClick}
    >
        <div className="detTrainingStep">
            <video preload="metadata" controls style={{ width: "100%", top: 0, objectFit: "contain" }} width="100%" poster="">
                <source src={workout.video?.url + "#t=0.5"} type="video/mp4" />
                <source src={workout.video?.url + "#t=0.5"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="detTrainingWorkSets" style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="areaCategTraining">
                   {/* <h2 style={{ marginBottom: "20px" }}>{workout.workoutname}</h2> */}
                    <div className="rowSetsCategTraining">
                        <h2 className="purple1">Sets</h2>
                        <p>{workout.sets}</p>
                    </div>
                    <div className="rowRepetitionsCategTraining">
                        <h2 className="purple1">Wiederholungen</h2>
                        <p>{workout.reps}</p>
                    </div>
                    <div className="rowPauseCategTraining">
                        <h2 className="purple1">Pause</h2>
                        <p>{workout.pause}</p>
                    </div>
                </div>

            </div>
        </div>
        {/* <div style={{ padding: "20px", color: "gray" }}>
            #{stage}
        </div> */}

        {children}
    </div>
);


export default MyItem


