import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import BottomNavigation from "@/components/bottomNavigation/BottomNavigation";
import Footer from "@/components/Footer/Footer";
import { headers } from 'next/headers';


export const metadata: Metadata = {
  title: "Create Flowbite React",
  description: "Generated by create flowbite react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const isAdminOrUserPanel = pathname.startsWith('/admin-panel') || pathname.startsWith('/user-panel');

  return (
    <html lang="fa">
      <head>
        
      </head>

      <body dir="rtl" className="bg-[#f9f9f9]" >
        {!isAdminOrUserPanel && <Navbar />}

        {children}
        {!isAdminOrUserPanel && <BottomNavigation />}
        {!isAdminOrUserPanel && <Footer />}
      </body>
    </html>
  );
}
