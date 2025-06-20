// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: "Evenica - Home",
  description: "A modern web app with Next.js, Tailwind, shadcn",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background text-foreground min-w-full"
        )}
      >
        <Header />
        <main className="flex-1 container mx-auto w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
