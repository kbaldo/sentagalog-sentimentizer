import React, { Component, Fragment } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Box } from "@material-ui/core";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <Box m={2}>
                <Typography variant="h3" gutterBottom>
                  Sentagalog Sentimentizer
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}
