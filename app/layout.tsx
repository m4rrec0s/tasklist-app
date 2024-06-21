import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_providers/auth";
import Modal from "./_components/modal";

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
          <Modal />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
