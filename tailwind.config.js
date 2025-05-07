const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(20 14.3% 4.1%)",

        primary: "hsl(220 90% 45%)",
        "primary-foreground": "hsl(0 0% 100%)",

        secondary: "hsl(210 20% 90%)",
        "secondary-foreground": "hsl(0 0% 0%)",

        text: "hsl(0°, 0%, 39%)",

        muted: "hsl(60 4.8% 95.9%)",
        "muted-foreground": "hsl(25 5.3% 44.7%)",

        destructive: "hsl(0 72% 58%)",
        "destructive-foreground": "hsl(60 9.1% 97.8%)",

        border: "hsl(0 0% 89%)",
        input: "hsl(20 5.9% 90%)",

        black: "hsl(0 0% 0%)",
        white: "hsl(0 0% 100%)",
        success: "hsl(148 85% 34%)",
        warning: "hsl(34 98% 55%)",
      },
      fontFamily: {
        sans: ["DMSans-Regular", "sans-serif"],
        "sans-light": ["DMSans-Light", "sans-serif"],
        "sans-medium": ["DMSans-Medium", "sans-serif"],
        "sans-semibold": ["DMSans-SemiBold", "sans-serif"],
        "sans-bold": ["DMSans-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
