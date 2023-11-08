import { constants } from "@/common/constants"
export class NumberUtils{
    public static formatCurrency(value:number) : string{
        return value.toLocaleString("vi-VI",{
            style: 'currency',
            currency: 'VND'
        })
    }
    public static ConvertToUSD(price: number) {
        return (price / constants.USD).toFixed(2)
    }
}