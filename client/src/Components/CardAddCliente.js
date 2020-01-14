import React from 'react';
import Grid from '@material-ui/core/Grid';
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
    minWidth: '50%',
    maxWidth: '50%',
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
  actions: {
    marginTop: 'auto',
    justifyContent: 'center'
  }

}));

/*
function saveHandler(){
}
*/

export default function CardAddCliente(){
  const classes = useStyles();
  return(
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title}>
          Añadir cliente
        </Typography>
        <Divider className={classes.divider}/>
        <form>
          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <TextField
                id="nombre"
                label="Nombre"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="apellidos"
                label="Apellidos"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="tlf"
                type="Number"
                label="Teléfono"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                type="email"
                label="Email"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="password"
                type="password"
                label="Contraseña"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="repPassword"
                type="password"
                label="Repetir contraseña"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
          </Grid>
        </form>
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
