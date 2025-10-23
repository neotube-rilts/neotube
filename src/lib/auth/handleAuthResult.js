// src/lib/auth/handleAuthResult.js
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { user } from '$lib/stores/user';
import { createDefaultUser } from '$lib/models/userModel.js';

export async function handleAuthResult(firebaseUser) {
  const ref = doc(db, 'users', firebaseUser.uid);
  const snap = await getDoc(ref);
  const now = new Date().toISOString();
//alert('test');
  if (!snap.exists()) {
    // 최초 로그인 사용자일 경우
    const userData = createDefaultUser(firebaseUser);
    await setDoc(ref, userData);
    alert('최초 로그인 사용자일 경우', ref, basicUserData);
  } else {
    // 기존 사용자 로그인: 마지막 로그인 시간만 업데이트
    await updateDoc(ref, {
      lastLoginAt: now
    });
  }

  const updatedSnap = await getDoc(ref);
  const fullUserData = updatedSnap.data();
  user.set({ ...firebaseUser, ...fullUserData });
}
