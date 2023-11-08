export interface ObjectValidate {
    key: string,
    name: string,
    value?: any,
    message?: string
}
export const format = (key: string, value: any, message: string) => {
    return { [key]: { value: value, message: "*" + message + "*" } };
}
const required = (obj: ObjectValidate) => {
    return { ...format("required", true, `${obj.name} không được bỏ trống`) };
}
const pattern = (obj: ObjectValidate) => {
    return { ...format("pattern", obj.value, `${obj.name} không hợp lệ`) };
}
const minLength = (obj: ObjectValidate) => {
    return { ...format("minLength", obj.value, obj.message || "") };
}
const maxLength = (obj: ObjectValidate) => {
    return { ...format("maxLength", obj.value, obj.message || "") };
}
const other = (key: string, value: any, obj: ObjectValidate) => {
    return { [obj.key]: { ...format(key, value, obj.message || "") } };
}

export const validation = {
    required,
    other,
    pattern,
    minLength,
    maxLength
}