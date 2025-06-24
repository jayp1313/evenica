import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Evenica | E-Commerce Solutions & Microsoft D365 Experts",
  description:
    "Evenica is a leading provider of enterprise-grade e-commerce solutions. We help brands deliver sophisticated digital commerce experiences with Microsoft Dynamics 365 Commerce and our proprietary platforms.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background text-foreground"
        )}
      >
        <Header />

        <main
          className={cn("flex-1 min-w-full mt-18", "", "max-w-7xl mx-auto")}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
