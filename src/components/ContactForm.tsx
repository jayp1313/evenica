// components/ContactForm.tsx
"use client";

import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Facebook, Twitter } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-white py-20">
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          {/* Contact Info */}
          <div>
            <p className="text-purple-600 text-sm font-semibold tracking-wide uppercase mb-2">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let’s Work Together
            </h2>
            <p className="mb-2">3050 Harvester Rd, Burlington, ON</p>
            <p className="mb-2">info@evenica.com</p>
            <p className="mb-6">Tel: 123-456-7890</p>

            <div className="flex space-x-4">
              <Linkedin className="cursor-pointer" />
              <Facebook className="cursor-pointer" />
              <Twitter className="cursor-pointer" />
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First Name *" required />
              <Input placeholder="Last Name *" required />
            </div>
            <Input type="email" placeholder="Email *" required />
            <Textarea placeholder="Leave us a message..." rows={4} />
            <Button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6"
            >
              Submit
            </Button>
          </form>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
