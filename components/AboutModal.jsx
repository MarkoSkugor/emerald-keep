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
        <div className="modal-box font-berryrotunda bg-stone-900 text-stone-100 min-h-75dvh">
          <h3 className="font-bold font-berryrotunda text-2xl">Hail, Weary Traveler! </h3>
          <p className="py-4 text-sm">
            You have stumbled upon the workshop of The Emerald Keep, where I make wizard staffs using locally sourced wood and materials out of Columbus, OH. Although I&apos;m not currently offering shipping, I do hope to see you at a renaissance faire or other medieval themed event soon!
            <br /><br />
            Each staff is carved from sacred woods, imbued with the essence of the earth, sky, and stars. Bound in leathers from elusive beasts and crowned with rare stones, these staves are extensions of the caster&apos;s will — conduits of arcane power capable of channeling the most ancient of spells. They also look cool.
            <br /><br />
            - The Keeper
          </p>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost fixed right-2 top-2">✕</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AboutModal;
