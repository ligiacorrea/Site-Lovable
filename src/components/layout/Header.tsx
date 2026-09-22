import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioTranslations } from "@/i18n/portfolio";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = portfolioTranslations[language].header;
  const navItems = [
    { label: t.work, href: "/#work" },
    { label: t.expertise, href: "/#expertise" },
    { label: t.about, href: "/#about" },
    { label: t.contact, href: "/#contact" },
  ];

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

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-8">
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
            <div className="flex items-center border border-primary-foreground/30 rounded-md p-0.5" aria-label={t.language}>
              {(["pt", "en"] as const).map((lang) => (
                <Button
                  key={lang}
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={() => setLanguage(lang)}
                  aria-pressed={language === lang}
                  aria-label={lang === "pt" ? t.portuguese : t.english}
                  className={`h-7 px-2 text-xs hover:bg-primary-foreground/10 hover:text-primary-foreground ${language === lang ? "bg-primary-foreground text-primary" : "text-primary-foreground/70"}`}
                >
                  {lang.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            aria-label={isMobileMenuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
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
          <div className="flex items-center gap-2 pt-2 border-t border-primary-foreground/10" aria-label={t.language}>
            {(["pt", "en"] as const).map((lang) => (
              <Button
                key={lang}
                type="button"
                size="sm"
                variant="ghost"
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
                className={`h-8 px-3 hover:bg-primary-foreground/10 hover:text-primary-foreground ${language === lang ? "bg-primary-foreground text-primary" : "text-primary-foreground/70"}`}
              >
                {lang.toUpperCase()}
              </Button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
