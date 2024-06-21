import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/app/_lib/prisma"
import { Adapter } from "next-auth/adapters"
import { Decimal } from "@prisma/client/runtime/library"

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
      session.age = userFinded?.age as number
      session.gender = userFinded?.gender as string
      session.height = userFinded?.height as Decimal
      session.weight = userFinded?.weight as Decimal
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
})

declare module "next-auth" {
  interface Session {
    id?: string;
    gender?: string;
    age? : number;
    height?: Decimal;
    weight?: Decimal;
  }
}

export { handler as GET, handler as POST }