import { MessageCircle, FileText, Rocket, Clock } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: MessageCircle,
    title: "Contact Us",
    description: "Send us a message on WhatsApp",
  },
  {
    icon: FileText,
    title: "Share Details",
    description: "Share your business info & photos",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description: "Website & profiles go live!",
  },
];

const HowItWorks = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="how-it-works" ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary mb-4 block">
            How It Works
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Three Simple Steps
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className={`scroll-reveal delay-${(index + 1) * 100}`}>
                <div className="relative text-center">
                  {/* Step number */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center shadow-elevated">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery note */}
          <div className="mt-12 text-center scroll-reveal">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-5 py-3 rounded-full">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Delivery: 24–48 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;