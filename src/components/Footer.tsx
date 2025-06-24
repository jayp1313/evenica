"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-3s00 bg-white text-gray-600 ">
      <MaxWidthWrapper className="space-y-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 ">
          <div className="flex gap-8 font-medium text-md underline">
            <Link href="/careers" className="hover:underline">
              Careers
            </Link>

            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>

            <Link href="/solutions#industries" className="hover:underline">
              Industries
            </Link>

            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
          <div className="space-y-6">
            <div className="flex justify-end space-x-6">
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
        </div>
        <div>© {year} Evenica. All rights reserved.</div>
      </MaxWidthWrapper>
    </footer>
  );
}
