export interface InputPropos {
    id?: number | string,
    title?: string;
    name?: string,
    type: string,
    className?: string,
    placeholder?: string;
}

export interface RadioProps {
    id?: number | string,
    text: string,
    className?: string,
    value?: string,
    enabled?: boolean;
}

export interface DataObject {
    id: number | string;
    name: string;
}

export interface Props {
    data: DataObject[];
}


