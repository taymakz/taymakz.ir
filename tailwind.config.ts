import svgToDataUri from 'mini-svg-data-uri'
import animate from 'tailwindcss-animate'

// eslint-disable-next-line ts/ban-ts-comment
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  safelist: ['dark'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '868px',
    },




    
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0.625rem',
      },
    },

    extend: {

      spacing: {
        25: '6.25rem',
        50: '12.5rem',
      },
      fontFamily: {
        iranyekan: 'IRANYekan',
      },

      colors: {
        white: '#FEFEFF',
        black: '#0D0D0D',
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        warning: 'hsl(var(--warning))',
        success: {
          DEFAULT: 'hsl(var(--success))',
          secondary: 'hsl(var(--success-secondary))',
        },
        text: 'hsl(var(--text))',
        primary: 'hsl(var(--primary))',
        'primary-btn': 'hsl(var(--primary-btn))',
        secondary: 'hsl(var(--secondary))',
        destructive: 'hsl(var(--destructive))',
        muted: 'hsl(var(--muted))',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    animate,
    // eslint-disable-next-line ts/no-require-imports
    require('@tailwindcss/aspect-ratio'),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
      )
    },
  ],
}
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ':root': newVars,
  })
}
