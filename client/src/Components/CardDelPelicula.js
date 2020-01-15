import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '35vh',
    minWidth: '40%',
    maxWidth: '45%',
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
    fontSize: 30,
  },
  divider: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
  },
  infoBad:{
      display: 'none',
      alignSelf: 'center',
      color :'rgb(250, 85, 85)'
  },
  infoOk: {
      display: 'none',
      alignSelf: 'center',
      color: 'rgb(146, 255, 103)'
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
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} {...props} />;
}

class CardDelPelicula extends React.Component{

  /******************************************/
  constructor(props){
    super(props);
    this.state = {
      peliculas: [],
      selectedId: '',
      clicked: false,
      status: ''
    }
  }

  /******************************************/
  componentDidMount(){
    var peliculas = [];
    fetch('http://localhost:3001/api/allPeliculas')
          .then(data => {
            return data.json();
          })
          .then(data => {
            peliculas = data.map(
              (p) => {return p}
            );
            this.setState({peliculas: peliculas});
          });
  }

  /******************************************/
  async deleteHandler(){

    // Datos a enviar
    var data = {
      id: this.state.selectedId
    }
    console.log(data.id)
    if(data.id !== ''){
      // Eliminar la película
      var res = await fetch('http://localhost:3001/api/delPelicula',{
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json',
          }
        }
      ).catch((err) => {
        console.error(err);
      })

      if(res.status === 200){
        this.setState(
          {
            clicked: true,
            status: 'Correcto',
            severity: 'success'
          }
        );
      }else{
        this.setState({clicked: true, status: 'Error', severity: 'error'});
      }
    }else{
      this.setState({clicked: true, status: 'Error', severity: 'error'});
    }
  }

  /******************************************/
  closeHandler(event){
    this.setState({clicked: false})
  }

  /******************************************/
  changeHandler(event){
    this.setState({selectedId: event.target.value});
    console.log(this.state.selectedId);
  }

  /******************************************/
  render(){
      const classes = this.props.classes;
      return(
        <Card className={classes.card}>
          <Typography className={classes.title}>
            Eliminar película
          </Typography>
          <Typography className={classes.infoBad}>
            Error al eliminar la película
          </Typography>
          <Typography className={classes.infoOk}>
            Película eliminada
          </Typography>
          <Divider className={classes.divider}/>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="label-select-peli">
                  Seleccionar película
                </InputLabel>
                <Select
                  id="select-peli"
                  labelId="label-select-peli"
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
                {this.state.selectedId}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                color='primary'
                size='medium'
                onClick={this.deleteHandler.bind(this)}>
                Eliminar
              </Button>
            </Grid>
          </Grid>
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
    );
  }
}

CardDelPelicula.propTypes = {
  classes: PropTypes.object.isRequired
};
export default function(){
    return (
      <CardDelPelicula classes={useStyles()}/>
    );
}
