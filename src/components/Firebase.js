import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBUlvPP9Zc9c0CZTpi6kIZdTUMqpjdiFLk",
  authDomain: "instagram-clone-react-25a38.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-25a38.firebaseio.com",
  projectId: "instagram-clone-react-25a38",
  storageBucket: "instagram-clone-react-25a38.appspot.com",
  messagingSenderId: "43117283928",
  appId: "1:43117283928:web:1d302e9462152378c0582d",
  measurementId: "G-C3FDQC3NJ9",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
