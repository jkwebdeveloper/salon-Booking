import Image from "next/image";
import React from "react";
import modal from "../../public/static/images/modal.png";

const model = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={modal}
        alt=""
        loading="lazy"
        objectFit="cover"
        className="relative"
      />
      <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-lg">
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
