// src/lib/auth/kakaoTokenExchange.js
export async function exchangeKakaoTokenToFirebaseToken(kakaoAccessToken) {
  const res = await fetch('/api/auth/kakao-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ kakaoAccessToken })
  });

  if (!res.ok) throw new Error('Firebase Custom Token 요청 실패');
  const { firebaseToken } = await res.json();
  return firebaseToken;
}