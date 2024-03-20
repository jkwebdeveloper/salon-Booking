'use client'
import Footer from '@/components/global/Footer'
import Header from '@/components/global/Header'
import { usePathname } from "next/navigation";
import React from 'react'

function Layout({ children }) {
    const pathname = usePathname();
    console.log(pathname);
    const exludePaths = ["/sign-in"];
    return (
        <>
            {pathname.includes(exludePaths) ? null : <Header />}
            {children}
            {pathname.includes(exludePaths) ? null : <Footer />}
        </>
    )
}

export default Layout