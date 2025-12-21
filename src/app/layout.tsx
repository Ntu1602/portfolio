import type { Metadata } from "next";
import { Preahvihear, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const poppins = Poppins({
  subsets: ["latin"], // hỗ trợ tiếng Việt
  weight: "400", // font này thường chỉ có 400
  display: "swap",
});

export const metadata = {
  title: "Portfolio Nguyễn Thái Tú",
  description:
    "Lập trình viên thiết kế website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Portfolio Nguyễn Thái Tú" />
        <meta
          property="og:description"
          content="Giới thiệu bản thân, dự án đã làm, kinh nghiệm làm việt"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio.liana.vn" />
        <meta property="og:image" content="https://portfolio.liana.vn/og.jpg" />
      </head>

      <body
        className={`${poppins.className} w-full`}
      >
        
        {children}
      </body>
    </html>
  );
}
