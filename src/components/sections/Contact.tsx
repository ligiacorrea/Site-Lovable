import { Linkedin, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-primary-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-primary-foreground/70 mb-10 leading-relaxed text-sm md:text-base max-w-xl">
            If you're working on complex products and care about clarity, scalable content systems and user autonomy, I’d love to connect.
You can reach me through:

          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://www.linkedin.com/in/ligia-correa-ux-writer/" target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-primary-foreground hover:text-primary-foreground/70 transition-colors">
              
              <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              LinkedIn
            </a>
            <a
              href="mailto:ligia_cosi@hotmail.com"
              className="flex items-center gap-3 text-sm text-primary-foreground hover:text-primary-foreground/70 transition-colors">
              
              <Mail className="h-5 w-5" strokeWidth={1.5} />
              Email
            </a>
            <a
              href="https://wa.me/5511999673847"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-primary-foreground hover:text-primary-foreground/70 transition-colors">
              <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>);

}