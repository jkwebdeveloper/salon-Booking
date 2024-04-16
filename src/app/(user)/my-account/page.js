"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { MainMenu, MainDetail, Banner, PageLoader } from "@/components";

const MyAccountPage = () => {
  const router = useRouter();
  const [tabMenu, setTabMenu] = useState("Profile");

  const user = useSelector((state) => state.userAuth.user) || '';

  useEffect(() => {
    if (!user) router.push("/sign-in");
  }, [user, router]);

  if (!user) return <PageLoader show={true} width={100} height={100} />;

  return (
    <>
      <Banner background={'/static/images/Myaccountbanner.jpg'} />
      <div className="container flex flex-col min-h-[55dvh] gap-4 px-1 md:flex-row md:px-5 relative mt-[-3rem] z-[2] md:mb-10">
        <div className="shadow-lg rounded-md h-fit min-h-[350px] md:w-[40%] lg:w-[25%] w-[90%] mx-auto space-y-5 z-2 bg-white">
          <MainMenu onTabChange={setTabMenu} tabMenu={tabMenu} />
        </div>
        <div className="md:w-4/5 w-[90%] mx-auto space-y-5 rounded-md shadow-lg h-fit min-h-[350px] z-2 bg-white">
          <MainDetail tabMenu={tabMenu} user={user} />
        </div>
      </div>
    </>
  );
};

export default MyAccountPage;
