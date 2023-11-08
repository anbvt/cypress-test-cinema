import {ObjectValidate} from "@/common/validation/validation";

export const NAME: ObjectValidate = { key: "name", name: "Tên" };
export const PHONE: ObjectValidate = { key: "phone", name: "Số điện thoại" };
export const FORMAT_PHONE: ObjectValidate = { key: "phone", name: "Số điện thoại", value: /^[0-9]+$/, message: "Số điện thoại không hợp lệ" };
export const MIN_PHONE: ObjectValidate = { key: "phone", name: "Số điện thoại", message: "Số điện thoại phải là 10 số", value: 10 }
export const MAX_PHONE: ObjectValidate = { key: "phone", name: "Số điện thoại", message: "Số điện thoại không được quá 10 số", value: 11 }
export const EMAIL: ObjectValidate = { key: "email", name: "Email" };
export const FORMAT_EMAIL: ObjectValidate = { key: "email", name: "Email", value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email " };
export const PASSWORD: ObjectValidate = { key: "password", name: "Mật khẩu" };
export const GENDER: ObjectValidate = { key: "gender", name: "Giới tính" };
export const ADDRESS: ObjectValidate = { key: "address", name: "Địa chỉ" };
export const MIN_PASSWORD: ObjectValidate = { key: "password", name: "Mật khẩu", message: "Mật khẩu ít nhất 8 kí tự", value: 8 };
export const MAX_PASSWORD: ObjectValidate = { key: "password", name: "Mật khẩu", message: "Khẩu khẩu không được quá 10 kí tự", value: 10 };