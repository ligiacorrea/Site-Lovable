import { Search, GitBranch, Users, Layers } from "lucide-react";

const stages = [
{
  icon: Search,
  title: "Understand Complexity",
  subtitle: "Discovery & research",
  description: "I begin by understanding the product ecosystem, the business context and the real problems users are experiencing. This includes desk research, UX research, analyzing support tickets, identifying friction points and validating hypotheses about how people interpret the product."
},
{
  icon: GitBranch,
  title: "Structure Information",
  subtitle: "Content architecture",
  description: "Once the problems are clear, I focus on structuring the information. This may involve designing conversational flows, defining terminology, improving information architecture or reorganizing help center structures so users can navigate the product with confidence."
},
{
  icon: Users,
  title: "Enable Teams",
  subtitle: "Documentation & governance",
  description: "Content decisions need to be scalable. I create documentation, guidelines and frameworks that help product teams make consistent decisions over time and reduce dependency on individual contributors."
},
{
  icon: Layers,
  title: "Continuous Improvement",
  subtitle: "Content systems",
  description: "Finally, the goal is to ensure the system continues working as the product evolves. This often includes content operations, cross-team collaboration and governance models that maintain clarity while the product grows."
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, index) => <div
                key={stage.title}
                className="bg-card border border-border rounded-lg p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}>
              
                <stage.icon className="h-5 w-5 text-foreground mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">{stage.subtitle}</span>
                  <br />
                  {stage.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}