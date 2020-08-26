import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import GetSentiment from "./GetSentiment";

export default function TweetField() {
  const [value, setValue] = React.useState("");

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
          <GetSentiment text={value}/>
        </Grid>
      
      </React.Fragment>
  );
}
