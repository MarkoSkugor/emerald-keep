import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\`
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

const PortalShadows = ({ count }) => {
    const base = 1.2; // You can adjust the base to control how fast the exponential growth occurs

    return (
      <>
        {Array.from({ length: count }, (_, i) => {
          // Calculate the exponential scale value
          const expScale = Math.pow(base, i); // base raised to the power of i
          const size = expScale * 4; // Multiply by 4 to adjust the size

          return (
            <div
              key={i}
              className="portal-shadow"
              style={{
                width: `${size}rem`,
                height: `${size}rem`,
              }}
            ></div>
          );
        })}
      </>
    );
  };

export default function Page() {
    return (
        <main className="h-screen w-screen flex flex-col gap-8 sm:gap-16">
            <section className="fixed h-full w-full flex flex-col items-center justify-center">
                <div className="relative overflow-hidden w-full h-full">
                    <video className="w-full h-full object-cover" src="videos/forest.720.mp4" autoPlay muted playsInline loop></video>
                </div>
                <div className="absolute top-0 left-0 h-full w-full bg-videoOverlay opacity-80"></div>
            </section>
            <section className="h-full overflow-hidden flex flex-col items-center justify-center gap-3 sm:gap-4 py-8 z-10">
                <div className="min-h-0 flex items-center justify-center relative">
                    <PortalShadows count={50} />
                    <img className="absolute h-full rotating-portal" src="/images/portal-background.png"></img>
                    <img className="h-full" src="/images/portal.png"></img>
                </div>
                <Link
                    href="https://www.instagram.com/theemeraldkeep/"
                    target="_blank"
                    className="btn-primary btn min-w-48 rounded-full text-2xl btn-lg font-blackcastle sm:btn-wide tracking-wider"
                >
                    Instagram
                </Link>
                <Link
                    href="javascript:void(0)"
                    className="btn-info btn min-w-48 rounded-full text-2xl btn-lg font-blackcastle sm:btn-wide tracking-wider"
                >
                    About
                </Link>
                <Link
                    href="javascript:void(0)"
                    className="btn-info btn min-w-48 rounded-full text-2xl btn-lg font-blackcastle sm:btn-wide tracking-wider"
                >
                    Gallery
                </Link>
                <Link
                    href="javascript:void(0)"
                    className="btn-info btn min-w-48 rounded-full text-2xl btn-lg font-blackcastle sm:btn-wide tracking-wider"
                >
                    Events
                </Link>
            </section>
        </main>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}
