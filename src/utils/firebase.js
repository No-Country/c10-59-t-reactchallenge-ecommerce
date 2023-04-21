import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCB6LkeM886Vkfqke1WRS8vxZGFu-nKHL0",
  authDomain: "proyecto-birra.firebaseapp.com",
  projectId: "proyecto-birra",
  storageBucket: "proyecto-birra.appspot.com",
  messagingSenderId: "820840006736",
  appId: "1:820840006736:web:7887b793922b1540e17d55"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth()
