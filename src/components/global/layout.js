"use client";
import React from "react";
import { usePathname } from "next/navigation";

import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import VandorHeader from "./VandorHeader";
import DashBoardHeader from "@/components/global/DashboardHeader";

function Layout({ children }) {
  const pathname = usePathname();
  const userPath = [
    "/sign-in",
    "/register",
    "/forgot-password",
    "/vendor/login",
    "/vendor/forgot-password",
    "/vendor/dashboard",
  ];

  const dashboardHeaderPath = ['/vendor/register', '/vendor/login', '/vendor/forgot-password']
  const vendorPath = "/vendor";

  const isUserPath = userPath.includes(pathname);
  const isVendorPath = pathname.includes(vendorPath);
  return (
    <>
      {!isUserPath && !isVendorPath && <Header />}
      {pathname == '/vendor' && <VandorHeader />}
      {!dashboardHeaderPath.includes(pathname) && pathname.includes('/vendor/') && <DashBoardHeader />}
      {dashboardHeaderPath.includes(pathname) && !userPath.includes(pathname) && <VandorHeader />}
      {children}
      {!isUserPath && <Footer />}
    </>
  );
}

export default Layout;
