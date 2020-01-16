import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '95%',
    maxWidth: '95%',
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
  idPeliculaGroup:{
    display: 'flex',
    flexDirection: 'row'
  },
  idLabel: {
    fontSize: 12,
    marginRight: theme.spacing(1)
  },
  peliculaID: {
    fontSize: 12
  },
  actions: {
    marginTop: 'auto',
    justifyContent: 'center'
  }
}));

class CardModPelicula extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      peliculas: [],
      clicked: false,
      status: '',
      selectedId: ''
    }
  }

  componentDidMount(){
    var peliculas = [];
    fetch('http://localhost:3001/api/allPeliculas')
          .then(data => {
            return data.json();
          })
          .then(data => {
            peliculas = data.map(
              (s) => {return s}
            );
            this.setState({peliculas: peliculas});
    });
  }

  changeHandler(event){
    this.setState({selectedId: event.target.value})
  }

/*
  selectPelicula(){

    if(this.state.selectedId !== ''){
      var data = {
        id: this.state.selectedId
      };

      /*
      fetch('http://localhost:3001/api/queryPelicula',
      {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json',
          }
      }).then(data => {
          return data.json();
      })/*.then(data => {
        console.log(data)
        document.getElementById("tituloMod").value = data.body.titulo;
        document.getElementById("tituloOriginalMod").value = data.body.tituloOriginal;
        document.getElementById("pagOficialMod").value = data.body.pagOficial;
        document.getElementById("generoMod").value = data.body.genero;
        document.getElementById("sinopsisMod").value = data.body.sinopsis;
        document.getElementById("annoEstrenoMod").value = data.body.annoEstreno;
        document.getElementById("duracionMod").value = data.body.duracion;
        document.getElementById("distribuidoraMod").value = data.body.distribuidora;
        document.getElementById("nacionalidadMod").value = data.body.nacionalidad;
        document.getElementById("directorMod").value = data.body.director;
        document.getElementById("actoresMod").value = data.body.actores;
        document.getElementById("edadMinMod").value = data.body.edadMin;
      })
      .catch((err) => {
        console.error(err);
      })
    }else{
      // Errro
    }
  }
*/

  render(){
    const classes = this.props.classes;
    return(
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title}>
            Modificar película
          </Typography>
          <Divider className={classes.divider}/>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="label-select-peli-mod">
                  Seleccionar película
                </InputLabel>
                <Select
                  labelId="label-select-peli-mod"
                  fullWidth
                  value={this.state.selectedId}
                  onChange={this.changeHandler.bind(this)}>
                  {
                    this.state.peliculas.map(
                      (p,i) => <MenuItem key={i} value={p._id}>{p.titulo}</MenuItem>
                    )
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={9} className={classes.idPeliculaGroup}>
              <Typography className={classes.idLabel}>
                ID:
              </Typography>
              <Typography id="peliculaID" className={classes.peliculaID}>
                Selecciona una película.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                variant='contained'
                color='primary'
                size='large'
                onClick={this.selectPelicula.bind(this)}>
                Seleccionar
              </Button>
            </Grid>
          </Grid>
          <Divider className={classes.divider}/>

          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <TextField
                  id="tituloMod"
                  label="Título"
                  fullWidth/>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="tituloOriginalMod"
                  label="Título original"
                  fullWidth/>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="pagOficialMod"
                  type="url"
                  label="Página oficial"
                  fullWidth/>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="generoMod"
                  label="Género"
                  fullWidth/>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="sinopsisMod"
                  label="Sinopsis"
                  rows={5}
                  multiline
                  fullWidth/>
              </Grid>
              <Grid item xs={12} md={6} container spacing={2} className={classes.bq1}>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="annoEstrenoMod"
                    label="Año de estreno"
                    min={1900}
                    max={new Date().getFullYear()}
                    fullWidth/>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="duracionMod"
                    label="Duración (minutos)"
                    min={0}
                    max={500}
                    fullWidth/>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="distribuidoraMod"
                    label="Distribuidora"
                    fullWidth/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="nacionalidadMod"
                    label="Nacionalidad"
                    fullWidth/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="directorMod"
                    label="Director"
                    fullWidth/>
                </Grid>
              </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    id="actoresMod"
                    label="Actores"
                    fullWidth/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="edadMinMod"
                    label="Edad mínima"
                    type="Number"
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
}


CardModPelicula.propTypes = {
  classes: PropTypes.object.isRequired
};
export default function(){
    return (
      <CardModPelicula classes={useStyles()}/>
    );
}
