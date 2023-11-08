
import React from 'react';
import Link from "next/link";
import { useSession } from 'next-auth/react';

const ShowTime = ({ children, prop }: any) => {
    const { data: session, update } = useSession();
    return (
        <>
            {typeof prop === 'string' ? <div className="text-center pt-2">Xin lỗi, không có xuất chiếu vào ngày này, hãy chọn một ngày khác.</div> :
                <>
                    <div className='grid grid-cols-12'>
                        {prop.content?.map((showtime: any) => {
                            return <div key={showtime.id} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mx-2 mt-3 border-opacity-25 pb-2">
                                <div className="col-lg-12 w-full rounded overflow-hidden from-red-950 to-black bg-gradient-to-b shadow-lg">
                                    <div className="px-6 py-4">
                                        <div className="mb-2 text-md font-semibold border-b-2 border-red-800 uppercase">Chi nhánh: <span className="text-red-600 font-semibold">{showtime.branchName}</span></div>
                                        <p className='font-sans text-sm'>
                                            <p>Địa chỉ: {showtime.branchAddress}</p>
                                            <p>Phòng: {showtime.roomName}</p>
                                            <p>Thời gian: {showtime.startTime}</p>
                                        </p>
                                    </div>
                                    <div className="px-6 pb-2">
                                        <Link onClick={async () => await update({
                                            ...session?.user,
                                            showtimeid: showtime.id
                                        })} href={`/book/seat?stid=${showtime.id}&branchid=${showtime.branchId}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 hover:bg-amber-400">{showtime.dimensionName}</Link>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="flex justify-center">
                        {children}
                    </div>
                </>
            }
        </>

    );
}
export default ShowTime;