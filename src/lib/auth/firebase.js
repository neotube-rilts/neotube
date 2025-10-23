// src/lib/auth/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZDrtTfdXckPK-8FL1s0ZF9KrVZcakknY",
  authDomain: "neotube-board.firebaseapp.com",
  projectId: "neotube-board",
  storageBucket: "neotube-board.firebasestorage.app",
  messagingSenderId: "9297352617",
  appId: "1:9297352617:web:3fc31e9f4701304b05d6b8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
