'use client'

import React, {useEffect, useState} from 'react';
import {Card, Form} from 'antd';
import Slidemenu from "../slidemenu";
import Link from "next/link";
import Input from "@components/Input/page";
import {Validation} from "@/common/validation/page/registration";
import {billAPI} from "@/util/API/Bill";
import {useSession} from "next-auth/react";
import Login from "@/app/(login)/login/page";
import {DateUtils} from "@/util/DateUtils";

const STATUS = [
    {
        key: 0,
        element: <span className={"text-red-600"}>Thất bại</span>
    },
    {
        key: 1,
        element: <span className={"text-green-600"}>Thành công</span>
    },
    {
        key: 2,
        element: <span className={"text-yellow-600"}>Đang thanh toán</span>
    },
    {
        key: 3,
        element: <span className={"text-yellow-600"}>Thanh toán hết hạn</span>
    },
]

const BookedTicket = () => {
    const [billHistories, setBillHistories] = useState<billHistory[]>();
    let content: JSX.Element;
    const {data: session} = useSession();
    const customerId = Number(session?.user.id);

    useEffect(() => {
        if (session) {
            const init = async () => {
                const bh = await billAPI.getBillHistory(customerId);
                setBillHistories(bh);
            }

            init();
        }
    }, [session])

    if (!session) {
        return <Login/>;
    }

    const paymentStatus = (status: number) => {
        return STATUS.find(value => value.key == status)?.element
    }

    return (
        <div className="p-4">
            {
                billHistories?.map((billHistory, index) => {
                    return (
                        <Card
                            bordered={false}
                            className={"w-full bg-neutral-800 text-white mb-5"}
                            key={index}
                        >
                            <div className="grid grid-cols-10 gap-2">
                                <div className="col-span-3 border-r-4 border-r-red-600 pe-1">
                                    <div className="text-center">
                                        <p>Thời gian chiếu</p>
                                        <p className={"text-red-600 font-semibold"}>{`${billHistory.startTime}`}</p>
                                        <p>{DateUtils.formatDate(new Date(billHistory.showDate))}</p>
                                        <p className={"font-semibold"}>
                                            {paymentStatus(billHistory.exportStatus)}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-7">
                                    <div className={"ms-4"}>
                                        <p>
                                                        <span>Mã hóa đơn: <span
                                                            className={"text-red-600"}>{billHistory.id}</span></span>
                                            <span>, Phim: {billHistory.movieName}</span>
                                        </p>
                                        <p>Rạp: Chi nhánh {`${billHistory.branchName}`}</p>
                                        <p>{billHistory.roomName}, Ghế: {billHistory.seats}</p>
                                        <p>
                                            <span>Thời lượng phim: {billHistory.movieTime} phút</span>
                                            <span className={"float-right"}>
                                        <Link
                                            href={`/user/booked-ticket/${billHistory.id}`}
                                        >
                                            Xem chi tiết
                                        </Link>
                                    </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    );
                })
            }
        </div>
    );
}

export default BookedTicket;