import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";
import { Box } from "@material-ui/core";
import NavigationDrawer from "./NavigationDrawer";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*<AppBar position="static"> */}
      <Toolbar>
        <Box display={{ xs: "block", md: "none" }}><NavigationDrawer /></Box>
        <div className={classes.toolbarButtons}>
          <Box display={{ xs: "none", md: "block" }}>
            <Button color="inherit" component={Link} to={"/about"}>About the Project</Button>
            <Button color="inherit">Download Paper</Button>
          </Box>
        </div>
      </Toolbar>
      {/*</AppBar>*/}
    </div>
  );
}
