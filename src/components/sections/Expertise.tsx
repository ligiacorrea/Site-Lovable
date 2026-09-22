import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioTranslations } from "@/i18n/portfolio";


export function Expertise() {
  const { language } = useLanguage();
  const t = portfolioTranslations[language].expertise;

  return (
    <section id="expertise" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-primary-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mb-4 leading-relaxed text-sm md:text-base">
            {t.intro}
          </p>
          

          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.areas.map((area, index) => <div key={area.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.08}s` }}>
              
                <h3 className="font-display text-lg font-medium text-primary-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {area.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}