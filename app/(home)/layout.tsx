'use client'
import {SessionProvider} from "next-auth/react";
import '../globals.css';
// const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {ConfigProvider} from "antd";
import {theme} from "./theme";

export const metadata = {
    title: 'Zuhot',
    description: 'Generated by create next app',
}

export default function HomeLayout({
                                       children,
                                   }: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/_next/image?url=%2Fassert%2Fimg%2Flogo.png&w=256&q=75" type="image/x-icon"
                  sizes="any"></link>
        </head>
        <body>
        <div className="container-fluid bg-dark">
            <ConfigProvider theme={theme}>
                <SessionProvider>
                    <Navbar/>
                    {children}
                    <Footer/>
                </SessionProvider>
            </ConfigProvider>

        </div>
        </body>
        </html>
    )
}
