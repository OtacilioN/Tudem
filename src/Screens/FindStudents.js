import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import StudentCard from "../Components/StudentCard";
import "./FindStudents.css";
import StudentBrief from "../Components/StudentBrief";
import ItsAMatch from "../Components/ItsAMatch";
import UserMissing from "../Components/UserMissing";

import { getUsers, likeUser, checkLikes, setMatch } from "../Service/Firestore";

const FindStudents = props => {
  const [index, setIndex] = useState(0);
  const [student, setStudent] = useState();
  const [keys, setKeys] = useState();
  const [StudentList, setStudentList] = useState();
  const [isMatchHappening, setIsMatchHappening] = useState(false);

  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const { gitHubUser } = userData;

  const getUsersKeys = async () => {
    const users = await getUsers();
    return Object.keys(users);
  };

  const initStudentList = async () => {
    const userKeys = await getUsersKeys();
    const StudentsExceptMe = userKeys.filter(student => student !== gitHubUser);
    console.log(userKeys, StudentsExceptMe);
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   console.log(
    //     "Localização do usuário",
    //     position.coords.latitude,
    //     position.coords.longitude
    //   );
    // });
    setKeys(StudentsExceptMe);
    setStudentList(await getUsers());
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

  const handleMatch = (student, myId) => {
    setIsMatchHappening(true);
    const matchList = JSON.parse(localStorage.getItem("matchList")) || {};
    matchList[student] = {
      name: StudentList[student].name,
      whatsapp: StudentList[student].whatsapp,
      image: StudentList[student].image
    };
    localStorage.setItem("matchList", JSON.stringify(matchList));
    setMatch(StudentList[student], myId);
    if (navigator.vibrate) {
      navigator.vibrate([200, 200, 400, 400, 800, 800, 200, 200]);
    }
    setTimeout(() => {
      setIsMatchHappening(false);
      nextStudent();
    }, 3000);
  };

  const handleLike = async () => {
    likeUser(StudentList[student], gitHubUser);
    const myLikes = await checkLikes(gitHubUser);
    const isStudenInMylikesList =
      myLikes && myLikes[StudentList[student].gitHubUser];
    if (isStudenInMylikesList) {
      handleMatch(student, gitHubUser);
    } else {
      nextStudent();
    }
  };

  return (
    <div className="Find-container">
      <Typography>Encontre Estudantes</Typography>
      {gitHubUser ? (
        StudentList &&
        StudentList[student] && (
          <StudentCard
            image={StudentList[student].image}
            handleReject={nextStudent}
            handleLike={handleLike}
          >
            {isMatchHappening ? (
              <ItsAMatch />
            ) : (
              <StudentBrief
                name={StudentList[student].name}
                bio={StudentList[student].bio}
              />
            )}
          </StudentCard>
        )
      ) : (
        <UserMissing />
      )}
    </div>
  );
};

export default FindStudents;
