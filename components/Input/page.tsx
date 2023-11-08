import {InputProps} from "@/util/Props/InputProps";

const Input = ({ ...props }: InputProps) => {
    return (
        <>
            <input type={props.type} className={props.className} id={props.id} name={props.name}
                placeholder={props.placeholder} value={props.value} defaultValue={props.defaultValue}
                onClick={props.onClick} onChange={props.onChange} {...props.register} checked={props.checked}
                defaultChecked={props.defaultChecked}
            />
        </>
    );
}

export default Input;