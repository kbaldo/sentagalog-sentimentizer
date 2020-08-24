import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="tweet"
          label="Tweet"
          multiline
          rows={4}
          defaultValue="Paste tweet text here"
          variant="outlined"
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Analyze
          </Button>
    </form>
  );
}