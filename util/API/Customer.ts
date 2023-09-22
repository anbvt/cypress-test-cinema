import { fetchAPI } from "./axios";

const findAll = async () => {
    return (await fetchAPI.get("/customer/getAll")).data as customer[];
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
export const customerAPI = {
    registration,
    registrationConfirm,
    findAll,
    login
}

