// src/routes/board/[slug]/+page.js
export function load({ params }) {
    // 여기서 게시판 설정값등도 검색해서 데이터를 넘기면 될 듯
    //console.log(params, '*****************************');
	let posts = [];
    const boards = {
        "general": { name: "자유게시판", slug: "general" },
        "qna": { name: "Q&A", slug: "qna" },
        "notice": { name: "공지사항", slug: "notice" }
    };
    const board = boards[params.slug];
    if(board) {
        posts = [
            {"id":10,"title":"DaisyUI와 SvelteKit으로 게시판 만들기","author":"작성자A","date":"2023-10-26","views":250},
            {"id":9,"title":"Tailwind CSS 설치 및 기본 설정 가이드","author":"작성자B","date":"2023-10-25","views":180},
            {"id":8,"title":"WSL 개발 환경 설정의 장점","author":"작성자C","date":"2023-10-24","views":320},
            {"id":7,"title":"SvelteKit 1.x vs 2.x 버전 비교","author":"작성자D","date":"2023-10-23","views":110},
            {"id":6,"title":"Node.js LTS 버전 관리의 중요성","author":"작성자A","date":"2023-10-22","views":90},
            {"id":5,"title":"Firebase 연동을 위한 준비","author":"작성자E","date":"2023-10-21","views":400},
            {"id":4,"title":"컴포넌트 기반 UI 개발의 효율성","author":"작성자F","date":"2023-10-20","views":150},
            {"id":3,"title":"npm, npx, nvm 명령어 완전 정복","author":"작성자B","date":"2023-10-19","views":210},
            {"id":2,"title":"모노레포가 무엇인가요?","author":"작성자C","date":"2023-10-18","views":80},
            {"id":1,"title":"새로운 SvelteKit 프로젝트 시작하기","author":"작성자G","date":"2023-10-17","views":500}
        ];
    }
    //console.log('page.js', boards, posts)
  return {
    board: board,
    posts: posts,
    config: {}
  };
}
