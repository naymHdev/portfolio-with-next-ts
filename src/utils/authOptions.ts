import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail, IUser } from "@/data/users";

// Define the type for credentials (email and password)
interface Credentials {
  email: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      // Provide a properly typed authorize method
      async authorize(credentials: Credentials) {
        if (!credentials) return null;

        try {

          const user = getUserByEmail(credentials.email);

          // Check if the password matches
          const isMatch = user?.password === credentials.password;

          if (isMatch) {
            return user as IUser;
          } else {
            throw new Error("Check your email and password");
          }

        } catch (error) {
          throw new Error("Authentication failed");
        }
      },
    }),

    // Social Providers
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
