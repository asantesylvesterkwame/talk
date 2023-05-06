// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnUnfydb2DazvzoyCvx-baDVD-8W3SZTU",
  authDomain: "talk-app-6ca56.firebaseapp.com",
  projectId: "talk-app-6ca56",
  storageBucket: "talk-app-6ca56.appspot.com",
  messagingSenderId: "274778409710",
  appId: "1:274778409710:web:0da73782f296970b6d01ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app) ;

export {Auth, Provider, db, storage}