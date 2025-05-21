import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZB8zCWyt_TP7JAR9UPLFseVKGI0Q8ha8",
  authDomain: "nwitter-reloaded-ebd0f.firebaseapp.com",
  projectId: "nwitter-reloaded-ebd0f",
  storageBucket: "nwitter-reloaded-ebd0f.firebasestorage.app",
  messagingSenderId: "470303544339",
  appId: "1:470303544339:web:09d965e490ae3bcf815be6",
  measurementId: "G-1VR5JYS4QN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);