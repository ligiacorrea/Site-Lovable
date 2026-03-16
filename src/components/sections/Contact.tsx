import { Linkedin, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed text-sm md:text-base max-w-xl">
            If you're building complex products and care about clarity, scalable content systems and user autonomy, I'd love to connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://www.linkedin.com/in/ligia-correa-ux-writer/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-foreground hover:text-muted-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              LinkedIn
            </a>
            <a
              href="mailto:ligia_cosi@hotmail.com"
              className="flex items-center gap-3 text-sm text-foreground hover:text-muted-foreground transition-colors"
            >
              <Mail className="h-5 w-5" strokeWidth={1.5} />
              Email
            </a>
            <span className="flex items-center gap-3 text-sm text-muted-foreground">
              <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
              Portfolio conversations or collaboration opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
