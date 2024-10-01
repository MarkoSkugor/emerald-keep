"use client";

const AboutModal = () => {
  return (
    <>
      <button
        onClick={() => document.getElementById('about-modal').showModal()}
        className="btn-info btn min-w-48 rounded-full text-4xl btn-lg font-blackcastleshadow sm:btn-wide tracking-wider"
      >
        About
      </button>

      <dialog id="about-modal" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box font-augusta bg-stone-900 text-stone-100 min-h-75dvh">
          <h3 className="font-bold font-augustashadow text-4xl">Hail, Weary Traveler! </h3>
          <p className="py-4">
            You have stumbled upon the workshop of The Emerald Keep. In this hallowed forge, hidden deep within the ancient woods (my garage in Columbus, OH), are fashioned arcane conduits of all shapes and sizes, perfect for wielders of magic, adventurers, and seekers of the arcane arts (aka nerds).
            <br /><br />
            Each staff is carved from sacred woods, imbued with the essence of the earth, sky, and stars. Bound in leathers from elusive beasts and crowned with rare stones (salvaged leather and whatever cool stuff I can find on the internet or at thrift stores), these staves are more than mere tools—they are extensions of the caster&apos;s will, conduits of power capable of channeling the mightiest of spells (they also look really cool I think!).
            <br /><br />
            - The Keeper
          </p>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AboutModal;
