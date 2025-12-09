import type { Metadata } from "next";
import { Preahvihear } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const preahvihear = Preahvihear({
  subsets: ["latin"], // hỗ trợ tiếng Việt
  weight: "400", // font này thường chỉ có 400
  display: "swap",
});

export const metadata = {
  title: "Hello! I Am Nguyen Thai Tu –- Website Developer",
  description:
    "A website developer who brings your ideas on the internet. Modern, clean, professional UI/UX.",
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
        <meta property="og:title" content="Nguyen Thai Tu – Website Developer" />
        <meta
          property="og:description"
          content="A website developer who brings your ideas on the internet. Modern, clean, responsive design."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio.liana.vn" />
        <meta property="og:image" content="https://portfolio.liana.vn/og.jpg" />
      </head>

      <body
        className={`${preahvihear.className} w-full`}
      >
        
        {children}
      </body>
    </html>
  );
}
