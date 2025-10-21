// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,svelte,ts}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui'), // DaisyUI 플러그인
        require('@tailwindcss/typography'), 
        require('@tailwindcss/forms'),
    ],
    daisyui: {
        //themes: ["light","cupcake","bumblebee","emerald","corporate","synthwave","retro","valentine","garden","lofi","pastel","fantasy","wireframe","cmyk","autumn","acid","lemonade","dark","forest","dracula","sunset","coffee","night","cyberpunk","aqua","black","luxury","winter",],
        themes: ["emerald"]
    },
};