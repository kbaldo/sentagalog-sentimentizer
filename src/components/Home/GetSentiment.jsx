import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import AssessmentIcon from "@material-ui/icons/Assessment"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contents: {
    padding: theme.spacing(2, 2, 2),
  },
}));

export default function GetSentiment() {
  const classes = useStyles();
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
    <div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        startIcon={<AssessmentIcon />}
      >
        Get Sentiment
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"The text uses positive language!"}
        </DialogTitle>
        <DialogContent>
          <Paper variant="outlined" square><div className={classes.contents}>seeing mina laughing her arse off is so wholesome.. happy mina is the best mina</div></Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
