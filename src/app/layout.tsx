import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ibekwe Kingsley — AI Engineer",
  description:
    "AI Engineer specializing in applied AI systems, intelligent agents, machine learning, and NLP. Building data-driven solutions that solve real-world problems.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "NLP",
    "LangChain",
    "Python",
    "Deep Learning",
    "Intelligent Agents",
  ],
  authors: [{ name: "Ibekwe Kingsley" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-[family-name:var(--font-inter)]">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
