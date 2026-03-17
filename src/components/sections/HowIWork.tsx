import { Search, GitBranch, Users, Layers } from "lucide-react";

const stages = [
{
  icon: Search,
  title: "Understand Complexity",
  description: "Discovery and research to identify user needs, friction points and opportunities."
},
{
  icon: GitBranch,
  title: "Structure Information",
  description: "Designing information architecture, terminology and conversational flows that simplify complex journeys."
},
{
  icon: Users,
  title: "Enable Teams",
  description: "Creating documentation, guidelines and governance models that support consistent decisions."
},
{
  icon: Layers,
  title: "Scale Clarity",
  description: "Implementing content systems and operational processes that allow products to evolve while maintaining clarity."
}];


export function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            How I Approach Content Strategy
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed text-sm md:text-base">For me, content strategy is not only about writing better interface text. It is about understanding complexity and building systems that make products easier to navigate, use and evolve.


My work usually follows four main stages:</p>

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
                  {stage.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}