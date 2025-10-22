// src/lib/auth/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2Vw7S00sXD6tlqeJ1Ph4UHbXC6Ojhq3c",
  authDomain: "neotube-rilts.firebaseapp.com",
  projectId: "neotube-rilts",
  storageBucket: "neotube-rilts.firebasestorage.app",
  messagingSenderId: "101233505105",
  appId: "1:101233505105:web:f0b2d4f698fa5589e01970"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
