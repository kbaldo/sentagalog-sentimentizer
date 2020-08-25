import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  contents: {
    backgroundColor: "fbfbfb",
    padding: theme.spacing(2, 0, 0),
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%", // 1:1 photo
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function createData(name, position, school, image, github, gitlab) {
  return { name, position, school, image, github, gitlab };
}

const proponents = [
  createData(
    "Kevin Kyle Hendrick Baldo",
    "BS Computer Science",
    "Ateneo De Naga University",
    "#",
    "#",
    "#"
  ),
  createData(
    "Ian Raymund Manaog",
    "BS Computer Science",
    "Ateneo De Naga University",
    "#",
    "#",
    "#"
  ),
  createData(
    "Levi John Sta. Ana",
    "BS Computer Science",
    "Ateneo De Naga University",
    "#",
    "#",
    "#"
  ),
  createData(
    "John Sixto Santos",
    "Project Adviser",
    "Ateneo De Naga University",
    "#",
    "#",
    "#"
  ),
];

export default function Proponents() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.contents}>
        <Container>
          <Grid container spacing={2} justify="left">
            {proponents.map((proponent) => (
              <Grid item xs={6} sm={4} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {proponent.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                      <b>{proponent.position}</b> <br /> {proponent.school}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}
