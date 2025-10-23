<!-- src/routes/user/+page.svelte -->
<script>
	import AlertDialog from '$lib/components/AlertDialog.svelte';
	import { goto } from '$app/navigation';
	import { user as userStore } from '$lib/stores/user';
	import { get } from 'svelte/store';

	let user = null;
	let error = '';

	// 로그인된 유저 정보 가져오기
	$: user = get(userStore);

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
			<div><strong>관심 태그:</strong> {user.tags?.join(', ')}</div>
			<div>
				<strong>알림 설정:</strong>
				댓글({user.notificationSettings?.comment ? 'ON' : 'OFF'}), 좋아요({user.notificationSettings?.like ? 'ON' : 'OFF'}), 멘션({user.notificationSettings?.mention ? 'ON' : 'OFF'})
			</div>
		</div>

		<button class="btn btn-primary mt-6 w-full" on:click={goToEdit}>정보 수정</button>
	</main>
{:else}
	<p class="text-center mt-10 text-gray-500">로그인된 사용자 정보가 없습니다.</p>
{/if}
