"use client";
import React, { useEffect, useState } from 'react';
import { Keyboard } from './Keyboard';
import { Octave } from './Octave';
import { SynthEngine } from './SynthEngine';

const Synth = () => {
    const [started, setStarted] = useState(false);
    const [waveForm, setWaveform] = useState('square');
    const [startingOctave, setStartingOctave] = useState(3);
    const [synthEngine, setSynthEngine] = useState(null);
    const [scale, setScale] = useState([]);

    useEffect(() => {
        setStarted(true);
        setSynthEngine(new SynthEngine());
        initializeScale();
    }, []);

    const initializeScale = () => {
        const A4 = 440;
        const newScale = [];

        for (let i = -4; i < 6; i++) {
            let a = A4 * Math.pow(2, i);
            let octave = new Octave(a);
            newScale.push(octave);
        }

        setScale(newScale);
    };

    const onKeyPressed = (octave, note) => {
        synthEngine.playTone(scale[octave][note]);
    };

    return (
        <>
            <Keyboard
                numOctaves={1}
                startingOctave={startingOctave}
                onKeyPressed={onKeyPressed}
            >
            </Keyboard>
        </>
    );
};

export default Synth;
