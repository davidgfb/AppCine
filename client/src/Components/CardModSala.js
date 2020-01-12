import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '20%',
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
    fontSize: 25,
  },
  selectorSala: {
    marginBottom: theme.spacing(4)
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  inputInfo: {
    margin: theme.spacing(1, 0)
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
          Modificar sala
        </Typography>
        <Divider className={classes.divider}/>
        <FormControl fullWidth className={classes.selectorSala}>
          <InputLabel id="label-select-sala">
            Seleccionar sala
          </InputLabel>
          <Select
            labelId="label-select-sala"
            margin="auto"
            fullWidth>
            {/*onChange={handleChange}*/}
            <MenuItem value=""> </MenuItem>
            <MenuItem value={1}>Sala 1</MenuItem>
            <MenuItem value={2}>Sala 2</MenuItem>
            <MenuItem value={3}>Sala 3</MenuItem>
            <MenuItem value={4}>Sala 4</MenuItem>
            <MenuItem value={5}>Sala 5</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="Number"
          label="Número de sala"
          variant="outlined"
          margin="auto"
          fullWidth
          className={classes.inputInfo}/>
        <TextField
          type="Number"
          label="Número de filas"
          variant="outlined"
          margin="auto"
          fullWidth
          className={classes.inputInfo}/>
        <TextField
          type="Number"
          label="Numero de columnas"
          variant="outlined"
          margin="auto"
          fullWidth
          className={classes.inputInfo}/>
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
