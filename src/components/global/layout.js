"use client";
import React from "react";
import { usePathname } from "next/navigation";

import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import VandorHeader from "./VandorHeader";

function Layout({ children }) {
  const pathname = usePathname();
  const exludePaths = ["/sign-in", "/register", "/forgot-password", "/vendor"];
  const exludePath = ["/vendor"];
  return (
    <>
      {exludePaths.includes(pathname) ? null : <Header />}
      {exludePath.includes(pathname) ? <VandorHeader /> : null}
      {children}
      {exludePaths.includes(pathname) ? null : <Footer />}
    </>
  );
}

export default Layout;
