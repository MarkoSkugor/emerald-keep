import Link from 'next/link';
import { getNetlifyContext } from 'utils';

const ctx = getNetlifyContext();

const PortalShadows = ({ count }) => {
    const base = 1.2;

    return (
      <>
        {Array.from({ length: count }, (_, i) => {
          const expScale = Math.pow(base, i);
          const size = expScale * 4;

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
                    className="btn-primary btn min-w-48 rounded-full text-4xl btn-lg font-blackcastleshadow sm:btn-wide tracking-wider"
                >
                    Instagram
                </Link>
                <Link
                    href="javascript:void(0)"
                    className="btn-info btn min-w-48 rounded-full text-4xl btn-lg font-blackcastleshadow sm:btn-wide tracking-wider"
                >
                    About
                </Link>
                <Link
                    href="javascript:void(0)"
                    className="btn-info btn min-w-48 rounded-full text-4xl btn-lg font-blackcastleshadow sm:btn-wide tracking-wider"
                >
                    Gallery
                </Link>
                <Link
                    href="javascript:void(0)"
                    className="btn-info btn min-w-48 rounded-full text-4xl btn-lg font-blackcastleshadow sm:btn-wide tracking-wider"
                >
                    Events
                </Link>
            </section>
        </main>
    );
}
