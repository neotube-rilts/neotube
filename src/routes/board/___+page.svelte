<script>
	// SvelteKit의 스크립트 블록
	// 실제 데이터는 여기에 배열로 저장하거나 API에서 가져올 수 있습니다.
    //console.log(JSON.stringify(posts));
    export let data;
    const { board, posts, config } = data.params;

	const currentPage = 1; // 현재 페이지 (실제 구현 시 동적으로 변경)
	const totalPages = 5; // 총 페이지 수 (실제 구현 시 동적으로 계산)

	function goToPage(page) {
		alert(`페이지 ${page}로 이동합니다.`);
		// 실제 구현 시 라우팅 로직을 추가합니다.
	}

	function writePost() {
		alert('새 글을 작성합니다.');
		// 실제 구현 시 글쓰기 페이지로 이동하는 로직을 추가합니다.
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
					{#each posts as post (post.id)}
						<tr class="hover:bg-base-200 cursor-pointer">
							<th>{post.id}</th>
							<td><a href="/post/{post.id}" class="hover:text-primary">{post.title}</a></td>
							<td>{post.author}</td>
							<td>{post.date}</td>
							<td>{post.views}</td>
						</tr>
					{/each}
				</tbody>
				<tfoot>
					<tr>
						<th>번호</th>
						<th class="text-left">제목</th>
						<th>작성자</th>
						<th>작성일</th>
						<th>조회수</th>
					</tr>
				</tfoot>
			</table>
		</div>

		<div class="flex justify-center mt-8">
			<div class="join shadow-md">
				<button class="join-item btn" disabled={currentPage === 1}>«</button>
				<button class="join-item btn" disabled={currentPage === 1}>‹</button>
				{#each Array(totalPages).keys() as i}
					{@const pageNum = i + 1}
					<button
						class="join-item btn"
						class:btn-active={pageNum === currentPage}
						on:click={() => goToPage(pageNum)}
					>
						{pageNum}
					</button>
				{/each}
				<button class="join-item btn" disabled={currentPage === totalPages}>›</button>
				<button class="join-item btn" disabled={currentPage === totalPages}>»</button>
			</div>
		</div>
		{:else}
			<h1 class="text-2xl font-bold text-error">존재하지 않는 게시판입니다.</h1>
		{/if}
	</main>
