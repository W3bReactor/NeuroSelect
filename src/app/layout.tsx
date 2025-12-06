import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import {Providers} from "@/app/providers";

const inter = Inter({subsets: ['latin']});
export const metadata: Metadata = {
  title: "NeuroSelect",
  description: "Агрегация товаров",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}
