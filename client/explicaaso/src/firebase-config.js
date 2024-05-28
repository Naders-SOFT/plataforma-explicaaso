// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZkZhjA5-41VDxBPv555CzD9fMSg5LlO0",
  authDomain: "explicaaso-16cff.firebaseapp.com",
  projectId: "explicaaso-16cff",
  storageBucket: "explicaaso-16cff.appspot.com",
  messagingSenderId: "159884470725",
  appId: "1:159884470725:web:94a4bf2f9b3bc5541303ac",
  measurementId: "G-TWXTTS17LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);