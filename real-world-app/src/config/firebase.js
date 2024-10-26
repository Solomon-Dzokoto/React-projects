// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZWhZXZkHrQr16ILeooEaEnK5nL8YzmYI",
  authDomain: "real-world-app-7d6e4.firebaseapp.com",
  projectId: "real-world-app-7d6e4",
  storageBucket: "real-world-app-7d6e4.appspot.com",
  messagingSenderId: "408972018588",
  appId: "1:408972018588:web:ed33d97c3a6fb4baddbe59",
  measurementId: "G-R09ESR7KTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const  googleProvider = new GoogleAuthProvider(app);
