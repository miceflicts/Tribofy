import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { userService } from "@/app/services/api";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        /* const user = { id: "1" };
        return user; */
        const { email, password } = credentials;

        try {
          const user = await userService.logIn({
            email,
            password,
          });

          return user.user;
        } catch (error) {
          console.log(error);
          return null;
        }
        // Fetch the user from your backend API
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.username = token.username;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/pages/auth/signIn",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
