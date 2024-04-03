/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                header: ["Creepster", "cursive"], // Use for headers
                body: ["Roboto Slab", "serif"], // Use for body text
                mono: ["Source Code Pro", "monospace"], // Use for displaying code or numbers
            },
            colors: {
                darkBlue: "#737CA9",
                lightPink: "#9E558B",
            },
        },
    },
    plugins: [],
};
