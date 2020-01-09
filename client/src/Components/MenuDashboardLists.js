import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Iconos
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import VideocamIcon from '@material-ui/icons/Videocam';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import PersonIcon from '@material-ui/icons/Person';

export const AdminList = (
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
      <ListItemText primary="Entradas"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LooksOneIcon />
      </ListItemIcon>
      <ListItemText primary="Salas"/>
    </ListItem>
    <ListItem button>
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
        <PersonIcon/>
      </ListItemIcon>
      <ListItemText primary="Mi cuenta"/>
    </ListItem>
  </div>
);
