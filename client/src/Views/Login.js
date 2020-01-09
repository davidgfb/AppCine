import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import VoiceChatIcon from '@material-ui/icons/VoiceChatTwoTone';
import {makeStyles} from '@material-ui/core/styles';


export default function Login(){

  // Estilos empleados en la vista
  const useStyles = makeStyles(theme => ({
      root: {
        height: "100vh"
      },
      image: {
        backgroundImage: "url(https://source.unsplash.com/collection/8744383)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      logo: {
        marginTop: theme.spacing(1),
        fontSize: 100
      },
      title: {
        fontFamily: 'Monospace',
        letterSpacing: 10,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2)
      },
      subtitle: {
        marginBottom: theme.spacing(4),
        fontFamily: 'Monospace'
      },
      separator: {
        marginBottom: theme.spacing(8),
        width: '80%'
      },
      form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(1)
      },
      textfield: {
        width: '65%',
        alignSelf: 'center'
      },
      submit: {
        width: '65%',
        marginTop: theme.spacing(2)
      },
      register: {
        marginTop: theme.spacing(2)
      }
    })
  );


  // Construcción de la vista
  function SignInSide(){
    const classes = useStyles();

    return(
      <Grid container componenimaget="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={6} className={classes.image}/>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={8} >
          <div className={classes.paper}>
            <VoiceChatIcon color="primary" className={classes.logo}/>
            <Typography className={classes.title} align="center" color="primary" component="h2" variant="h2">
              CineManager
            </Typography>
            <hr className={classes.separator} color="secondary"/>
            <Typography className={classes.subtitle} align="center" color="primary" component="h2" variant="h4">
              Iniciar sesión
            </Typography>
            <form className={classes.form}>
              <TextField
                className={classes.textfield}
                label='Correo electrónico'
                variant='outlined'
                margin='normal'
                autoFocus
              />
              <TextField
                className={classes.textfield}
                type='password'
                label='Contraseña'
                variant='outlined'
                margin='normal'
              />
              <Button className={classes.submit} variant='contained' color='primary' fullWidth>
                Acceder
              </Button>
              <Link href="#" variant="body2" className={classes.register}>
                {"¿No tienes cuenta? Registrate"}
              </Link>
            </form>
          </div>
        </Grid>
      </Grid>
    )
  }

  // Devolución de la vista
  return <SignInSide/>
}
