"use client";

import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const SideMenu = () => {
  const SideMenuItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Microsoft", href: "/microsoft" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy", href: "/privacy" },
  ];

  return (
    <Sheet>
      <SheetTrigger className="group flex items-center hover:text-muted-foreground">
        <p className="text-sm">
          <Menu />
        </p>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex w-full flex-col sm:max-w-lg z-[1000000] h-full p-4"
      >
        <div className="flex flex-col h-full justify-between ">
          <div className="flex flex-col justify-center flex-grow p-12">
            <ul className="flex flex-col gap-4">
              {SideMenuItems.map((item, index) => (
                <li key={index}>
                  {item.href ? (
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className="text-3xl font-medium hover:text-muted-foreground"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ) : (
                    <SheetClose asChild>
                      <button className="text-xl font-medium hover:text-muted-foreground">
                        {item.label}
                      </button>
                    </SheetClose>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t pt-4">
            <p className="text-sm flex items-center justify-between">
              <span>
                © {new Date().getFullYear()} Evenica. All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
