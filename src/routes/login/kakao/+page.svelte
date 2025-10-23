<!-- src/routes/login/kakao/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { signInWithCustomToken, getAuth } from 'firebase/auth';
  import { handleAuthResult } from '$lib/auth/handleAuthResult';

  onMount(async () => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');

    if (!code) {
      console.error('카카오 로그인 실패: code 없음');
      goto('/login');
      return;
    }

    try {
      // 1. Firebase Functions API 호출
      const res = await fetch('/api/kakao-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      });

      const data = await res.json();

      if (!res.ok || !data.token) {
        throw new Error(data.message || '로그인 실패');
      }

      // 2. Firebase 커스텀 토큰으로 로그인
      const auth = getAuth();
      const result = await signInWithCustomToken(auth, data.token);

      // 3. Firestore에 사용자 정보 저장
      await handleAuthResult(result.user);

      // 4. 성공 시 이동
      goto('/user');
    } catch (e) {
      console.error('카카오 로그인 실패:', e);
      goto('/login');
    }
  });
</script>

<p class="text-center mt-20 text-lg text-gray-500">카카오 로그인 처리 중...</p>
