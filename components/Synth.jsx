"use client";
import React, { useEffect, useState } from 'react';
import { Keyboard } from './Keyboard';
import { TeethKeyboard } from './TeethKeyboard';
import { Octave } from './Octave';
import { SynthEngine } from './SynthEngine';
import { WaveSelector } from './WaveSelector';

const Synth = () => {
    const [started, setStarted] = useState(false);
    const [waveForm, setWaveform] = useState('sine');
    const [startingOctave, setStartingOctave] = useState(3);
    const [synthEngine, setSynthEngine] = useState(null);
    const [scale, setScale] = useState([]);

    useEffect(() => {
        setStarted(true);
        setSynthEngine(new SynthEngine());
        initializeScale();
    }, []);

    useEffect(() => {
        if (synthEngine) {
            synthEngine.setWaveForm(waveForm);
        }
    }, [waveForm]);

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
            <div className="flex flex-col z-10 items-center justify-center gap-4">
                <img className="w-96" srcSet={`/.netlify/images?url=images/skull.png&w=640 640w, /.netlify/images?url=images/skull.png&w=1280 1280w, /.netlify/images?url=images/skull.png&w=2048 2048w`} />
                <WaveSelector
                    selectWaveform={setWaveform}
                    selectedWaveform={waveForm}
                >
                </WaveSelector>
                <TeethKeyboard
                    numOctaves={1}
                    startingOctave={startingOctave}
                    onKeyPressed={onKeyPressed}
                >
                </TeethKeyboard>
            </div>
        </>
    );
};

export default Synth;
