import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDaFWNqXRKDVM62mzgrWLN5n0DLkemQamU",
  authDomain: "project-birra-eb422.firebaseapp.com",
  projectId: "project-birra-eb422",
  storageBucket: "project-birra-eb422.appspot.com",
  messagingSenderId: "51660511931",
  appId: "1:51660511931:web:a0a91e138a6f5e811a679e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth()
