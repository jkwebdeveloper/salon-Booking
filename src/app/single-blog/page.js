import Image from "next/image";
import React from "react";
import Button from "@/components/ui/button";

const Singleblog = () => {
  return (
    <div className="container">
      <div className="py-6 space-y-4">
        <h1 className="font-bold text-xl">
          Nail Extensions - Acrylic or Hard Gel - Which One You Should Get?
        </h1>
        <div className="items-center flex gap-2">
          <Image
            src={"/static/images/img.png"}
            width={50}
            height={50}
            alt=""
            loading="lazy"
          />
          <div>
            <p className="font-bold">Admin</p>
            <p>Feb 25, 2024 05:15 AM</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 ">
          <div className="col-span-2">
            <Image
              src={"/static/images/blog/blog.png"}
              width={900}
              height={400}
              alt="blog"
              loading="lazy"
              className="object-cover object-center"
            />
            <div className="">
              <p className="font-bold text-xl">Nail Extension - What is it?</p>
              <p className="text-[#666666] text-sm text-justify">
                As popular fashion accessories, nail extensions or nail
                enhancements add length and strength to your natural nails in a
                few minutes. While applying the nail enhancements, the nail
                technician will place or affix the artificial nails on your
                natural nails in a number of ways. Also, she will allow you to
                choose from a wide range of nail extensions – soft gel nails,
                hard gel nails, acrylic nails, and shellac nails. The nail
                extensions differ from each other in several aspects including
                results.
              </p>
            </div>
          </div>
          <div className="bg-[#F5E8FF] rounded-lg w-full p-4">
            <h1 className="font-semibold">Contact</h1>
            <p className="text-sm text-[#6D6D6D]">Please share your details</p>
            <form className="space-y-4">
              <div className="w-full space-y-1 text-left">
                <label htmlFor="" text="Name" />
                <input
                  type="text"
                  name="name"
                  className="input_field"
                  placeholder="Enter your Address"
                  disabled
                />
              </div>
              <div className="w-full space-y-1 text-left">
                <label htmlFor="" text="Email" />
                <input
                  type="text"
                  name="email"
                  className="input_field"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="w-full space-y-1 text-left">
                <label htmlFor="" text="Phone" />
                <input
                  type="text"
                  name="phone"
                  className="input_field"
                  placeholder="8947987892"
                />
              </div>
              <div className="w-full space-y-1 text-left">
                <label htmlFor="" text="Message" />
                <input
                  type="text"
                  name="message"
                  className="input_field"
                  placeholder="type here"
                />
              </div>
              <Button variant="primary" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div className="">
          <p className="font-bold text-xl">Nail Extension - What is it?</p>
          <p className="text-[#666666] text-sm text-justify">
            As popular fashion accessories, nail extensions or nail enhancements
            add length and strength to your natural nails in a few minutes.
            While applying the nail enhancements, the nail technician will place
            or affix the artificial nails on your natural nails in a number of
            ways. Also, she will allow you to choose from a wide range of nail
            extensions – soft gel nails, hard gel nails, acrylic nails, and
            shellac nails. The nail extensions differ from each other in several
            aspects including results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singleblog;
