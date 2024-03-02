

import prisma from "@/connect"
import { PrismaAdapter } from "@auth/prisma-adapter"


import NextAuth from "next-auth"
import { getServerSession } from "next-auth"

import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
})

export { handler as GET, handler as POST }

export const getAuthSession = () => getServerSession(handler)