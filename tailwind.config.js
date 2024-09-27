const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral,
                videoOverlay: '#1e2927'
            },
            fontFamily: {
                blackcastle: ['blackcastle', 'sans-serif'],
                blackcastleshadow: ['blackcastleshadow', 'sans-serif'],
                augusta: ['augusta', 'sans-serif'],
                augustashadow: ['augustashadow', 'sans-serif'],
            },
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#328774',
                    'primary-content': '#ffffff',
                    secondary: '#de312f',
                    'secondary-content': '#fff',
                    info: '#DBCFB0',
                    'info-content': '#1D1E18',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
