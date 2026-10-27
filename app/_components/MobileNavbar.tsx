"use client";

import Link from "next/link";
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
import { useRef, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface NavbarPros {
  name: string;
  icon?: LucideIcon;
  href: string;
}

export default function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pendingHref = useRef<string | null>(null);
const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    pendingHref.current = href;
    setShowMobileMenu(false);
  };

  const handleOpenChangeComplete = (open: boolean) => {
    const href = pendingHref.current;
    if (open || !href) return;
    pendingHref.current = null;

    const hash = href.slice(href.indexOf("#")); 

    if (pathname === "/") {
      document
        .querySelector(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    } else {
      router.push(href); 
    }
  };

  const navLinks: NavbarPros[] = [
    { name: "About", icon: Home, href: "/#about" },
    { name: "Services", icon: Toolbox, href: "/#services" },
    { name: "Portofolio", icon: NotebookText, href: "/#portofolio" },
    { name: "Testimoni", icon: MessageCirclePlus, href: "/#testimoni" },
  ];

  return (
    <div className="flex lg:hidden">
      <Sheet
        open={showMobileMenu}
        onOpenChange={setShowMobileMenu}
        onOpenChangeComplete={handleOpenChangeComplete}>
        <SheetTrigger render={<Button variant="ghost" size={"lg"} />}>
          <PanelRightOpen className="w-10 h-10" />
        </SheetTrigger>
        <SheetContent className={"bg-secondary border-white/10"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-4 mt-6">
            {navLinks.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{ animationDelay: `${i * 60 + 100}ms` }}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "flex items-center gap-3 justify-start",
                  "animate-in fade-in slide-in-from-right-4 fill-mode-both duration-300"
                )}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
