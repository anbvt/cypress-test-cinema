'use client'
import {Validation} from '@/common/validation/page/login';
import Input from '@/components/Input/page';
import {FacebookSignInButton, GoogleSignInButton} from '@/components/authButtons';
import {errorNotification} from '@/util/Notification';
import {signIn, useSession} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import {redirect} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {constants} from "@/common/constants";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const session = useSession();
    if (session.data) return redirect("/");
    const onSubmit = async (data: any) => {
        const result = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        });
        if (result?.error) {
            errorNotification(result.error)
        }

    }
    return (
        <>
            <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-900 lg:max-w-4xl ">
                {/* Poster */}
                <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url('https://i.pinimg.com/originals/74/40/99/744099d1b5b3ecc1d3bad87431dd2aa9.png')` }} />
                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <Link href="/"><Image src={`${constants.URL_LOGO}`} alt='' width={100} height={100} /></Link>
                    </div>
                    <p className="mt-3 text-xl text-center text-gray-200">
                        Chào mừng!
                    </p>
                    <GoogleSignInButton />
                    <FacebookSignInButton />
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b border-gray-600 lg:w-1/4" />
                        <p className="text-xs text-center  uppercase text-gray-400 hover:underline">hoặc đăng nhập với email</p>
                        <span className="w-1/5 border-b border-gray-400 lg:w-1/4" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="LoggingEmailAddress">Email</label>
                            <Input id="LoggingEmailAddress" register={register('email', Validation.email)} className="block w-full px-4 py-2  border rounded-lg bg-gray-800 text-gray-300 border-gray-600  focus:ring-opacity-40 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300" type="email" />
                            <p className='text-sm mt-1 text-red-600 h-5'>{errors.email?.message as string}</p>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="loggingPassword">Mật khẩu</label>
                                <a href="#" className="text-xs text-gray-300 hover:underline">Quên mật khẩu?</a>
                            </div>
                            <Input id="loggingPassword" register={register('password', Validation.password)} className="block w-full px-4 py-2  border rounded-lg bg-gray-800 text-gray-300 border-gray-600  focus:ring-opacity-40 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300" type="password" />
                            <p className='text-sm mt-1 text-red-600 h-5'>{errors.password?.message as string}</p>
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide uppercase text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-lg hover:bg-red-700 hover:text-white focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b border-gray-600 md:w-1/4" />
                        <Link href="/register" className="text-xs  uppercase text-gray-400 hover:underline">hoặc Đăng kí</Link>
                        <span className="w-1/5 border-b border-gray-600 md:w-1/4" />
                    </div>
                </div>
            </div>

        </>
    );
}
export default Login;
