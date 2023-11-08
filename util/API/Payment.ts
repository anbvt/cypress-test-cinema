import { fetchAPI } from "./axios"

const createPayment = async (data:any) =>{
    return (await fetchAPI.post("/vnpay/pay",data)).data as string;
}

export const paymentAPI = {
    createPayment
}