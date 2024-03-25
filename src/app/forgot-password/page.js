'use client';
import Image from "next/image";
import React from "react";
import Link from "next/link";

import { Button, Error, Spinner, SuccessPopup } from "@/components";
import { POST } from "@/app/api/post";
import {
  Dialog,
  DialogContent
} from "@/components/ui/dialog";

const ForgotPassword = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [resetPass, setResetPass] = React.useState(false);

  const resetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({ url: "/forgot-password", form: e.target });
    setLoading(false);
    if (resp && Object.keys(resp).length > 0 && resp.status === "Success") {
      setResetPass(true);
      return;
    }
    setError(resp.message);
  };
  return (
    <div className="grid w-screen lg:grid-cols-2">
      <div className="hidden lg:block bg-[url('/static/images/signin.png')] bg-cover"></div>
      <div className="lg:w-full bg-[rgb(250,250,250)] p-3 relative z-0 min-h-screen">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div>
            <Link href="/">
              <Image src={'/static/images/logo.png'} loading="lazy" alt="logo" width={150} height={75} className="mx-auto" />
            </Link>
          </div>
          <div className="w-full p-4 mx-auto bg-white rounded-lg shadow-md max-w-96">
            <form className="space-y-3" noValidate onSubmit={(e) => resetPassword(e)}>
              <p className="text-lg font-semibold">Reset your Password</p>
              <p className="text-sm text-[#808080]">
                Enter your email address below and check your inbox for a link
                to set a new password.
              </p>
              <div className="w-full space-y-1 text-left">
                <label htmlFor="email" className="label_text">
                  Email Id
                </label>
                <input
                  type="email"
                  name="email"
                  className="input_field"
                  placeholder="Enter your Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
              </div>
              <Button type="submit" variant="primary" className="md:w-full" disabled={loading}>
                <Spinner show={loading} width='35' height='35' text="Request" />
              </Button>
              {error && <Error error={error} />}
            </form>
          </div>
        </div>
      </div>
      {resetPass && <Dialog open={resetPass}>
        <DialogContent>
          <SuccessPopup title="Success" message="Email with further instruction to reset
                password has been sent." buttonText={'Back to Sign In'} buttonLink={'/sign-in'} />
        </DialogContent>
      </Dialog>}
    </div>
  );
};

export default ForgotPassword;
