"use client";
import React from "react";
import { usePathname } from "next/navigation";

import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import VandorHeader from "./VandorHeader";

function Layout({ children }) {
  const pathname = usePathname();
  const userPath = [
    "/sign-in",
    "/register",
    "/forgot-password",
    "/vendor/login",
    "/vendor/reset-password",
    "/vendor/dashboard",
  ];
  const vendorPath = "/vendor";

  const isUserPath = userPath.includes(pathname);
  const isVendorPath = pathname.includes(vendorPath);
  const isVendorLogin = pathname === `${vendorPath}/login`;
  const isVendorResetPassword = pathname === `${vendorPath}/reset-password`;
  const isDashBoard = pathname === `${vendorPath}/dashboard`;
  return (
    <>
      {!isUserPath && !isVendorPath && <Header />}
      {isVendorPath &&
        !isVendorLogin &&
        !isVendorResetPassword &&
        !isDashBoard && <VandorHeader />}
      {children}
      {!isUserPath && <Footer />}
    </>
  );
}

export default Layout;
