/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors:{
      paleBlue:"hsl(var(--pale-blue))",
      brightBlue:"hsl(var(--bright-blue))",
      veryPaleBlue:"hsl(var(--very-pale-blue))",
      desaturatedBlue:"hsl(var(--desaturated-blue))",
      darkBlue:"hsl(var(--dark-blue))",
      light:"hsl(var(--white))"

    },
    extend: {
      fontFamily:{
        redHotFont:"'Red Hat Display', sans-serif"
      }
    },
  },
  plugins: [],
}

