import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

export default function CardPeliculaClient(props){
  const classes = useStyles();
  return(
    <Card className={classes.card}>
      <Typography className={classes.title}>
        Eliminar película
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


              <MenuItem value=""><em>None</em></MenuItem>
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
            Eliminar
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
