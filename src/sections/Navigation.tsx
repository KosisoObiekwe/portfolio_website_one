import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { isScrolled } = useScrollPosition();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-bg-primary/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-medium text-black tracking-tight hover:opacity-70 transition-opacity"
        >
          © Kxsi design & Strategy
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-normal text-black hover:opacity-70 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact */}
        <a
          href="#contact"
          className="text-sm font-normal text-black hover:opacity-70 transition-opacity"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
