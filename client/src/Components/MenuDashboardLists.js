import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Iconos
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import BarChartIcon from '@material-ui/icons/BarChart';

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
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Peliculas"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon/>
      </ListItemIcon>
      <ListItemText primary="Entradas"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Salas"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon/>
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
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Peliculas"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon/>
      </ListItemIcon>
      <ListItemText primary="Mis Entradas"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon/>
      </ListItemIcon>
      <ListItemText primary="Mi cuenta"/>
    </ListItem>
  </div>
);
