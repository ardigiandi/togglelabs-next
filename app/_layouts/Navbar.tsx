import Image from "next/image";
import Link from "next/link";
import DesktopNavbar from "../_components/DesktopNavbar";
import MobileNavbar from "../_components/MobileNavbar";

export default function Navbar() {
  return (
    <header className="absolute top-10 left-0 right-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link href="/" aria-label="Toggle Labs - Beranda">
          <Image
            src="/images/togglelabss.svg"
            alt="Toggle Labs"
            width={129}
            height={40}
            priority
          />
        </Link>

        <DesktopNavbar />

        <div className="block md:hidden">
          <MobileNavbar />
        </div>
      </nav>
    </header>
  );
}