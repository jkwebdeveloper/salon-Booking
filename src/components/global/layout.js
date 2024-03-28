"use client";
import React from "react";
import { usePathname } from "next/navigation";

import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";

function Layout({ children }) {
  const pathname = usePathname();
  const exludePaths = ["/sign-in", "/register", "/forgot-password"];
  return (
    <>
      {exludePaths.includes(pathname) ? null : <Header />}
      {children}
      {exludePaths.includes(pathname) ? null : <Footer />}
    </>
  );
}

export default Layout;
