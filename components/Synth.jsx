"use client";

import React, { useEffect, useState } from 'react';
import { Knob } from './Knob';
import { TeethKeyboard } from './TeethKeyboard';
import { Octave } from './Octave';
import { OctaveButton } from './OctaveButton';
import { PortalAudioConfirmation } from './PortalAudioConfirmation';
import { SynthEngine } from './SynthEngine';
import { WaveSelector } from './WaveSelector';

const Synth = () => {
    const [started, setStarted] = useState(false);
    const [waveForm, setWaveform] = useState('sawtooth');
    const [startingOctave, setStartingOctave] = useState(3);
    const [filterCutoff, setFilterCutoff] = useState(350);
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

    useEffect(() => {
        if (synthEngine) {
            synthEngine.setFilterCutoff(filterCutoff);
        }
    }, [filterCutoff]);

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
            <div className="flex flex-col z-10 items-center justify-center">
                <div className="flex justify-center items-center">
                    <img className="w-80 skull" srcSet={`/.netlify/images?url=images/skull.webp&w=640 640w, /.netlify/images?url=images/skull.webp&w=1280 1280w, /.netlify/images?url=images/skull.webp&w=2048 2048w`} />
                    <div className="flex flex-col gap-4 justify-center items-center absolute pl-3 pb-20">
                        <OctaveButton
                            direction="up"
                            disabled={startingOctave === 7}
                            onClick={() => setStartingOctave(startingOctave + 1)}
                            aria-label='octave up'
                        >
                        </OctaveButton>
                        <div className="knob-shadow">
                            <Knob
                                precision={0}
                                initialValue={350}
                                minValue={20}
                                maxValue={15000}
                                valueChanged={setFilterCutoff}
                            ></Knob>
                        </div>
                        <OctaveButton
                            direction="down"
                            disabled={startingOctave === 0}
                            onClick={() => setStartingOctave(startingOctave - 1)}
                            aria-label='octave down'
                        >
                        </OctaveButton>
                    </div>
                </div>
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
            <PortalAudioConfirmation audioContext={synthEngine?.audioContext} />
        </>
    );
};

export default Synth;
