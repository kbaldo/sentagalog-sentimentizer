import React, { Component, Fragment } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TweetField from "../components/Home/TweetField"
import Title from "../components/Home/Title"
import Fade from '@material-ui/core/Fade';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Fade in={true} timeout={500}>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item xs={12}>
              <Title />
            </Grid>
            <TweetField />
          </Grid>
        </Container>
        </Fade>
      </Fragment>
    );
  }
}
