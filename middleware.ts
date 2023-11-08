export { default } from "next-auth/middleware"

export const config = { matcher: ["/book/:path*","/user/:path*"] }


