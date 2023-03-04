const disabledCss = {
  'code::before': false,
  'code::after': false,
  pre: false,
  code: false,
  'pre code': false
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
				lg: { css: disabledCss },
				xl: { css: disabledCss },
				'2xl': { css: disabledCss },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
