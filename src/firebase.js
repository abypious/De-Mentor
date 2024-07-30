import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getaFirestore} from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB3sS_SNuFntCj7-l2db-vThl91-WvEz2g",
  authDomain: "de-menter.firebaseapp.com",
  projectId: "de-menter",
  storageBucket: "de-menter.appspot.com",
  messagingSenderId: "698153799521",
  appId: "1:698153799521:web:ffb7b693e36273edadbf20",
  measurementId: "G-XP9ZKL1089"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getaFirestore(app);