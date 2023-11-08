export interface ButtonPropos {
    className?: String,
    title?: string,
    onClick?: () => void,
    icon?: React.ReactNode,
    style?: any,
}

export interface aPropos {
    className?: String,
    href: string
}

export interface Object {
    id: number,
    name: string
}

export interface DropDownProps {
    id: string,
    title: string,
    data?: Array<Object>
}

