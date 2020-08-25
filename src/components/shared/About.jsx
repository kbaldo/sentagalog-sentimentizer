import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Typography, ListItem, ListItemIcon, ListItemText, Box } from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';

export default function AboutDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color="inherit" onClick={handleClickOpen}>
        About
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="about"
      >
        <DialogTitle id="about">{"About the Project"}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            <b>Project Sentagalog</b> is an undergraduate thesis where the
            researches aim to develop machine models created in the areas of{" "}
            <i>Sentiment Analysis</i> and <i>Machine Learning</i> through
            different feature engineering methods and preprocessing experiments.
          </Typography>
          <br />
          <Typography variant="body1" gutterBottom>
            The research pursues to measure and benchmark the performance of
            approaches such as{" "}
            <i>E-I/OU Respelling, Stemming, and Translation</i> through the{" "}
            <i>bag-of-words benchmark</i>. It also aims to measure and benchmark
            the performance of the <i>Emoji Probability Vector</i> approach
            through the <i>emoji-embeddings</i> benchmark.
          </Typography>
          <br />
          <Typography variant="body1" gutterBottom>
            The researchers obtain their datasets to explore possible ways that
            can improve sentiment analysis for <i>Filipino-English tweets</i>{" "}
            through the <i>Twitter API</i> where they collect public tweets for
            the experiments.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
