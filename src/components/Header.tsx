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
import SideMenu from "./SideMenu";
import { useEffect, useState } from "react";

export default function Header() {
  const breakpoint = 768;
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize();

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between py-4 md:grid md:grid-cols-3 md:items-center">
          <div className="flex items-center space-x-3">
            {isMobile && <SideMenu />}
            <Link href="/">
              <Image
                src="/Evenica-Logo.png"
                alt="logo"
                width={200}
                height={200}
                className="max-w-[140px] h-auto"
              />
            </Link>
            <Link href="/microsoft">
              <Image
                src="/Solutions-Partner-Short.png"
                alt="partner logo"
                width={200}
                height={200}
                className="max-w-[130px] h-auto"
              />
            </Link>
          </div>

          {!isMobile && (
            <div className="justify-self-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
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
          )}

          {!isMobile && (
            <div className="justify-self-end">
              <Button asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
