import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		base: '/',
	},
	server: {
		fs: {
			allow: ['static', 'content']
		}
	}
});
