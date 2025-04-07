/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'cheerySwash': ['Cherry Swash', 'serif'],
      'Lato': ['Lato', 'sans-serif'],
      'oswald': ['Oswald', 'sans-serif'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
    },
  },
  plugins: [],
}

