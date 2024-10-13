import '../styles/globals.scss';

export const metadata = {
    title: {
        default: 'The Emerald Keep'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.png" sizes="any" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
