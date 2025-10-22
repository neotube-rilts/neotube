<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import ConfirmDialog from '$lib/components/ConfirmDialog.svelte';
  import AlertDialog from '$lib/components/AlertDialog.svelte';

  export let data;
  
  let boardSlug = $page.params.slug;
  let postId = $page.params.postId;
  
  // 실제로는 data에서 받아오지만, 임시 데이터
  let post = {
    id: postId,
    title: '샘플 게시글 제목',
    author: '작성자',
    date: '2025-01-15',
    modifiedDate: '2025-01-20', // 수정일 추가
    views: 123,
    content: '게시글 내용이 여기에 표시됩니다.'
  };

  function goToList() {
    goto(`/board/${boardSlug}`);
  }

  function goToEdit() {
    goto(`/board/${boardSlug}/write?edit=${postId}`);
  }

  /*function handleDelete() {
    if (confirm('정말로 이 글을 삭제하시겠습니까?')) {
      // 실제 구현 시 API 호출
      alert('글이 삭제되었습니다.');
      goto(`/board/${boardSlug}`);
    }
  }*/
  let showDeleteConfirm = false;
  let showAlert = false;
  let alertConfig = { title: '', message: '', type: 'info' };

  function handleDelete() {
    showDeleteConfirm = true;
  }

  function confirmDelete() {
    // 실제 API 호출
    alertConfig = {
      title: '삭제 완료',
      message: '글이 삭제되었습니다.',
      type: 'success'
    };
    showAlert = true;
    
    setTimeout(() => {
      goto(`/board/${boardSlug}`);
    }, 1000);
  }
</script>

<main class="container mx-auto p-4 md:p-8">
  <div class="card w-full bg-base-100 shadow-xl">
    <!-- 게시글 헤더 -->
    <div class="card-body">
      <div class="border-b border-base-300 pb-4 mb-4">
        <h1 class="text-3xl font-bold text-base-content mb-4">{post.title}</h1>
        <div class="flex justify-between items-center text-sm text-base-content/70">
          <div class="flex gap-4">
            <span>작성자: <span class="font-semibold">{post.author}</span></span>
            <span>작성일: {post.date}</span>
            <span>작성일: {post.date}</span>
            {#if post.modifiedDate && post.modifiedDate !== post.date}
                <span class="text-warning">수정일: {post.modifiedDate}</span>
            {/if}
            <span>조회수: {post.views}</span>
          </div>
        </div>
      </div>

      <!-- 게시글 내용 -->
      <div class="prose max-w-none py-8">
        <div class="whitespace-pre-wrap text-base-content">
          {post.content}
        </div>
      </div>

      <!-- 버튼 그룹 -->
      <div class="flex justify-between items-center pt-6 border-t border-base-300">
        <button class="btn btn-outline" on:click={goToList}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          목록으로
        </button>
        
        <div class="flex gap-2">
          <button class="btn btn-primary" on:click={goToEdit}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            수정
          </button>
          <button class="btn btn-error" on:click={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            삭제
          </button>
        </div>
      </div>
    </div>
  </div>
</main>

<!-- Confirm Dialog -->
<ConfirmDialog
  bind:isOpen={showDeleteConfirm}
  title="글 삭제"
  message="정말로 이 글을 삭제하시겠습니까?"
  confirmText="삭제"
  cancelText="취소"
  onConfirm={confirmDelete}
/>

<!-- Alert Dialog -->
<AlertDialog
  bind:isOpen={showAlert}
  title={alertConfig.title}
  message={alertConfig.message}
  type={alertConfig.type}
/>