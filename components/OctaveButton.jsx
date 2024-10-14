import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const OctaveButton = ({ disabled = false, onClick, direction, children }) => {
    const [active, setActive] = useState(false);
    let timeout;

    const handleButtonClick = (event) => {
        if (onClick) {
            onClick(event);
        }
        setActive(true);
        timeout = setTimeout(() => {
            setActive(false);
        }, 50);
    };

    useEffect(() => {
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <button
            disabled={disabled}
            type="button"
            className={`octave-button ${direction} ${active ? 'active' : ''}`}
            onClick={handleButtonClick}
        >
            {children}
        </button>
    );
};

OctaveButton.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node,
    direction: 'up' | 'down',
};

export { OctaveButton };
