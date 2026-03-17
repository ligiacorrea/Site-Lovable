const areas = [
{
  title: "UX Content Strategy",
  description: "Defining content principles and frameworks that support product clarity."
},
{
  title: "Discovery & UX Research",
  description: "Investigating user needs and validating hypotheses."
},
{
  title: "Conversational Design",
  description: "Designing conversational flows that guide users through complex journeys."
},
{
  title: "Information Architecture",
  description: "Structuring information to reduce cognitive load and improve navigation."
},
{
  title: "Help Center & Self-Service Strategy",
  description: "Designing support ecosystems that empower users to find answers independently."
},
{
  title: "Content Operations",
  description: "Creating governance, documentation and processes that allow content systems to scale."
}];


export function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-primary-foreground mb-4">
            Areas of Expertise
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mb-4 leading-relaxed text-sm md:text-base">
            My work focuses on connecting product strategy, user understanding and scalable content systems.
          </p>
          <p className="text-primary-foreground/70 max-w-2xl mb-12 leading-relaxed text-sm md:text-base">
            Some of the areas where I most often contribute include:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => <div key={area.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.08}s` }}>
              
                <h3 className="font-display text-lg font-medium text-primary-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {area.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}