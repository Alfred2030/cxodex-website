import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { site } from "../content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cxodex.com"),
  title: {
    default: "CXODEX | CEO 陪跑与经营改善咨询",
    template: `%s | ${site.brand}`
  },
  description: site.description,
  openGraph: {
    title: "CXODEX | CEO 陪跑与经营改善咨询",
    description: site.description,
    url: "https://cxodex.com",
    siteName: site.brand,
    locale: "zh_CN",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
