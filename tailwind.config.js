/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            myNavy: "#155674",
            myTeal: "#60BEB3",
            myMint: "#79F8BB",
            myYellow: "#F5FFAE",
         },
      },
   },
   plugins: [],
};
