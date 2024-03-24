"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const MainMenu = dynamic(() => import("@/components/MyAccount/MainMenu"));
const MainDetail = dynamic(() => import("@/components/MyAccount/MainDetail"));
import bg from "../../../public/static/images/Myaccountbanner.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import PageLoader from "@/components/ui/pageloader";
import { getUser } from '@/redux/features/authSlice';

const MyAccountPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [tabMenu, setTabMenu] = useState("Profile");
  const user = useSelector((state) => state.auth.user) || '';
  // const user = dispatch(getUser());

  useEffect(() => {
    if (!user) router.push("/sign-in");
  }, []);

  if (!user) return <PageLoader show={true} width={100} height={100} />;

  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Image
          src={bg}
          alt=""
          loading="lazy"
          // width={300}
          // height={300}
          className="relative w-full"
          // layout="fill"
          // fill
          objectFit="cover"
        />
      </div>
      <div className="container flex flex-col gap-4 px-1 md:flex-row md:px-5 lg:relative xl:-top-8 lg:-top-8 md:-top-8 -top-8">
        <MainMenu onTabChange={setTabMenu} tabMenu={tabMenu} />
        <MainDetail tabMenu={tabMenu} user={user} />
      </div>
    </>
  );
};

export default MyAccountPage;
