'use client'
import {useSession} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {FaBars} from "react-icons/fa";
import {SignOutButton} from "../authButtons";
import {constants} from "@/common/constants";

const Navbar = () => {
    const {data: session} = useSession();
    const [openNav, setOpennav] = useState(false);
    const [openUser, setOpenUser] = useState(false);
    const userImage = session?.user?.image ? (
        <Image
            className="h-8 w-8 rounded-full"
            src={session?.user?.image}
            width={200}
            height={200}
            alt={session?.user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : null
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 md:flex-row lg:items-center lg:gap-6">
            <p
                className="p-1 font-bold text-lg"
            >
                <Link href="#"
                      className="flex items-center hover:text-red-500 focus:text-red-500 focus:opacity-80 text-white">
                    Phim
                </Link>
            </p>
            <p
                className="p-1 font-bold text-lg"
            >
                <Link href="#" className="flex items-center hover:text-red-500 focus:text-red-500 focus:opacity-80">
                    Rạp
                </Link>
            </p>
            <p
                className="p-1 font-bold text-lg"
            >
                <Link href="#" className="flex items-center hover:text-red-500 focus:text-red-500 focus:opacity-80">
                    Khuyến mãi
                </Link>
            </p>
            <p
                className="p-1 font-bold text-lg"
            >
                <Link href="/about"
                      className="flex items-center hover:text-red-500  focus:text-red-500 focus:opacity-80">
                    Giới thiệu
                </Link>
            </p>
        </ul>
    );
    return (
        <div>
            {session !== undefined && (
                <nav className="bg-black py-3 mx-auto">
                    <div className="mx-auto max-w-full sm:px-8 lg:px-5">
                        <div className="relative flex h-16 items-center justify-evenly">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button type="button" onClick={() => setOpennav(!openNav)}
                                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        aria-controls="mobile-menu" aria-expanded="false">
                                    <FaBars/>
                                    <span className="hidden">Menu</span>
                                </button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href="/" className="flex items-center">
                                        <Image className="float-right" width={80} height={50}
                                               src={`${constants.URL_LOGO}`} alt="Your Company"/>
                                    </Link>
                                </div>
                                <div className="hidden md:block mx-auto">
                                    <div className="flex space-x-4">
                                        {navList}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {session?.user ?
                                    (
                                        <div className="relative ml-3">
                                            <div>
                                                <button type="button" onClick={() => setOpenUser(!openUser)}
                                                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                        id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                    <span className="absolute -inset-1.5"/>
                                                    {userImage}
                                                </button>
                                            </div>
                                            {openUser &&
                                                (
                                                    <div onMouseLeave={()=>setOpenUser(false)}
                                                         className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                         role="menu" aria-orientation="vertical"
                                                         aria-labelledby="user-menu-button" tabIndex={-1}>
                                                        <div className="px-4 py-3">
                                                    <span
                                                        className="block text-sm text-gray-900 dark:text-white">{session?.user?.name}</span>
                                                            <span
                                                                className="block text-sm  text-gray-500 truncate dark:text-gray-400">{session?.user?.email}</span>
                                                        </div>
                                                        <hr/>
                                                        <Link href="/user/account/profile"
                                                           className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                                           tabIndex={-1} id="user-menu-item-0">Thông tin cá nhân</Link>
                                                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700"
                                                           role="menuitem" tabIndex={-1} id="user-menu-item-1">Cài đặt</Link>
                                                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700"
                                                           role="menuitem" tabIndex={-1} id="user-menu-item-1">Đơn hàng</Link>
                                                        <SignOutButton/>
                                                    </div>
                                                )}
                                        </div>
                                    ) :
                                    (
                                        <div className="md:flex flex-row hidden ">
                                            <button
                                                className="mr-1 center hidden rounded-lg bg-gradient-to-tr from-gray-700 to-gray-900 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                                                <Link href="/login">Đăng nhập</Link>
                                            </button>
                                            <button
                                                className="center hidden rounded-lg bg-gradient-to-tr from-gray-900 to-red-700 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                                                <Link href="/register">Đăng kí</Link>
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="sm:hidden" id="mobile-menu">
                        {openNav && (<div className="space-y-1 px-2 pb-3 pt-2">
                            {navList}
                            {!session && (
                                <div className="md:flex flex-row">
                                    <button
                                        className="middle center rounded-lg bg-gradient-to-tr from-pink-600 to-red-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                                        <Link href="/login">Đăng nhập</Link>
                                    </button>
                                    <button
                                        className="middle center rounded-lg bg-gradient-to-tr from-pink-600 to-red-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                                        <Link href="/register">Đăng kí</Link>
                                    </button>
                                </div>)}
                        </div>)}

                    </div>
                </nav>
            )}
        </div>
    )
}
export default Navbar;
