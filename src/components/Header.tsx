"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center px-6 py-4 fixed w-full bg-white z-50 shadow-sm">
      <div className="flex items-center space-x-4">
        <Image src="/Evenica-Logo.png" alt="logo" width={150} height={150} />
        <Image
          src="/Solutions-Partner-Short.png"
          alt="partner logo"
          width={120}
          height={120}
        />
      </div>

      <nav className="hidden md:flex justify-center space-x-6 text-md font-medium text-gray-700">
        <Link href="#services">Services</Link>
        <Link href="#about">About</Link>
        <Link href="#testimonials">Testimonials</Link>
        <Link href="#clients">Clients</Link>
      </nav>

      <div className="flex justify-end">
        <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6">
          Contact
        </Button>
      </div>
    </header>
  );
}
