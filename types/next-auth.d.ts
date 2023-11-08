import {DefaultUser} from "next-auth"

interface IUser extends DefaultUser {
    seat?: any;
    topping?: any;
    showtime?: any
}

declare module "next-auth" {

    interface Session {
        user: {
            id: string | number
        } & DefaultSession["user"]
    }
}
