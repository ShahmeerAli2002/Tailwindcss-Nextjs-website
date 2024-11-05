import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ultimate Gaming Hub - Built with Tailwind CSS",
  description: "This gaming website is designed with Tailwind CSS, created by Shahmeer Ali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
       
        {children}
        <Footer />
        </body>
    </html>
  );
}
