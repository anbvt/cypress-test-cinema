"use client"

import { Input, Radio, RadioChangeEvent, Space } from "antd";
import { useState } from "react";

const RadioDiscount = () => {
    const [value, setValue] = useState(2);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <Radio.Group className="text-black" onChange={onChange} value={value}>
            <Space direction="vertical">
                <Radio value={1}>
                    <span className="text-black">Mã giảm giá</span>
                    {
                        value== 1 ? <Input/>:<></>
                    }
                </Radio>
                <Radio value={2}><span className="text-black">Không có</span> 
                </Radio>
            </Space>
        </Radio.Group>
    );
}
export default RadioDiscount;