"use client"
import {useSearchParams} from "next/navigation";
import "./index.css";
import dynamic from "next/dynamic";
import {RingLoader} from "react-spinners";
import {useEffect, useState} from "react"
import SeatRow from "./SeatRow";
import {seatAPI} from "@/util/API/Seat";
import SeatIcon from "@/common/Icon/SeatIcon";
import {Steps} from "antd";
import {movieAPI} from "@/util/API/Movie";
import {showtimeAPI} from "@/util/API/Showtime";
import {DateUtils} from "@/util/DateUtils";
import {ArrayUtils} from "@/util/ArrayUtils";
import {NumberUtils} from "@/util/NumberUtils";
import {useSession} from "next-auth/react";
import Link from "next/link";
import {constants} from "@/common/constants";
import Image from "next/image";
import pusher from "@/lib/pusher";

const Card = dynamic(() => import("antd").then((s) => s.Card), {
    ssr: true,
    loading: () => <p className="text-center" style={{width: 300}}>Loading...</p>,
});

interface SeatPageProps {
    seat: Object[],
    movie: any,
    showtime: any
}


const Seat = () => {

    // key of show time id
    const SHOWTIME_ID = "stid";
    const search = useSearchParams();
    const showTimeId = search.get(SHOWTIME_ID);
    const branchId = search.get("branchid");
    const [seats, setSeats] = useState<any>([]);
    const [data, setData] = useState<SeatPageProps>();
    const [price, setPrice] = useState<any>([]);
    const [total, setTotal] = useState<any>();
    const {data: session, update} = useSession();
    const getTotal = async (seat: any) => {
        if (ArrayUtils.checkExist(seats, seat)) {
            ArrayUtils.remove(seats, seat);
            ArrayUtils.remove(price, await seatAPI.getTotalPrice(parseInt(showTimeId || "1"), seat.name));
        } else {
            ArrayUtils.add(seats, seat);
            ArrayUtils.add(price, await seatAPI.getTotalPrice(parseInt(showTimeId || "1"), seat.name));
        }
        const totalTemp = {
            cost: price.length > 0 ? price.map((s: any) => s.total).reduce((a: number, b: number) => a + b) : price.total,
            name_seat: seats.length > 0 ? seats.map((s: any) => s.name).reduce((a: string, b: string) => a + ", " + b) : seats.name,
        }
        await update({
            ...session?.user,
            seat: totalTemp,
            showtime: {
                movie: data?.movie,
                showtime: data?.showtime
            }

        })
        setTotal(totalTemp);
    }
    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', async function (data: any) {
        setSeats(await seatAPI.getSeatHasCheckTicket(showTimeId));
    });
    useEffect(() => {
        let myPromise = new Promise(async function (myResolve, myReject) {
            const seat = await seatAPI.getSeatHasCheckTicket(showTimeId);
            const movie = await movieAPI.getByShowTime(showTimeId);
            const showtime = await showtimeAPI.findById(showTimeId);
            myResolve({
                seat: seat,
                movie: movie,
                showtime: showtime
            });
        });
        myPromise.then(function (value: any) {
            setData(value);
        })
    }, [seats]);

    return (
        <div className="md:mx-28 md:my-14 mx-10">
            {data ? <>
                    <div className="w-1/2 mx-auto my-10">
                        <Steps
                            current={0}
                            items={[
                                {
                                    title: <span className="text-white">Chọn ghế</span>,
                                    status: 'process',
                                },
                                {
                                    title: <span className="text-white">Chọn topping</span>,
                                    status: 'wait',
                                },
                                {
                                    title: <span className="text-white">Thanh toán</span>,
                                    status: 'wait',

                                },
                            ]}
                            className="text-white"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
                        <div className="col-start-1 col-span-2">
                            <div className="w-full mx-auto my-10 ">
                                {/* <img src="/assert/seat/screen.png" className="w-1/5 mx-auto" alt="" /> */}
                                <div className="hidden md:block">
                                    <h4 className="text-center">Chú thích</h4>
                                    <div className="flex justify-around gap-40 w-4/5 mx-auto">
                                        <div className="flex items-center">
                                            <SeatIcon.ItemChoose/>
                                            <span className="p-5">Ghế được chọn</span>
                                        </div>
                                        <div className="flex items-center">
                                            <SeatIcon.ItemDefault/>
                                            <span className="p-5">Ghế chưa chọn</span>
                                        </div>
                                        <div className="flex items-center">
                                            <SeatIcon.ItemHasBooked/>
                                            <span className="p-5">Ghế đã có người mua</span>
                                        </div>
                                    </div>
                                    {/* <div className="flex justify-around gap-40 w-4/5 mx-auto">
                                        <div className="flex items-center">
                                            <SeatIcon.ItemCoupleChoose/>
                                            <span className="p-5">Ghế đôi được chọn</span>
                                        </div>
                                        <div className="flex items-center">
                                            <SeatIcon.ItemCoupleDefault/>
                                            <span className="p-5">Ghế đôi chưa chọn</span>
                                        </div>
                                        <div className="flex items-center">
                                            <SeatIcon.ItemCoupleHasBooked/>
                                            <span className="p-5">Ghế đôi đã có người mua</span>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="bg-white rounded-2xl text-black mx-auto mt-5 md:w-3/4 w-full">
                                    {
                                        data.seat.map((s: any) => {
                                            return <SeatRow onClickButton={getTotal} data={s.seats} row={s.row}
                                                            key={s.row}/>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-end-4">
                            <Card
                                title="Thông tin đặt chỗ"
                                className="book-information-sticky hidden lg:block"
                                headStyle={{textAlign: "center"}}
                                style={{width: 300}}
                                cover={<Image src={`${constants.URL_IMAGES}${data.movie.poster}`}
                                              width={100} height={100} alt=""/>}
                            >
                                <table className="w-full">
                                    <tbody>
                                    <tr className="w-full">
                                        <td colSpan={2}>Tên phim:</td>
                                        <td className="text-right"><strong>{data.movie.name}</strong></td>
                                    </tr>
                                    <tr className="w-full">
                                        <td colSpan={2}>Ngày:</td>
                                        <td className="text-right">{DateUtils.formatDate(new Date(data.showtime.showDate))}</td>
                                    </tr>
                                    <tr className="w-full">
                                        <td colSpan={2}>Thời điểm:</td>
                                        <td className="text-right">{data.showtime.startTime}</td>
                                    </tr>
                                    <tr className="w-full">
                                        <td colSpan={2}>Địa điểm:</td>
                                        <td className="text-right">{data.showtime.branchAddress}</td>
                                    </tr>
                                    <tr className="w-full">
                                        <td colSpan={2}>Ghế:</td>
                                        <td className="text-right">{total?.name_seat || "Chưa chọn"}</td>
                                    </tr>
                                    <tr className="border-t-2 border-black">
                                        <td colSpan={2}>Tạm tính:</td>
                                        <td className="text-right">{NumberUtils.formatCurrency(total?.cost || 0)}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                {total?.name_seat && <button
                                    className="w-full bg-black text-white rounded uppercase hover:bg-red-600 hover:text-white p-3">
                                    <Link href={`/book/seat/topping?stid=${showTimeId}&branchid=${branchId}`}>Đi tiếp</Link>
                                </button>
                                }
                            </Card>

                        </div>
                    </div>
                </>
                : <div className="flex justify-center"><RingLoader color="rgba(255, 78, 0, 1)"/></div>}
        </div>
    );
}
export default Seat;