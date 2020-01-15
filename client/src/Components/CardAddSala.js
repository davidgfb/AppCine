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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '25%',
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

function Alert(props) {
  return <MuiAlert elevation={6} {...props} />;
}

class CardAddSala extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      status: '',
      severity: ''
    }
  }

  closeHandler(event){
    this.setState({clicked: false})
  }

  async saveHandler(){
    var data = {
      numSala: document.getElementById("numSalaAdd").value,
      filas: document.getElementById("numFilasAdd").value,
      columnas: document.getElementById("numColumnasAdd").value
    }

    var res  = await fetch("http://localhost:3001/api/insertSala", {
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
        {clicked: true, status: 'Correcto', severity: 'success'}
      );
      window.location.replace('');
    }else{
      this.setState(
        {clicked: true, status: 'Error', severity: 'error'}
      );
    }
  }


  render(){
    const classes = this.props.classes;
    return(
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title}>
            Añadir sala
          </Typography>
          <Divider className={classes.divider}/>
          <TextField
            id="numSalaAdd"
            type="Number"
            label="Número de sala"
            variant="outlined"
            fullWidth
            className={classes.inputInfo}/>
          <TextField
            id="numFilasAdd"
            type="Number"
            label="Número de filas"
            variant="outlined"
            fullWidth
            className={classes.inputInfo}/>
          <TextField
            id="numColumnasAdd"
            type="Number"
            label="Numero de columnas"
            variant="outlined"
            fullWidth
            className={classes.inputInfo}/>
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

CardAddSala.propTypes = {
  classes: PropTypes.object.isRequired
};
export default function(){
    return (
      <CardAddSala classes={useStyles()}/>
    );
}
