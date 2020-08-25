import React, { Component, Fragment } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TweetField from "../components/Home/TweetField";
import Title from "../components/Home/Title";
import { Typography } from "@material-ui/core";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography variant="h3" gutterBottom color="primary">
                About the Project
              </Typography>
              <Typography variant="body1" gutterBottom>
                <b>Project Sentagalog</b> is an undergraduate thesis where the
                researches aim to develop machine models created in the areas of{" "}
                <i>Sentiment Analysis</i> and <i>Machine Learning</i> through
                different feature engineering methods and preprocessing
                experiments.
              </Typography>
              <br />
              <Typography variant="body1" gutterBottom>
                The research pursues to measure and benchmark the performance of
                approaches such as{" "}
                <i>E-I/OU Respelling, Stemming, and Translation</i> through the{" "}
                <i>bag-of-words benchmark</i>. It also aims to measure and
                benchmark the performance of the <i>Emoji Probability Vector</i>{" "}
                approach through the <i>emoji-embeddings</i> benchmark.
              </Typography>
              <br />
              <Typography variant="body1" gutterBottom>
                The researchers obtain their datasets to explore possible ways
                that can improve sentiment analysis for{" "}
                <i>Filipino-English tweets</i> through the <i>Twitter API</i>{" "}
                where they collect public tweets for the experiments.
              </Typography>
              <br />
              <Typography variant="h4" gutterBottom color="textPrimary">
                Proponents
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}
