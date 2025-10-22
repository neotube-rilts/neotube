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
            {"id":56,"title":"SvelteKit 5.0 새로운 기능 소개","author":"작성자A","date":"2023-11-21","views":450},
            {"id":55,"title":"TypeScript 5.3 업데이트 내용 정리","author":"작성자B","date":"2023-11-20","views":380},
            {"id":54,"title":"Vite 5.0 마이그레이션 가이드","author":"작성자C","date":"2023-11-19","views":290},
            {"id":53,"title":"반응형 웹 디자인 베스트 프랙티스","author":"작성자D","date":"2023-11-18","views":520},
            {"id":52,"title":"Git 브랜치 전략 비교 분석","author":"작성자E","date":"2023-11-17","views":340},
            {"id":51,"title":"REST API vs GraphQL 선택 기준","author":"작성자F","date":"2023-11-16","views":410},
            {"id":50,"title":"Docker로 개발 환경 구축하기","author":"작성자G","date":"2023-11-15","views":280},
            {"id":49,"title":"CSS Grid vs Flexbox 완벽 가이드","author":"작성자A","date":"2023-11-14","views":195},
            {"id":48,"title":"웹 접근성 체크리스트 2023","author":"작성자H","date":"2023-11-13","views":160},
            {"id":47,"title":"프론트엔드 성능 최적화 팁","author":"작성자B","date":"2023-11-12","views":575},
            {"id":46,"title":"Svelte Store 활용법","author":"작성자C","date":"2023-11-11","views":230},
            {"id":45,"title":"JWT 인증 구현 완벽 가이드","author":"작성자I","date":"2023-11-10","views":480},
            {"id":44,"title":"ESLint와 Prettier 설정하기","author":"작성자D","date":"2023-11-09","views":310},
            {"id":43,"title":"Vitest로 단위 테스트 작성하기","author":"작성자E","date":"2023-11-08","views":265},
            {"id":42,"title":"DaisyUI 커스텀 테마 만들기","author":"作成者F","date":"2023-11-07","views":390},
            {"id":41,"title":"GitHub Actions CI/CD 구축","author":"작성자A","date":"2023-11-06","views":420},
            {"id":40,"title":"Supabase 백엔드 구축 가이드","author":"작성자G","date":"2023-11-05","views":355},
            {"id":39,"title":"웹소켓으로 실시간 채팅 구현","author":"작성자B","date":"2023-11-04","views":510},
            {"id":38,"title":"SEO 최적화 체크리스트","author":"작성자H","date":"2023-11-03","views":295},
            {"id":37,"title":"Svelte 애니메이션 라이브러리 비교","author":"작성자C","date":"2023-11-02","views":175},
            {"id":36,"title":"PostgreSQL vs MongoDB 선택 가이드","author":"작성자I","date":"2023-11-01","views":440},
            {"id":35,"title":"Vercel 배포 자동화 설정","author":"작성자D","date":"2023-10-31","views":320},
            {"id":34,"title":"웹 보안 기초: XSS, CSRF 방어","author":"작성자E","date":"2023-10-30","views":385},
            {"id":33,"title":"Pnpm으로 패키지 관리하기","author":"작성자F","date":"2023-10-29","views":225},
            {"id":32,"title":"SvelteKit 폼 유효성 검사","author":"작성자A","date":"2023-10-28","views":270},
            {"id":31,"title":"Tailwind CSS 플러그인 개발","author":"작성자G","date":"2023-10-27","views":190},
            {"id":30,"title":"Next.js vs SvelteKit 성능 비교","author":"작성자B","date":"2023-10-26","views":630},
            {"id":29,"title":"코드 리뷰 문화 정착시키기","author":"작성자H","date":"2023-10-25","views":305},
            {"id":28,"title":"VS Code 필수 확장 프로그램 2023","author":"작성자C","date":"2023-10-24","views":425},
            {"id":27,"title":"웹 폰트 최적화 전략","author":"작성자I","date":"2023-10-23","views":245},
            {"id":26,"title":"SvelteKit 서버 사이드 렌더링","author":"작성자D","date":"2023-10-22","views":360},
            {"id":25,"title":"JavaScript 최신 문법 정리","author":"작성자E","date":"2023-10-21","views":495},
            {"id":24,"title":"다크모드 구현 베스트 프랙티스","author":"작성자F","date":"2023-10-20","views":215},
            {"id":23,"title":"Zod로 타입 안전한 검증하기","author":"작성자A","date":"2023-10-19","views":340},
            {"id":22,"title":"웹 스크래핑 기초 가이드","author":"작성자G","date":"2023-10-18","views":280},
            {"id":21,"title":"Redis 캐싱 전략","author":"작성자B","date":"2023-10-17","views":405},
            {"id":20,"title":"마이크로프론트엔드 아키텍처","author":"작성자H","date":"2023-10-16","views":375},
            {"id":19,"title":"Lighthouse 성능 점수 100점 만들기","author":"작성자C","date":"2023-10-15","views":550},
            {"id":18,"title":"Storybook으로 컴포넌트 문서화","author":"작성자I","date":"2023-10-14","views":265},
            {"id":17,"title":"CORS 문제 해결 가이드","author":"작성자D","date":"2023-10-13","views":320},
            {"id":16,"title":"웹 크롤링 vs 웹 스크래핑","author":"작성자E","date":"2023-10-12","views":195},
            {"id":15,"title":"Progressive Web App 구축하기","author":"작성자F","date":"2023-10-11","views":430},
            {"id":14,"title":"함수형 프로그래밍 입문","author":"작성자A","date":"2023-10-10","views":385},
            {"id":13,"title":"SvelteKit 라우팅 완벽 가이드","author":"작성자G","date":"2023-10-09","views":295},
            {"id":12,"title":"웹 애니메이션 성능 최적화","author":"작성자B","date":"2023-10-08","views":240},
            {"id":11,"title":"Cloudflare Workers로 엣지 컴퓨팅","author":"작성자H","date":"2023-10-27","views":355},
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
