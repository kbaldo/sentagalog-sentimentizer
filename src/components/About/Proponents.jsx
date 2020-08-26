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
    "https://lh3.googleusercontent.com/YQxCISrmOhRU6YT4hs7RJnSJY67hdzPnjCedAXrKaVrHp7SIS5E5TWnHRBKlfzQvb0XrXLwiJpy5c3CIMcO1GJ76F1UtGyPn6QcAOIoBDqiulYtWgpwicEp0XscDeD2xcrM7TTJf7N1m_A3wklO8Dx0sgSNg-AZQgRp6OoZvKcNVBC9u5ZW4F3NBGdFcY_HTJAOAEujRGWYo128kql9QayCz6fwV42cPHZzyqSscwdA7vI3w2V4R8waSvmAryMOBVBLYxqIAXxHJ8QZcqCnBTJnSqcawYF2VG2K3T0DPkkZJxI_e7CbPnY22OwVTEJLDk1x7XCvt7XudHEku4Ew3e55O6XVaokqcMMMgpmUJ04NSr4hWpVq3lBCkWRZ8ys0S2IwUZnGQiZyTzhq-b8pxObkjBqSj0qbU3o-JctgUS06gfbmCCYVGwHSPc0nLNPr36Snw3kyRkj8MHdlY3OMPanXJAU28xXF-FSP8Jf1TOOK6USE4-w16C2SBCt-jTgyb1sP6h2OTwqM6tVBbmAVhwTIgKz5ckKI_GLROUeUfvDhB9kE-a_njjkQZ6oGdcIC-394UUfHSPlFj5mvg0SenP24qL9PVe07MHjlLSFnRAoMFQ7F1j7zjfbEM3VGq2ck8SZK5kOkgdQU2O_Zk6ZilzXJ3qcvmTkuslf_TcUiqGjUSlwoQ0xFoESzGJfZ5Yg=s266-no?authuser=0",
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
                    image={proponent.image}
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
