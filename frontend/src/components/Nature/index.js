import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './nature.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    borderRadius: '50px',
    background: 'rgba(0,0,0,0.7)',
    margin:'32px',

  },
  media: {
    height: 340,
    width:300
  },
});

export default function Nature() {
  const css = useStyles();

  return (
    <Card className={`${css.root} card`}>
 
        <CardMedia
          className={`${css.media} cat`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className='title'>
            Sky Moments
          </Typography>
        </CardContent>
 
    </Card>
  );
}