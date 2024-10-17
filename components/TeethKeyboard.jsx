import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const KEY_MAP = {
    a: 'c',
    w: 'cSharp',
    s: 'd',
    e: 'dSharp',
    d: 'e',
    f: 'f',
    t: 'fSharp',
    g: 'g',
    y: 'gSharp',
    h: 'a',
    u: 'aSharp',
    j: 'b',
};

const TeethKeyboard = ({ numOctaves = 1, startingOctave = 2, onKeyPressed }) => {
    useEffect(() => {
        const handleKeyDown = ({ key }) => {
            if (KEY_MAP[key]) {
                let octave = startingOctave;
                if ('kolp'.indexOf(key) !== -1) octave += 1;
                onKeyPressed(octave, KEY_MAP[key]);
                triggerKeyPressActiveState(key, octave);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [startingOctave, onKeyPressed]);

    const triggerKeyPressActiveState = (key, octave) => {
        const keyElement = document.getElementById(`${KEY_MAP[key]}${octave}`);

        if (keyElement) {
            keyElement.classList.add('active');
            setTimeout(() => {
                keyElement.classList.remove('active');
            }, 100);
        }
    };

    const renderKeyboardOctave = (octave) => (
        <div key={octave} className="teeth-keyboard__octave">
            <button id={`c${octave}`} onClick={() => onKeyPressed(octave, 'c')}>
                <img srcSet={`/.netlify/images?url=images/teeth/bottom-1.webp&w=640 640w, /.netlify/images?url=images/teeth/bottom-1.webp&w=1280 1280w, /.netlify/images?url=images/teeth/bottom-1.webp&w=2048 2048w`} />
            </button>
            <button id={`cSharp${octave}`} onClick={() => onKeyPressed(octave, 'cSharp')}>
                <img srcSet={`/.netlify/images?url=images/teeth/top-1.webp&w=640 640w, /.netlify/images?url=images/teeth/top-1.webp&w=1280 1280w, /.netlify/images?url=images/teeth/top-1.webp&w=2048 2048w`} />
            </button>
            <button id={`d${octave}`} onClick={() => onKeyPressed(octave, 'd')}>
                <img srcSet={`/.netlify/images?url=images/teeth/bottom-2.webp&w=640 640w, /.netlify/images?url=images/teeth/bottom-2.webp&w=1280 1280w, /.netlify/images?url=images/teeth/bottom-2.webp&w=2048 2048w`} />
            </button>
            <button id={`dSharp${octave}`} onClick={() => onKeyPressed(octave, 'dSharp')}>
                <img srcSet={`/.netlify/images?url=images/teeth/top-2.webp&w=640 640w, /.netlify/images?url=images/teeth/top-2.webp&w=1280 1280w, /.netlify/images?url=images/teeth/top-2.webp&w=2048 2048w`} />
            </button>
            <button id={`e${octave}`} onClick={() => onKeyPressed(octave, 'e')}>
                <img srcSet={`/.netlify/images?url=images/teeth/bottom-3.webp&w=640 640w, /.netlify/images?url=images/teeth/bottom-3.webp&w=1280 1280w, /.netlify/images?url=images/teeth/bottom-3.webp&w=2048 2048w`} />
            </button>
            <button id={`f${octave}`} onClick={() => onKeyPressed(octave, 'f')}>
                <img srcSet={`/.netlify/images?url=images/teeth/bottom-4.webp&w=640 640w, /.netlify/images?url=images/teeth/bottom-4.webp&w=1280 1280w, /.netlify/images?url=images/teeth/bottom-4.webp&w=2048 2048w`} />
            </button>
            <button id={`fSharp${octave}`} onClick={() => onKeyPressed(octave, 'fSharp')}>
                <img srcSet={`/.netlify/images?url=images/teeth/top-3.webp&w=640 640w, /.netlify/images?url=images/teeth/top-3.webp&w=1280 1280w, /.netlify/images?url=images/teeth/top-3.webp&w=2048 2048w`} />
            </button>
            <button id={`g${octave}`} onClick={() => onKeyPressed(octave, 'g')}>
                <img srcSet={`/.netlify/images?url=images/teeth/bottom-5.webp&w=640 640w, /.netlify/images?url=images/teeth/bottom-5.webp&w=1280 1280w, /.netlify/images?url=images/teeth/bottom-5.webp&w=2048 2048w`} />
            </button>
            <button id={`gSharp${octave}`} onClick={() => onKeyPressed(octave, 'gSharp')}>
                <img srcSet={`/.netlify/images?url=images/teeth/top-4.webp&w=640 640w, /.netlify/images?url=images/teeth/top-4.webp&w=1280 1280w, /.netlify/images?url=images/teeth/top-4.webp&w=2048 2048w`} />
            </button>
            <button id={`a${octave}`} onClick={() => onKeyPressed(octave, 'a')}>
                <img srcSet={`/.netlify/images?url=images/teeth/bottom-6.webp&w=640 640w, /.netlify/images?url=images/teeth/bottom-6.webp&w=1280 1280w, /.netlify/images?url=images/teeth/bottom-6.webp&w=2048 2048w`} />
            </button>
            <button id={`aSharp${octave}`} onClick={() => onKeyPressed(octave, 'aSharp')}>
                <img srcSet={`/.netlify/images?url=images/teeth/top-5.webp&w=640 640w, /.netlify/images?url=images/teeth/top-5.webp&w=1280 1280w, /.netlify/images?url=images/teeth/top-5.webp&w=2048 2048w`} />
            </button>
            <button id={`b${octave}`} onClick={() => onKeyPressed(octave, 'b')}>
                <img srcSet={`/.netlify/images?url=images/teeth/bottom-7.webp&w=640 640w, /.netlify/images?url=images/teeth/bottom-7.webp&w=1280 1280w, /.netlify/images?url=images/teeth/bottom-7.webp&w=2048 2048w`} />
            </button>
        </div>
    );

    const keyboardOctaves = [];

    for (let i = 0; i < numOctaves; i++) {
        keyboardOctaves.push(renderKeyboardOctave(i + startingOctave));
    }

    return <div className="teeth-keyboard__container">{keyboardOctaves}</div>;
};

TeethKeyboard.propTypes = {
    numOctaves: PropTypes.number,
    startingOctave: PropTypes.number,
    onKeyPressed: PropTypes.func.isRequired,
};

export { TeethKeyboard };
