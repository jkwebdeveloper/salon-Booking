'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/button";
import { Error, Spinner, SuccessPopup } from "@/components";
import { POST } from "@/app/api/post";
import {
  Dialog,
  DialogContent
} from "@/components/ui/dialog";
import Validation from "@/constants/validation";

const ForgotPassword = () => {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [resetPass, setResetPass] = React.useState(false);

  const resetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({ url: "/vendor/forgot-password", form: e.target });
    setLoading(false);
    if (resp.code === 200) {
      setResetPass(true);
    } else {
      setError(resp.message);
    }
  }

  return (
    <div className="w-screen min-h-screen bg-[url('/static/images/banner.jpg')] bg-cover">
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
            <p className="text-lg font-semibold">Reset your Password</p>
            <form className="flex flex-col gap-3" noValidate onSubmit={e => resetPassword(e)}>
              <div className="space-y-1 text-left ">
                <label htmlFor="country" className="label_text">
                  Email Id
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 bg-white border rounded-md input_field"
                  placeholder="Enter your Email"
                  pattern={Validation?.email?.pattern}
                  required
                />
                <p className="error">{Validation?.email?.msg}</p>
                <div className="w-full space-y-3">
                  <Button variant="primary" className="w-full" type="submit" disabled={loading}>
                    <Spinner
                      show={loading}
                      width="25"
                      height="25"
                      text="Request"
                    />
                  </Button>
                  {error && <Error error={error} />}
                </div>
              </div>
              <Link href="/vendor/login" className="mt-2 underline text-primary_color">Login here</Link>
            </form>
          </div>
        </div>
      </div>
      {resetPass && <Dialog open={resetPass}>
        <DialogContent>
          <SuccessPopup title="Success" message="Email with further instruction to reset
                password has been sent." buttonText={'Back to Sign In'} buttonLink={'/vendor/login'} />
        </DialogContent>
      </Dialog>}
    </div>
  );
};

export default ForgotPassword;
