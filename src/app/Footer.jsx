import Image from "next/image";
import React from "react";
import footer from "../../public/static/images/footer_bg.png";
import Logo from "../../public/static/images/logo.png";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${footer.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        loading: "lazy",
        // width: "100%",
        // height: "100%",
      }}
    >
      {/* <div className="absolute">
        <Image
          src={footer}
          alt=""
          loading="lazy"
          objectFit="cover"
          className=" object-cover w-full h-full"
        />
      </div> */}
      <div className="top-1/4 justify-center items-center grid md:grid-cols-2 lg:grid-cols-4 lg:px-10 md:pt-32 py-5 px-4">
        <div className="space-y-4 text-black md:block hidden">
          <p className="text-primary_color text-base uppercase font-semibold title heading">
            Company
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="footer inline-block">Blogs</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="footer inline-block">About</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="footer inline-block">Why Us</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="footer inline-block">Tax Strategy</span>
          </p>
        </div>
        <div className="space-y-4 text-black md:block hidden">
          <p className="text-primary_color text-base uppercase font-semibold title heading">
            Legal
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="footer inline-block">Terms & Conditions</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="footer inline-block">Privacy</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="footer inline-block">Coockies</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="footer inline-block">
              Modern Slavery Statement
            </span>
          </p>
        </div>
        <div className="space-y-4 text-black md:block hidden">
          <p className="text-[#3575B1] text-base uppercase font-semibold title heading">
            USEFUL LINKS
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="footer inline-block">Contact Us</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="footer inline-block">Business Support</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="footer inline-block">Faqs</span>
          </p>
          <p className="text-sm cursor-pointer font-light ">
            <span className="footer inline-block">Careers</span>
          </p>
        </div>
        <div className="space-y-4 text-black md:block hidden">
          <p className="text-[#3575B1] text-base uppercase font-semibold title heading">
            Join Our Newsletter
          </p>
          <div className="space-y-2">
            <p>Your Email</p>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="outline-none w-4/5 bg-white rounded-md p-2"
            />
          </div>
          <button type="button" className="primary_button">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="w-full text-primary_color mt-4" />
      <div className="flex py-5 justify-between items-center mx-2">
        <div>
          <Image src={Logo} />
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-full p-2 text-primary_color hover:bg-primary_color hover:text-white cursor-pointer">
            <ImFacebook className="text-lg" />
          </div>
          <div className="bg-white rounded-full p-2 text-primary_color hover:bg-primary_color hover:text-white cursor-pointer">
            <BsTwitterX className="text-lg" />
          </div>
          <div className="bg-white rounded-full p-2 text-primary_color hover:bg-primary_color hover:text-white cursor-pointer">
            <FaInstagram className="text-lg" />
          </div>
          <div className="bg-white rounded-full p-2 text-primary_color hover:bg-primary_color hover:text-white cursor-pointer">
            <ImLinkedin2 className="text-lg" />
          </div>
          <div className="bg-white rounded-full p-2 text-primary_color hover:bg-primary_color hover:text-white cursor-pointer">
            <FaPinterestP className="text-lg" />
          </div>
        </div>
        <div>
          <p>© 2024 PamperTree Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
