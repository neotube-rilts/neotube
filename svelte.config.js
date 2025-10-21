// svelte.config.js svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Svelte 4 호환성을 위해 vitePreprocess를 사용합니다.
    preprocess: vitePreprocess(),
    
    kit: {
        adapter: adapter()
    }
};

export default config;

