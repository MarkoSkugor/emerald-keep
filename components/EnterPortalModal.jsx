"use client";

const EnterPortalModal = ({ enterPortal }) => {
    return (
        <>
            <button onClick={() => document.getElementById('synth-modal').showModal()} className="enter-portal-button"></button>

            <dialog id="synth-modal" className="modal synth-modal text-stone-100">
                <div className="dark-shadow flex flex-col gap-4 justify-center items-center">
                    <h3 className="font-bold font-berryrotunda text-2xl pb-6 red-shadow">Enter the portal?</h3>
                    <button
                        onClick={enterPortal}
                        className="btn-outline btn-secondary btn bg-black min-w-48 rounded-full text-4xl btn-lg font-blackcastleshadow sm:btn-wide tracking-wider"
                    >
                        Yes
                    </button>
                    <form method="dialog">
                        <button
                            className="btn-outline btn-secondary btn bg-black min-w-48 rounded-full text-4xl btn-lg font-blackcastleshadow sm:btn-wide tracking-wider"
                        >
                            No
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default EnterPortalModal;
