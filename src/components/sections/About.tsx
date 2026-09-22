import ligiaPhoto from "@/assets/ligia-photo.jpg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioTranslations } from "@/i18n/portfolio";

export function About() {
  const { language } = useLanguage();
  const t = portfolioTranslations[language].about;
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.2"]
  });

  // Photo: starts centered & large, shrinks and moves right
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const photoX = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const photoWidth = useTransform(scrollYProgress, [0, 1], ["60%", "100%"]);

  // Text: fades and slides in from left
  const textOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.4, 1], [-40, 0]);

  // Title
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.2, 0.6], [20, 0]);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            style={{ opacity: titleOpacity, y: titleY }}
            className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">
            
            {t.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 items-start">
            <motion.div
              style={{ opacity: textOpacity, x: textX }}
              className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              
              {t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </motion.div>

            <div className="flex justify-center md:justify-end overflow-hidden rounded-lg">
              <motion.img src={ligiaPhoto}
               alt={t.photoAlt}
              style={{
                scale: photoScale,
                x: photoX,
                width: photoWidth
              }}
              className="h-[28rem] object-cover object-[center_20%] rounded-lg" />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}