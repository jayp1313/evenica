"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Facebook, Twitter, PhoneIcon } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-white py-20">
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-purple-600 text-sm font-semibold tracking-wide uppercase mb-2">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let’s Work Together
            </h2>

            <p className="mb-2">
              <span>
                3050 Harvester Rd, Unit 208
                <br />
                Burlington, ON L7N 3J1, Canada
              </span>
            </p>
            <a className="font-medium" href="mailto:info@evenica.com">
              info@evenica.com
            </a>

            <p className="mb-6 flex items-center">
              <PhoneIcon className="w-4 h-4 mr-2" />
              <a href="tel:+18442270453" className="font-medium">
                +1 844 227 0453
              </a>
            </p>

            <div className="flex space-x-4">
              <Linkedin className="cursor-pointer" />
              <Facebook className="cursor-pointer" />
              <Twitter className="cursor-pointer" />
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First Name *" required />
              <Input placeholder="Last Name *" required />
            </div>
            <Input type="email" placeholder="Email *" required />
            <Textarea placeholder="Leave us a message..." rows={4} />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
