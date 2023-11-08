import { paypalAPI } from '@/util/API/Paypal';
import { errorNotification } from '@/util/Notification';
import { PaypalProps, checkoutOrderProps } from '@/util/Props/PaypalProps';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useRouter } from "next/navigation";

const PaypalButton = ({ ...props }: PaypalProps) => {
    const router = useRouter();
    const dataOrder: checkoutOrderProps = {
        amount: {
            "currency_code": "USD",
            "value": props.amount,
            "breakdown": {
                "item_total": {
                    "currency_code": "USD",
                    "value": props.amount
                }
            }
        },
        items: props.item
    }
    async function onApprove(data: any) {
        return paypalAPI.completeOrder(data.orderID).then(() => {
            router.push("/book/complete/paypal");
        }).catch((e) => { errorNotification(e) });
    }
    return (
        <>
            <PayPalScriptProvider options={{
                clientId: "AS3GMon7G2DarO2qPTRZASACGMwV1Qi5_o07M_T1H208TBBsKbwQT4net7Gans25VrM8pdMjXltJetW2",
                currency: "USD",
                intent: "capture",
            }} deferLoading={false}>
                <PayPalButtons style={{height: 55, color: 'black', layout: 'horizontal', tagline: false }} createOrder={() => { return paypalAPI.checkoutOrder([dataOrder]).then(rs => { return rs }) }} onApprove={onApprove} />
            </PayPalScriptProvider>
        </>
    );
}
export default PaypalButton;