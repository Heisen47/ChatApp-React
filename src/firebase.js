// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCCN7fE8aYpYrBafsDNWrQwVLgmApNP_JQ",
  authDomain: "newchat-ac969.firebaseapp.com",
  projectId: "newchat-ac969",
  storageBucket: "newchat-ac969.appspot.com",
  messagingSenderId: "1086020374729",
  appId: "1:1086020374729:web:fbf6eedab325d41ac17d18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();