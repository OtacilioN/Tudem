import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Match.css";
import MatchItem from "../Components/MatchItem";
import InfoLine from "../Components/InfoLine";

const MatchList = props => {
  const matchList = JSON.parse(localStorage.getItem("matchList")) || {};
  const keys = Object.keys(matchList);
  console.log("matchList", matchList);
  return (
    <div className="Match-container">
      <Typography>Match List</Typography>
      {keys.map(student => (
        <MatchItem image={matchList[student].image}>
          <InfoLine icon="assignment_ind" text={matchList[student].name} />
          <InfoLine icon="chat" text={matchList[student].whatsapp} />
        </MatchItem>
      ))}
    </div>
  );
};

export default MatchList;
