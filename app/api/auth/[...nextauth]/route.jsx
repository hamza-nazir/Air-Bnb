import GoogleProvider from "next-auth/providers/google";
import connectedDb from "@/lib/db";
import User from "@/models/User";
import NextAuth from "next-auth";


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      await connectedDb();
      const userExist = await User.findOne({ email: profile.email });
      if (!userExist) {
        await User.create({
          email: profile.email,
          username: profile.name,
          image: profile.picture,
        });
      }
      return true;
    },
    async session({ session }) {
      await connectedDb();
      const user = await User.findOne({ email: session.user.email });
      session.user.id = user._id.toString();
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
