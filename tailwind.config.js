/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        emphasis: "hsl(var(--emphasis))",
        highlight: "hsl(var(--highlight))",
        "highlighted-text": "hsl(var(--highlighted-text))",
        button: "hsl(var(--button))",
        "button-hover": "hsl(var(--button-hover))",
        "button-active": "hsl(var(--button-active))",
        "button-text": "hsl(var(--button-text))",

        "text-default": "hsl(var(--text-default))",
        "text-muted": "hsl(var(--text-muted))",
        "text-highlight": "hsl(var(--text-highlight))",
        link: "hsl(var(--link))",
        "link-hover": "hsl(var(--link-hover))",

        focus: "hsl(var(--focus))",
        hover: "hsl(var(--hover))",
        active: "hsl(var(--active))",
        overlay: "hsl(var(--overlay))",

        tooltip: "hsl(var(--tooltip))",
        "tooltip-text": "hsl(var(--tooltip-text))",
        badge: "hsl(var(--badge))",
        "badge-text": "hsl(var(--badge-text))",
        codeBlock: "hsl(var(--code-block))",
        codeInline: "hsl(var(--code-inline))",
        scrollbarThumb: "hsl(var(--scrollbar-thumb))",
        scrollbarTrack: "hsl(var(--scrollbar-track))",

        "alt-purple": "hsl(var(--alt-purple))",
        "alt-teal": "hsl(var(--alt-teal))",
        "alt-coral": "hsl(var(--alt-coral))",

        shadow: "hsl(var(--shadow))",

        radius: "var(--radius)",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          hover: "hsl(var(--card-hover))",
          shadow: "hsl(var(--card-shadow))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
