"use client";
import React, { useState } from 'react';
import data from 'data/gallery.json';

const GalleryModal = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <button
                onClick={() => document.getElementById('gallery-modal').showModal()}
                className="btn-info btn min-w-48 rounded-full text-4xl btn-lg font-blackcastleshadow sm:btn-wide tracking-wider"
            >
                Gallery
            </button>

            <dialog id="gallery-modal" className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box flex flex-col overflow-hidden font-berryrotunda bg-stone-900 text-stone-100 min-h-75dvh">
                    <h3 className="font-bold font-berryrotunda text-2xl">Gallery</h3>
                    <div className="mt-4 p-2 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {data.map((image) => (
                            <div key={image.id} className="relative">
                                <img
                                    srcSet={`/.netlify/images?url=images/${image.fileName}&w=640 640w, /.netlify/images?url=images/${image.fileName}&w=1280 1280w, /.netlify/images?url=images/${image.fileName}&w=2048 2048w`}
                                    sizes="(max-width: 1024px) 100vw, 1024px"
                                    alt={`image-${image.id}`}
                                    className="object-cover w-full h-48 cursor-pointer rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                                    onClick={() => setSelectedImage(image.fileName)}
                                />
                            </div>
                        ))}
                    </div>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost fixed right-2 top-2">✕</button>
                    </form>
                </div>

                {selectedImage && (
                    <div className="fixed w-dvw h-dvh z-50 flex items-center justify-center bg-black bg-opacity-80">
                        <div className="relative w-full">
                            <button className="btn btn-md btn-circle btn-outline fixed right-2 top-2 text-white bg-black border-zinc-400 hover:border-zinc-400" onClick={closeModal}>✕</button>
                            <img
                                srcSet={`/.netlify/images?url=images/${selectedImage}&w=640 640w, /.netlify/images?url=images/${selectedImage}&w=1280 1280w, /.netlify/images?url=images/${selectedImage}&w=2048 2048w`}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                alt="Selected"
                                className="object-contain w-full h-screen"
                            />
                        </div>
                    </div>
                )}
            </dialog>
        </>
    );
};

export default GalleryModal;
