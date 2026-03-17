import ligiaPhoto from "@/assets/ligia-photo.jpg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function About() {
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
            
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 items-start">
            <motion.div
              style={{ opacity: textOpacity, x: textX }}
              className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              
              <p>
                I'm a UX Content Strategist with over five years of experience in UX Writing and more than ten years working in communication and digital marketing.
              </p>
              <p>
                My professional journey began in marketing and gradually evolved into the product world, where I developed a strong interest in how language, business strategy and user behavior intersect.
              </p>
              <p>
                At iCasei, I joined as the company's first UX Writer and later grew into a leadership role where I now lead the UX Writing and Growth areas. In this position, I work closely with product, marketing, engineering and support teams to transform complex needs into simple and intuitive user journeys.
              </p>
              <p>
                My work focuses on creating content strategies that guide users, reduce friction and reinforce the product's value proposition while supporting internal alignment across teams.
              </p>
              <p>
                ​Colleagues often describe me as calm, pragmatic and highly organized — someone who brings clarity in fast-moving environments. I naturally gravitate toward structuring information, documenting decisions and helping teams work more independently.

              </p>
              <p>
                What motivates me most is discovering problems, validating hypotheses and transforming complexity into systems that make products easier to understand and use.
              </p>
            </motion.div>

            <div className="flex justify-center md:justify-end overflow-hidden rounded-lg">
              <motion.img src={ligiaPhoto}
              alt="Ligia — UX Content Strategist"
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