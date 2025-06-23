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
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <MaxWidthWrapper>
        <div className="grid grid-cols-3 items-center py-4">
          {/* Left: Logos */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/Evenica-Logo.png"
                alt="logo"
                width={150}
                height={150}
                className="max-w-[120px] h-auto"
              />
            </Link>

            <Image
              src="/Solutions-Partner-Short.png"
              alt="partner logo"
              width={120}
              height={120}
              className="max-w-[100px] h-auto"
            />
          </div>

          {/* Center: Navigation */}
          <div className="justify-self-center">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/solutions">Solutions</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/resources">Resources</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/case-studies">Case Studies</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  {/* <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/about">About</Link>
                  </NavigationMenuLink> */}
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
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="justify-self-end hidden md:block">
            <Button asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
