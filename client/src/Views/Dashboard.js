import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { AdminList, ClientList } from '../Components/MenuDashboardLists';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'; // Gestionar clases de forma sencilla

// Iconos
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import VoiceChatIcon from '@material-ui/icons/VoiceChatTwoTone';




const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    marginLeft: theme.spacing(2),
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // Animación ejecutada al cerrar menú
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    // Animación ejecutada al desplegar menú
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  logo: {
    fontSize: 35,
    marginRight: theme.spacing(2)
  },
  title: {
    fontFamily: 'Monospace',
    letterSpacing: 4,
    fontSize: 35,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    // Animación ejecutada al desplegar menú
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    // Animación ejecutada al cerrar menú
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  }
}));

export default function Dashboard(){

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {setOpen(true);};
  const handleDrawerClose = () => {setOpen(false);};

  return(
    <div className={classes.root}>

      {/* Barra superior de la aplicación */}
      <AppBar
        position="absolute"
        className={clsx({
          [classes.appBar]: true,
          [classes.appBarShift]: open
        })}>

        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerOpen}
            className={clsx({
                [classes.menuButton]: true,
                [classes.menuButtonHidden]: open
              })
            }
          >
            <MenuIcon />
          </IconButton>
          <VoiceChatIcon color="info" className={classes.logo}/>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            CineManager
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Desplegable */}
      <Drawer
        variant="permanent"
        classes={{ paper: clsx({
            [classes.drawerPaper]: true,
            [classes.drawerPaperClose]: !open
          })
        }}
        open={open}>

        <div className={classes.toolbarIcon}>
          <Typography component="h5" variant="h6" color="primary">
            Menú
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />
        <List> {AdminList} </List>
        <Divider />
        <List> {ClientList} </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
      </main>
    </div>
  )
}
