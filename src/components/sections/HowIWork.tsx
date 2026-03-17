import { Search, GitBranch, Users, Layers, FlaskConical } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const stages = [
{
  icon: Search,
  title: "Understand complexity",
  subtitle: "",
  description: "Through discovery and research, I identify user needs, friction points and opportunities across the product ecosystem."
},
{
  icon: GitBranch,
  title: "Structure information",
  subtitle: "",
  description: "I design information architecture, terminology, conversational flows or help center structures that simplify complex journeys."
},
{
  icon: Users,
  title: "Enable teams",
  subtitle: "",
  description: "I create documentation, guidelines and governance models that support consistent content decisions."
},
{
  icon: FlaskConical,
  title: "Experiment and optimize",
  subtitle: "",
  description: "I conduct A/B tests and experiments to measure performance, identify what works best and optimize user experience based on data."
},
{
  icon: Layers,
  title: "Measure impact",
  subtitle: "",
  description: "I define and track KPIs and OKRs to evaluate content performance, guide decisions and continuously improve the product experience."
}];


export function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            How I Approach Content Strategy
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed text-sm md:text-base">For me, content strategy is not only about writing better interface text.<br />It is about translating complexity into structured systems that make products easier to use and evolve.</p>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed text-sm md:text-base">My work usually follows four main stages:</p>

          <Carousel
            opts={{ align: "start", loop: false }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {stages.map((stage, index) => (
                <CarouselItem
                  key={stage.title}
                  className="pl-4 basis-[85%] sm:basis-[45%] lg:basis-[30%]"
                >
                  <div
                    className="bg-card border border-border rounded-lg p-6 h-full animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <stage.icon className="h-5 w-5 text-foreground mb-4" strokeWidth={1.5} />
                    <h3 className="font-display text-lg font-medium text-foreground mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}