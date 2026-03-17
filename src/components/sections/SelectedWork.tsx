import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
{
  slug: "bot-90-satisfacao",
  title: "Conversational Bots & Automated Support Ecosystem",
  description:
  "Designed a conversational support ecosystem using WhatsApp bots and website chat to automate customer service and enable active RSVP confirmations for wedding guests. The solution focused on improving user experience while reducing operational costs through scalable conversational flows.",
  impact: [
  "73% reduction in chat and WhatsApp support tickets",
  "82% satisfaction rate for WhatsApp RSVP confirmations",
  "More than 34k automated interactions handled by bots"]

},
{
  slug: "content-system-ops",
  title: "Content Operations & Documentation System",
  description:
  "Designed and implemented a Content Ops framework to improve documentation, standardization and cross-team alignment across product, marketing and engineering teams. The initiative created a shared system for recording decisions, managing deliveries and maintaining writing standards.",
  impact: [
  "Reduced rework and duplicated efforts across teams",
  "Increased autonomy through shared documentation and guides",
  "Improved project continuity with structured delivery history"]

},
{
  slug: "faq-5m-organicos",
  title: "Organic Growth Through Content Ecosystem Strategy",
  description:
  "Developed a content ecosystem strategy connecting the digital magazine, Help Center and institutional website to strengthen organic acquisition and support the entire user journey from discovery to conversion.",
  impact: [
  "360% increase in sign-ups from the digital magazine",
  "492% growth in Help Center-driven registrations",
  "More than R$7M influenced in gift registry transactions"]

},
{
  slug: "ong-voluntarios",
  title: "Help Center Strategy & SEO Growth",
  description:
  "Redesigned the information architecture and content strategy of the Help Center to improve discoverability, reduce support friction and support organic acquisition.\nThe work included taxonomy definition, article restructuring and alignment between product content and self-service documentation.",
  impact: [
  "Research with 196 participants and 8 qualitative interviews",
  "10 usability tests across two solution iterations",
  "Delivered a feasible digital solution aligned with the NGO's operational reality"]

}];


export function SelectedWork() {
  return (
    <section id="work" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed text-sm md:text-base">
            Below are a few examples of projects where I helped improve product clarity, user autonomy and internal alignment through content strategy.

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => <div
              key={project.slug}
              className="bg-card border border-border rounded-lg p-6 md:p-8 flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}>
                
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-sans font-semibold uppercase tracking-wider text-foreground/70 mb-3">
                    Impact
                  </p>
                  <ul className="space-y-2">
                    {project.impact.map((item) =>
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                  )}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                  to={`/case/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors group">
                    
                    View case study
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}