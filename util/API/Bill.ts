import { fetchAPI } from "./axios";

const getBillHistory = async (customerId: number) => {
    return (await fetchAPI.get(`/bill?customerId=${customerId}`)).data as billHistory[];
}

const getBillDetails = async (billId: number, customerId: number) => {
    return (await fetchAPI.get(`/bill/details/${billId}`, { params: { customerId } })).data as billDetails;
}

const updateExportStatus = async (id:number, exportstatus:boolean) =>{
    return (await fetchAPI.get(`/bill/updateExportStatus`,{params:{id,exportstatus}})).data; 
}

export const billAPI = {
    getBillHistory,
    getBillDetails,
    updateExportStatus
}