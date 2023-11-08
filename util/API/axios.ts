import axios from "axios";

export const fetchAPI = axios.create({
    baseURL: "https://test.zuhot-api.id.vn/api",
    headers: { 'zuhot-key': 'abc123456' }
});
export const fetchPaypalAPI = axios.create({
    baseURL: "https://api-m.sandbox.paypal.com"
});