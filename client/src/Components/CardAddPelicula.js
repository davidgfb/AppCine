import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh',
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
  actions: {
    marginTop: 'auto',
    justifyContent: 'center'
  }

}));

function Alert(props){
  return <MuiAlert elevation={6} {...props} />;
}

class CardAddPelicula extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      clicked: false,
      status: ''
    }
  }

  componentDidMount(){

  }


  async saveHandler(){

    var data = {
      titulo: document.getElementById("titulo").value,
      tituloOriginal: document.getElementById("tituloOriginal").value,
      sinopsis: document.getElementById("sinopsis").value,
      pagOficial: document.getElementById("pagOficial").value,
      genero: document.getElementById("genero").value,
      duracion: document.getElementById("duracion").value,
      nacionalidad: document.getElementById("nacionalidad").value,
      annoEstreno: document.getElementById("annoEstreno").value,
      distribuidora: document.getElementById("distribuidora").value,
      director: document.getElementById("director").value,
      actores: document.getElementById("actores").value,
      edadMin: document.getElementById("edadMin").value
    }

    var res = await fetch('http://localhost:3001/api/insertPelicula',
    {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    }).catch((err) => {
      console.error(err);
    })


    if(res.status === 200){
      this.setState({clicked: true, status: 'Operación realizada con éxito', severity: 'success'});
      window.location.replace('');
    }else{
      this.setState({clicked: true, status: 'Error. No se ha podido realizar la operación', severity: 'error'
    })}
  };

  /******************************************/
  closeHandler(event){
    this.setState({clicked: false})
  }

  render(){
    const classes = this.props.classes;
    return(
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title}>
            Añadir película
          </Typography>
          <Divider className={classes.divider}/>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="titulo"
                  label="Título"
                  variant="outlined"
                  fullWidth
                  required/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="tituloOriginal"
                  label="Título original"
                  variant="outlined"
                  fullWidth
                  required/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="pagOficial"
                  type="url"
                  label="Página oficial"
                  variant="outlined"
                  fullWidth
                  required/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="sinopsis"
                  label="Sinopsis"
                  variant="outlined"
                  rows={4}
                  multiline
                  fullWidth
                  required/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="genero"
                  label="Género"
                  variant="outlined"
                  fullWidth
                  required/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="annoEstreno"
                  type="Number"
                  label="Año de estreno"
                  variant="outlined"
                  min={1900}
                  max={new Date().getFullYear()}
                  fullWidth
                  required/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="duracion"
                  type="Number"
                  label="Duración (minutos)"
                  variant="outlined"
                  min={0}
                  max={500}
                  fullWidth
                  required/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="distribuidora"
                  label="Distribuidora"
                  variant="outlined"
                  fullWidth
                  required/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="nacionalidad"
                  label="Nacionalidad"
                  variant="outlined"
                  fullWidth
                  required/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="director"
                  label="Director"
                  variant="outlined"
                  fullWidth
                  required/>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <TextField
                    id="actores"
                    label="Actores"
                    variant="outlined"
                    fullWidth
                    required/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="edadMin"
                    label="Edad mínima"
                    type="Number"
                    variant="outlined"
                    fullWidth
                    required/>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={this.saveHandler.bind(this)}>
            GUARDAR
          </Button>
        </CardActions>
        <Snackbar
          open={this.state.clicked}
          autoHideDuration={6000}
          onClose={this.closeHandler.bind(this)}>
          <Alert
            onClose={this.closeHandler.bind(this)}
            severity={this.state.severity}>
            {this.state.status}
          </Alert>
        </Snackbar>
      </Card>
    )
  }
}


CardAddPelicula.propTypes = {
  classes: PropTypes.object.isRequired
};
export default function(){
    return (
      <CardAddPelicula classes={useStyles()}/>
    );
}
