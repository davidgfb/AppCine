import React from 'react';
import ReactDOM from 'react-dom';
import LoginView from './LoginView';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import VoiceChatIcon from '@material-ui/icons/VoiceChatTwoTone';
import { makeStyles } from '@material-ui/core/styles';

export default function RegisterView(){

  // Estilos empleados en la vista
  const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#3f51b5'
    },
    paper: {
      height: '100vh',
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    logo: {
      marginTop: theme.spacing(4),
      fontSize: 100
    },
    title: {
      fontFamily: 'Monospace',
      letterSpacing: 10,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2)
    },
    separator: {
      marginBottom: theme.spacing(6),
      width: '80%'
    },
    form: {
      width: "80%",
      display: "flex",
      flexDirection: "column",
    },
    submit: {
      marginTop: theme.spacing(4)
    },
    register: {
      marginTop: theme.spacing(2),
      alignSelf: 'center',
      cursor: 'pointer'
    }
}))

  // Construcción de la vista
  function RegisterView(){
    const classes = useStyles();

    return(
      <Grid container color="primary" className={classes.root}>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={8}>
          <div className={classes.paper}>
            <VoiceChatIcon color="primary" className={classes.logo}/>
            <Typography className={classes.title} align="center" color="primary" component="h2" variant="h4">
              Registro
            </Typography>
            <hr className={classes.separator}/>
            <form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    label='Nombre'
                    margin='normal'
                    required
                    fullWidth
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    label='Apellidos'
                    margin='normal'
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <TextField
                type='tel'
                variant='outlined'
                label='Teléfono'
                margin='normal'
                fullWidth
                required
              />
              <TextField
                type='email'
                variant='outlined'
                label='Correo electrónico'
                margin='normal'
                fullWidth
                required
              />
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    type='password'
                    variant='outlined'
                    label='Contraseña'
                    margin='normal'
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type='password'
                    variant='outlined'
                    label='Repetir contraseña'
                    margin='normal'
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.submit}>
                Registrarse
              </Button>
              <Link
                variant="body2"
                className={classes.register}
                onClick={() => {
                  ReactDOM.render(
                    <LoginView/>,
                    document.getElementById("root")
                  )
                }}>
                {"¿Ya tienes cuenta? Accede"}
              </Link>
            </form>
          </div>
        </Grid>
      </Grid>
    )
  }

  // Devolución de la vista
  return <RegisterView/>

}
