import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#ranking", label: "Ranking" },
  { href: "/#bonos", label: "Bonos" },
  { href: "/#como-elegimos", label: "Metodología" },
  { href: "/#faq", label: "FAQ" },
  { href: "/sobre-nosotros/", label: "Sobre nosotros" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2" aria-label="Inicio">
            <span className="text-xl font-bold text-foreground">♠ Casinos</span>
            <span className="text-sm font-bold text-primary -ml-1">Sin Licencia</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Red gradient line like competitor */}
        <div className="gradient-line w-full" />

        {open && (
          <nav className="md:hidden border-t border-border bg-background pb-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
