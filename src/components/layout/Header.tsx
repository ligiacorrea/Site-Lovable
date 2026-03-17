import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Expertise", href: "/#expertise" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-primary"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="font-display text-lg font-medium text-primary-foreground"
          >
            Ligia Corrêa
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4 pt-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  handleNavClick(item.href);
                }
              }}
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
