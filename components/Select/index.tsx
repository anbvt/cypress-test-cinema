'use client'
import {UseFormRegisterReturn} from "react-hook-form";

interface SelectProps {
    id: string,
    className: string,
    name: string,
    onChange?: (event: any) => void,
    options: { value: string | number, label: string, className: string }[] | undefined,
    register?: UseFormRegisterReturn,
    defaultValue?: number | string | undefined
}
const SelectOption = ({ ...props }: SelectProps) => {
    return (
        <>
            <select name={props.name} className={props.className} id={props.id} onChange={props.onChange} {...props.register}>
                <option value={props.defaultValue} className="bg-gray-800 text-white hover:bg-red-600">{props.name.toUpperCase()}</option>
                {props?.options?.map((value, key) => (
                    <option value={value.value} key={key} className={value.className}>{value.label.toUpperCase()}</option>
                ))}
            </select>
        </>
    );
}
export default SelectOption;