import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Text Column */}
          <div className="animate-fade-in">
            <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight font-medium text-foreground mb-6 tracking-tight">
              Designing content systems that bring clarity to complex digital products.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              UX Content Strategist specializing in discovery, research and scalable content governance.
            </p>

            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium">Hi, I'm Ligia.</p>
              <p>
                I work at the intersection of content, product and research — helping teams transform complex user journeys into clear and structured experiences.
              </p>
              <p>
                Over the past five years in UX Writing — and more than ten years in communication and digital marketing — I have focused on understanding user behavior, identifying friction points and designing content systems that support autonomy, reduce support needs and help teams scale decisions with consistency.
              </p>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="animate-slide-up stagger-2">
            <div className="aspect-video bg-muted rounded-lg border border-border flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-accent transition-colors">
              <div className="w-14 h-14 rounded-full bg-foreground/10 flex items-center justify-center">
                <Play className="h-6 w-6 text-foreground/60 ml-0.5" />
              </div>
              <span className="text-sm text-muted-foreground font-sans">Intro Video</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
