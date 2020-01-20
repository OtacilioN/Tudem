import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import "./Match.css";
import MatchItem from "../Components/MatchItem";
import InfoLine from "../Components/InfoLine";
import { getMatch, getUsers } from "../Service/Firestore";

const MatchList = props => {
  let matchList = JSON.parse(localStorage.getItem("matchList")) || {};
  const [keys, setKeys] = useState(Object.keys(matchList));
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const { gitHubUser } = userData;

  const initMatchSyncRemote = async () => {
    const remoteList = await getMatch(gitHubUser);
    const remoteKeys = Object.keys(remoteList);
    if (keys.length < remoteKeys.length) {
      const users = await getUsers();
      const remoteMatchUsers = {};
      remoteKeys.forEach(
        studentKey => (remoteMatchUsers[studentKey] = users[studentKey])
      );
      localStorage.setItem("matchList", JSON.stringify(remoteMatchUsers));
    }
    matchList = JSON.parse(localStorage.getItem("matchList")) || {};
    setKeys(remoteKeys);
  };

  useEffect(() => {
    if (gitHubUser) {
      initMatchSyncRemote();
    }
  }, []);

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
