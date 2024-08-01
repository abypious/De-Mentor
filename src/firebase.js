// import { getAnalytics } from "firebase/analytics";
// import {getaFirestore} from "@firebase/firestore"
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB3sS_SNuFntCj7-l2db-vThl91-WvEz2g",
  authDomain: "de-menter.firebaseapp.com",
  projectId: "de-menter",
  storageBucket: "de-menter.appspot.com",
  messagingSenderId: "698153799521",
  appId: "1:698153799521:web:ffb7b693e36273edadbf20",
  measurementId: "G-XP9ZKL1089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// export const analytics = getAnalytics(app);
// export const firestore = getaFirestore(app);

export{auth}