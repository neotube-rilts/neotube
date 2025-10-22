<script>
  import ConfirmDialog from '$lib/components/ConfirmDialog.svelte';
  import AlertDialog from '$lib/components/AlertDialog.svelte';
  import { goto } from '$app/navigation';

  let user = {
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

  let confirmOpen = false;
  let alertOpen = false;
  let alertMessage = '';

  function handleSubmit() {
    confirmOpen = true;
  }

  function confirmYes() {
    confirmOpen = false;
    // TODO: Firebase 등에 저장하는 로직
    alertMessage = '수정이 완료되었습니다.';
    alertOpen = true;
  }

  function confirmNo() {
    confirmOpen = false;
  }

  function closeAlert() {
    alertOpen = false;
    goto('/user');
  }

  function addTag() {
    user.tags = [...user.tags, ''];
  }

  function removeTag(index) {
    user.tags = user.tags.filter((_, i) => i !== index);
  }
</script>

<main class="max-w-lg mx-auto mt-10 px-4">
  <h1 class="text-2xl font-bold mb-4">정보 수정</h1>

  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <!-- 수정 불가능 -->
    <div>
      <label class="label">회원 ID</label>
      <input class="input input-bordered w-full" value={user.id} readonly />
    </div>

    <div>
      <label class="label">이메일</label>
      <input class="input input-bordered w-full" value={user.email} readonly />
    </div>

    <!-- 수정 가능 -->
    <div>
      <label class="label">닉네임</label>
      <input class="input input-bordered w-full" bind:value={user.nickname} />
    </div>

    <div>
      <label class="label">소개</label>
      <textarea class="textarea textarea-bordered w-full" bind:value={user.bio}></textarea>
    </div>

    <div>
      <label class="label">관심 태그</label>
      {#each user.tags as tag, index}
        <div class="flex gap-2 mt-1">
          <input class="input input-bordered flex-1" bind:value={user.tags[index]} />
          <button type="button" class="btn btn-sm btn-error" on:click={() => removeTag(index)}>삭제</button>
        </div>
      {/each}
      <button type="button" class="btn btn-sm btn-outline mt-2" on:click={addTag}>태그 추가</button>
    </div>

    <div>
      <label class="label">알림 설정</label>
      <label><input type="checkbox" bind:checked={user.notificationSettings.comment} /> 댓글</label><br>
      <label><input type="checkbox" bind:checked={user.notificationSettings.like} /> 좋아요</label><br>
      <label><input type="checkbox" bind:checked={user.notificationSettings.mention} /> 멘션</label>
    </div>

    <button class="btn btn-primary w-full mt-4" type="submit">저장하기</button>
  </form>

  <!-- ConfirmDialog -->
  {#if confirmOpen}
    <ConfirmDialog
      isOpen={confirmOpen}
      message="수정된 내용을 저장하시겠습니까?"
      on:ok={confirmYes}
      on:cancel={confirmNo}
    />
  {/if}

  <!-- AlertDialog -->
  {#if alertOpen}
    <AlertDialog
      isOpen={alertOpen}
      title="완료"
      message={alertMessage}
      on:close={closeAlert}
    />
  {/if}
</main>