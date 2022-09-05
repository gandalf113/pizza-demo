import mongoose from "mongoose";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import connectDb from "../../../utils/connect-db";
import User from "../../../models/user";
import { verifyPassword } from "../../../utils/auth-utils";

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                await connectDb();
                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    throw new Error('Nie znaleziono użytkownika');
                }

                const isValid = await verifyPassword(credentials.password, user.password);

                if (!isValid) {
                    throw new Error('Nieprawidłowe dane');
                }

                // If we made it to this point, authorize
                return { email: user.email };
            }
        })
    ]
});