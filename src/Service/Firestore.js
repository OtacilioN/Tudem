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
