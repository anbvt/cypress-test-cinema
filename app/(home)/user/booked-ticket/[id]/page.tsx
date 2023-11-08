'use client'

import Slidemenu from "@/app/(home)/user/slidemenu";
import {Button, Card, QRCode} from "antd";
import React, {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import "./index.css"
import Ticket from "@/app/(home)/user/booked-ticket/[id]/ticket";
import {billAPI} from "@/util/API/Bill";
import {NumberUtils} from "@/util/NumberUtils";
import {useSession} from "next-auth/react";
import {errorNotification} from "@/util/Notification";
import Image from "next/image";

const STATUS = [
    {
        key: 0,
        element: <></>
    },
    {
        key: 1,
        element: <></>
    },
    {
        key: 2,
        element: <Button
            className={"w-full h-14 text-white bg-red-600 border-none"}
        >
            Thanh toán lại
        </Button>
    },
    {
        key: 3,
        element: <span className={"text-yellow-600"}>Thanh toán hết hạn</span>
    },
]

const BillDetail = () => {
    const param = useParams();
    const router = useRouter();
    const [billDetails, setBillDetails] = useState<billDetails>();
    let content: JSX.Element;
    const {data: session} = useSession();
    const customerId = Number(session?.user.id);

    useEffect(() => {
        if (session) {
            const init = async () => {
                const billFromAPI = await billAPI.getBillDetails(Number(param.id), Number(customerId));
                setBillDetails(billFromAPI);
            }

            init();
        }
    }, [session]);

    if (billDetails?.ticketTotalPrice) {
        console.log(billDetails?.ticketTotalPrice + billDetails?.ticketTotalPrice)
    }
    const paymentStatus = (status: number) => {
        return STATUS.find(value => value.key == status)?.element
    }

    return (
        <div className="col-span-2 sm:col-span-2 md:col-span-7">
            <div className="p-4">
                {/* Thông tin khách hàng */}
                <section className={"bg-neutral-900 rounded p-4 mb-4"}>
                    <h2 className={"font-bold text-xl mb-4 text-white uppercase"}>Thông tin khách hàng</h2>
                    <div className={"text-gray-300"}>
                        <p className={"mb-1"}>Họ và tên
                            <span className={"float-right text-white"}>{billDetails?.customerName}</span>
                        </p>
                        <p className={"mb-1"}>Số điện thoại
                            <span className={"float-right text-white"}>{billDetails?.customerPhone}</span>
                        </p>
                        <p className={"mb-1"}>Email
                            <span className={"float-right text-white"}>{billDetails?.customerEmail}</span>
                        </p>
                    </div>
                </section>

                {/* Thông tin phim */}
                <section className={"bg-neutral-900 rounded p-4 mb-4"}>
                    <h2 className={"font-bold text-xl mb-4 text-white uppercase"}>Thông tin phim</h2>
                    <div className="grid grid-cols-10 gap-x-4 lg:grid-cols-5">
                        <div className="col-span-3 lg:col-span-1">
                            <Image
                                src={`${billDetails?.poster}`}
                                className={"w-28 h-40"}
                                alt={`${billDetails?.movieName}}`}
                            />
                        </div>
                        <div className="col-span-7 lg:col-span-4">
                            <div className={""}>
                                <h2 className={"font-bold text-xl mb-4"}>{billDetails?.movieName}</h2>
                                <p className={"text-gray-300"}>Đất nước:
                                    <span className={"text-white"}> {billDetails?.country}</span>
                                </p>
                                <p className={"text-gray-300"}>Ngôn ngữ:
                                    <span className={"text-white"}> Tiếng Việt</span>
                                </p>
                                <p className={"text-gray-300"}>Năm sản xuất:
                                    <span className={"text-white"}> {billDetails?.yearOfManufacture}</span>
                                </p>
                                <p className={"text-gray-300"}>Độ tuổi:
                                    <span
                                        className={"text-white"}> {billDetails?.limitAge !== 0 ? billDetails?.limitAge : 'Không giới hạn'}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"bg-neutral-900 rounded p-4 mb-4"}>
                    {/* Thông tin vé */}
                    <div className={"mb-8"}>
                        <h2 className={"font-bold text-xl mb-4 text-white uppercase"}>Thông tin vé & lượt
                            chiếu</h2>
                        <Card
                            bordered={false}
                            className={"w-fit bg-inherit border border-2 border-neutral-800 text-white my-5"}
                        >
                            <div className="grid grid-cols-10 gap-x-4">
                                <div className="col-span-3">
                                    <div className="text-center">
                                        <QRCode
                                            value={"localhost:3000/user/booked-ticket/1"}
                                            color={"white"}
                                            size={100}
                                            bordered={false}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-7">
                                    <div className={"ms-4"}>
                                        <h2 className={"font-bold text-xl mb-4"}>Mã hóa
                                            đơn: {billDetails?.id}</h2>
                                        <p className={"text-gray-300"}>Ghế:
                                            <span className={"text-white"}> {billDetails?.seats}</span>
                                        </p>
                                        <p className={"text-gray-300"}>Tổng giá:
                                            <span
                                                className={"text-white"}> {NumberUtils.formatCurrency(billDetails?.ticketTotalPrice || 0)}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div className={"text-gray-300"}>
                            <p className={"mb-1"}>Trạng thái
                                <span className={"float-right text-green-500"}>Thành công</span>
                            </p>
                            <p className={"mb-1"}>Rạp
                                <span
                                    className={"float-right text-white"}>Chi nhánh {billDetails?.branchName} - {billDetails?.branchAddress}</span>
                            </p>
                            <p className={"mb-1"}>Phòng
                                <span className={"float-right text-white"}>{billDetails?.roomName}</span>
                            </p>
                            <p className={"mb-1"}>Thời gian:
                                <span
                                    className={"float-right text-green-600"}>{`${billDetails?.startTime} ${billDetails?.showDate}`}</span>
                            </p>
                            <p className={"mb-1"}>Số lượng ghế
                                <span
                                    className={"float-right text-white"}>{billDetails?.tickets.length}</span>
                            </p>
                            <p className={"mb-1"}>Số ghế
                                <span className={"float-right text-green-600"}>{billDetails?.seats}</span>
                            </p>
                            <p className={"mb-1"}>Tổng giá vé
                                <span
                                    className={"float-right"}>{NumberUtils.formatCurrency(billDetails?.ticketTotalPrice || 0)}</span>
                            </p>
                        </div>
                    </div>

                    <Ticket tickets={billDetails?.tickets || []}/>

                    {/* Thông tin topping */}
                    {/* Kiểm tra khách hàng có đặt thức ăn không */}
                    {!billDetails?.toppingName ? <></> :
                        <div>
                            <h2 className={"font-bold text-xl mb-4 text-white uppercase"}>Thông tin
                                topping</h2>
                            <div className={"text-gray-300"}>
                                <p className={"mb-1"}>Topping
                                    <span
                                        className={"float-right text-white"}>{billDetails.toppingName}</span>
                                </p>
                                <p className={"mb-1"}>Giá tiền
                                    <span
                                        className={"float-right text-white"}>{billDetails.toppingTotalPrice}</span>
                                </p>
                            </div>
                        </div>
                    }
                </section>

                <Card
                    bordered={false}
                    className={"bg-neutral-800 text-white my-5"}
                >
                    <div className={"text-gray-300"}>
                        <p className={"mb-1"}>Giá vé xem phim
                            <span
                                className={"float-right text-white"}>{billDetails?.ticketTotalPrice}</span>
                        </p>

                        {/* Giá topping */}
                        {
                            !billDetails?.toppingName ? <></> :
                                <p className={"mb-1"}>Giá topping
                                    <span
                                        className={"float-right text-white"}>{NumberUtils.formatCurrency(billDetails?.toppingTotalPrice)}</span>
                                </p>
                        }
                        <p className={"mb-1"}>Phí thanh toán
                            <span className={"float-right text-white"}>
                                            {
                                                billDetails?.ticketTotalPrice || billDetails?.toppingTotalPrice ?
                                                    NumberUtils.formatCurrency(
                                                        (billDetails?.ticketTotalPrice + billDetails?.toppingTotalPrice)
                                                        * billDetails?.tickets[0].vat) : 0
                                            }
                                        </span>
                        </p>
                        <hr className={"my-1"}/>
                        <p className={"mb-1"}>Thanh toán với {billDetails?.paymentMethod}
                            <span className={"float-right text-white text-lg font-semibold"}>
                                {
                                    billDetails?.ticketTotalPrice || billDetails?.toppingTotalPrice ?
                                        NumberUtils.formatCurrency((billDetails?.ticketTotalPrice + billDetails?.toppingTotalPrice)
                                            +
                                            (billDetails?.ticketTotalPrice + billDetails?.toppingTotalPrice)
                                            * billDetails?.tickets[0].vat)
                                        : 0
                                }
                                        </span>
                        </p>
                    </div>
                </Card>

                {/* Thanh toán lại */}
                <section>
                    {paymentStatus(Number(billDetails?.exportStatus))}
                </section>
            </div>
        </div>
    );
}

export default BillDetail;