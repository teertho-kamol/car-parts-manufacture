import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGEh_gzl0MuhBplj3v3c6th_JHS97e9WM",
  authDomain: "car-parts-fdd61.firebaseapp.com",
  projectId: "car-parts-fdd61",
  storageBucket: "car-parts-fdd61.appspot.com",
  messagingSenderId: "496003548123",
  appId: "1:496003548123:web:e723d1caff8ed7d4781dfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
