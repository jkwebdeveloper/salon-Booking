"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

import { Button, Error, Spinner } from "@/components";
import { POST } from "@/app/api/post";
import { useRouter } from "next/navigation";
import Validation from "@/constants/validation";

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
  const router = useRouter();
  const [footerMenu, setfooterMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const toggle = (i) => {
    if (footerMenu === i) {
      return setfooterMenu(false);
    }

    setfooterMenu(i);
  };
  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await POST.request({ url: "/api/subscribe", form: e.target });
    setLoading(false);
    if (res && res.code == 200) {
      return;
    } else {
      setError(res.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('/static/images/footer_bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        loading: "lazy",
        // width: "100%",
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
      <div className="container px-4 pt-20 mx-auto">
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
            <p className="text-base font-semibold text-left uppercase text-primary_color title heading">
                Join Our Newsletter
              </p>
            <form
              className="block space-y-4 text-black md:hidden"
              noValidate
              onSubmit={(e) => subscribe(e)}
            >
              
              <div className="space-y-2">
                <p className="text-left">Your Email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="p-2 bg-white rounded-md outline-none md:w-4/5 text-md input_field"
                  pattern={Validation?.email?.pattern}
                  required
                />
                <p className="error">{Validation?.email?.msg}</p>
              </div>
              <Button
                variant="primary"
                type="submit"
                disabled={loading}
                className="min-w-[150px]"
              >
                <Spinner show={loading} width="25" height="25" text="Subscribe" />
              </Button>
              {error && <Error error={error} />}
            </form>
            <div>
              <p>© 2024 PamperTree Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid items-center justify-center px-4 mx-auto xl:py-5 2xl:pt-40 top-1/4 md:grid-cols-2 lg:grid-cols-4 lg:px-10 md:pt-16">
        <div className="hidden space-y-4 text-black md:block">
          <p className="text-base font-semibold uppercase text-primary_color title heading">
            Company
          </p>
          <p className="text-sm font-light">
            <Link href="/blog">
              <span className="inline-block footer">Blogs</span>
            </Link>
          </p>
          <p className="text-sm font-light">
            <Link href="/about-us">
              <span className="inline-block footer">About</span>
            </Link>
          </p>
          <p className="text-sm font-light">
            <Link href="/why-us">
              <span className="inline-block footer">Why Us</span>
            </Link>
          </p>
          <p className="text-sm font-light">
            <Link href="/tax-strategy">
              <span className="inline-block footer">Tax Strategy</span>
            </Link>
          </p>
        </div>
        <div className="hidden space-y-4 text-black md:block">
          <p className="text-base font-semibold uppercase text-primary_color title heading">
            Legal
          </p>
          <p className="text-sm font-light">
            <Link href="/terms-conditions">
              <span className="inline-block footer">Terms & Conditions</span>
            </Link>
          </p>
          <p className="text-sm font-light">
            <Link href="/policy">
              <span className="inline-block footer">Privacy</span>
            </Link>
          </p>
          <p className="text-sm font-light">
            <Link href="/cookies">
              <span className="inline-block footer">Coockies</span>
            </Link>
          </p>
          <p className="text-sm font-light">
            <Link href="/modern-slavery-statement">
              <span className="inline-block footer">
                Modern Slavery Statement
              </span>
            </Link>
          </p>
        </div>
        <div className="hidden space-y-4 text-black md:block">
          <p className="text-base font-semibold uppercase text-primary_color title heading">
            USEFUL LINKS
          </p>
          <p className="text-sm font-light">
            <Link href="/contact-us">
              <span className="inline-block footer">Contact Us</span>
            </Link>
          </p>
          <p className="text-sm font-light">
            <span className="inline-block footer">Business Support</span>
          </p>
          <p className="text-sm font-light">
            <Link href="/faqs">
              <span className="inline-block footer">Faqs</span>
            </Link>
          </p>
          <p className="text-sm font-light">
            <Link href="/careers">
              <span className="inline-block footer">Careers</span>
            </Link>
          </p>
        </div>
        <form
          className="hidden space-y-4 text-black md:block"
          noValidate
          onSubmit={(e) => subscribe(e)}
        >
          <p className="text-base font-semibold uppercase text-primary_color title heading">
            Join Our Newsletter
          </p>
          <div className="space-y-2">
            <p>Your Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 bg-white rounded-md outline-none md:w-4/5 text-md input_field"
              pattern={Validation?.email?.pattern}
              required
            />
            <p className="error">{Validation?.email?.msg}</p>
          </div>
          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            className="min-w-[150px]"
          >
            <Spinner show={loading} width="25" height="25" text="Subscribe" />
          </Button>
          {error && <Error error={error} />}
        </form>
      </div>
      <hr className="w-full mt-4 text-primary_color" />
      <div className="container hidden mx-auto md:block">
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
