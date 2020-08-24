import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contents: {
    padding: theme.spacing(4, 0, 0),
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
