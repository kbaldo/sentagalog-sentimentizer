import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      
        <Grid item xs={12} sm={9}>
        <TextField
          id="filled-multiline-flexible"
          label="Tweet Statement"
          placeholder="I feel extremely happy!"
          multiline
          rows={4}
          variant="outlined"
          onChange={handleChange}
          fullWidth
        />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button type="submit" fullWidth variant="contained" color="primary" startIcon={<AssessmentIcon />}>
            Get Sentiment
          </Button>
        </Grid>
      
      </React.Fragment>
  );
}
