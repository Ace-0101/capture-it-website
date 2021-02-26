import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './animal.css'
import {NavLink} from 'react-router-dom'
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

export default function Animals() {
  const classes = useStyles();

  return (
      
      <Card className={`${classes.root} card`}>
        <NavLink to='/animals'>
 
        <CardMedia
          className={`${classes.media} cat4`}
          title="Contemplative Reptile"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className='title4'>
            Animals Moments
          </Typography>
        </CardContent>
 
          </NavLink>
    </Card>
  );
}