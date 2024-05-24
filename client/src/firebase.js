// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9dfa9.firebaseapp.com",
  projectId: "mern-blog-9dfa9",
  storageBucket: "mern-blog-9dfa9.appspot.com",
  messagingSenderId: "430132329314",
  appId: "1:430132329314:web:638c964a344cc0d8bb4a3b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
