import { Search, GitBranch, Users, Layers } from "lucide-react";

const stages = [
  {
    icon: Search,
    number: "01",
    title: "Understand Complexity",
    subtitle: "Discovery & research",
    description:
      "I begin by understanding the product ecosystem, the business context and the real problems users are experiencing. This includes desk research, UX research, analyzing support tickets, identifying friction points and validating hypotheses about how people interpret the product.",
  },
  {
    icon: GitBranch,
    number: "02",
    title: "Structure Information",
    subtitle: "Content architecture",
    description:
      "Once the problems are clear, I focus on structuring the information. This may involve designing conversational flows, defining terminology, improving information architecture or reorganizing help center structures so users can navigate the product with confidence.",
  },
  {
    icon: Users,
    number: "03",
    title: "Enable Teams",
    subtitle: "Documentation & governance",
    description:
      "Content decisions need to be scalable. I create documentation, guidelines and frameworks that help product teams make consistent decisions over time and reduce dependency on individual contributors.",
  },
  {
    icon: Layers,
    number: "04",
    title: "Continuous Improvement",
    subtitle: "Content systems",
    description:
      "Finally, the goal is to ensure the system continues working as the product evolves. This often includes content operations, cross-team collaboration and governance models that maintain clarity while the product grows.",
  },
];

export function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            How I Approach Content Strategy
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-4 leading-relaxed text-sm md:text-base">
            For me, content strategy is not only about writing better interface text. It is about understanding complexity and building systems that make products easier to navigate, use and evolve.
          </p>
          <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed text-sm md:text-base">
            My work usually follows four main stages — as a continuous cycle:
          </p>

          {/* Double Diamond framework — desktop */}
          <div className="hidden lg:flex justify-center items-center mb-8">
            <div className="relative w-[900px] h-[360px]">
              {/* SVG double diamond shape */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 900 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* First diamond */}
                <path d="M50 180 L250 40 L450 180 L250 320 Z" stroke="hsl(var(--border))" strokeWidth="1.5" strokeDasharray="6 4" fill="hsl(var(--card))" fillOpacity="0.3" />
                {/* Second diamond */}
                <path d="M450 180 L650 40 L850 180 L650 320 Z" stroke="hsl(var(--border))" strokeWidth="1.5" strokeDasharray="6 4" fill="hsl(var(--card))" fillOpacity="0.3" />
                {/* Arrow at center junction */}
                <polygon points="450,170 460,180 450,190" fill="hsl(var(--muted-foreground))" opacity="0.5" />
              </svg>

              {/* Labels above diamonds */}
              <div className="absolute top-1 left-[90px] w-[320px] text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Discover the problem</span>
              </div>
              <div className="absolute top-1 left-[490px] w-[320px] text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Design the solution</span>
              </div>

              {/* Stage 1 — left vertex */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-44 text-center animate-slide-up">
                <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
                  <span className="text-xs font-mono text-muted-foreground">01</span>
                  <Search className="h-5 w-5 text-foreground mx-auto my-2" strokeWidth={1.5} />
                  <h3 className="font-display text-sm font-medium text-foreground mb-1">{stages[0].title}</h3>
                  <p className="text-xs text-muted-foreground">{stages[0].subtitle}</p>
                </div>
              </div>

              {/* Stage 2 — center-left (first diamond right = second diamond left) */}
              <div className="absolute left-[355px] top-1/2 -translate-y-1/2 w-44 text-center animate-slide-up stagger-1 z-10">
                <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
                  <span className="text-xs font-mono text-muted-foreground">02</span>
                  <GitBranch className="h-5 w-5 text-foreground mx-auto my-2" strokeWidth={1.5} />
                  <h3 className="font-display text-sm font-medium text-foreground mb-1">{stages[1].title}</h3>
                  <p className="text-xs text-muted-foreground">{stages[1].subtitle}</p>
                </div>
              </div>

              {/* Stage 3 — center-right */}
              <div className="absolute left-[555px] top-1/2 -translate-y-1/2 w-44 text-center animate-slide-up stagger-2 z-10">
                <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
                  <span className="text-xs font-mono text-muted-foreground">03</span>
                  <Users className="h-5 w-5 text-foreground mx-auto my-2" strokeWidth={1.5} />
                  <h3 className="font-display text-sm font-medium text-foreground mb-1">{stages[2].title}</h3>
                  <p className="text-xs text-muted-foreground">{stages[2].subtitle}</p>
                </div>
              </div>

              {/* Stage 4 — right vertex */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-44 text-center animate-slide-up stagger-3">
                <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
                  <span className="text-xs font-mono text-muted-foreground">04</span>
                  <Layers className="h-5 w-5 text-foreground mx-auto my-2" strokeWidth={1.5} />
                  <h3 className="font-display text-sm font-medium text-foreground mb-1">{stages[3].title}</h3>
                  <p className="text-xs text-muted-foreground">{stages[3].subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Descriptions below diamond — desktop */}
          <div className="hidden lg:grid grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto mt-4">
            {stages.map((stage) => (
              <div key={stage.title} className="flex gap-3">
                <span className="font-mono text-xs text-muted-foreground mt-1 shrink-0">{stage.number}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">{stage.title}:</span> {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: stacked cards */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stages.map((stage, index) => (
              <div
                key={stage.title}
                className="bg-card border border-border rounded-lg p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-xs font-mono text-muted-foreground">{stage.number}</span>
                <stage.icon className="h-5 w-5 text-foreground my-3" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-medium text-foreground mb-2">{stage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">{stage.subtitle}</span>
                  <br />
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
