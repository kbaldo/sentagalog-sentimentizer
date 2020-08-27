import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Paper, Snackbar } from "@material-ui/core";
import AssessmentIcon from "@material-ui/icons/Assessment"
import AxiosInterface from '../../helpers/AxiosInterface'; //Added Import for AxiosInterface
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert'


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contents: {
    padding: theme.spacing(2, 2, 2),
  },
}));

export default function GetSentiment(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [responseType, setResponseType] = React.useState("indeterminate");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [requestState, setRequestState] = React.useState(false);
  const [alertState, setAlertState] = React.useState(false);

  const handleClickOpen = () => {
	//Logic on Button Click (Sending Request). Loading icon???
	onSubmit();
  };

  const handleClose = () => {
    setOpen(false);
  };

	//API Interaction Code [S]

	const onSuccess = (responseData) => {
		//Logic for this component should the request be successful. Breadcrumbss????
		console.log("Response : ", responseData);
		setResponseType(responseData.sentiment);
    setOpen(true);
    setRequestState(true);
	}

	const onFailure = (errorData) => {
    setAlertState(true);
    setRequestState(false);
		console.log("Error : ", errorData);
	}

	const onRequest = () => {
    //Logic for this component while request is ongoing. Loading icon???
    setRequestState(undefined);
  }

	//Modify to suit Ian's server
	const payload = {
		title: 'text',
		text: props.text,
	}

	const callbacks = {
		success : onSuccess,
		failure : onFailure,
		request : onRequest
	}

	const onSubmit = () => {
		AxiosInterface.SendAsPost(payload, callbacks);
  }
  //API Interaction Code [E]

  const onCloseAlert = (event, reason) => {
    if (reason !== "clickaway") setAlertState(false);
  };

  return (
    <div>

    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={alertState}
        autoHideDuration={6000}
        onClose={onCloseAlert}
        message="There was a problem with the network. Try again later."
      >
        <Alert onClose={onCloseAlert} severity="error" variant="filled">
          There's a problem with the network. Try again later!
        </Alert>
        </Snackbar>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        startIcon={requestState === undefined ? <CircularProgress size={24} /> : <AssessmentIcon />}
        disabled={props.text === "" || requestState === undefined ? true : false}
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
          {"The text uses _" + responseType + "_ language!"}
        </DialogTitle>
        <DialogContent>
		  <Paper variant="outlined" square><div className={classes.contents}>{props.text}</div></Paper>
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
