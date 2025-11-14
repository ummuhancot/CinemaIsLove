import { getIsTokenValid, getIsUserAuthorized } from "@/helpers/auth-helpers";
import { login } from "@/services/auth-service";
import { jwtDecode } from "jwt-decode";

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const res = await login(credentials);
        // auth-service.js artık fetch return ediyor, res.json() yok
        const data = res; // Doğrudan data

        if (!data?.authToken) return null;

        const payload = {
          user: {
            authToken: data.authToken,
          },
          authToken: data.authToken,
        };

        return payload;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        try {
          const decoded = jwtDecode(user.authToken);

          console.log("JWT Decoded:", JSON.stringify(decoded, null, 2));
          console.log("Roles:", decoded.roles);

          return {
            ...token,
            user: {
              id: decoded.userId,
              email: decoded.sub,
              name: decoded.sub.split("@")[0],
              roles: decoded.roles || [],
            },
            authToken: user.authToken,
          };
        } catch (error) {
          console.error("JWT decode error:", error);
          return null;
        }
      }
      return token;
    },
    async session({ session, token }) {
      const { authToken, user } = token;

      const isTokenValid = getIsTokenValid(authToken);
      if (!isTokenValid) return null;

      session.user = token.user;
      session.role = token.role;
      session.authToken = token.authToken;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
  trustHost: true,
});
