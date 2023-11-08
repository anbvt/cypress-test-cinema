export interface listOrder {
    name: string,
    description: string,
    quantity: string,
    unit_amount: { currency_code: 'USD', value: string }
}
export interface amountOrder {
    currency_code: 'USD',
    value: string,
    breakdown: {
        item_total: {
            currency_code: 'USD',
            value: string
        }
    }
}
export interface checkoutOrderProps {
    "items": listOrder[],
    "amount": amountOrder
}
export interface PaypalProps {
    amount: string,
    item: listOrder[]
}