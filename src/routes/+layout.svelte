<script>
    // app.css 파일을 가져와 모든 페이지에 전역 스타일을 적용합니다.
    import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    let boards = [
        { name: "자유게시판", slug: "general" },
        { name: "Q&A", slug: "qna" },
        { name: "공지사항", slug: "notice" }
    ];
</script>

<div class="flex flex-col min-h-screen bg-base-200" data-theme="emerald">
    <Header {boards} />
    <main class="flex-grow">
        <slot />
    </main>
    <Footer />
</div>