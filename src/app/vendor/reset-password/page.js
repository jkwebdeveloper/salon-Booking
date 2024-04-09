import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <div className="w-screen min-h-screen">
      <div className="bg-[url('/static/images/login.png')] bg-cover"></div>
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <Link href="/">
          <Image
            src={"/static/images/logo.png"}
            loading="lazy"
            alt="logo"
            className="mx-auto"
            width={150}
            height={150}
          />
        </Link>
        <div className="flex items-center justify-center p-6 mx-auto bg-white rounded-lg shadow-sm ring-1 ring-neutral-300/40">
          <div className="w-full space-y-3">
            <p className="text-lg font-semibold">Login</p>
            <form className="flex flex-col gap-3" noValidate>
              <div className="space-y-1 text-left ">
                <label htmlFor="country" className="label_text">
                  Email Id
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 bg-white border rounded-md input_field"
                  placeholder="Enter your Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
                <div className="w-full">
                  <Button variant="primary" className="w-full">
                    Login
                  </Button>
                </div>
                <p className="underline text-primary_color">Login here</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
