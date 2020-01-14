import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '50%',
    maxWidth: '50%',
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

/*
function saveHandler(){
}
*/



export default function CardAddEntrada(){
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = event => {
    console.log(event.target.value)
    setValue(event.target.value);
  };

  return(
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title}>
          Añadir entrada
        </Typography>
        <Divider className={classes.divider}/>
        <form>
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
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Divider className={classes.divider}/>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Pase</FormLabel>
                <RadioGroup value={value} onChange={handleChange}>
                  <FormControlLabel
                    value={0}
                    control={<Radio checked={value == 0}/>}
                    label="[15:00] Primer pase"/>
                  <FormControlLabel
                    value={1}
                    control={<Radio checked={value == 1}/>}
                    label="[18:00] Segundo pase"/>
                  <FormControlLabel
                    value={2}
                    control={<Radio checked={value == 2}/>}
                    label="[21:00] Tercer pase"/>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid container item xs={6}>
              <Grid item xs={12}>
                <TextField
                  id="numSala"
                  type="Number"
                  label="Número de Sala"
                  variant="outlined"
                  fullWidth/>
              </Grid>
              <Grid item xs={12}>
                <FormLabel component="legend">Fecha</FormLabel>
                <TextField
                  type="date"
                  fullWidth/>
              </Grid>
            </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                id="fila"
                type="Number"
                label="Fila"
                variant="outlined"
                fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="columna"
                type="Number"
                label="Columna"
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
          size='large'>
          GUARDAR
        </Button>
      </CardActions>
    </Card>
  );
}
