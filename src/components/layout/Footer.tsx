import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioTranslations } from "@/i18n/portfolio";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="py-8 border-t border-primary/20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <p className="text-xs text-primary-foreground/70 text-center">
          © {new Date().getFullYear()} Ligia Corrêa. {portfolioTranslations[language].footer}
        </p>
      </div>
    </footer>
  );
}
