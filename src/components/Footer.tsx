"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-gray-300 shadow-sm">
      <MaxWidthWrapper>
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
          <div className="mb-4 md:mb-0">
            © {year} Evenica. All rights reserved.
          </div>
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
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
