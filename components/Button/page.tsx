import React from "react";
import {SyncLoader} from "react-spinners";

export interface ButtonProps {
    className: string,
    text: any;
    textColor: string;
    onClick?: () => any;
    disabled?: boolean;
    iconAfter?: React.ReactNode;
    iconBefore?: React.ReactNode;
    bgColor?: string;
    loadingColor?: string;
}

const Button = ({ ...props }: ButtonProps) => {
    return (
        <button
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
            style={props.disabled ? { backgroundColor: props.bgColor, cursor: "not-allowed" } : { backgroundColor: props.bgColor || "black", color: props.textColor || "#ffffff" }}>
            {props.iconBefore} {props.disabled ? <SyncLoader size={6} color={props.loadingColor || "#ffffff"} /> : props.text} {props.iconAfter}
        </button>
    );
};

export default Button;