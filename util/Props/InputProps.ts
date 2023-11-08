import {UseFormRegisterReturn} from "react-hook-form";

export interface InputProps {
    type: string,
    className?: string,
    id?: string,
    name?: string,
    placeholder?: string,
    value?: string,
    defaultValue?: string,
    disabled?: boolean,
    min?: number,
    max?: number,
    width?: number,
    checked?: boolean,
    defaultChecked?: boolean,
    autoFocus?: boolean,
    onClick?: () => void,
    onChange?: (event: any) => void,
    register?: UseFormRegisterReturn,
}