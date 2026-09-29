/** @type {import('tailwindcss').Config} */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#E0F7FA',           // Soft Water Blue Background
        primary: '#0F172A',           // Deep Slate/Navy for text/headers
        secondary: '#0284C7',         // Rich Water-Blue Cyan for accents
        'secondary-light': '#38BDF8', // Bright Accent Highlight
        
        // Surface Variants (Tinted with Water Blue)
        'surface-container-lowest': '#FFFFFF', // Pure white for cards/dropdowns to pop against bg
        'surface-container-low': '#F0FBFC',    // Very light blue tint
        'surface-container': '#E6F9FB',        // Light blue tint
        'surface-container-high': '#DCEFF1',   // Medium blue tint
        
        // Text Colors
        'on-surface': '#1E293B',               // High Contrast Body Text
        'on-surface-heading': '#0F172A',       // Solid Dark Slate Headlines
        'on-surface-variant': '#475569',       // Slightly darker gray-blue for subtext
        'outline-variant': '#BAE6FD',          // Light blue borders
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
