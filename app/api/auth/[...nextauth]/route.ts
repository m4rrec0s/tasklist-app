import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/app/_lib/prisma"
import { Adapter } from "next-auth/adapters"

const handler = NextAuth({
    adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      const userFinded = await db.user.findUnique({ where: { email: session.user?.email as string }})
      session.id = userFinded?.id
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
})

declare module "next-auth" {
  interface Session {
    id?: string
  }
}

export { handler as GET, handler as POST }