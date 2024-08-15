import React from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const ImagesModal = ({ images, currentIndex, setCurrentIndex, setIsOpen }) => {
  const closeModal = () => setIsOpen(false);

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-3/4 p-4 rounded-lg">
        <button
          className="absolute top-0 right-0 p-2 text-xl font-bold text-black"
          onClick={closeModal}
        >
          <IoMdClose className="text-2xl text-white" />
        </button>
        <div className="flex items-center justify-between">
          <button className="p-2 text-2xl font-bold" onClick={showPrevImage}>
            <IoIosArrowBack className="text-2xl text-white" />
          </button>
          <Image
            src={images[currentIndex]}
            width={1000}
            height={700}
            className="w-full"
            alt={`Salon Image ${currentIndex + 1}`}
          />
          <button className="p-2 text-2xl font-bold" onClick={showNextImage}>
            <IoIosArrowForward className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagesModal;
