import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh',
    minWidth: '60%',
    maxWidth: '60%',
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

export default function CardAddPelicula(){
  const classes = useStyles();
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
                label="Título"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Título original"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                type="url"
                label="Página oficial"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Sinopsis"
                variant="outlined"
                margin="auto"
                rows={4}
                multiline
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Género"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Año de estreno"
                variant="outlined"
                margin="auto"
                min={1900}
                max={new Date().getFullYear()}
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Duración (minutos)"
                variant="outlined"
                margin="auto"
                min={0}
                max={500}
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Distribuidora"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Nacionalidad"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Director"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={12} sm={8}>
                <TextField
                  label="Actores"
                  variant="outlined"
                  margin="auto"
                  fullWidth/>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  label="Edad mínima"
                  type="Number"
                  variant="outlined"
                  margin="auto"
                  fullWidth/>
              </Grid>
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
