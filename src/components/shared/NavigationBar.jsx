import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*<AppBar position="static"> */}
      <Toolbar>
        <div className={classes.sectionDesktop}>
          <Grid
            direction="row"
            justify="flex-end" // Add it here :)
            container
            alignItems="center"
          >
            {/* <Grid item>
               <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton> 
            </Grid>*/}
            <Grid item>
              <Button color="inherit">About the project</Button>
              <Button color="inherit">Proponents</Button>
              <Button color="inherit">Download Paper</Button>
            </Grid>
          </Grid>
        </div>
      </Toolbar>
      {/*</AppBar>*/}
    </div>
  );
}
