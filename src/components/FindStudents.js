import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import mock from "../mock.json";
import "./FindStudents.css";
import { Fab } from "@material-ui/core";
import { Favorite, Cancel } from "@material-ui/icons";

const FindStudents = props => {
  // const user = mock.MichaelBarney;
  const keys = Object.keys(mock);
  // console.log("here", Object.keys(mock));
  const [index, setIndex] = useState(0);
  const [student, setStudent] = useState(keys[0]);

  const handleClick = () => {
    const newIndex = index + 1;
    setIndex(newIndex);
    setStudent(keys[newIndex]);
  };

  return (
    <div className="Find-container">
      <Typography>Encontre Estudantes</Typography>
      <div
        style={{
          margin: 8,
          borderRadius: 16,
          display: "flex",
          flex: 1,
          backgroundImage: `url(${mock[student].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        <div class="Find-text-container">
          <Typography class="Find-text-style">
            {mock[student].name}: {mock[student].bio}
          </Typography>
        </div>
      </div>
      <div
        style={{
          zIndex: 1,
          marginTop: -42,
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "5%",
          marginRight: "5%"
        }}
      >
        <Fab onClick={handleClick} color="secondary" aria-label="Cancel">
          <Cancel />
        </Fab>
        <Fab onClick={handleClick} color="primary" aria-label="favorite">
          <Favorite />
        </Fab>
      </div>
    </div>
  );
};

export default FindStudents;
