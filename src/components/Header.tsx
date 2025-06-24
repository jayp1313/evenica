"use client";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <MaxWidthWrapper>
        <div className="grid grid-cols-3 items-center py-4">
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

          <div className="justify-self-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
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
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/about">About</Link>
                  </NavigationMenuLink>
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
