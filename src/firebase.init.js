// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYkGSpX3MRp_G4nAz0QCJeejiJ-lIM2W0",
  authDomain: "fruits-assignment-11.firebaseapp.com",
  projectId: "fruits-assignment-11",
  storageBucket: "fruits-assignment-11.appspot.com",
  messagingSenderId: "346803296396",
  appId: "1:346803296396:web:45b56e0b00fa93f71203a9"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;