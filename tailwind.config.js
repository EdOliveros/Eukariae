/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // We'll use the 'dark' class on the body or html
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                accent: 'var(--accent-color)',
                'text-base': 'var(--text-color)',
                'bg-base': 'var(--bg-color)',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            borderRadius: {
                'base': 'var(--border-radius)',
            },
            boxShadow: {
                'base': 'var(--shadow)',
            }
        },
    },
    plugins: [],
}
