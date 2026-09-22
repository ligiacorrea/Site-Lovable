import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioTranslations } from "@/i18n/portfolio";


export function SelectedWork() {
  const { language } = useLanguage();
  const t = portfolioTranslations[language].selectedWork;

  return (
    <section id="work" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-full mb-12 leading-relaxed text-sm md:text-base">
            {t.intro}

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.projects.map((project, index) => <div
              key={project.slug}
              className="bg-card border border-border rounded-lg p-6 md:p-8 flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}>
                
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 whitespace-pre-line">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-sans font-semibold uppercase tracking-wider text-foreground/70 mb-3">
                    {t.impact}
                  </p>
                  <ul className="space-y-2">
                    {project.impact.map((item) =>
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                  )}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                  to={`/case/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors group">
                    
                    {t.viewCase}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}