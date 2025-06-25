"use client";
import "./globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background text-foreground"
        )}
      >
        <Header />

        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <main
            className={cn("flex-1 min-w-full mt-18", "", "max-w-7xl mx-auto")}
          >
            {children}
          </main>
        </motion.div>

        <Footer />
      </body>
    </html>
  );
}
