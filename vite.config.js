// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    // ✨ 다음 server 객체를 추가합니다.
    server: {
        host: true, // 0.0.0.0 (모든 네트워크 인터페이스)에 바인딩하도록 설정
        port: 5173, // 포트 명시 (선택 사항)
    }
});