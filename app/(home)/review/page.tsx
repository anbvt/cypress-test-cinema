"use client"
import { Rate } from "antd";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { constants } from "@/common/constants";
import { useEffect, useState } from "react";
import { movieAPI } from "@/util/API/Movie";
const ReviewPage = () => {
    const search = useSearchParams();
    const [data, setData] = useState<any>({
        movie: {}
    })
    const id = search.get('id');
    const RATE_DEFAULT_VALUE = 2.5;
    useEffect(() => {
        const init = async () => {
            const movie = await movieAPI.getByBill(id);
            setData({ ...data, movie: movie });
        }
        // init();
    }, []);
    return (
        <>
            <div className="container mx-auto px-10 bg-white text-black w-2/3 block">
                <h1 className="text-red-800 font-bold">Review phim: Hạ Cánh Nơi Anh</h1>
                <Image alt="" width={100} height={100} src={`${constants.URL_IMAGES}MP01.png`} />
                <Rate defaultValue={RATE_DEFAULT_VALUE} />
                <div>
                    <p>Cảm ơn bạn đã tin tưởng gia đình Zuhot</p>
                    <p>Một phần đóng góp ý kiến của bạn sẽ giúp chúng tôi cải thiện hơn trong từng ngày.</p>
                    <input type="text" />
                </div>
            </div>
        </>
    );
}
export default ReviewPage;