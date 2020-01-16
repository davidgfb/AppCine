import React from 'react';
import ReactDOM from 'react-dom';
import CardAddSala from './CardAddSala';
import CardModSala from './CardModSala';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
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
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  salaSelector: {
    marginBottom: theme.spacing(6),
    alignContent: 'flex-end'
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} {...props} />;
}

class CardDelSala extends React.Component{

  /******************************************/
  constructor(props){
    super(props);
    this.state = {
      salas: [],
      selectedId: '',
      clicked: false,
      status: ''
    }
  }

  /******************************************/
  componentDidMount(){
    var salas = [];
    fetch('http://localhost:3001/api/allSalas')
          .then(data => {
            return data.json();
          })
          .then(data => {
            salas = data.map(
              (s) => {return s}
            );
            this.setState({salas: salas});
    });
  }

  /******************************************/
  async deleteHandler(){

    // Datos a enviar
    var data = {id: this.state.selectedId}

    if(data.id !== ''){
      // Eliminar la película
      var res = await fetch('http://localhost:3001/api/delSala',
      {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json',
          }
      }).catch((err) => {
        console.error(err);
      })
      console.log(res);
      if(res.status === 200){
        this.setState({clicked: true, status: 'Operación realizada con éxito', severity: 'success'});
        window.location.replace('');
      }else{this.setState({clicked: true, status: 'Error. No se ha podido realizar la operación', severity: 'error'});}
    }else{this.setState({clicked: true, status: 'Error. No se ha podido realizar la operación', severity: 'error'});}
  }

  /******************************************/
  closeHandler(event){
    this.setState({clicked: false})
  }

  /******************************************/
  changeHandler(event){
    this.setState({selectedId: event.target.value});
  }

  /******************************************/
  render(){
    const classes = this.props.classes;
    return(
      <Card className={classes.card}>
        <Typography className={classes.title}>
          Eliminar sala
        </Typography>
        <Divider className={classes.divider}/>

        <FormControl fullWidth className={classes.salaSelector}>
          <InputLabel id="label-select-sala">
            Seleccionar sala
          </InputLabel>
          <Select
            labelId="label-select-sala"
            fullWidth
            value={this.state.selectedId}
            onChange={this.changeHandler.bind(this)}>
            {
              this.state.salas.map(
                (s,i) => <MenuItem key={i} value={s._id}>Sala {s.numSala}</MenuItem>
              )
            }
          </Select>
        </FormControl>

        <Button
          variant='contained'
          color='primary'
          size='medium'
          onClick={this.deleteHandler.bind(this)}>
          Eliminar
        </Button>

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
  )};
}


CardDelSala.propTypes = {
  classes: PropTypes.object.isRequired
};
export default function(){
    return (
      <CardDelSala classes={useStyles()}/>
    );
}
