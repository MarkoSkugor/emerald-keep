"use client";

import React, { useEffect } from 'react';

const PortalAudioConfirmation = ({ audioContext }) => {
    useEffect(() => {
        document.getElementById('confirm-audio-modal').showModal();
    }, [audioContext]);

    useEffect(() => {
        const showDialog = () => {
            document.getElementById('confirm-audio-modal').showModal();
        };

        // Function to check the visibility state of the page
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                showDialog();
            }
        };

        // Function to monitor AudioContext's state changes
        const monitorAudioContextState = () => {
            if (audioContext && audioContext.state === 'suspended') {
                showDialog();
            }
        };

        // Attach event listener for visibility change
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Check AudioContext's state and set up an event listener if applicable
        if (audioContext) {
            audioContext.onstatechange = monitorAudioContextState;
        }

        // Clean up event listeners on component unmount
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (audioContext) {
                audioContext.onstatechange = null;
            }
        };
    }, [audioContext]);

    // Handle button click to resume the AudioContext
    const handleOkClick = () => {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume().then(() => {
                console.log('AudioContext resumed');
            }).catch((error) => {
                console.error('Error resuming AudioContext:', error);
            });
        }
    };

    return (
        <dialog id="confirm-audio-modal" className="modal synth-modal text-stone-100">
            <div className="dark-shadow flex flex-col gap-4 justify-center items-center">
                <h3 className="font-bold font-berryrotunda text-9xl red-shadow pr-5">!</h3>
                <h3 className="font-bold font-berryrotunda text-xl pb-6 red-shadow max-w-60 text-center">
                    Please ensure your device is not in silent mode and the volume is turned up.
                </h3>
                <form method="dialog">
                    <button
                        className="btn-outline btn-secondary btn bg-black min-w-48 rounded-full text-4xl btn-lg font-blackcastleshadow sm:btn-wide tracking-wider"
                        onClick={handleOkClick}
                    >
                        Ok
                    </button>
                </form>
            </div>
        </dialog>
    );
};

export { PortalAudioConfirmation };
