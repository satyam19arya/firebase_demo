// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fir-app-c60f3.firebaseapp.com",
  projectId: "fir-app-c60f3",
  storageBucket: "fir-app-c60f3.appspot.com",
  messagingSenderId: "369161409231",
  appId: "1:369161409231:web:b750a5b30450477aa25dba",
  databaseURL: "https://fir-app-c60f3-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);