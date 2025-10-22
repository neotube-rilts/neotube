<script>
  //{"id":"1","boardSlug":"general","title":"첫 번째 게시글입니다","content":"게시글의 상세 내용입니다.\n여러 줄로 작성할 수 있습니다.","author":"홍길동","createdAt":"2025-01-15","modifiedAt":"2025-01-20","views":123,"status":"published"}
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import ConfirmDialog from '$lib/components/ConfirmDialog.svelte';
  import AlertDialog from '$lib/components/AlertDialog.svelte';

  let boardSlug = $page.params.slug;
  let editMode = false;
  let postId = null;

  let title = '';
  let content = '';
  let author = '익명';
  let createdDate = ''; // 작성일 추가
  let modifiedDate = ''; // 수정일 추가
  // 다이얼로그 상태
  let showCancelConfirm = false;
  let showAlert = false;
  let alertConfig = {
    title: '',
    message: '',
    type: 'info'
  };

  // 수정 모드인지 확인
  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    postId = urlParams.get('edit');
    
    if (postId) {
      editMode = true;
      loadPostData(postId);
    }
  });

  function loadPostData(id) {
    // 실제 구현 시 API 호출
    // 예시 데이터:
    title = '기존 게시글 제목';
    content = '기존 게시글 내용';
    author = '작성자';
    createdDate = '2025-01-15'; // 원본 작성일
    modifiedDate = '2025-01-20'; // 마지막 수정일 (있는 경우)
  }

  function handleSubmit() {
    if (!title.trim() || !content.trim()) {
      alertConfig = {
        title: '입력 오류',
        message: '제목과 내용을 모두 입력해주세요.',
        type: 'warning'
      };
      showAlert = true;
      return;
    }

    if (editMode) {
      // 수정 모드
      const updatedPost = {
        postId,
        title,
        content,
        author,
        modifiedDate: new Date().toISOString().slice(0, 10) // 수정일 업데이트
      };
      console.log('게시글 수정:', updatedPost);
      alertConfig = {
        title: '수정 완료',
        message: '게시글이 성공적으로 수정되었습니다!',
        type: 'success'
      };
      showAlert = true;
      
      // Alert 닫힌 후 이동
      setTimeout(() => {
        goto(`/board/${boardSlug}/${postId}`);
      }, 1500);
    } else {
      // 신규 작성
      const newPost = {
        boardSlug: boardSlug,
        title: title,
        content: content,
        author: author,
        date: new Date().toISOString().slice(0, 10),
        views: 0
      };

      console.log('새 게시글:', newPost);
      alertConfig = {
        title: '작성 완료',
        message: `${boardSlug} 게시판에 글이 작성되었습니다!\n제목: ${title}`,
        type: 'success'
      };
      showAlert = true;
      
      setTimeout(() => {
        goto(`/board/${boardSlug}`);
      }, 1500);
    }
  }

  /*function handleCancel() {
    const message = editMode ? '수정을 취소하시겠습니까?' : '작성을 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.';
    
    if (confirm(message)) {
      if (editMode) {
        goto(`/board/${boardSlug}/${postId}`);
      } else {
        goto(`/board/${boardSlug}`);
      }
    }
  }*/
  function handleCancel() {
    showCancelConfirm = true;
  }

  function confirmCancel() {
    if (editMode) {
      goto(`/board/${boardSlug}/${postId}`);
    } else {
      goto(`/board/${boardSlug}`);
    }
  }
</script>

<main class="container mx-auto p-4 md:p-8">
  <div class="card w-full bg-base-100 shadow-xl p-6 md:p-10">
    <h2 class="text-3xl font-bold text-base-content mb-8 text-center">
      {editMode ? '게시글 수정' : `${boardSlug} 게시판에 글쓰기`}
    </h2>

    <!-- 수정 모드일 때 날짜 정보 표시 -->
    {#if editMode}
      <div class="alert alert-info mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div class="flex flex-col gap-1">
          <span class="font-semibold">작성일: {createdDate}</span>
          {#if modifiedDate}
            <span class="text-sm">마지막 수정일: {modifiedDate}</span>
          {/if}
        </div>
      </div>
    {/if}

    <form on:submit|preventDefault={handleSubmit} class="space-y-6">
      <div class="form-control w-full">
        <label class="label" for="post-title">
          <span class="label-text text-base-content">제목</span>
        </label>
        <input
          id="post-title"
          type="text"
          placeholder="제목을 입력해주세요"
          class="input input-bordered w-full text-base-content"
          bind:value={title}
          required
        />
      </div>

      <div class="form-control w-full">
        <label class="label" for="post-author">
          <span class="label-text text-base-content">작성자</span>
        </label>
        <input
          id="post-author"
          type="text"
          placeholder="작성자 (선택 사항)"
          class="input input-bordered w-full text-base-content"
          bind:value={author}
        />
      </div>

      <div class="form-control w-full">
        <label class="label" for="post-content">
          <span class="label-text text-base-content">내용</span>
        </label>
        <textarea
          id="post-content"
          class="textarea textarea-bordered h-48 w-full text-base-content"
          placeholder="내용을 입력해주세요"
          bind:value={content}
          required
        ></textarea>
      </div>

      <div class="flex justify-end gap-4 mt-8">
        <button type="button" class="btn btn-ghost" on:click={handleCancel}>취소</button>
        <button type="submit" class="btn btn-primary">
          {editMode ? '수정 완료' : '작성 완료'}
        </button>
      </div>
    </form>
  </div>
</main>

<!-- Confirm Dialog -->
<ConfirmDialog
  bind:isOpen={showCancelConfirm}
  title={editMode ? '수정 취소' : '작성 취소'}
  message={editMode ? '수정을 취소하시겠습니까?' : '작성을 취소하시겠습니까?\n작성 중인 내용은 저장되지 않습니다.'}
  confirmText="예"
  cancelText="아니오"
  onConfirm={confirmCancel}
/>

<!-- Alert Dialog -->
<AlertDialog
  bind:isOpen={showAlert}
  title={alertConfig.title}
  message={alertConfig.message}
  type={alertConfig.type}
/>

<style>
  /* 필요한 경우 추가 스타일 */
</style>