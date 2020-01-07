import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Match.css";
import MatchItem from "../Components/matchItem";

const MatchList = props => {
  const matchList = JSON.parse(localStorage.getItem("matchList")) || {};
  const keys = Object.keys(matchList);
  console.log("matchList", matchList);
  return (
    <div className="Match-container">
      <Typography>Match List</Typography>
      {keys.map(student => (
        <MatchItem
          name={matchList[student].name}
          image={matchList[student].image}
          whatsapp={matchList[student].whatsapp}
        />
      ))}
    </div>
  );
};

export default MatchList;
