//import * as firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHWjzCvjYMdMWZ8Z05BAn2o11eJfPosDg",
  authDomain: "dujinkim-5bd86.firebaseapp.com",
  projectId: "dujinkim-5bd86",
  storageBucket: "dujinkim-5bd86.appspot.com",
  messagingSenderId: "267853667789",
  appId: "1:267853667789:web:d511c79c1031688bf6b884",
  measurementId: "G-K7FT0X2XYY"
};

//firebase.initializeApp(firebaseConfig)

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export {app, storage, db};