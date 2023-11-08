"use client"
import {Steps} from "antd";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {toppingAPI} from "@/util/API/Topping";
import {InputNumber} from 'antd';
import {NumberUtils} from "@/util/NumberUtils";
import {useSession} from "next-auth/react";
import {constants} from "@/common/constants";
import Image from "next/image";

type Topping = {
    id: string,
    name: string,
    logo: string,
    toppingofbranchid: number,
    branchid: string,
    quantity: number,
    price: number
}
const Topping = () => {
    const search = useSearchParams();
    const branchId = search.get("branchid");
    const [data, setData] = useState<Topping[]>();
    const [topping, setTopping] = useState<any[]>([]);
    const [sum, setSum] = useState<number>(0);
    const {data: session, update} = useSession();
    const router = useRouter();
    useEffect(() => {
        const init = async () => {
            const toppingofbranch = await toppingAPI.getToppingByBranch(branchId);
            setData(toppingofbranch)
            await update({
                ...session?.user,
                topping: topping
            })
        }
        const cost = topping.length > 0 ? topping.map((s: any) => s.sum).reduce((a: number, b: number) => a + b) : sum
        setSum(cost)
        init();
    }, [branchId, sum, topping]);
    const onChange = (value: any, id: number, price: any, name: string) => {
        const newData = {id: id, name: name, quantity: value, sum: Number(value) * Number(price)};
        if (value === 0) {
            setTopping(prevData => prevData.filter(data => data.id !== id));
        } else {
            const isIdExist = topping.some(data => data.id === id);
            if (!isIdExist) {
                setTopping(prevData => [...prevData, newData]);
            } else {
                setTopping(prevData => prevData.map(data => data.id === id ? newData : data));
            }
        }
    }
    const onSubmit = async () => {
        router.push("/book/pay");
    }
    return (
        <div className="md:mx-28 md:my-14 mx-10">
            <div className="w-1/2 mx-auto my-10">
                <Steps
                    current={0}
                    items={[
                        {
                            title: <span className="text-white">Chọn ghế</span>,
                            status: 'finish',
                        },
                        {
                            title: <span className="text-white">Chọn topping</span>,
                            status: 'process',
                        },
                        {
                            title: <span className="text-white">Thanh toán</span>,
                            status: 'wait',
                        },
                    ]}
                    className="text-white"
                />
            </div>
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-stone-800 px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Đồ ăn/ Thức uống</h1>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-400 text-xs uppercase w-2/5">
                                Mặt hàng
                            </h3>
                            <h3 className="font-semibold text-gray-400 text-xs uppercase w-2/5 text-center">
                                Số lượng
                            </h3>
                            <h3 className="font-semibold  text-gray-400 text-xs uppercase w-2/5 text-center">
                                giá
                            </h3>
                        </div>
                        {data && data.map((topping, i) => (
                            <div className="flex items-center -mx-8 px-6 py-5" key={i}>
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <Image
                                            className="object-fill h-24 bg-white"
                                            src={`${constants.URL_TOPPING}${topping.logo}`}
                                            alt=""
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-lg">{topping.name}</span>
                                        <span
                                            className="text-red-500 text-sm">Số lượng còn: {topping.quantity}</span>
                                    </div>
                                </div>
                                <div className="flex justify-center w-2/5">
                                    <InputNumber min={0} max={10} defaultValue={0}
                                                 onChange={(v) => onChange(v, topping.toppingofbranchid, topping.price, topping.name)}/>
                                </div>
                                <span
                                    className="text-center w-2/5 font-semibold text-sm">{NumberUtils.formatCurrency(topping.price)}</span>
                            </div>
                        ))}

                    </div>
                    <div id="summary" className="w-1/4 px-8 py-10 bg-slate-100 rounded-br rounded-tr ">
                        <h1 className="font-semibold text-2xl border-b pb-8 text-black border-black">Hóa Đơn</h1>
                        {topping?.map((t, i) => (
                            <div className="flex justify-between mt-10 mb-5 " key={i}>
                                <span
                                    className="font-semibold text-sm uppercase text-black">{t.name}</span>
                                <span
                                    className="font-semibold text-sm text-black">{NumberUtils.formatCurrency(t.sum || 0)}</span>
                            </div>
                        ))}
                        <div className="border-t mt-8 border-black">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase text-black">
                                <span>Tổng</span>
                                <span>{topping.length === 0 ? NumberUtils.formatCurrency(0) : NumberUtils.formatCurrency(sum)}</span>
                            </div>
                            <button
                                onClick={onSubmit}
                                className="bg-black font-semibold hover:bg-red-600 py-3 text-sm text-white uppercase w-full">
                                Thanh Toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topping;