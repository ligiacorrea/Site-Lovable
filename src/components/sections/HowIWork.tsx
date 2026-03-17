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

          {/* Diamond framework — desktop */}
          <div className="hidden lg:flex justify-center items-center mb-8">
            <div className="relative w-[640px] h-[640px]">
              {/* Connecting dashed lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 640 640"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M320 115 L525 320" stroke="hsl(var(--border))" strokeWidth="1.5" strokeDasharray="6 4" />
                <path d="M525 320 L320 525" stroke="hsl(var(--border))" strokeWidth="1.5" strokeDasharray="6 4" />
                <path d="M320 525 L115 320" stroke="hsl(var(--border))" strokeWidth="1.5" strokeDasharray="6 4" />
                <path d="M115 320 L320 115" stroke="hsl(var(--border))" strokeWidth="1.5" strokeDasharray="6 4" />
                {/* Arrow indicators */}
                <polygon points="422,218 432,228 418,225" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                <polygon points="422,422 432,412 418,415" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                <polygon points="218,422 208,412 222,415" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                <polygon points="218,218 208,228 222,225" fill="hsl(var(--muted-foreground))" opacity="0.4" />
              </svg>

              {/* Top — Stage 1 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-52 text-center animate-slide-up">
                <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
                  <span className="text-xs font-mono text-muted-foreground">01</span>
                  <Search className="h-5 w-5 text-foreground mx-auto my-2" strokeWidth={1.5} />
                  <h3 className="font-display text-base font-medium text-foreground mb-1">{stages[0].title}</h3>
                  <p className="text-xs text-muted-foreground">{stages[0].subtitle}</p>
                </div>
              </div>

              {/* Right — Stage 2 */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-52 text-center animate-slide-up stagger-1">
                <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
                  <span className="text-xs font-mono text-muted-foreground">02</span>
                  <GitBranch className="h-5 w-5 text-foreground mx-auto my-2" strokeWidth={1.5} />
                  <h3 className="font-display text-base font-medium text-foreground mb-1">{stages[1].title}</h3>
                  <p className="text-xs text-muted-foreground">{stages[1].subtitle}</p>
                </div>
              </div>

              {/* Bottom — Stage 3 */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 text-center animate-slide-up stagger-2">
                <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
                  <span className="text-xs font-mono text-muted-foreground">03</span>
                  <Users className="h-5 w-5 text-foreground mx-auto my-2" strokeWidth={1.5} />
                  <h3 className="font-display text-base font-medium text-foreground mb-1">{stages[2].title}</h3>
                  <p className="text-xs text-muted-foreground">{stages[2].subtitle}</p>
                </div>
              </div>

              {/* Left — Stage 4 */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-52 text-center animate-slide-up stagger-3">
                <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
                  <span className="text-xs font-mono text-muted-foreground">04</span>
                  <Layers className="h-5 w-5 text-foreground mx-auto my-2" strokeWidth={1.5} />
                  <h3 className="font-display text-base font-medium text-foreground mb-1">{stages[3].title}</h3>
                  <p className="text-xs text-muted-foreground">{stages[3].subtitle}</p>
                </div>
              </div>

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-display text-sm text-muted-foreground italic">continuous cycle</span>
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
