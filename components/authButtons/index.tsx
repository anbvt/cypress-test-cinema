'use client'
import {signIn, signOut} from "next-auth/react";
import {FaFacebook, FaGoogle} from "react-icons/fa6";

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <div onClick={handleClick} className="flex items-center justify-center mt-4 transition-colors duration-300 transform border rounded-lg border-gray-700 text-gray-200  hover:bg-red-600 hover:cursor-pointer">
            <div className="px-4 py-2">
                <FaGoogle />
            </div>
            <span className="w-5/6 px-4 py-3 font-bold text-center">Đăng nhập với Google</span>
        </div>
    )
}
export function FacebookSignInButton() {
    const handleClick = () => {
        signIn("facebook");
    };

    return (
        <div onClick={handleClick} className="flex items-center justify-center mt-4 transition-colors duration-300 transform border rounded-lg border-gray-700 text-gray-200  hover:bg-red-600 hover:cursor-pointer">
            <div className="px-4 py-2">
                <FaFacebook />
            </div>
            <span className="w-5/6 px-4 py-3 font-bold text-center">Đăng nhập với Facebook</span>
        </div>

    )
}

export function SignOutButton() {
    const handleClick = () => {
        signOut();
    };
    return (
        <p onClick={handleClick}
            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-400 hover:cursor-pointer"
        >
            Đăng xuất
        </p>
    )
}