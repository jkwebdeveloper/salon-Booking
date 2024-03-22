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
      className="container w-full"
      style={{
        backgroundImage: `url('/static/images/footer_bg.png')`,
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
          className="object-cover w-full h-full "
        />
      </div> */}
      <div className="px-4 pt-20">
        <div className="block md:hidden">
          <div className="space-y-8 text-center">
            <div className="mx-auto">
              <Image
                src={"/static/images/logo.png"}
                alt="logo"
                loading="lazy"
                className="mx-auto"
                width={150}
                height={150}
              />
            </div>
            <div className="w-full">
              <button type="button" className="primary_button">
                Join us for business
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div>
                <Image
                  src={"/static/images/appstore2.png"}
                  alt=""
                  loading="lazy"
                  width={150}
                  height={150}
                />
              </div>
              <div>
                <Image
                  src={"/static/images/playstore.png"}
                  alt=""
                  loading="lazy"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="p-2 bg-white rounded-full cursor-pointer text-primary_color hover:bg-primary_color hover:text-white">
                <ImFacebook className="text-lg" />
              </div>
              <div className="p-2 bg-white rounded-full cursor-pointer text-primary_color hover:bg-primary_color hover:text-white">
                <BsTwitterX className="text-lg" />
              </div>
              <div className="p-2 bg-white rounded-full cursor-pointer text-primary_color hover:bg-primary_color hover:text-white">
                <FaInstagram className="text-lg" />
              </div>
              <div className="p-2 bg-white rounded-full cursor-pointer text-primary_color hover:bg-primary_color hover:text-white">
                <ImLinkedin2 className="text-lg" />
              </div>
              <div className="p-2 bg-white rounded-full cursor-pointer text-primary_color hover:bg-primary_color hover:text-white">
                <FaPinterestP className="text-lg" />
              </div>
            </div>
            <hr className="w-full mt-4 bg-primary_color" />
            {FooterData.map((item, i) => (
              <div className="block space-y-4 text-black md:hidden" key={i}>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <p className="text-base font-semibold uppercase text-primary_color">
                    {item?.title}
                  </p>
                  {footerMenu === i ? (
                    <IoIosArrowUp className="text-lg text-primary_color" />
                  ) : (
                    <IoIosArrowDown className="text-lg text-primary_color" />
                  )}
                </div>
                <hr className="w-full bg-primary_color" />
                {footerMenu === i ? (
                  <div className="space-y-4 text-left transition duration-500">
                    <div className="space-y-3 text-left">
                      <p className="text-sm font-light cursor-pointer ">
                        <span className="inline-block navcolor">
                          {item?.page1}
                        </span>
                      </p>
                      <p className="text-sm font-light cursor-pointer ">
                        <span className="inline-block navcolor">
                          {item?.page2}
                        </span>
                      </p>
                      <p className="text-sm font-light cursor-pointer ">
                        <span className="inline-block navcolor">
                          {item?.page3}
                        </span>
                      </p>
                      <p className="text-sm font-light cursor-pointer ">
                        <span className="inline-block navcolor">
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
              <p className="text-lg font-semibold text-center text-primary_color">
                Join Our Newsletter
              </p>
              <div className="flex mx-auto bg-white rounded-full shadow-lg">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full rounded-full outline-none mx-9"
                />
                <button
                  type="button"
                  className="w-full px-4 transition primary_button hover:bg-blue_button/80 active:scale-90"
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
      <div className="grid items-center justify-center px-4 py-5 top-1/4 md:grid-cols-2 lg:grid-cols-4 lg:px-10 md:pt-16">
        <div className="hidden space-y-4 text-black md:block">
          <p className="text-base font-semibold uppercase text-primary_color title heading">
            Company
          </p>
          <p className="text-sm font-light cursor-pointer ">
            <span className="inline-block footer">Blogs</span>
          </p>
          <p className="text-sm font-light cursor-pointer ">
            <span className="inline-block footer">About</span>
          </p>
          <p className="text-sm font-light cursor-pointer ">
            <span className="inline-block footer">Why Us</span>
          </p>
          <p className="text-sm font-light cursor-pointer ">
            <span className="inline-block footer">Tax Strategy</span>
          </p>
        </div>
        <div className="hidden space-y-4 text-black md:block">
          <p className="text-base font-semibold uppercase text-primary_color title heading">
            Legal
          </p>
          <p className="text-sm font-light cursor-pointer ">
            <span className="inline-block footer">Terms & Conditions</span>
          </p>
          <p className="text-sm font-light cursor-pointer ">
            <span className="inline-block footer">Privacy</span>
          </p>
          <p className="text-sm font-light cursor-pointer ">
            <span className="inline-block footer">Coockies</span>
          </p>
          <p className="text-sm font-light cursor-pointer ">
            <span className="inline-block footer">
              Modern Slavery Statement
            </span>
          </p>
        </div>
        <div className="hidden space-y-4 text-black md:block">
          <p className="text-base font-semibold uppercase text-primary_color title heading">
            USEFUL LINKS
          </p>
          <p className="text-sm font-light cursor-pointer ">
            <span className="inline-block footer">Contact Us</span>
          </p>
          <p className="text-sm font-light cursor-pointer ">
            <span className="inline-block footer">Business Support</span>
          </p>
          <p className="text-sm font-light cursor-pointer ">
            <span className="inline-block footer">Faqs</span>
          </p>
          <p className="text-sm font-light cursor-pointer ">
            <span className="inline-block footer">Careers</span>
          </p>
        </div>
        <div className="hidden space-y-4 text-black md:block">
          <p className="text-base font-semibold uppercase text-primary_color title heading">
            Join Our Newsletter
          </p>
          <div className="space-y-2">
            <p>Your Email</p>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-4/5 p-2 bg-white rounded-md outline-none"
            />
          </div>
          <button type="button" className="primary_button">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="w-full mt-4 text-primary_color" />
      <div className="hidden md:block">
        <div className="flex items-center justify-between py-5 mx-2">
          <div>
            <Image
              src={"/static/images/logo.png"}
              alt="logo"
              loading="lazy"
              width={150}
              height={150}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white rounded-full cursor-pointer text-primary_color hover:bg-primary_color hover:text-white">
              <ImFacebook className="text-lg" />
            </div>
            <div className="p-2 bg-white rounded-full cursor-pointer text-primary_color hover:bg-primary_color hover:text-white">
              <BsTwitterX className="text-lg" />
            </div>
            <div className="p-2 bg-white rounded-full cursor-pointer text-primary_color hover:bg-primary_color hover:text-white">
              <FaInstagram className="text-lg" />
            </div>
            <div className="p-2 bg-white rounded-full cursor-pointer text-primary_color hover:bg-primary_color hover:text-white">
              <ImLinkedin2 className="text-lg" />
            </div>
            <div className="p-2 bg-white rounded-full cursor-pointer text-primary_color hover:bg-primary_color hover:text-white">
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
