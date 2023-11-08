import { checkoutOrderProps } from "../Props/PaypalProps";
import { fetchPaypalAPI } from "./axios";
const get_access_token = async () => {
    const clientIdAndSecret = `AS3GMon7G2DarO2qPTRZASACGMwV1Qi5_o07M_T1H208TBBsKbwQT4net7Gans25VrM8pdMjXltJetW2:EPP37Yqdag0obpOeDom8Vlp53_i0y-5u5-Z5tKgzatixBCmTBFGgqdKUrfORzhZ781aS9fL_p36r2V-L`;
    return (await fetchPaypalAPI.post("/v1/oauth2/token", 'grant_type=client_credentials', {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(clientIdAndSecret).toString('base64')}`,
        },
    })).data.access_token;
}
const checkoutOrder = async (data: checkoutOrderProps[]) => {
    const access_token = await get_access_token();
    return (await fetchPaypalAPI.post("/v2/checkout/orders", {
        "intent": "CAPTURE",
        "purchase_units": data
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
    })).data.id;
}
const completeOrder = async (orderID: any) => {
    const access_token = await get_access_token();
    return fetchPaypalAPI.post(`/v2/checkout/orders/${orderID}/capture`, null, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
    });
}
export const paypalAPI = {
    get_access_token,
    checkoutOrder,
    completeOrder
}