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

import "./App.css";
import MatchList from "./Screens/MatchList";
import FindStudents from "./Screens/FindStudents";
import Profile from "./Screens/Profile";

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

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

function App() {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const { gitHubUser } = userData;
  const [tab, setTab] = React.useState(gitHubUser ? 1 : 2);
  const classes = useStyles();
  const { height } = useWindowDimensions();

  const ComponentsStack = [
    <MatchList />,
    <FindStudents />,
    <Profile onSave={() => setTab(1)} />
  ];

  return (
    <div className="App">
      <div className="App-body" style={{ minHeight: height }}>
        <Card className={classes.card}>
          <CardContent
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            {ComponentsStack[tab]}
          </CardContent>
          <CardActions style={{ display: "flex" }}>
            <BottomNavigation
              value={tab}
              onChange={(event, newTab) => {
                setTab(newTab);
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
      </div>
    </div>
  );
}

export default App;
