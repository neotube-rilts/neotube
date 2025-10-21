<!-- src/routes/login/+page.svelte -->
<script>
  let email = '';
  let password = '';

  function handleLogin() {
    // 로그인 처리 로직 (Firebase Auth 연동 예정)
    console.log('로그인 시도:', email, password);
  }
</script>

<div class="flex items-center justify-center min-h-screen">
  <div class="w-full max-w-lg bg-base-100 p-8 rounded-box shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-center">로그인</h2>

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
  </div>
</div>
