import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA7oVgqU8ZigMt4rAp1EolhVZRNfvJSDOY",
  authDomain: "project-beer-ecommerce.firebaseapp.com",
  projectId: "project-beer-ecommerce",
  storageBucket: "project-beer-ecommerce.appspot.com",
  messagingSenderId: "198773382290",
  appId: "1:198773382290:web:9c0022fc3ab48bd34c9a4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()