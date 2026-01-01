import { CheckCircle2, Sparkles, User, Settings, Headphones } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const benefits = [
  { icon: User, text: "One contact" },
  { icon: Settings, text: "One setup" },
  { icon: Headphones, text: "No tech headache" },
];

const Solution = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding overflow-hidden">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="scroll-reveal-left">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">The Solution</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Your Complete Digital Partner
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Bubbli Digital Services handles your complete online presence — so you can focus on running your business.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.text}
                  className="flex items-center gap-4 bg-accent/50 p-4 rounded-xl border border-primary/10"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">{benefit.text}</span>
                  <CheckCircle2 className="w-5 h-5 text-success ml-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="scroll-reveal-right">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/40 rounded-3xl blur-3xl" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-primary/10 via-background to-accent/20 p-8 lg:p-10 rounded-3xl border border-primary/20 shadow-elevated">
                <div className="space-y-6">
                  {/* Service items */}
                  {[
                    "Professional Website",
                    "Google Maps Listing",
                    "WhatsApp Business Setup",
                    "SEO & Online Visibility",
                    "Ongoing Support"
                  ].map((service, index) => (
                    <div 
                      key={service}
                      className="flex items-center gap-4 bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-border/50"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      </div>
                      <span className="font-medium text-foreground">{service}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/40 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;