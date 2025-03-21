import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "@/data/users";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      // Provide a properly typed authorize method
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<string, string> | undefined) {
        if (!credentials) return null;

        try {

          const user = getUserByEmail(credentials.email);

          // Check if the password matches
          const isMatch = user?.password === credentials.password;

          if (isMatch) {
            return {
              id: user.id as string,
              name: user.name,
              email: user.email,
              image: user.image,
            } as User;
          } else {
            throw new Error("Check your email and password");
          }

        } catch (error) {
          throw new Error(`Authentication failed: ${error instanceof Error ? error.message : error}`);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
