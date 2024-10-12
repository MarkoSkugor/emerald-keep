import Synth from 'components/Synth';

export const metadata = {
    title: 'Portal'
};

export default async function Page() {
    return (
        <>
            <div className="flex flex-col h-dvh w-dvw items-center justify-center overflow-hidden bg-primary relative">
                <img
                    className="absolute rotating-portal full"
                    srcSet="/.netlify/images?url=images/swirls-red.png&w=640 640w, /.netlify/images?url=images/swirls-red.png&w=1280 1280w, /.netlify/images?url=images/swirls-red.png&w=2048 2048w"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    alt="portal background red"
                />
                <img
                    className="absolute rotating-portal slow full"
                    srcSet="/.netlify/images?url=images/swirls-black.png&w=640 640w, /.netlify/images?url=images/swirls-black.png&w=1280 1280w, /.netlify/images?url=images/swirls-black.png&w=2048 2048w"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    alt="portal background black"
                />
                <Synth></Synth>
            </div>
        </>
    );
}
