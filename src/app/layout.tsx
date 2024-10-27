import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Pixel",
  description: "Where imagination becomes reality in the heart of San Francisco",
  icons:{
    icon: [
      {
        url: '/images/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} w-screen overflow-x-hidden`}>
        <NavBar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
