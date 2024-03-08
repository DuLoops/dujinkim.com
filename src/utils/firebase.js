import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "duloops.firebaseapp.com",
  projectId: "duloops",
  storageBucket: "duloops.appspot.com",
  messagingSenderId: "14854024796",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-S0Q5NLEX5B"
};;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}