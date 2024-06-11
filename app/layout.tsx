import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_providers/auth";
import Header from "./_components/header";
import Menu from "./_components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskList",
  description: "Marrecos©",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="h-[100vh] flex lg:hidden flex-col justify-between">
            <div className="mt-2 mb-8 px-2">
              <Header />
            </div>
            <div className="flex flex-col px-2 py-2 mb-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden animate-fadeIn">
              <div className="h-[100vh]">{children}</div>
            </div>
            <Menu />
          </div>

          {/* Tablets e Computadores */}

          <div className="hidden lg:flex max-h-[100vh]">
            <div>
              <Menu />
            </div>
            <div className="w-[100vw] h-[100vh] flex flex-col px-2 py-2 mb-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden animate-fadeIn">
              <div className="mt-4 mb-8 px-2">
                <Header />
              </div>
              <div>{children}</div>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
