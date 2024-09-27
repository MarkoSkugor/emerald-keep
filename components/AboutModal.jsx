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
        <div className="modal-box font-augusta bg-stone-900 text-stone-100">
          <h3 className="font-bold font-augustashadow text-3xl">Hail, weary traveler! </h3>
          <p className="py-4">
            You have stumbled upon the workshop of The Emerald Keep. In this hallowed forge, hidden deep within the ancient woods, are fashioned arcane conduits of all shapes and sizes, perfect for wielders of magic, adventurers, and seekers of the arcane arts.
            <br /><br />
            Each staff is carved from sacred woods, imbued with the essence of the earth, sky, and stars. Bound in leathers from elusive beasts and crowned with rare stones, these staves are more than mere tools—they are extensions of the caster’s will, conduits of power capable of channeling the mightiest of spells.
            <br /><br />
            Whether you seek a sturdy staff for your next Dungeons & Dragons campaign, a resplendent piece to complete your Renaissance Faire attire, or a relic capable of unleashing forgotten sorceries, The Emerald Keep is sure to have the artifact you seek hidden within it's vaults.
            <br /><br />
            In this place, magic breathes in every grain of wood, waiting for a worthy hand to summon its power. Step forth and claim the arcane tool you need to conquer your next adventure. Your destiny awaits, and it shall be grand indeed!
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
