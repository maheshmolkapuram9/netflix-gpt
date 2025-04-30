// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKjv0kLiXz3xleBRJGzkkqiVT34fYGYpM",
  authDomain: "netflixgpt-60033.firebaseapp.com",
  projectId: "netflixgpt-60033",
  storageBucket: "netflixgpt-60033.firebasestorage.app",
  messagingSenderId: "601657721088",
  appId: "1:601657721088:web:78f26340916d67d09933e5",
  measurementId: "G-09JM9VWB5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
