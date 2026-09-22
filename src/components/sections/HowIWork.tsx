import { Search, GitBranch, Users, Layers, FlaskConical } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious } from
"@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioTranslations } from "@/i18n/portfolio";

const icons = [Search, GitBranch, Users, FlaskConical, Layers];


export function HowIWork() {
  const { language } = useLanguage();
  const t = portfolioTranslations[language].approach;

  return (
    <section id="how-i-work" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground mb-12 leading-relaxed text-sm md:text-base max-w-full">{t.introFirst}<br />{t.introSecond}</p>

          <Carousel
            opts={{ align: "start", loop: false }}
            className="w-full">
            
            <CarouselContent className="-ml-4">
              {t.stages.map((stage, index) => {
                const Icon = icons[index];
                return (
              <CarouselItem
                key={stage.title}
                className="pl-4 basis-[85%] sm:basis-[45%] lg:basis-[30%]">
                
                  <div
                  className="bg-card border border-border rounded-lg p-6 h-full animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  
                    <Icon className="h-5 w-5 text-foreground mb-4" strokeWidth={1.5} />
                    <h3 className="font-display text-lg font-medium text-foreground mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0" aria-label={t.previous} />
              <CarouselNext className="static translate-y-0" aria-label={t.next} />
            </div>
          </Carousel>
        </div>
      </div>
    </section>);

}