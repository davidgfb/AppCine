import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '20%',
    maxWidth: '25%',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
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
    fontFamily: 'Monospace',
    fontSize: 30,
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  inputInfo: {
    margin: theme.spacing(1, 0)
  },
  actions: {
    marginTop: 'auto',
    justifyContent: 'center'
  }

}));

export default function CardAddPelicula(){
  const classes = useStyles();
  return(
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title}>
          Añadir sala
        </Typography>
        <Divider className={classes.divider}/>
        <TextField
          type="Number"
          label="Número de sala"
          variant="outlined"
          margin="auto"
          fullWidth
          className={classes.inputInfo}/>
        <TextField
          type="Number"
          label="Número de filas"
          variant="outlined"
          margin="auto"
          fullWidth
          className={classes.inputInfo}/>
        <TextField
          type="Number"
          label="Numero de columnas"
          variant="outlined"
          margin="auto"
          fullWidth
          className={classes.inputInfo}/>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          variant='contained'
          color='primary'
          size='large'>
          GUARDAR
        </Button>
      </CardActions>
    </Card>
  );
}
