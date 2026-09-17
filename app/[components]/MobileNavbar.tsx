"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Home,
  MessageCirclePlus,
  NotebookText,
  PanelRightOpen,
  Toolbox,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

interface NavbarPros {
  name: string;
  icon?: LucideIcon;
  href: string;
}

export default function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navLinks: NavbarPros[] = [
    {
      name: "About",
      icon: Home,
      href: "#",
    },
    {
      name: "Services",
      icon: Toolbox,
      href: "#",
    },
    {
      name: "Portofolio",
      icon: NotebookText,
      href: "#",
    },
    {
      name: "Testimoni",
      icon: MessageCirclePlus,
      href: "#",
    },
  ];

  return (
    <div className="flex lg:hidden">
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger render={<Button variant="ghost" size={"lg"} />}>
          <PanelRightOpen className="w-10 h-10" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-4 mt-6">
            {navLinks.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex items-center gap-3 justify-start"
                // onClick={() => scrollToSection(item.id)}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.name}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
