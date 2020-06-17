import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './card.scss';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    padding: '2px 2px 2px 2px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  var {onClick} = props
  return (
    <div className={ `card `}  style={{backgroundImage: `url(${props.icon})` }} onClick={()=>props.onClick(props.type)}>    
        </div>
  );
}
