// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCZfkO7xiafn3y88oJE1anLFJvL1DYWYY",
  authDomain: "react-entregafinal-baigorria.firebaseapp.com",
  projectId: "react-entregafinal-baigorria",
  storageBucket: "react-entregafinal-baigorria.appspot.com",
  messagingSenderId: "280788959007",
  appId: "1:280788959007:web:7ad60562866a867582fa2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
