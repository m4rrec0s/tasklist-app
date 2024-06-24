import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_providers/auth";
import Modal from "./_components/modal";
import InitialScreen from "./_components/initial-screen";
import ThemeProvider from "./_providers/theme-provider";

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
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <InitialScreen />
            <Modal />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
