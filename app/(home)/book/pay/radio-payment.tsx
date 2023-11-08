"use client"

import {Radio, RadioChangeEvent, Space} from "antd";
import React, {useEffect, useMemo, useRef, useState} from "react";
import SelectWallet from "./select-wallet";
import {FaCcPaypal} from "react-icons/fa6";
import {MdOutlinePayments} from "react-icons/md";
import VnpayIcon from "@/common/Icon/VnpayIcon";

interface Props {
    value: string
}


const RadioPayment = ({value, onChange, component}: any) => {

    return (
        <Radio.Group className="text-black" onChange={onChange} value={value}>
            <Space direction="vertical">
                <Radio value={1}><span className="flex text-black flex-row"><MdOutlinePayments className="my-auto mr-2"/> Tiền mặt</span></Radio>
                <Radio value={2}><span className="flex text-black flex-row"><FaCcPaypal className="my-auto mr-2"/>Ví điện tử Paypal</span></Radio>
                <Radio value={3}><span className="flex text-black flex-row"><VnpayIcon/> VnPay</span></Radio>
            </Space>
        </Radio.Group>
    );
}
export default RadioPayment;