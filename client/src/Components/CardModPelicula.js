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

export default function CardInsertPelicula(){
  const classes = useStyles();
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
              <InputLabel id="label-select-peli">
                Seleccionar película
              </InputLabel>
              <Select
                labelId="label-select-peli"
                margin="auto"
                fullWidth>
                {/*onChange={handleChange}*/}
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
              size='medium'>
              Seleccionar
            </Button>
          </Grid>
        </Grid>
        <Divider className={classes.divider}/>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <TextField
                label="Título"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Título original"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                type="url"
                label="Página oficial"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Género"
                variant="outlined"
                margin="auto"
                fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Sinopsis"
                variant="outlined"
                margin="auto"
                rows={5}
                multiline
                fullWidth/>
            </Grid>
            <Grid item xs={12} md={6} container spacing={2} className={classes.bq1}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Año de estreno"
                  variant="outlined"
                  margin="auto"
                  min={1900}
                  max={new Date().getFullYear()}
                  fullWidth/>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Duración (minutos)"
                  variant="outlined"
                  margin="auto"
                  min={0}
                  max={500}
                  fullWidth/>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Distribuidora"
                  variant="outlined"
                  margin="auto"
                  fullWidth/>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Nacionalidad"
                  variant="outlined"
                  margin="auto"
                  fullWidth/>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Director"
                  variant="outlined"
                  margin="auto"
                  fullWidth/>
              </Grid>
            </Grid>
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
