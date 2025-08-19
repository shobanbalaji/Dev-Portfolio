// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
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

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID
// };

const app = initializeApp(firebaseConfig);

// Enable Analytics only in browser environments
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

// Initialize Firestore
const db = getFirestore(app);

export { db };