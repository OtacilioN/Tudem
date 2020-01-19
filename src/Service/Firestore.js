import firebase from "firebase/app";
import "firebase/firestore";
import firebaseKeys from "./firebaseKeys.json";

firebase.initializeApp(firebaseKeys);

const db = firebase.firestore();

export const setUser = user => {
  db.collection("users")
    .doc(user.gitHubUser)
    .set(user, { merge: true });
};

export const getUsers = async () => {
  const querySnapshot = await db.collection("users").get();
  const users = {};
  querySnapshot.forEach(doc => {
    users[doc.id] = doc.data();
  });
  console.log(users);
  return users;
};

export const likeUser = (user, myId) => {
  const setObject = {};
  setObject[myId] = true;
  db.collection("likes")
    .doc(user.gitHubUser)
    .set(setObject, { merge: true });
};

// export const checkLikes = (myId) => {
//   const likes = db.collection("likes").doc(myId).get();
//   return likes;
// }

export const checkLikes = async myId => {
  const querySnapshot = await db.collection("likes").get();
  console.log("THE QUERY", querySnapshot);
  const likes =
    querySnapshot && querySnapshot.docs.filter(doc => doc.id === myId)[0];
  return likes.data();
};

export const setMatch = (matchUser, myId) => {
  const newStudentMine = {};
  const newStudentYours = {};
  newStudentMine[matchUser.gitHubUser] = true;
  newStudentYours[myId] = true;

  db.collection("matchs")
    .doc(myId)
    .set(newStudentMine, { merge: true });
  db.collection("matchs")
    .doc(matchUser.gitHubUser)
    .set(newStudentYours, { merge: true });
};

export const getMatch = async myId => {
  const querySnapshot = await db.collection("matchs").get();
  const userMatchs = querySnapshot.filter(doc => doc.id === myId);
  return userMatchs;
};
