import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CXODEX 企业经营健康诊断",
  description: "面向 CEO 的企业经营问题诊断工具。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
