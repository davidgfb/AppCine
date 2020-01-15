import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CardAddEntrada from '../Components/CardAddEntrada';
import CardDelCliente from '../Components/CardDelCliente';
import CardAddCliente from '../Components/CardAddCliente';
import CardModCliente from '../Components/CardModCliente';
import ManagerCard from '../Components/ManagerCard';
import CardDelSala from '../Components/CardDelSala';
import CardModSala from '../Components/CardModSala';
import CardAddSala from '../Components/CardAddSala';
import CardDelPelicula from '../Components/CardDelPelicula';
import CardModPelicula from '../Components/CardModPelicula';
import CardAddPelicula from '../Components/CardAddPelicula';
import CardPeliculaClient from '../Components/CardPeliculaClient';

// Iconos
import DashboardIcon from '@material-ui/icons/Dashboard';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import PeopleIcon from '@material-ui/icons/People';
import VideocamIcon from '@material-ui/icons/Videocam';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import PersonIcon from '@material-ui/icons/Person';

export const AdminList = (
  <div>

    {/* MANAGER DASHBOARD INICIO */}
    <ListItem button onClick={() => {
      ReactDOM.render(
        <ManagerCard/>,
        document.getElementById("mainContent")
      )}}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio"/>
    </ListItem>

    {/* MANAGER DASHBOARD PELICULAS */}
    <ListItem button onClick={() => {
      ReactDOM.render(
        <div>
          <CardAddPelicula/>
          <CardModPelicula/>
          <CardDelPelicula/>
        </div>,
        document.getElementById("mainContent")
      )
    }}>
      <ListItemIcon>
        <VideocamIcon />
      </ListItemIcon>
      <ListItemText primary="Peliculas"/>
    </ListItem>

    {/* MANAGER DASHBOARD ENTRADAS */}
    <ListItem button  onClick={() => {
      ReactDOM.render(
        <div>
          <CardAddEntrada/>
        </div>,
        document.getElementById("mainContent")
      )
    }}>
      <ListItemIcon>
        <ConfirmationNumberIcon/>
      </ListItemIcon>
      <ListItemText primary="Entradas"/>
    </ListItem>

    {/* MANAGER DASHBOARD SALAS */}
    <ListItem button onClick={() => {
      ReactDOM.render(
        <div>
          <CardAddSala/>
          <CardModSala/>
          <CardDelSala/>
        </div>,
        document.getElementById("mainContent")
      )
    }}>
      <ListItemIcon>
        <LooksOneIcon />
      </ListItemIcon>
      <ListItemText primary="Salas"/>
    </ListItem>

    {/* MANAGER DASHBOARD OPINIONES */}
    <ListItem button>
      <ListItemIcon>
        <ThumbsUpDownIcon />
      </ListItemIcon>
      <ListItemText primary="Opiniones"/>
    </ListItem>

    {/* MANAGER DASHBOARD CLIENTES */}
    <ListItem button onClick={() => {
      ReactDOM.render(
        <div>
          <CardAddCliente/>
          <CardModCliente/>
          <CardDelCliente/>
        </div>,
        document.getElementById("mainContent")
      )
    }}>
      <ListItemIcon>
        <PeopleIcon/>
      </ListItemIcon>
      <ListItemText primary="Clientes"/>
    </ListItem>
  </div>
);

export const ClientList = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VideocamIcon />
      </ListItemIcon>
      <ListItemText primary="Peliculas"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ConfirmationNumberIcon/>
      </ListItemIcon>
      <ListItemText primary="Mis Entradas"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ThumbsUpDownIcon/>
      </ListItemIcon>
      <ListItemText primary="Mis opiniones"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon/>
      </ListItemIcon>
      <ListItemText primary="Mi cuenta"/>
    </ListItem>
  </div>
);
