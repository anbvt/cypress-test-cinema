"use client"

import { Select } from "antd";
import { useState } from "react";

const SelectWallet = ({value,setWallet}:any) => {
    // const [value,setValue] = useState('jack');


    return (
        <Select
            defaultValue={value}
            style={{ width: 120 }}
            onChange={setWallet}
            options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
        />
    )
}
export default SelectWallet;