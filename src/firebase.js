import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNkcQFRm13MqkOvUiPkx7Ab603VNpaakI",
  authDomain: "instagram-clone-react-4e5e1.firebaseapp.com",
  projectId: "instagram-clone-react-4e5e1",
  storageBucket: "instagram-clone-react-4e5e1.appspot.com",
  messagingSenderId: "1076189814561",
  appId: "1:1076189814561:web:b898b23656cdcc4daae860",
  measurementId: "G-RD1V0307GF",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
