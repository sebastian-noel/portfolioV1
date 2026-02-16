import type { Metadata } from "next";
import { Rubik, Fragment_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const rubik = Rubik({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik" 
});

const fragmentMono = Fragment_Mono({ 
  subsets: ["latin"], 
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-fragment-mono" 
});

export const metadata: Metadata = {
  title: "Sebastian Noel | Portfolio",
  description: "Software Engineer and Computer Science student at University of Central Florida. View my site to learn about me, my experience, and my projects to learn more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} ${rubik.variable} ${fragmentMono.variable}`}>
        <Navbar />
        <main className="min-h-screen pt-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
