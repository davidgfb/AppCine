import React from 'react';
import ReactDOM from 'react-dom';
import CardDelSala from '../Components/CardDelSala';
import CardModSala from '../Components/CardModSala';
import CardAddSala from '../Components/CardAddSala';
import CardDelPelicula from '../Components/CardDelPelicula';
import CardModPelicula from '../Components/CardModPelicula';
import CardAddPelicula from './CardAddPelicula';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '95%',
    maxWidth: '95%',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
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
    fontSize: 30
  },
  subtitle: {
    alignSelf: 'center',
    fontFamily: 'Monospace',
    fontSize: 25
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  salaSelector: {
    marginBottom: theme.spacing(6),
    alignContent: 'flex-end'
  },
  boton: {
    marginTop: theme.spacing(2)
  }
}));

export default function CardPeliculaClient(props){
  const classes = useStyles();
  return(
    <Card className={classes.card}>
      <Typography className={classes.title}>
        Funciones
      </Typography>
      <Divider className={classes.divider}/>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography  align="center" className={classes.subtitle}>
            Peliculas
          </Typography>
          <Divider className={classes.divider}/>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth
            onClick={() => {
              ReactDOM.render(
                <CardAddPelicula/>,
                document.getElementById("mainContent")
              );
            }}>
            Añadir película
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth
            onClick={() => {
              ReactDOM.render(
                <CardModPelicula/>,
                document.getElementById("mainContent")
              );
            }}>
            Modificar película
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth
            onClick={() => {
              ReactDOM.render(
                <CardDelPelicula/>,
                document.getElementById("mainContent")
              );
            }}>
            Eliminar película
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Consultar películas
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography  align="center" className={classes.subtitle}>
            Salas
          </Typography>
          <Divider className={classes.divider}/>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth
            onClick={() => {
              ReactDOM.render(
                <CardAddSala/>,
                document.getElementById("mainContent")
              );
            }}>
            Añadir sala
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth
            onClick={() => {
              ReactDOM.render(
                <CardModSala/>,
                document.getElementById("mainContent")
              );
            }}>
            Modificar sala
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth
            onClick={() => {
              ReactDOM.render(
                <CardDelSala/>,
                document.getElementById("mainContent")
              );
            }}>
            Eliminar sala
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Consultar salas
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography align="center" className={classes.subtitle}>
            Clientes
          </Typography>
          <Divider className={classes.divider}/>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Añadir cliente
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Modificar cliente
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Eliminar cliente
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Consultar clientes
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography align="center" className={classes.subtitle}>
            Entradas
          </Typography>
          <Divider className={classes.divider}/>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Añadir entrada
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Modificar entrada
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Eliminar entrada
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Consultar entradas
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography align="center" className={classes.subtitle}>
            General
          </Typography>
          <Divider className={classes.divider}/>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Opiniones
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Ultimas reservas
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Horario de salas
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            className={classes.boton}
            fullWidth>
            Consultar entradas
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
