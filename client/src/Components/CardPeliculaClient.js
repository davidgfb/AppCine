import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '85vh',
    minWidth: '40%',
    maxWidth: '45%',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingTop: 0,
    [theme.breakpoints.down('xs')]: {
      minWidth: '85%',
      maxHeight: 'none'
    }
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    alignSelf: 'center',
    fontFamily: 'san-serif',
    fontSize: 30,
    marginBottom: theme.spacing(1),
  },
  divider: {
    marginBottom: theme.spacing(4)
  },
  image: {
    marginBottom: theme.spacing(3),
    alignSelf: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'rgb(61, 38, 201)'
  },
  content: {
    fontSize: 15
  },
  actions: {
    marginTop: 'auto',
    justifyContent: 'center'
  }

}));

export default function CardPeliculaClient(props){
  const classes = useStyles();

  return(
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title}>
          {props.titulo}
        </Typography>
        <Divider className={classes.divider}/>
        <div className={classes.image}/>
        <Typography className={classes.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae rutrum nunc, eget consequat lectus.
        Curabitur malesuada neque eget consequat molestie. Morbi posuere arcu vitae lectus auctor, vitae commodo purus ornare.
        Maecenas eget facilisis enim, ut mattis augue. Sed consectetur mi ex, vitae vestibulum mauris facilisis quis.

        Nunc ultricies purus ligula, eu pretium arcu venenatis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sollicitudin, neque sit amet tempus mattis, sapien diam luctus erat,
        eget viverra nunc diam non mauris. Suspendisse dictum bibendum molestie. Suspendisse porttitor varius est et tempor.
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          variant='contained'
          color='primary'>
          Detalles
        </Button>
      </CardActions>
    </Card>
  );
}
