"use client";

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap, TweenLite } from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const Knob = ({
    precision = 2,
    initialValue = 0,
    minValue = 0,
    maxValue = 1,
    valueChanged,
}) => {
    const [value, setValue] = useState(initialValue.toFixed(precision));
    const knobRef = useRef(null);
    const draggableInstance = useRef(null);

    const calculateRotation = () => {
        const range = Math.abs(minValue - maxValue);
        const rotation = ((value - minValue) / range - 0.5) * 300;
        return rotation;
    };

    const calculateValue = () => {
        const range = Math.abs(minValue - maxValue);
        let rotation = draggableInstance.current.rotation / 300 + 0.5;

        if (rotation <= 0) {
            rotation = 0;
        }

        if (rotation >= 1) {
            rotation = 1;
        }

        const newValue = ((rotation * parseFloat(range)) + minValue).toFixed(precision);
        setValue(newValue);

        if (valueChanged) {
            valueChanged(parseFloat(newValue));
        }
    };

    useEffect(() => {
        TweenLite.set(knobRef.current, {
            rotation: calculateRotation(),
        });

        Draggable.create(knobRef.current, {
            type: 'rotation',
            throwProps: false,
            edgeResistance: 0.85,
            onDrag: calculateValue,
            bounds: {
                minRotation: -150,
                maxRotation: 150,
            },
        });

        draggableInstance.current = Draggable.get(knobRef.current);

        return () => {
            if (draggableInstance.current) {
                draggableInstance.current.kill();
            }
        };
    }, []);

    return (
        <div
            ref={knobRef}
            className='knob'
        ></div>
    );
};

Knob.propTypes = {
    precision: PropTypes.number,
    initialValue: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    valueChanged: PropTypes.func.isRequired,
};

export { Knob };
