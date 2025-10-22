// src/lib/auth/socialLogin.js
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export async function loginWith(providerId) {
  const auth = getAuth();

  if (providerId === 'google') {
    return loginWithGoogle();
  }

  if (providerId === 'kakao' || providerId === 'naver' || providerId === 'apple') {
    // TODO: 커스텀 토큰 기반 인증 구현 필요
    return null;
  }

  throw new Error('Unsupported provider: ' + providerId);
}

export async function loginWithGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
}
