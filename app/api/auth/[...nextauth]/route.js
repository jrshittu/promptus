import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const handler = nextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.Client_ID,
            clientSecret: process.env.Client_secret,
        })
    ],
    async session({ session }){

    },
    async signIn({ profile }){

    }
})