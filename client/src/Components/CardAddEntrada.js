import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Radio';
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
  fechaLabel: {
    fontFamily: 'Monospace',
    fontSize: 15
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

function Alert(props) {
  return <MuiAlert elevation={6} {...props} />;
}

class CardAddSala extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      peliculas: [],
      clicked: false,
      status: '',
      severity: '',
      radioValue: ''
    }
  };

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
  };

  closeHandler(event){
    this.setState({clicked: false})
  };

  changeHandler(event){
    this.setState({selectedId: event.target.value});
  };


  async saveHandler(){
    var data = {
      numSala: document.getElementById("numSalaAdd").value,
      filas: document.getElementById("numFilasAdd").value,
      columnas: document.getElementById("numColumnasAdd").value
    }

    var res  = await fetch("http://localhost:3001/api/insertEntrada", {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).catch((err) => {
      console.error(err)
    });

    if(res.status === 200){
      this.setState(
        {clicked: true, status: 'Operación realizada con éxito', severity: 'success'}
      );
      window.location.replace('');
    }else{
      this.setState(
        {clicked: true, status: 'Error. No se ha podido realizar la operación', severity: 'error'}
      );
    }
  };


  render(){

    const classes = this.props.classes;
    const handleChange = (event) => {
      this.setState({radioValue: event.target.value});
    }

    return(
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title}>
            Añadir entrada
          </Typography>
          <Divider className={classes.divider}/>
          <FormControl fullWidth>
            <InputLabel id="label-select-peliEntrada">
              Seleccionar película
            </InputLabel>
            <Select
              labelId="label-select-peliEntrada"
              fullWidth
              onChange={this.changeHandler.bind(this)}>
              {
                this.state.peliculas.map(
                  (p,i) => <MenuItem key={i} value={p._id}>{p.titulo}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            variant='contained'
            color='primary'
            size='large'>
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

CardAddSala.propTypes = {
  classes: PropTypes.object.isRequired
};
export default function(){
    return (
      <CardAddSala classes={useStyles()}/>
    );
}
