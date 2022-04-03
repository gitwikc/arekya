import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW-50Oa38oRhEouGIu7LrZlJnsL1Ososs",
  authDomain: "arekya-ffadc.firebaseapp.com",
  projectId: "arekya-ffadc",
  storageBucket: "arekya-ffadc.appspot.com",
  messagingSenderId: "20091574470",
  appId: "1:20091574470:web:ef91788705e7aecb561fc7",
  measurementId: "G-9TFVE1SKT4",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
if (import.meta.env.DEV) {
  console.log("Running in DEV mode, using Firebase Emulator suite");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectAuthEmulator(auth, "http://localhost:9099");
}
