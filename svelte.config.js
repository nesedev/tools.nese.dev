import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

const dev = process.env.NODE_ENV == 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: {
      plugins: [autoprefixer],
    },
  }),

  kit: {
    adapter: adapter({
      fallback: '404.html',
    }),

    prerender: {
      default: true,
    },

    paths: {
      //base: dev ? '' : '/tools.nese.dev',
      base: '', // needed for https://toosl.nese.dev/
    },
  },
};

export default config;
