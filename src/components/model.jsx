import Image from "next/image";
import React from "react";
import modal from "../../public/static/images/modal.png";

const model = () => {
  return (
    <div className="w-full h-screen relative">
      <Image
        src={modal}
        alt=""
        loading="lazy"
        objectFit="cover"
        className="relative"
      />
      <div className="flex justify-center items-center p-4 bg-white shadow-lg rounded-md">
        <div className="space-y-3">
          <p>success</p>
          <p>Email with further instruction to reset password has been sent.</p>
          <button type="button" className="primary_button">
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default model;
