import Link from 'next/link';
import AboutModal from 'components/AboutModal';
import EventsModal from 'components/EventsModal';
import GalleryModal from 'components/GalleryModal';

const PortalShadows = ({ count }) => {
    const base = 1.15;
    const scaleFactor = 1.0002;

    return (
        <>
            {Array.from({ length: count }, (_, i) => {
                const expScale = Math.pow(base, i) * Math.pow(scaleFactor, i * i);
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
        <main className="h-dvh w-dvw flex flex-col gap-8 sm:gap-16">
            <section className="fixed h-full w-full flex flex-col items-center justify-center">
                <div className="relative overflow-hidden w-full h-full">
                    <video className="w-full h-full object-cover" src="videos/forest.720.mp4" autoPlay muted playsInline loop></video>
                </div>
                <div className="fixed top-0 left-0 h-full w-full bg-videoOverlay opacity-80"></div>
                <div className="noise-overlay"></div>
            </section>
            <section className="h-full overflow-hidden flex flex-col items-center justify-center gap-3 sm:gap-4 py-8 z-10">
                <div className="min-h-0 flex items-center justify-center relative">
                    <PortalShadows count={50} />
                    <img
                        className="absolute h-full rotating-portal"
                        srcSet="/.netlify/images?url=images/portal-background.png&w=640 640w, /.netlify/images?url=images/portal-background.png&w=1280 1280w, /.netlify/images?url=images/portal-background.png&w=2048 2048w"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt="portal background"
                    />
                    <img
                        className="h-full"
                        srcSet="/.netlify/images?url=images/portal.png&w=640 640w, /.netlify/images?url=images/portal.png&w=1280 1280w, /.netlify/images?url=images/portal.png&w=2048 2048w"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt="Emerald Keep logo in stone portal"
                    />
                </div>
                <Link
                    href="https://www.instagram.com/theemeraldkeep/"
                    target="_blank"
                    className="btn-primary btn min-w-48 rounded-full text-4xl btn-lg font-blackcastleshadow sm:btn-wide tracking-wider"
                >
                    Instagram
                </Link>
                <AboutModal></AboutModal>
                <GalleryModal></GalleryModal>
                <EventsModal></EventsModal>
            </section>
        </main>
    );
}
