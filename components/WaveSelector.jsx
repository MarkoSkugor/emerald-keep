"use client";

const WaveSelector = ({ selectWaveform, selectedWaveform }) => {
    return (
        <div className="flex gap-10 pl-2 -mt-10">
            <div className="flex flex-col">
                <button
                    className={`${selectedWaveform == 'sawtooth' ? 'active' : ''} flex relative waveform-selector`}
                    onClick={() => selectWaveform('sawtooth')}
                >
                    <img className="skull-eye" srcSet={`/.netlify/images?url=images/eye-left.webp&w=640 640w, /.netlify/images?url=images/eye-left.webp&w=1280 1280w, /.netlify/images?url=images/eye-left.webp&w=2048 2048w`} />
                    <img className="waveform" srcSet={`/.netlify/images?url=images/saw.webp&w=640 640w, /.netlify/images?url=images/saw.webp&w=1280 1280w, /.netlify/images?url=images/saw.webp&w=2048 2048w`} />
                </button>
                <button
                    className={`${selectedWaveform == 'sine' ? 'active' : ''} flex relative waveform-selector`}
                    onClick={() => selectWaveform('sine')}
                >
                    <img className="skull-eye" srcSet={`/.netlify/images?url=images/eye-left.webp&w=640 640w, /.netlify/images?url=images/eye-left.webp&w=1280 1280w, /.netlify/images?url=images/eye-left.webp&w=2048 2048w`} />
                    <img className="waveform" srcSet={`/.netlify/images?url=images/sine.webp&w=640 640w, /.netlify/images?url=images/sine.webp&w=1280 1280w, /.netlify/images?url=images/sine.webp&w=2048 2048w`} />
                </button>
            </div>
            <div className="flex flex-col">
                <button
                    className={`${selectedWaveform == 'triangle' ? 'active' : ''} flex relative waveform-selector`}
                    onClick={() => selectWaveform('triangle')}
                >
                    <img className="skull-eye" srcSet={`/.netlify/images?url=images/eye-right.webp&w=640 640w, /.netlify/images?url=images/eye-right.webp&w=1280 1280w, /.netlify/images?url=images/eye-right.webp&w=2048 2048w`} />
                    <img className="waveform" srcSet={`/.netlify/images?url=images/triangle.webp&w=640 640w, /.netlify/images?url=images/triangle.webp&w=1280 1280w, /.netlify/images?url=images/triangle.webp&w=2048 2048w`} />
                </button>
                <button
                    className={`${selectedWaveform == 'square' ? 'active' : ''} flex relative waveform-selector`}
                    onClick={() => selectWaveform('square')}
                >
                    <img className="skull-eye" srcSet={`/.netlify/images?url=images/eye-right.webp&w=640 640w, /.netlify/images?url=images/eye-right.webp&w=1280 1280w, /.netlify/images?url=images/eye-right.webp&w=2048 2048w`} />
                    <img className="waveform" srcSet={`/.netlify/images?url=images/square.webp&w=640 640w, /.netlify/images?url=images/square.webp&w=1280 1280w, /.netlify/images?url=images/square.webp&w=2048 2048w`} />
                </button>
            </div>
        </div>
    );
};

export { WaveSelector };
