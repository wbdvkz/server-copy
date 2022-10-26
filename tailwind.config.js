/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'DSbg1': '#202324',
                'DSbg2': '#2e3036',
                'DSbg3': '#37383f',
                'DScircle': '#37383f',
                'DSselected': '#3aa55c',

            },
        },
    },
    plugins: [],
}