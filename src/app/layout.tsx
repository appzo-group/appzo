import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://appzo.app"),
  title: "Appzo.app | Digital Resources & File Hosting Platform",
  description:
    "Appzo.app is a secure digital resource and file hosting platform providing fast access to media, APKs, and web resources. Optimized for performance and reliability.",
  keywords: [
    "appzo",
    "appzo app",
    "file hosting",
    "digital resources",
    "apk hosting",
    "media storage",
    "cloud files",
  ],
  authors: [{ name: "Appzo" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Appzo.app | Digital Resources & File Hosting",
    description:
      "A modern platform for hosting and managing digital resources with speed and security.",
    url: "https://appzo.app/",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
