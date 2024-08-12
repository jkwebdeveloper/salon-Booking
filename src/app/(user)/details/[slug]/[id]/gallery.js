'use client';
import React from 'react'
import { v4 } from 'uuid';
import Image from 'next/image';
import ImagesModal from '@/app/(user)/details/imagesModal';

function Gallery({ salon_images }) {
     console.log(salon_images)
     const [isOpen, setIsOpen] = React.useState(false);
     const [currentIndex, setCurrentIndex] = React.useState(0);

     const openModal = index => {
          setCurrentIndex(index);
          setIsOpen(true);
     };
     return (
          <>
               <div className="w-[80%] gap-3">
                    <Image
                         src={salon_images[0]}
                         width={1000}
                         height={700}
                         className="w-full cursor-pointer"
                         alt="Image 1"
                         onClick={() => openModal(0)}
                    />
               </div>
               <div className="w-[40%]">
                    <div className="grid gap-3">
                         {salon_images.slice(1).map((src, index) => (
                              <div
                                   key={v4()}
                                   className="relative flex items-center justify-center w-full text-center cursor-pointer group"
                              >
                                   <div className="relative w-full overflow-hidden">
                                        <Image
                                             src={src}
                                             width={400}
                                             height={300}
                                             className="relative w-full cursor-pointer"
                                             alt={`Image ${index + 2}`}
                                             onClick={() => openModal(index + 1)}
                                        />
                                        <div className="absolute z-20 flex items-center justify-center w-full h-full p-10 space-y-3 text-sm text-white opacity-0 2xl:flex-row rounded-xl lg:p-2 bg-black/50 group-hover:bottom-0 group-hover:opacity-100">
                                             <p className="text-3xl font-semibold">
                                                  {index + 2}+
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
               {isOpen && (
                    <ImagesModal
                         images={salon_images}
                         currentIndex={currentIndex}
                         setCurrentIndex={setCurrentIndex}
                         setIsOpen={setIsOpen}
                    />
               )}
          </>
     )
}

export default Gallery