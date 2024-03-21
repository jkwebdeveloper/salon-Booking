"use client";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import { usePathname } from "next/navigation";
import React from "react";

function Layout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
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
