import Link from "next/link";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Portofolio", href: "/#portofolio" },
  { name: "Testimonial", href: "/#testimoni" },
];

export default function DesktopNavbar() {
  return (
    <>
      <ul className="gap-10 hidden md:flex bg-transparent">
        {navLinks.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-base leading-4 tracking-primary"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/#contact"
        className="text-base bg-primary rounded-full px-8 py-2.5 shadow-custom hidden md:block"
      >
        Book a Call
      </Link>
    </>
  );
}