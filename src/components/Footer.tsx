"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 py-6 px-4 md:px-20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
      <div className="mb-4 md:mb-0">© {year} Evenica. All rights reserved.</div>
      <div className="flex space-x-4">
        <Link
          href="https://www.linkedin.com/company/evenica/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 hover:text-blue-700" />
        </Link>
        <Link
          href="https://www.facebook.com/people/Evenica/100068591972640/#"
          target="_blank"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5 hover:text-blue-600" />
        </Link>
        <Link
          href="https://x.com/evenicacorp"
          target="_blank"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5 hover:text-blue-400" />
        </Link>
        <Link
          href="https://www.instagram.com/evenicacorp/"
          target="_blank"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 hover:text-pink-500" />
        </Link>
      </div>
    </footer>
  );
}
