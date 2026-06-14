import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "gsagents.ai - Autonomous AI Software Engineering Platform",
  description: "Production-grade autonomous AI software engineering platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-950 text-slate-50">
          {children}
        </div>
      </body>
    </html>
  );
}