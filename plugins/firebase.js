// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZjpMQyN5vH0dss2sTDn9TE3N1mR5sycI",
  authDomain: "coffee-trace.firebaseapp.com",
  projectId: "coffee-trace",
  storageBucket: "coffee-trace.appspot.com",
  messagingSenderId: "351664091079",
  appId: "1:351664091079:web:1bed34072d905bd9c733e2",
  measurementId: "G-6ZTT740D72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
