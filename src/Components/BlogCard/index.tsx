import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown'

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
  },
  media: {
    height: 440,
  },
});



export default function BlogCard({ image, title, beschreibung }: any) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h1">
            {title}
          </Typography>

          <ReactMarkdown escapeHtml={false} source={beschreibung} />

        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" >
          Share
        </Button>
        <Button size="small" >
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
