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
  actions: {
    marginTop: 'auto',
    justifyContent: 'center'
  }

}));

function Alert(props){
  return <MuiAlert elevation={6} {...props} />;
}

class CardAddCliente extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      status: ''
    }
  }

  async saveHandler(){
    var data = {
      nombre: document.getElementById("nombreAdd").value,
      apellidos: document.getElementById("apellidosAdd").value,
      tlf: document.getElementById("tlfAdd").value,
      email: document.getElementById("emailAdd").value,
      password: document.getElementById("passwordAdd").value
    }

    var res = await fetch('http://localhost:3001/api/insertCliente',
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
  }

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
            Añadir cliente
          </Typography>
          <Divider className={classes.divider}/>
          <form>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="nombreAdd"
                  label="Nombre"
                  variant="outlined"
                  fullWidth/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="apellidosAdd"
                  label="Apellidos"
                  variant="outlined"
                  fullWidth/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="tlfAdd"
                  type="Number"
                  label="Teléfono"
                  variant="outlined"
                  fullWidth/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="emailAdd"
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="passwordAdd"
                  type="password"
                  label="Contraseña"
                  variant="outlined"
                  fullWidth/>
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

CardAddCliente.propTypes = {
  classes: PropTypes.object.isRequired
};
export default function(){
    return (
      <CardAddCliente classes={useStyles()}/>
    );
}
