"use client";

const EventsModal = () => {
  return (
    <>
      <button
        onClick={() => document.getElementById('events-modal').showModal()}
        className="btn-info btn min-w-48 rounded-full text-4xl btn-lg font-blackcastleshadow sm:btn-wide tracking-wider"
      >
        Events
      </button>

      <dialog id="events-modal" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box font-augusta bg-stone-900 text-stone-100 min-h-75dvh">
          <h3 className="font-bold font-augustashadow text-4xl">Events</h3>
          <p className="py-4">
            Nothing to see here...
          </p>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default EventsModal;
