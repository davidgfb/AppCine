import React from 'react';
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
    maxHeight: '35vh',
    minWidth: '25%',
    maxWidth: '30%',
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

export default function CardPeliculaClient(props){
  const classes = useStyles();
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

      <Button
        variant='contained'
        color='primary'
        size='medium'>
        Eliminar
      </Button>
    </Card>
  );
}
