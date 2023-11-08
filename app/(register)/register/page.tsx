'use client'
import {checkError} from "@/common/validation/error";
import {Validation} from "@/common/validation/page/registration";
import {checkStatus} from "@/common/validation/status";
import Input from "@/components/Input/page";
import {customerAPI} from "@/util/API/Customer";
import {errorNotification, successNotification} from "@/util/Notification";
import Image from "next/image";
import Link from 'next/link';
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {constants} from "@/common/constants";

/**
 * Object of Register
 */
type RegisterProps = {
    name: string,
    password: string,
    repassword: string,
    email: string,
    phone: string,
    gender: boolean
}


const Register = () => {
    const [flag, setFlag] = useState<boolean>();
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterProps>();

    const onSubmit: SubmitHandler<RegisterProps> = async (inputs) => {
        setFlag(true);
        if (inputs.password === inputs.repassword) {
            try {
                if (checkStatus(await customerAPI.registration(inputs))) {
                    successNotification("Đăng ký tài khoản thành công, vui lòng kiểm tra email để kích hoạt tài khoản !")
                    setTimeout(() => {
                        window.location.href = "/login";
                    }, 3000);
                }
            } catch (e: any) {
                errorNotification(checkError(e.response.data.message, e.response.data.param) || "")
                setFlag(false)
            }
        } else {
            errorNotification("Mật khẩu không khớp, vui lòng thử lại !");
            setFlag(false)
        }
    };

    return (
        <section className="bg-black">
            <div className="flex justify-center min-h-screen">
                <div className="hidden bg-cover lg:block lg:w-3/5" style={{ backgroundImage: 'url("https://i.pinimg.com/564x/16/12/c0/1612c065d800dabef40f212aed5ff292.jpg")' }}>
                </div>
                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <div className="flex justify-start mx-auto mb-10">
                            <Link href="/"><Image src={`${constants.URL_LOGO}`} alt='' width={200} height={200} /></Link>
                        </div>
                        <h1 className="text-2xl font-semibold tracking-wider  capitalize text-white">
                            Đăng kí tài khoản ngay
                        </h1>
                        <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="block mb-2 text-sm text-gray-200">Họ và Tên</label>
                                <Input type="text" register={register("name", Validation.name)} className="block w-full px-5 py-3 mt-2  text-gray-700 border rounded-lg placeholder-gray-600  border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <div className="text-red-600 mt-1 text-sm h-5">{errors.name?.message}</div>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-200">Số Điện Thoại</label>
                                <Input type="text" register={register("phone", Validation.phone)} className="block w-full px-5 py-3 mt-2 text-gray-700 border rounded-lg placeholder-gray-600  border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <div className="text-red-600 mt-1 text-sm h-5">{errors.phone?.message}</div>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-200">Email</label>
                                <Input type="text" register={register("email", Validation.email)} className="block w-full px-5 py-3 mt-2 text-gray-700 border rounded-lg placeholder-gray-600  border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <div className="text-red-600 mt-1 text-sm h-5">{errors.email?.message}</div>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-200">Giới Tính</label>
                                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg sm:flex ">
                                    <li className="w-full  sm:border-b-0 sm:border-r dark:border-gray-600 " >
                                        <div className="flex items-center pl-3">
                                            <Input id="horizontal-list-radio-license" register={register("gender", Validation.gender)} type="radio" value="true" name="list-radio" className="w-4 h-4 bg-gray-600 border-gray-500" />
                                            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">Nam</label>
                                        </div>
                                    </li>
                                    <li className="w-full  sm:border-b-0 sm:border-r dark:border-gray-600">
                                        <div className="flex items-center pl-3">
                                            <Input id="horizontal-list-radio-id" register={register("gender", Validation.gender)} type="radio" value="false" name="list-radio" className="w-4 h-4 bg-gray-600 border-gray-500" />
                                            <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">Nữ</label>
                                        </div>
                                    </li>
                                </ul>
                                <div className="text-red-600 mt-1 text-sm h-5">{errors.gender?.message}</div>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-200">Mật Khẩu</label>
                                <Input type="password" register={register("password", Validation.password)} className="block w-full px-5 py-3 mt-2 text-gray-700 border rounded-lg placeholder-gray-600  border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <div className="text-red-600 mt-1 text-sm h-5">{errors.password?.message}</div>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-200">Xác Nhận Mật Khẩu</label>
                                <Input type="password" register={register("repassword", Validation.password)} className="block w-full px-5 py-3 mt-2 text-gray-700 border rounded-lg placeholder-gray-600  border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <div className="text-red-600 mt-1 text-sm h-5">{errors.repassword?.message}</div>
                            </div>
                            <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-gray-800  uppercase transition-colors duration-300 transform bg-gray-200 rounded-lg hover:bg-red-700 focus:outline-none hover:text-white  focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                <span>Đăng kí </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    );
}
export default Register;
