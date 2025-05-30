// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5XmHBGYDWf2dD-ftnIfLUN2Bln9n2Cow",
  authDomain: "shoban-dev.firebaseapp.com",
  projectId: "shoban-dev",
  storageBucket: "shoban-dev.firebasestorage.app",
  messagingSenderId: "433678164578",
  appId: "1:433678164578:web:2169bde59b8da3b813673b",
  measurementId: "G-CZ00J48B9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);