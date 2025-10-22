<script>
  import AlertDialog from '$lib/components/AlertDialog.svelte';
  import { goto } from '$app/navigation';

  let user = null;
  let error = '';
  let alertOpen = false;

  // 예시 데이터, 실제로는 Firebase에서 받아오게 구현
  user = {
    id: 'uid_123',
    email: 'user@example.com',
    provider: 'google',
    createdAt: '2024-12-01T10:00:00Z',
    nickname: '승준이',
    bio: '프로그래밍을 좋아하는 학생',
    profileImageUrl: '',
    tags: ['Svelte', 'GIS'],
    notificationSettings: {
      comment: true,
      like: false,
      mention: true
    }
  };

  function goToEdit() {
    goto('/user/edit');
  }
</script>

{#if error}
  <AlertDialog isOpen={true} title="오류" message={error} on:close={() => (error = '')} />
{/if}

{#if user}
  <main class="max-w-lg mx-auto mt-10 px-4">
    <h1 class="text-2xl font-bold mb-4">내 정보</h1>

    <div class="space-y-2">
      <div><strong>회원 ID:</strong> {user.id}</div>
      <div><strong>이메일:</strong> {user.email}</div>
      <div><strong>가입 방식:</strong> {user.provider}</div>
      <div><strong>가입일:</strong> {new Date(user.createdAt).toLocaleDateString()}</div>

      <div><strong>닉네임:</strong> {user.nickname}</div>
      <div><strong>소개:</strong> {user.bio}</div>
      <div><strong>관심 태그:</strong> {user.tags.join(', ')}</div>
      <div><strong>알림 설정:</strong>
        댓글({user.notificationSettings.comment ? 'ON' : 'OFF'}), 좋아요({user.notificationSettings.like ? 'ON' : 'OFF'}), 멘션({user.notificationSettings.mention ? 'ON' : 'OFF'})
      </div>
    </div>

    <button class="btn btn-primary mt-6 w-full" on:click={goToEdit}>정보 수정</button>
  </main>
{/if}