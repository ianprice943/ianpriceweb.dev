/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      // ideas inspired from https://tjaddison.com/blog/2020/08/updating-to-tailwind-typography-to-style-markdown-posts/
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              'code::before': false,
              'code::after': false,
              code: false,
              'pre code': false,
              "blockquote p:first-of-type::before": false,
              "blockquote p:last-of-type::after": false,
              a: {
                color: theme(`colors.blue.700`),
                textDecoration: 'none',
                "&:hover": {
                  textDecoration: 'underline'
                }
              },
              '.dark a': {
                color: theme(`colors.blue.300`)
              }
            }
          },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
