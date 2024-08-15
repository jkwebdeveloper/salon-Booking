'use client';
import React from 'react'
import { v4 } from 'uuid';
import Image from 'next/image';
import ImagesModal from '@/app/(user)/details/imagesModal';

function Gallery({ salon_images }) {
     const [isOpen, setIsOpen] = React.useState(false);
     const [currentIndex, setCurrentIndex] = React.useState(0);

     const openModal = index => {
          setCurrentIndex(index);
          setIsOpen(true);
     };
     return (
          <>
               <div className='grid w-full grid-cols-3 gap-6'>
                    <div className="h-full col-span-2 gap-3">
                         <Image
                              src={process.env.NEXT_PUBLIC_SERVERURL + salon_images[0]?.images}
                              width={1000}
                              height={700}
                              className="w-full h-full cursor-pointer rounded-2xl ring-neutral-300 ring-1"
                              alt="Salon Image 1"
                              onClick={() => openModal(0)}
                         />
                    </div>
                    <div className="flex flex-col gap-6">
                         {salon_images.slice(0, 2).map((src, index) => (
                              <div
                                   key={v4()}
                                   className="relative flex items-center justify-center w-full h-full text-center cursor-pointer group"
                              >
                                   <Image
                                        src={process.env.NEXT_PUBLIC_SERVERURL + src.images}
                                        width={400}
                                        height={300}
                                        className="relative object-cover w-full h-full cursor-pointer rounded-2xl ring-neutral-300 ring-1"
                                        alt={`Salon Image ${index + 2}`}
                                        onClick={() => openModal(index + 1)}
                                   />
                                   {(salon_images.length - 4 && index == 1) ? <div className="absolute z-20 flex items-center justify-center w-full h-full p-10 space-y-3 text-sm text-white opacity-0 2xl:flex-row rounded-xl lg:p-2 bg-black/50 group-hover:bottom-0 group-hover:opacity-100">
                                        <p className="text-3xl font-semibold">
                                             {salon_images.length - 4}+
                                        </p>
                                   </div> : null}
                              </div>
                         ))}
                    </div>
               </div>
               {isOpen && (
                    <ImagesModal
                         images={salon_images.map(({ images }) => process.env.NEXT_PUBLIC_SERVERURL + images)}
                         currentIndex={currentIndex}
                         setCurrentIndex={setCurrentIndex}
                         setIsOpen={setIsOpen}
                    />
               )}
          </>
     )
}

export default Gallery