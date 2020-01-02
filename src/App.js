import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SchoolIcon from "@material-ui/icons/School";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FaceIcon from "@material-ui/icons/Face";
import Typography from "@material-ui/core/Typography";
import "./App.css";

const useStyles = makeStyles({
  card: {
    flex: 1,
    marginTop: "1%",
    display: "flex",
    marginBottom: "1%",
    flexDirection: "column",
    width: "100%",
    maxWidth: 600
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState(1);
  return (
    <div className="App">
      <body className="App-body">
        <Card className={classes.card}>
          <CardContent
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              aaa
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions style={{ display: "flex" }}>
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
              style={{ flex: 1 }}
            >
              <BottomNavigationAction label="Matches" icon={<FavoriteIcon />} />
              <BottomNavigationAction
                label="Estudantes"
                icon={<SchoolIcon />}
              />
              <BottomNavigationAction label="Perfil" icon={<FaceIcon />} />
            </BottomNavigation>
          </CardActions>
        </Card>
      </body>
    </div>
  );
}

export default App;
