<!-- src/routes/login/+page.svelte -->
<script>
  /*
  let email = '';
  let password = '';

  function handleLogin() {
    // 로그인 처리 로직 (Firebase Auth 연동 예정)
    console.log('로그인 시도:', email, password);
  }
  */
  // 추후 Firebase 연동용 모듈 import 예정
  // import { auth } from '$lib/firebase';
  // import { signInWithPopup } from 'firebase/auth';

  // 각각의 소셜 로그인 provider들
  // GoogleAuthProvider, OAuthProvider, CustomProvider 등

  function loginWithGoogle() {
    // TODO: Firebase Google 로그인 연동
    console.log('Google 로그인 실행');
  }

  function loginWithApple() {
    // TODO: Firebase Apple 로그인 연동
    console.log('Apple 로그인 실행');
  }

  function loginWithNaver() {
    // TODO: Firebase Naver 로그인 연동
    console.log('Naver 로그인 실행');
  }

  function loginWithKakao() {
    // TODO: Firebase Kakao 로그인 연동
    console.log('Kakao 로그인 실행');
  }
</script>

<div class="flex items-center justify-center min-h-screen">
  <div class="w-full max-w-lg bg-base-100 p-8 rounded-box shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-center">로그인</h2>
    <!--
    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text">이메일</span>
      </label>
      <input
        type="email"
        bind:value={email}
        placeholder="이메일 입력"
        class="input input-bordered w-full"
      />
    </div>

    <div class="form-control mb-6">
      <label class="label">
        <span class="label-text">비밀번호</span>
      </label>
      <input
        type="password"
        bind:value={password}
        placeholder="비밀번호 입력"
        class="input input-bordered w-full"
      />
    </div>

    <button class="btn btn-primary w-full" on:click={handleLogin}>
      로그인
    </button>
  -->


  <div class="space-y-4">

    <button
      on:click={loginWithNaver}
      class="w-full flex items-center justify-center bg-[#03C75A] text-white rounded py-2 hover:brightness-90"
    >
      <img src="/icons/btn-naver.png" alt="Naver" class="w-5 h-5 mr-2" />
      Naver로 로그인
    </button>

    <button
      on:click={loginWithKakao}
      class="w-full flex items-center justify-center bg-[#FEE500] text-black rounded py-2 hover:brightness-95"
    >
      <img src="/icons/btn-kakao.png" alt="Kakao" class="w-5 h-5 mr-2" />
      Kakao로 로그인
    </button>
    <button
      on:click={loginWithGoogle}
      class="w-full flex items-center justify-center bg-white border border-gray-300 rounded py-2 hover:bg-gray-100"
    >
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5 mr-2" />
      Google로 로그인
    </button>

    <button
      on:click={loginWithApple}
      class="w-full flex items-center justify-center bg-black text-white rounded py-2 hover:opacity-90"
    >
      <img src="/icons/btn-apple.png" alt="Apple" class="w-5 h-5 mr-2" />
      Apple로 로그인
    </button>
  </div>

  <p class="mt-8 text-center text-sm text-gray-500">
    아직 계정이 없으신가요?
    <a href="/signup" class="text-blue-500 hover:underline">회원가입</a>
  </p>
  </div>
</div>
