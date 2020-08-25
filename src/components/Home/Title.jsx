import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contents: {
    padding: theme.spacing(2, 0, 0),
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.contents}>
        <Typography variant="h3" gutterBottom color="primary">
          Sentagalog Sentimentizer
        </Typography>
        <Typography variant="body1">
          Sentagalog Sentimentizer is a complimentary sentiment analysis tool
          for our undergraduate thesis project. You may input a Filipino-English
          tweet or statement in the textbox and this app will try to analyze
          whether the text delivers a postive, negative, or neutral message.
        </Typography>
      </div>
    </React.Fragment>
  );
}
