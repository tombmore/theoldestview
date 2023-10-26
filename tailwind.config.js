/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['black'],
  },
  theme: {
    extend: {
      fontFamily: {
        'yuri': ['Yuri', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'insomnia': ['Insomnia', 'sans-serif'],
      }
    }
  }
}

