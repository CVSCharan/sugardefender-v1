import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sugar Defender",
  description: "The #1 Rated Blood Sugar Formula",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://richinfo.co/richpartners/in-page/js/richads-ob.js?pubid=929555&siteid=347784"
          async
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
