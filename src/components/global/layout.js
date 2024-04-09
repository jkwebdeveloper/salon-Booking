"use client";
import React from "react";
import { usePathname } from "next/navigation";

import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import VandorHeader from "./VandorHeader";

function Layout({ children }) {
  const pathname = usePathname();
  const userPath = ["/sign-in", "/register", "/forgot-password"];
  const vendorPath = ["vendor"];
  return (
    <>
      {(userPath.includes(pathname) || pathname.includes(vendorPath)) ? null : <Header />}
      {pathname.includes(vendorPath) ? <VandorHeader /> : null}
      {children}
      {userPath.includes(pathname) ? null : <Footer />}
    </>
  );
}

export default Layout;
