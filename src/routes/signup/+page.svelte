<script>
  let email = '';
  let password = '';
  let confirmPassword = '';

  function handleSignup() {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    // 회원가입 처리 로직 (Firebase Auth 연동 예정)
    console.log('회원가입 시도:', email, password);
  }
</script>

<!-- 화면 중앙 정렬 -->
<div class="flex items-center justify-center min-h-screen">
  <div class="w-full max-w-lg bg-base-100 p-8 rounded-box shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-center">회원가입</h2>

    <!-- 이메일 입력 -->
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
    -->

    <!-- 비밀번호 입력 -->
     <!--
    <div class="form-control mb-4">
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
    -->

    <!-- 비밀번호 확인 -->
    <!--
    <div class="form-control mb-6">
      <label class="label">
        <span class="label-text">비밀번호 확인</span>
      </label>
      <input
        type="password"
        bind:value={confirmPassword}
        placeholder="비밀번호 확인"
        class="input input-bordered w-full"
      />
    </div>
    -->

    <!-- 회원가입 버튼 -->
    <!--
    <button class="btn btn-primary w-full mb-4" on:click={handleSignup}>
      회원가입
    </button>
    -->

    <!-- 소셜 회원가입 구분선 -->
    <!--
    <div class="divider">또는</div>
    -->

    <!-- 소셜 회원가입 버튼 영역 -->
    <div class="flex flex-col gap-3">

    <!-- 네이버 -->
    <button class="btn btn-outline w-full flex items-center gap-2 text-black hover:bg-[#02b152]">
        <img src="/icons/btn-naver.png" alt="Naver" class="w-5 h-5" />
        네이버로 가입하기
    </button>

    <!-- 카카오 -->
    <button class="btn btn-outline w-full flex items-center gap-2 text-black hover:bg-[#fada0a]">
        <img src="/icons/btn-kakao.png" alt="Kakao" class="w-5 h-5" />
        카카오로 가입하기
    </button>

    <!-- 구글 -->
    <button class="btn btn-outline w-full flex items-center gap-2">
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5" />
        구글로 가입하기
    </button>

    <!-- Apple -->
    <button class="btn btn-outline w-full flex items-center gap-2 text-black hover:bg-gray-800">
        <img src="/icons/btn-apple.png" alt="Apple" class="w-5 h-5" />
        애플로 가입하기
    </button>
    </div>
  </div>
</div>