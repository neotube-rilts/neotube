    <script>
        // 부모나 상위 레이아웃에서 boards 데이터를 props로 내려주거나,
        // 또는 이 컴포넌트 안에서 onMount로 가져왔다고 가정합니다.
        export let boards = [];
    </script>

    <header class="navbar bg-base-100 shadow-md">
		<div class="container mx-auto">
			<div class="flex-1">
				<a href="/" class="btn btn-ghost normal-case text-xl">SvelteBoard</a>
			</div>
			<div class="flex-none">
				<ul class="menu menu-horizontal px-1">
					<li><a href="/login">로그인</a></li>
					<li><a href="/signup">회원가입</a></li>
                    <!-- Firestore에서 가져온 boards 배열을 순회 -->
                     {#each boards as board}
                     <li><a href={`/board/${board.slug}`}>{board.name}</a></li>
                     {/each}
					<li><a>마이페이지</a></li>
				</ul>
			</div>
		</div>
	</header>