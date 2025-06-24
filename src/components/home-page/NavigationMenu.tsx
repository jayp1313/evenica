"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import EvenicaLogo from "../../public/Evenica-Logo.png";
import SolutionsPartner from "../../public/Solutions-Partner-Short.png";

export function NavigationMenubar() {
  return (
    <NavigationMenu className="flex items-center justify-between min-w-full p-2">
      <div className="flex items-center space-x-4">
        <Image
          src={EvenicaLogo}
          alt="Evenica"
          height={50}
          width={150}
          className="h-auto w-auto max-h-12"
        />
        <Image
          src={SolutionsPartner}
          alt="Solutions Partner"
          height={50}
          width={150}
          className="h-auto w-auto max-h-12"
        />
      </div>

      <NavigationMenuList className="flex space-x-2">
        {[
          { href: "/solutions", label: "Solutions" },
          { href: "/about", label: "About" },
          { href: "/case-studies", label: "Case Studies" },
          { href: "/resources", label: "Resources" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={href}>{label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
