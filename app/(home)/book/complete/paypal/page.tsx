"use client"
import QR from "@/components/QR";
import { Button, Result } from "antd";
import { useRouter } from "next/navigation";

const BookComplete = () => {
    const router = useRouter();
    return (
        <Result
            status="success"
            title="Thanh toán thành công"
            subTitle={<span className="text-white">Hoàn tất đơn hàng</span>}
            extra={[
                <Button onClick={()=>router.push("/")} key="buy">Trở về trang chủ</Button>,
            ]}
        />
    )
}
export default BookComplete;