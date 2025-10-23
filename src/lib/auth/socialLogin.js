// src/lib/auth/socialLogin.js
//import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signInWithCustomToken } from 'firebase/auth';
import { exchangeKakaoTokenToFirebaseToken } from './kakaoTokenExchange';

export async function loginWith(providerId) {
  //const auth = getAuth();

  if (providerId === 'google') {
    return loginWithGoogle();
  }

  if (providerId === 'kakao') {
    debugger;
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init("5d21d2cc7940b0695d4e536621cce1d9"); // .env에 등록 필요
    }

    const result = await kakao.Auth.login({ scope: 'profile_nickname, profile_image' });
    console.log('kakao login******************************', result);
    const kakaoAccessToken = result.access_token;

    const firebaseToken = await exchangeKakaoTokenToFirebaseToken(kakaoAccessToken);
    const userCredential = await signInWithCustomToken(auth, firebaseToken);
    return userCredential.user;
  }

  if (providerId === 'naver' || providerId === 'apple') {
    // TODO: 커스텀 토큰 기반 인증 구현 필요
    return null;
  }

  throw new Error('Unsupported provider: ' + providerId);
}

export async function loginWithGoogle() {
  //const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
}
