import { getIsTokenValid, getIsUserAuthorized } from "@/helpers/auth-helpers";
import { login } from "@/services/auth-service";

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => { 
        const res = await login(credentials);
        const data = await res.json();

        if (!res.ok) return null; 
        const payload = {
          user: { ...data },
          authToken: data.token,
        };
        delete payload.user.token;

        return payload;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user: user.user,
          authToken: user.authToken,
        };
      }
      return token;
    },
    async session({ session, token }) {
      const { authToken, user } = token;

      const isTokenValid = getIsTokenValid(authToken);
      if (!isTokenValid) return null;

      session.user = user;
      session.authToken = authToken;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
  trustHost: true,
});
