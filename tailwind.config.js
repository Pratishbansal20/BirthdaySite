/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'princess-pink': '#F8C8DC',
                'princess-lavender': '#DCC6F0',
                'princess-cream': '#FFF6E9',
                'princess-gold': '#FFD700'
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Quicksand', 'sans-serif']
            }
        },
    },
    plugins: [],
}
