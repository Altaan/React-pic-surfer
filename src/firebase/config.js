import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDIyaSnuULtNNq9dFN9EClzzrhsjTublOY",
  authDomain: "picsurfer-76057.firebaseapp.com",
  databaseURL: "https://picsurfer-76057.firebaseio.com",
  projectId: "picsurfer-76057",
  storageBucket: "picsurfer-76057.appspot.com",
  messagingSenderId: "3568033641",
  appId: "1:3568033641:web:5219fded10bdaeb7bd67f8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize storage and firestore service
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
// Firebase server timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
