// src/lib/auth/handleAuthResult.js
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { user } from '$lib/stores/user';

export async function handleAuthResult(firebaseUser) {
  const ref = doc(db, 'users', firebaseUser.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      email: firebaseUser.email,
      nickname: firebaseUser.displayName || '',
      provider: 'google',
      createdAt: new Date()
    });
  }

  const updated = await getDoc(ref);
  user.set({ ...firebaseUser, ...updated.data() });
}
