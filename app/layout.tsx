import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

/** Single typeface for the whole site. */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://access-soft.vercel.app";
const title = "AccessSoft — Digital Product & Technology Partner";
const description =
  "AccessSoft is a digital product and technology partner in Kigali, Rwanda. We design, engineer, and scale premium digital products for ambitious businesses — from strategy to launch and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AccessSoft",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f6f3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
