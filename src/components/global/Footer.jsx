"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FooterData = [
  {
    id: 1,
    title: "Company",
    page1: "Blogs",
    page2: "About",
    page3: "Why Us",
    page4: "Tax Strategy",
  },
  {
    id: 2,
    title: "Legal",
    page1: "Terms & Conditions",
    page2: "Privacy",
    page3: "Coockies",
    page4: "Modern Slavery Statement",
  },
  {
    id: 3,
    title: "USEFUL LINKS",
    page1: "Contact Us",
    page2: "Business Support",
    page3: "Faqs",
    page4: "Careers",
  },
];

const Footer = () => {
  const [footerMenu, setfooterMenu] = useState(false);
  const toggle = (i) => {
    // console.log(i)
    if (footerMenu === i) {
      return setfooterMenu(false);
    }

    setfooterMenu(i);
  };
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('/static/images/footer.png')`,
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
      <div className="px-4 pt-20">
        <div className="md:hidden block">
          <div className="space-y-8 text-center">
            <div className="mx-auto">
              <Image src={'/static/images/logo.png'} alt="logo" loading="lazy" className="mx-auto" width={150} height={150} />
            </div>
            <div className="w-full">
              <button type="button" className="primary_button">
                Join us for business
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div>
                <Image src={'/static/images/appstore2.png'} alt="" loading="lazy" width={150} height={150} />
              </div>
              <div>
                <Image src={'/static/images/playstore.png'} alt="" loading="lazy" width={150} height={150} />
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center">
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
            <hr className="w-full bg-primary_color mt-4" />
            {FooterData.map((item, i) => (
              <div className="space-y-4 text-black md:hidden block" key={i}>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <p className="text-primary_color text-base uppercase font-semibold">
                    {item?.title}
                  </p>
                  {footerMenu === i ? (
                    <IoIosArrowUp className="text-primary_color text-lg" />
                  ) : (
                    <IoIosArrowDown className="text-primary_color text-lg" />
                  )}
                </div>
                <hr className="bg-primary_color w-full" />
                {footerMenu === i ? (
                  <div className="transition text-left duration-500 space-y-4">
                    <div className="space-y-3 text-left">
                      <p className="text-sm cursor-pointer font-light ">
                        <span className="navcolor inline-block">
                          {item?.page1}
                        </span>
                      </p>
                      <p className="text-sm cursor-pointer font-light ">
                        <span className="navcolor inline-block">
                          {item?.page2}
                        </span>
                      </p>
                      <p className="text-sm cursor-pointer font-light ">
                        <span className="navcolor inline-block">
                          {item?.page3}
                        </span>
                      </p>
                      <p className="text-sm cursor-pointer font-light ">
                        <span className="navcolor inline-block">
                          {item?.page4}
                        </span>
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
            <div className="space-y-3">
              <p className="text-primary_color text-lg font-semibold text-center">
                Join Our Newsletter
              </p>
              <div className="bg-white mx-auto rounded-full shadow-lg flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="outline-none w-full rounded-full mx-9"
                />
                <button
                  type="button"
                  className="primary_button px-4 w-full hover:bg-blue_button/80 active:scale-90 transition"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <p>© 2024 PamperTree Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-1/4 justify-center items-center grid md:grid-cols-2 lg:grid-cols-4 lg:px-10 md:pt-16 py-5 px-4">
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
          <p className="text-primary_color text-base uppercase font-semibold title heading">
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
          <p className="text-primary_color text-base uppercase font-semibold title heading">
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
      <div className="md:block hidden">
        <div className="flex py-5 justify-between items-center mx-2">
          <div>
            <Image src={'/static/images/logo.png'} alt="logo" loading="lazy" width={150} height={150} />
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
    </div>
  );
};

export default Footer;
