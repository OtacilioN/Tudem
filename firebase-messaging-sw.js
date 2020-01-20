// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyDirMjRQSt0dkNCSCuMq4UTkaQv9M6-y80",
  authDomain: "tudem-acc4a.firebaseapp.com",
  projectId: "tudem-acc4a",
  messagingSenderId: "153126974837",
  appId: "1:153126974837:web:8cbf120c29ccbbabb04f3c"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
