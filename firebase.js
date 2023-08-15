// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo6jVS9VR5wiAC_GOeobFXCurgwEBhm6s",
  authDomain: "react-notes-5af24.firebaseapp.com",
  projectId: "react-notes-5af24",
  storageBucket: "react-notes-5af24.appspot.com",
  messagingSenderId: "907546163613",
  appId: "1:907546163613:web:a41ca2f02e619164fe9774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);
const notesCollection = collection(db, "notes");