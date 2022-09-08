// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg7ja4fux6Di0p2QON_bM62beoPo6P5P8",
  authDomain: "ema-john-simple-b5.firebaseapp.com",
  projectId: "ema-john-simple-b5",
  storageBucket: "ema-john-simple-b5.appspot.com",
  messagingSenderId: "264916120032",
  appId: "1:264916120032:web:8af854c6f3616652eabb85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;