'use client';
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

import { Spinner, Button, Error } from '@/components';
import { login } from "@/redux/features/authSlice";
import { POST } from "@/app/api/post";

const Register = () => {
  const [error, setError] = React.useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user) || '';
  const [loading, setLoading] = React.useState(false);

  if (user) {
    router.push('/');
  }

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await POST.request({ url: "/register", form: e.target });
    setLoading(false);
    if (resp.code == 200 && Object.keys(resp.data).length > 0) {
      dispatch(login(resp.data));
      router.push("/");
    } else {
      setError(resp.message);
    }
  };

  return (
    <div className="grid w-screen overflow-x-hidden lg:grid-cols-2">
      <div className="hidden lg:block bg-[url('/static/images/signin.png')] bg-cover"></div>
      <div className="lg:w-full overflow-x-hidden bg-[#FAFAFA] p-3 relative z-0 min-h-screen">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div>
            <Link href="/">
              <Image src={'/static/images/logo.png'} loading="lazy" alt="logo" className="mx-auto" width={150} height={75} />
            </Link>
          </div>
          <div className="w-full p-4 mx-auto overflow-x-hidden bg-white rounded-lg shadow-md max-w-[35rem]">
            <p className="mb-2 text-lg font-semibold">
              Welcome to the{" "}
              <span className="text-primary_color">PamperTree</span>
            </p>
            <p className="text-sm text-[#808080] mb-4">
              Tell us about yourself. The more we know, the better we get for
              you, and the easier it is to look after your bookings.
            </p>
            <form className="space-y-3" noValidate onSubmit={e => registerUser(e)}>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="fname" className="label_text">First Name</label>
                  <input type="text" name="first_name" id="fname" className="input_field" placeholder="Enter your Name" pattern="[A-Za-z]{4,20}" required />
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="lname" className="label_text"> Last Name </label>
                  <input type="text" name="last_name" id="lname" className="input_field" placeholder="Enter your name" pattern="[A-Za-z]{4,20}" required />
                </div>
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="email" className="label_text">Email</label>
                  <input type="email" name="email" id="email" className="input_field" placeholder="Enter your email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required />
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="phone" className="label_text"> Phone Number</label>
                  <input type="tel" name="phone_number" id="phone" className="input_field" placeholder="Enter Your Phone Number" pattern="[0-9]{10}" required />
                </div>
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="password" className="label_text"> Password</label>
                  <input type="password" name="password" id="password" className="input_field" placeholder="Enter Your Password" pattern="[A-Za-z0-9]{3,20}" required />
                  {/* pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$' */}
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="cpassword" className="label_text"> Confirm Password </label>
                  <input type="password" name="cpassword" id="cpassword" className="input_field" placeholder="Confirm Your Password" required />
                </div>
              </div>
              <div className="w-full space-y-1 text-left">
                <label htmlFor="address" className="label_text"> Address line 1 </label>
                <input type="text" name="address_line_one" id="address" className="input_field" placeholder="Enter your Address" pattern="[A-Za-z0-9]{3,20}" required />
              </div>
              <div className="w-full space-y-1 text-left">
                <label htmlFor="address2" className="label_text"> Address line 2 </label>
                <input type="text" name="address_line_two" id="address2" className="input_field" placeholder="Enter your Address" required />
              </div>
              <div className="flex flex-col w-full gap-3 lg:flex-row">
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="city" className="label_text"> City </label>
                  <input type="text" name="city" id="city" className="input_field" placeholder="City" pattern="[A-Za-z]{3,20}" required />
                </div>
                <div className="w-full space-y-1 text-left lg:w-1/2">
                  <label htmlFor="postcode" className="label_text"> Postcode </label>
                  <input type="text" name="postcode" id="postcode" className="input_field" placeholder="Postcode" pattern="[0-9]{6}" required />
                </div>
              </div>
              <div>
                <label htmlFor="gender" className="block mt-3 mb-2 label_text"> You are </label>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <div>
                    <input type="radio" id="female" name="gender" value="female" class="hidden peer" required defaultChecked />
                    <label htmlFor="female" class="block text-center w-full p-1 text-[#0AADA4] bg-white border border-[#0AADA4] rounded-[7px] cursor-pointer dark:hover:text-white dark:peer-checked:text-white peer-checked:bg-[#0AADA4] peer-checked:text-white  dark:bg-[#9ec7c5] dark:hover:bg-[#0AADA4]"> Female </label>
                  </div>
                  <div>
                    <input type="radio" id="male" name="gender" value="male" class="hidden peer" required />
                    <label htmlFor="male" class="block text-center w-full p-1 leading-6 text-[#0AADA4] bg-white border border-[#0AADA4] rounded-[7px] cursor-pointer dark:hover:text-white dark:peer-checked:text-white peer-checked:bg-[#0AADA4] peer-checked:text-white  dark:bg-[#9ec7c5] dark:hover:bg-[#0AADA4]"> Male </label>
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                name="device_type"
                value={typeof window != 'undefined' && (/Mobi/i.test(window.navigator.userAgent) && 2) || 1}
              />
              <Button type="submit" variant="primary" className="md:w-full" disabled={loading}>
                <Spinner show={loading} width='35' height='35' text="Request" />
              </Button>
              {error && <Error error={error} />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
