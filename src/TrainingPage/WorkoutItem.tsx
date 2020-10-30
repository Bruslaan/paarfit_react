import React from "react"


const MyItem: React.FC<any> = ({ onClick, children, visible, workout, stage }) => (
    <div
        style={{

            marginRight: "10px",
            marginLeft: "auto",
            objectFit: "cover",
            overflow: "hidden",
            // background: "orange",
            position: "relative",


            cursor: visible ? 'default' : 'pointer',
        }}
        onClick={onClick}
    >

        <video preload="metadata" controls style={{ width: "100%", top: 0, objectFit: "contain" }} width="100%" poster="">
            <source src={workout.video?.url + "#t=0.5"} type="video/mp4" />
            <source src={workout.video?.url + "#t=0.5"} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <h2 style={{ marginBottom: "20px" }}>{workout.workoutname}</h2>

                <p style={{ color: "#4b4561" }}><strong>Sets:</strong> {workout.sets}</p>
                <br/>
                <p style={{ color: "#4b4561" }}><strong>Wiederholungen:</strong> {workout.reps}</p>
                <br/>
                <p style={{ color: "#4b4561" }}><strong>Pause:</strong> {workout.pause}</p>
            </div>

        </div>
        {/* <div style={{ padding: "20px", color: "gray" }}>
            #{stage}
        </div> */}

        {children}
    </div>
);


export default MyItem


