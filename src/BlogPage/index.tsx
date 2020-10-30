import React, { useEffect, useState } from 'react'
import BlogCard from '../BlogCard'
import './index.css'
import { handleLogout } from '../firebase'
import { CircularProgress, createStyles, makeStyles, Paper, Theme } from '@material-ui/core'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        resetContainer: {
            // padding: theme.spacing(3),

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px"
        },

    }),
);

export default function Blog() {

    const [loading, setloading] = useState(false)
    const [blobgEntries, setblobgEntry] = useState([])
    const classes = useStyles();
    async function fetchWorkouts() {
        setloading(true)
        fetch(`https://paarfit-strapi.herokuapp.com/rezeptes`)
            .then(response =>
                response.json())
            .then(data => {

                setblobgEntry(data)
                setloading(false)
            }
            ).catch(error => {
                console.log(error)
                setloading(false)
            })

    }

    useEffect(() => {

        fetchWorkouts()

    }, [])

    return (
        <div className="">
            <div className="left__section">
                {blobgEntries.map((entry: any) => (
                    <BlogCard title={entry?.Name} beschreibung={entry?.Beschreibung} image={entry?.foto?.url} />
                ))}
            </div>
            <div className="right__section disable_on_small">
                <Paper style={{height:"300px"}} square elevation={0} >
                    Hier kann etwas stehen
                </Paper>
            </div>
            {loading && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <p style={{ marginBottom: "20px" }}>Beiträge werden geladen...</p>
                    <CircularProgress />
                </Paper>
            )}
        </div>

    )
}
