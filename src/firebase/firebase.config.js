"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVqqXh0YzEdgy-RXPMZ87Z_FPSOzFHYHw",
  authDomain: "chiguir-os-game.firebaseapp.com",
  projectId: "chiguir-os-game",
  storageBucket: "chiguir-os-game.appspot.com",
  messagingSenderId: "508774980725",
  appId: "1:508774980725:web:d3de9962343db878c0ac3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
