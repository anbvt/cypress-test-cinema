import {constants} from "@/common/constants"
import {QRCode} from "antd"
import Link from "next/link"

type CardDiscount = {
    discount: string,
    to: string,
    valueQR: string
}

export const CardDiscount = ({ ...props }: CardDiscount) => {
    return (
        <>
            {props.valueQR && <div className="text-center font-semibold w-full text-lg">
                <h1 className="text-white mb-5"><span className="border-b-2 border-red-500 pb-2">KHUYẾN MÃI {props.discount}%</span></h1>
                <div className="bg-red-950 p-2 mb-4 rounded-md hover:bg-red-500">
                    <Link href={props.to}>
                        <h4 className="text-white">ĐĂNG KÍ NGAY</h4>
                    </Link>
                </div>
                <QRCode
                    className="mx-auto mt-4"
                    color="white"
                    size={200}
                    bgColor="black"
                    errorLevel="H"
                    value={`${props.valueQR}`}
                    icon={`${constants.ROOT_API}images/QR.png`}
                />
            </div>
            }
        </>
    )
}