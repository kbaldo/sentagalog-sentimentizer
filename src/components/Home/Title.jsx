import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AboutDescription from "./aboutDescription.json";

const useStyles = makeStyles((theme) => ({
  contents: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 8),
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.contents}>
        <Typography variant="h3" gutterBottom>
          Sentagalog Sentimentizer
        </Typography>
      </div>
    </React.Fragment>
  );
}
