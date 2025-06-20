"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Logo section */}
      <div className="flex items-center space-x-4">
        <Image src="/Evenica-Logo.png" alt="logo" width={150} height={150} />
        <Image
          src="/Solutions-Partner-Short.png"
          alt="partner logo"
          width={120}
          height={120}
        />
      </div>

      {/* Navigation */}
      <NavigationMenu className="absolute left-1/2 transform -translate-x-1/2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/solutions">Solutions</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-2 p-2">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className="block p-2 rounded hover:bg-gray-100"
                    >
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/testimonials"
                      className="block p-2 rounded hover:bg-gray-100"
                    >
                      Testimonials
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/clients"
                      className="block p-2 rounded hover:bg-gray-100"
                    >
                      Clients
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/careers"
                      className="block p-2 rounded hover:bg-gray-100"
                    >
                      Careers
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/press"
                      className="block p-2 rounded hover:bg-gray-100"
                    >
                      Press
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/resources">Resources</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Contact button */}
      <div className="hidden md:flex justify-end">
        <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6">
          Contact
        </Button>
      </div>
    </header>
  );
}
