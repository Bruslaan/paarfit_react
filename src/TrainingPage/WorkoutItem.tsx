import React from "react"
import { Card, CardActions, Button, CardActionArea, Typography, CardContent, CardMedia } from "@material-ui/core";

const MyItem: React.FC<any> = ({ onClick, children, visible }) => (
    <div
        style={{
            width: '80vw',
            borderRadius: "10px",
            maxWidth: "600px",
            height: 600,
            objectFit: "cover",
            overflow: "hidden",
            // background: "orange",
            position:"relative",
            border: "solid 1px var(--border-color)",
            cursor: visible ? 'default' : 'pointer',
        }}
        onClick={onClick}
    >

        <video preload="metadata" controls style={{ width: "100%", top:0, objectFit: "contain" }} width="100%" poster="">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4#t=0.5" type="video/mp4" />
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4#t=0.5" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <h1 style={{}}>Squads</h1>
                <h2 style={{ color: "gray" }}>Irgendwas</h2>
            </div>

        </div>
        <div style={{ padding: "20px", color: "gray" }}>
            #squads #aufwärmen
        </div>

        {children}
    </div>
);


export default MyItem


export function WorkoutItem() {
    return (

        <Card >
            <CardActionArea>

                <video preload="metadata" controls style={{ height: "100%", width: "100%", objectFit: "contain" }} width="100%" poster="">
                    <source src="https://firebasestorage.googleapis.com/v0/b/paarfit-90016.appspot.com/o/video1.mp4?alt=media&token=c526f78b-82c3-41fe-b145-ecbd96d3ec34#t=0.5" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/paarfit-90016.appspot.com/o/video1.mp4?alt=media&token=c526f78b-82c3-41fe-b145-ecbd96d3ec34#t=0.5" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>

    )
}

