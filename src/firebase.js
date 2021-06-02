import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDu4yOdG74jMxTmSNbRYxitDtQhBbjvUHM",
  authDomain: "todo-app-bc914.firebaseapp.com",
  projectId: "todo-app-bc914",
  storageBucket: "todo-app-bc914.appspot.com",
  messagingSenderId: "906535538641",
  appId: "1:906535538641:web:78d5a869fe35fbf2bddaf0",
  measurementId: "G-YT1DY2ZY5Q",
});

const db = firebaseApp.firestore();

export default db;
