// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "login-cde09.firebaseapp.com",
  projectId: "login-cde09",
  storageBucket: "login-cde09.firebasestorage.app",
  messagingSenderId: "112468353459",
  appId: "1:112468353459:web:4d2aee28d9402e8ee0ebc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider =  new GoogleAuthProvider()

export {auth,provider}