// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzrGB4JhwgMlwkrUcmJ2kPwVW5N1Fq6z4",
  authDomain: "shade-portfolio.firebaseapp.com",
  projectId: "shade-portfolio",
  storageBucket: "shade-portfolio.appspot.com",
  messagingSenderId: "141806069897",
  appId: "1:141806069897:web:3d28c783fcaf9a4cad3e58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage()

export default storage
