"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 bg-white text-gray-600">
      <MaxWidthWrapper className="space-y-8 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Links Section */}
          <div className="flex flex-wrap gap-4 font-medium text-md underline sm:gap-6 md:gap-8">
            <Link href="/careers" className="hover:underline whitespace-nowrap">
              Careers
            </Link>
            <Link href="/privacy" className="hover:underline whitespace-nowrap">
              Privacy
            </Link>
            <Link
              href="/microsoft"
              className="hover:underline whitespace-nowrap"
            >
              Microsoft
            </Link>
            <Link
              href="/solutions#industries"
              className="hover:underline whitespace-nowrap"
            >
              Industries
            </Link>
            <Link href="/contact" className="hover:underline whitespace-nowrap">
              Contact
            </Link>
          </div>

          {/* Social Icons Section */}
          <div className="space-y-6">
            <div className="flex justify-start md:justify-end space-x-6">
              <Link
                href="https://www.linkedin.com/company/evenica/"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:opacity-75 transition-opacity"
              >
                <Linkedin className="w-5 h-5 hover:text-blue-700" />
              </Link>
              <Link
                href="https://www.facebook.com/people/Evenica/100068591972640/#"
                target="_blank"
                aria-label="Facebook"
                className="hover:opacity-75 transition-opacity"
              >
                <Facebook className="w-5 h-5 hover:text-blue-600" />
              </Link>
              <Link
                href="https://x.com/evenicacorp"
                target="_blank"
                aria-label="Twitter"
                className="hover:opacity-75 transition-opacity"
              >
                <Twitter className="w-5 h-5 hover:text-blue-400" />
              </Link>
              <Link
                href="https://www.instagram.com/evenicacorp/"
                target="_blank"
                aria-label="Instagram"
                className="hover:opacity-75 transition-opacity"
              >
                <Instagram className="w-5 h-5 hover:text-pink-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Evenica. All rights reserved.
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
