import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto, Rubik } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className="flex flex-col justify-between min-h-screen ">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
