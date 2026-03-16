import ligiaPhoto from "@/assets/ligia-photo.jpg";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 items-start">
            <div className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
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
                Colleagues often describe me as calm, pragmatic and highly organized — someone who brings clarity in fast-moving environments.
              </p>
              <p>
                What motivates me most is discovering problems, validating hypotheses and transforming complexity into systems that make products easier to understand and use.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src={ligiaPhoto}
                alt="Ligia — UX Content Strategist"
                className="w-64 h-[26rem] object-cover object-[center_20%] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
