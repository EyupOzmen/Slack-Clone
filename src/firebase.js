import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDki8CkESdXnaZAHOFEj07Rqnc1OKyfLKY",
  authDomain: "slack-clone-f9045.firebaseapp.com",
  projectId: "slack-clone-f9045",
  storageBucket: "slack-clone-f9045.appspot.com",
  messagingSenderId: "552105086641",
  appId: "1:552105086641:web:5410e0f05041c1bf935c90",
  measurementId: "G-YJ30XCJ4M0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
