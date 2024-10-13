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

const Keyboard = ({ numOctaves = 1, startingOctave = 2, onKeyPressed }) => {
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
        <div key={octave} className="keyboard__octave">
            <button id={`c${octave}`} onClick={() => onKeyPressed(octave, 'c')}></button>
            <button id={`cSharp${octave}`} onClick={() => onKeyPressed(octave, 'cSharp')}></button>
            <button id={`d${octave}`} onClick={() => onKeyPressed(octave, 'd')}></button>
            <button id={`dSharp${octave}`} onClick={() => onKeyPressed(octave, 'dSharp')}></button>
            <button id={`e${octave}`} onClick={() => onKeyPressed(octave, 'e')}></button>
            <button id={`f${octave}`} onClick={() => onKeyPressed(octave, 'f')}></button>
            <button id={`fSharp${octave}`} onClick={() => onKeyPressed(octave, 'fSharp')}></button>
            <button id={`g${octave}`} onClick={() => onKeyPressed(octave, 'g')}></button>
            <button id={`gSharp${octave}`} onClick={() => onKeyPressed(octave, 'gSharp')}></button>
            <button id={`a${octave}`} onClick={() => onKeyPressed(octave, 'a')}></button>
            <button id={`aSharp${octave}`} onClick={() => onKeyPressed(octave, 'aSharp')}></button>
            <button id={`b${octave}`} onClick={() => onKeyPressed(octave, 'b')}></button>
        </div>
    );

    const keyboardOctaves = [];
    for (let i = 0; i < numOctaves; i++) {
        keyboardOctaves.push(renderKeyboardOctave(i + startingOctave));
    }

    return <div className="keyboard__container">{keyboardOctaves}</div>;
};

Keyboard.propTypes = {
    numOctaves: PropTypes.number,
    startingOctave: PropTypes.number,
    onKeyPressed: PropTypes.func.isRequired,
};

export { Keyboard };
