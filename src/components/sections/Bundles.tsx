import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Check,
  Flame,
  Rocket,
  Trophy
} from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const WHATSAPP_NUMBER = "919739130926";

const bundles = [
  {
    icon: Flame,
    name: "Starter Digital Pack",
    price: "₹2,500",
    savings: "Save ₹500",
    includes: [
      "Professional Website",
      "Google Maps Setup",
    ],
    color: "primary",
    popular: false,
  },
  {
    icon: Rocket,
    name: "Business Growth Pack",
    price: "₹3,500",
    savings: "Save ₹800",
    includes: [
      "Professional Website",
      "Google Maps Setup",
      "WhatsApp Business Setup",
      "Google Reviews Starter Kit",
    ],
    color: "warning",
    popular: true,
  },
  {
    icon: Trophy,
    name: "Complete Digital Presence",
    price: "₹5,000",
    savings: "Save ₹1,100",
    includes: [
      "Professional Website",
      "Google Maps Setup",
      "WhatsApp Business Setup",
      "Google Profile Optimization",
      "Business Email Setup",
    ],
    color: "success",
    popular: false,
  },
];

const Bundles = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="pricing" ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary mb-4 block">
            Value Bundles
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Save More with Bundles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get everything you need at a discounted price. Choose the pack that fits your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {bundles.map((bundle, index) => {
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in the ${bundle.name}.`)}`;

            return (
              <div
                key={bundle.name}
                className={`scroll-reveal-scale delay-${(index + 1) * 100}`}
              >
                <div
                  className={`relative h-full bg-background p-6 lg:p-8 rounded-2xl border-2 shadow-soft flex flex-col transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-elevated cursor-pointer ${bundle.popular
                      ? 'border-warning shadow-elevated ring-2 ring-warning/20'
                      : 'border-border hover:ring-2 hover:ring-primary/20'
                    }`}
                >
                  {/* Popular badge */}
                  {bundle.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-warning text-warning-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Rocket className="w-3 h-3" />
                        Best Value
                      </span>
                    </div>
                  )}

                  {/* Icon & Name */}
                  <div className="text-center mb-6 pt-2">
                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${bundle.popular ? 'bg-warning/10' : 'bg-primary/10'
                      }`}>
                      <bundle.icon className={`w-8 h-8 ${bundle.popular ? 'text-warning' : 'text-primary'
                        }`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{bundle.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-4xl lg:text-5xl font-bold text-foreground mb-1">
                      {bundle.price}
                    </div>
                    <span className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                      {bundle.savings}
                    </span>
                  </div>

                  {/* Includes */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {bundle.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-success" />
                        </div>
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={bundle.popular ? "whatsapp" : "outline"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                      Choose This Pack
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Bundles;