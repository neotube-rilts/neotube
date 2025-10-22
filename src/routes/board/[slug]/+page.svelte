<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data;
	$: board = data.board;
	$: posts = data.posts;
	$: config = data.config;

	// URL에서 현재 페이지 가져오기
	$: currentPage = parseInt($page.url.searchParams.get('page') || '1');
	
	// 페이지 정보 콘솔 출력
	$: {
		console.log('=== 페이지 정보 ===');
		console.log('현재 페이지:', currentPage);
		console.log('게시판:', board?.slug);
		console.log('URL 파라미터:', $page.url.searchParams.toString());
		console.log('전체 게시글 수:', posts?.length);
	}

	// 실제 구현시 서버에서 받아야 할 값들
	const postsPerPage = 10; // 페이지당 게시글 수
	$: totalPosts = posts?.length || 0; // 실제로는 서버에서 전체 게시글 수를 받아와야 함
	$: totalPages = Math.ceil(totalPosts / postsPerPage);
	
	// 현재 페이지에 표시할 게시글만 필터링
	$: displayedPosts = posts?.slice(
		(currentPage - 1) * postsPerPage,
		currentPage * postsPerPage
	) || [];

	// 페이지 번호 버튼 배열 생성 (최대 5개씩 표시)
	$: pageNumbers = (() => {
		const maxVisible = 5;
		let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
		let end = Math.min(totalPages, start + maxVisible - 1);
		
		if (end - start + 1 < maxVisible) {
			start = Math.max(1, end - maxVisible + 1);
		}
		
		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	})();

	function goToPage(pageNum) {
		console.log(`페이지 ${pageNum}로 이동`);
		goto(`/board/${board.slug}?page=${pageNum}`);
	}

	function goToFirstPage() {
		console.log('첫 페이지로 이동');
		goToPage(1);
	}

	function goToLastPage() {
		console.log('마지막 페이지로 이동');
		goToPage(totalPages);
	}

	function goToPrevPage() {
		if (currentPage > 1) {
			console.log('이전 페이지로 이동');
			goToPage(currentPage - 1);
		}
	}

	function goToNextPage() {
		if (currentPage < totalPages) {
			console.log('다음 페이지로 이동');
			goToPage(currentPage + 1);
		}
	}

	function writePost() {
		console.log('글쓰기 페이지로 이동');
		goto(`/board/${board.slug}/write`);
	}
</script>

<main class="container mx-auto p-4 md:p-8">
	{#if board}
		<div class="flex justify-between items-center mb-6">
			<h1 class="text-4xl font-extrabold text-base-content">{board.name}</h1>
			<button class="btn btn-primary btn-lg" on:click={writePost}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 4v16m8-8H4"
					/>
				</svg>
				<span>글쓰기</span>
			</button>
		</div>

		<!-- 페이지 정보 표시 (옵션) -->
		<div class="text-sm text-base-content/60 mb-4">
			전체 {totalPosts}개 / {currentPage} 페이지
		</div>

		<div class="overflow-x-auto bg-base-100 rounded-box shadow-lg mb-8">
			<table class="table table-zebra w-full text-base-content">
				<thead>
					<tr>
						<th class="w-16">번호</th>
						<th class="text-left">제목</th>
						<th class="w-32">작성자</th>
						<th class="w-32">작성일</th>
						<th class="w-24">조회수</th>
					</tr>
				</thead>
				<tbody>
					{#if displayedPosts.length === 0}
						<tr>
							<td colspan="5" class="text-center py-8 text-base-content/60">
								게시글이 없습니다.
							</td>
						</tr>
					{:else}
						{#each displayedPosts as post (post.id)}
							<tr class="hover:bg-base-200 cursor-pointer">
								<th>{post.id}</th>
								<td>
									<a href="/board/{board.slug}/{post.id}" class="hover:text-primary">
										{post.title}
									</a>
								</td>
								<td>{post.author}</td>
								<td>{post.date}</td>
								<td>{post.views}</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>

		<!-- 페이지네이션 -->
		{#if totalPages > 0}
			<div class="flex justify-center mt-8">
				<div class="join shadow-md">
					<!-- 첫 페이지로 -->
					<button 
						class="join-item btn" 
						disabled={currentPage === 1}
						on:click={goToFirstPage}
						title="첫 페이지"
					>
						«
					</button>
					
					<!-- 이전 페이지 -->
					<button 
						class="join-item btn" 
						disabled={currentPage === 1}
						on:click={goToPrevPage}
						title="이전 페이지"
					>
						‹
					</button>
					
					<!-- 페이지 번호들 -->
					{#each pageNumbers as pageNum}
						<button
							class="join-item btn"
							class:btn-active={pageNum === currentPage}
							on:click={() => goToPage(pageNum)}
						>
							{pageNum}
						</button>
					{/each}
					
					<!-- 다음 페이지 -->
					<button 
						class="join-item btn" 
						disabled={currentPage === totalPages}
						on:click={goToNextPage}
						title="다음 페이지"
					>
						›
					</button>
					
					<!-- 마지막 페이지로 -->
					<button 
						class="join-item btn" 
						disabled={currentPage === totalPages}
						on:click={goToLastPage}
						title="마지막 페이지"
					>
						»
					</button>
				</div>
			</div>
		{/if}
	{:else}
		<h1 class="text-2xl font-bold text-error">존재하지 않는 게시판입니다.</h1>
	{/if}
</main>