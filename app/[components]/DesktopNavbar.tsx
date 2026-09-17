export default function DesktopNavbar() {
  return (
    <>
      <ul className="gap-10 hidden md:flex bg-transparent">
        <li>
          <a href="#" className="text-base leading-4 tracking-primary">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-base leading-4 tracking-primary">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-base leading-4 tracking-primary">
            Portofolio
          </a>
        </li>
        <li>
          <a href="#" className="text-base leading-4 tracking-primary">
            Testimonial
          </a>
        </li>
      </ul>

      <a
        href="#"
        className="text-base bg-primary rounded-full px-8 py-2.5 shadow-custom hidden md:block"
      >
        Book a Call
      </a>
    </>
  );
}
