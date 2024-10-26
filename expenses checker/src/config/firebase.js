// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXkYdOhyXgBpCij08AJRxyEJPNg3XnqeM",
  authDomain: "fir-course-7895f.firebaseapp.com",
  projectId: "fir-course-7895f",
  storageBucket: "fir-course-7895f.appspot.com",
  messagingSenderId: "551656410728",
  appId: "1:551656410728:web:91e9bb178d9c407956f5dd",
  measurementId: "G-7KCYZVD6HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()