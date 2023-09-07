import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.Client_ID,
            clientSecret: process.env.Client_secret,
        })
    ],
    async session({ session }){

    },
    async signIn({ profile }){
        try {

        } catch (error) {
            
        }
    }
})

export { handler as GET, handler as POST };