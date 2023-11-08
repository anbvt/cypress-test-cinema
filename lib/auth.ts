import {checkError} from "@/common/validation/error";
import {customerAPI} from "@/util/API/Customer";
import {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export const authconfig: NextAuthOptions = {
    session: {
        strategy: "jwt",
        maxAge: 3 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                try {
                    const cus = await customerAPI.login({email: credentials?.email, password: credentials?.password})
                    if (cus) {
                        return {
                            id: cus.id,
                            name: cus.name,
                            email: cus.email,
                            image: "https://png.pngtree.com/png-clipart/20200701/original/pngtree-black-default-avatar-png-image_5407174.jpg",
                        };
                    }
                } catch (error: any) {
                    throw new Error(checkError(error.response.data.message, error.response.data.param))
                }
                return null

            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        }),

    ],
    pages: {
        signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({user, token, session, trigger}) {
            if (trigger === "update") {
                token.seat = session.seat
                token.topping = session.topping
                token.showtime = session.showtime
            }
            return {...token, ...user};
        },
        async session({session, token}) {
            session.user = {
                ...session.user,
                id: String(token.sub),
                seat: token.seat,
                topping: token.topping,
                showtime: token.showtime
            };
            return session;
        },
    },

}
