import {AxiosRequestConfig} from "axios";
import {fetchAPI} from "./axios";

const findAll = async () => {
    return (await fetchAPI.get("/customer/getAll")).data as customer[];
}

const findId = async (id: number) => {
    return (await fetchAPI.get(`/customer/${id}`)).data as customer;
}

const login = async (inputs: Object) => {
    return (await fetchAPI.post("/customer/login", inputs)).data;
}

const registration = async (inputs: object) => {
    return (await fetchAPI.post("/customer/registration", inputs)).data;
}
const registrationConfirm = async (inputs: string) => {
    return (await fetchAPI.get("/customer/active?userToken=" + inputs)).data;
}

const updateAvatar = async (formData: FormData) => {
    return (await fetchAPI.put(`/customer/update-avatar`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
        },
    })).data;
}

const editProfile = async (customer: Object) => {
    return (await fetchAPI.put(`/customer/edit-profile`, customer)).data;
}

const updatePassword = async (customer: Object) => {
    return (await fetchAPI.put(`/customer/update-password`, customer)).data;
}

const deleteAvatar = async (customerId: number, avatar: string) => {
    return (await fetchAPI.post(`/customer/delete-avatar`, null,
            {
                params: {
                    customerId,
                    avatar
                }
            }
        )
    ).data;
}

export const customerAPI = {
    registration,
    registrationConfirm,
    findAll,
    login,
    findId,
    updateAvatar,
    editProfile,
    updatePassword,
    deleteAvatar,
}

