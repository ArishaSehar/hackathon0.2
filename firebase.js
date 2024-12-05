
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// import { getFirestore,collection, addDoc, doc, setDoc, getDoc,updateDoc, serverTimestamp, query, where,getDocs,onSnapshot,orderBy } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

  
//   const firebaseConfig = {
//     apiKey: "AIzaSyDvTgn9n5AB8LFx07V5V0Sg1VOqdbyRFl0",
//     authDomain: "hackathon2-34938.firebaseapp.com",
//     projectId: "hackathon2-34938",
//     storageBucket: "hackathon2-34938.firebasestorage.app",
//     messagingSenderId: "829476180989",
//     appId: "1:829476180989:web:6027b1b8a298e035317f94"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const db = getFirestore(app);

//   export {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, collection, addDoc, doc, setDoc, db, getDoc,updateDoc, serverTimestamp, query, where,getDocs,onSnapshot,orderBy}


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc, updateDoc, serverTimestamp, query, where, getDocs, onSnapshot, orderBy } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDvTgn9n5AB8LFx07V5V0Sg1VOqdbyRFl0",
  authDomain: "hackathon2-34938.firebaseapp.com",
  projectId: "hackathon2-34938",
  storageBucket: "hackathon2-34938.firebasestorage.app",
  messagingSenderId: "829476180989",
  appId: "1:829476180989:web:6027b1b8a298e035317f94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export Firestore and Auth functionality
export {
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification, 
  signOut, 
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider, 
  collection, 
  addDoc, 
  doc, 
  setDoc, 
  db, 
  getDoc, 
  updateDoc, 
  serverTimestamp, 
  query, 
  where, 
  getDocs, 
  onSnapshot, 
  orderBy
};
