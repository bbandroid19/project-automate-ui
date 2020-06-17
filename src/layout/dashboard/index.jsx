import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CloseIcon from '@material-ui/icons/Close';
import { mainListItems, secondaryListItems } from '../../components/menu';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Modal from '@material-ui/core/Modal';
import CreateProject from '../../components/create-modal';
import StickyHeadTable from '../../components/table';
import { useHistory } from "react-router-dom";
import CustomHeader from "../../components/header";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function Dashboard() {
  let history = useHistory();
  const[projectData,setProjectData]=React.useState(null);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [project,setProject]= React.useState(false);
  const [projectSelected,setProjectSelected]= React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const redirect =()=>{
    history.push('/someRoute')

  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const startProject =()=>{
    setProject(true);
    console.log(JSON.parse(localStorage.getItem('user')));
    setProjectData(JSON.parse(localStorage.getItem('user')));
  }
  return (
    <div className={classes.root}>
     <CustomHeader></CustomHeader>
     <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} className="search-container">
                <Grid item xs={3}>
                    <h2>Projects</h2>
                </Grid>
               <Grid item xs={9} >
                   <Grid container>
                   <Grid item xs={6} >
                   
                   <InputBase
        className={classes.input}
        placeholder="Filter Projects"
        inputProps={{ 'aria-label': 'filter projects' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
     
                   </Grid>
                   <Grid item xs={3} >
                   <TextField id="filter-projects" className="search-text">
                    </TextField> 
                   </Grid>
                   <Grid item xs={3} >
<CreateProject startProject={(event)=> startProject()}></CreateProject>
                   </Grid>
                   </Grid>
                 
               </Grid>   
            </Grid>
            <Grid conatiner>
              <Grid item>
              {project ? <StickyHeadTable onClick={(event)=> redirect()} projectData={projectData}></StickyHeadTable>:<div></div>}  
              </Grid>
            </Grid>
        </Container>
        <Box pt={4}>
            <Copyright />
        </Box>
      </main> 
    </div>
  );
}
