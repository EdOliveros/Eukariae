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
                primary: '#CAC2B5',
                'primary-dark': '#2c2c2c',
                secondary: '#E4E4E4',
                'secondary-dark': '#3a3a3a',
                accent: '#8b8070',
                'accent-dark': '#d4c5b0',
                'text-base': '#1a1a1a',
                'text-base-dark': '#e0e0e0',
                'bg-base': '#ffffff',
                'bg-base-dark': '#121212',
                'card-bg': '#ffffff',
                'card-bg-dark': '#1e1e1e',
                'modal-bg': '#ffffff',
                'modal-bg-dark': '#1e1e1e',
            },
            fontFamily: {
                sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'base': '8px',
            },
            boxShadow: {
                'base': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }
        },
    },
    plugins: [],
}
