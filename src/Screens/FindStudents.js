import React, { useState, Fragment, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import "./FindStudents.css";
import { Fab } from "@material-ui/core";
import { Favorite, Cancel } from "@material-ui/icons";
import { getUsers, likeUser } from "../Service/Firestore";

const FindStudents = props => {
  const [index, setIndex] = useState(0);
  const [student, setStudent] = useState();
  const [keys, setKeys] = useState();
  const [StudentList, setStudentList] = useState();

  const getUsersKeys = async () => {
    const users = await getUsers();
    console.log("the users", users);
    return Object.keys(users);
  };

  const initStudentList = async () => {
    const userKeys = await getUsersKeys();
    setKeys(userKeys);
    setStudentList(await getUsers());
    console.log("i set", userKeys[0]);
    setStudent(userKeys[0]);
  };

  useEffect(() => {
    initStudentList();
  }, []);

  const nextStudent = () => {
    const newIndex = index + 1;
    setIndex(newIndex);
    setStudent(keys[newIndex]);
  };

  const handleMatch = () => {
    const matchList = JSON.parse(localStorage.getItem("matchList")) || {};
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    matchList[student] = {
      name: StudentList[student].name,
      whatsapp: StudentList[student].whatsapp,
      image: StudentList[student].image
    };
    localStorage.setItem("matchList", JSON.stringify(matchList));
    likeUser(StudentList[student], userData.gitHubUser);
    nextStudent();
  };

  return (
    <div className="Find-container">
      <Typography>Encontre Estudantes</Typography>
      {StudentList && StudentList[student] && (
        <Fragment>
          <div
            style={{
              margin: 8,
              borderRadius: 16,
              display: "flex",
              flex: 1,
              backgroundImage: `url(${StudentList[student].image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexDirection: "column",
              justifyContent: "flex-end"
            }}
          >
            <div className="Find-text-container">
              <Typography className="Find-text-style">
                {StudentList[student].name}: {StudentList[student].bio}
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
            <Fab onClick={nextStudent} color="secondary" aria-label="Cancel">
              <Cancel />
            </Fab>
            <Fab onClick={handleMatch} color="primary" aria-label="favorite">
              <Favorite />
            </Fab>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default FindStudents;
