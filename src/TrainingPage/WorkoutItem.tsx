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
                <h1 style={{ marginBottom: "20px" }}>{workout.workoutname}</h1>

                <p style={{ color: "gray" }}>Sets: {workout.sets}</p>
                <p style={{ color: "gray" }}>Wiederholungen: {workout.reps}</p>
                <p style={{ color: "gray" }}>Pause: {workout.pause}</p>
            </div>

        </div>
        <div style={{ padding: "20px", color: "gray" }}>
            #{stage}
        </div>

        {children}
    </div>
);


export default MyItem


