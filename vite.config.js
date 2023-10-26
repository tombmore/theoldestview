import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		build: {
			base: '/',
			assetDir: 'static',
		}
	},
	server: {
		fs: {
			allow: ['static', 'content']
		}
	}
});
