import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Check,
  Monitor,
  RefreshCw,
  MapPin,
  AlertCircle
} from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const WHATSAPP_NUMBER = "919739130926";
const WHATSAPP_MESSAGE = "Hi! I want to get a website for my business.";

const coreServices = [
  {
    icon: Monitor,
    title: "Website Design",
    price: "₹2,000",
    priceLabel: "One-Time",
    features: [
      "1–3 page professional website",
      "Mobile-first responsive design",
      "WhatsApp click-to-chat button",
      "Google Maps location embed",
      "Basic SEO setup",
      "Hosted on secure cloud",
    ],
    highlight: true,
  },
  {
    icon: RefreshCw,
    title: "Annual Maintenance (AMC)",
    price: "₹1,000",
    priceLabel: "Per Year",
    features: [
      "Website uptime monitoring",
      "Minor text/image updates",
      "Backup & security checks",
      "Technical maintenance",
    ],
    note: "Domain NOT included — paid separately at actual cost.",
    highlight: false,
  },
  {
    icon: MapPin,
    title: "Google Maps / Business Profile",
    price: "₹500",
    priceLabel: "One-Time",
    features: [
      "Google Business Profile creation",
      "Address pin fix & location",
      "Business category & hours setup",
      "Phone, WhatsApp & website linking",
    ],
    note: "Verification via OTP/postcard by owner.",
    highlight: false,
  },
];

const CoreServices = () => {
  const sectionRef = useScrollReveal();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background"
    >
      <div className="container-width">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary mb-4 block">
            Core Services
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Go Online
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional digital services designed for local businesses. Clear pricing, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {coreServices.map((service, index) => (
            <div
              key={service.title}
              className={`scroll-reveal-scale delay-${(index + 1) * 100}`}
            >
              <div
                className={`relative h-full bg-background p-6 lg:p-8 rounded-2xl border-2 shadow-soft flex flex-col ${service.highlight
                    ? 'border-primary shadow-elevated'
                    : 'border-border'
                  }`}
              >
                {/* Highlight badge */}
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.highlight ? 'bg-primary/10' : 'bg-muted'
                    }`}>
                    <service.icon className={`w-6 h-6 ${service.highlight ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl lg:text-4xl font-bold ${service.highlight ? 'text-primary' : 'text-foreground'
                      }`}>
                      {service.price}
                    </span>
                    <span className="text-muted-foreground text-sm">{service.priceLabel}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                {service.note && (
                  <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-xl mb-6 text-xs">
                    <AlertCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service.note}</span>
                  </div>
                )}

                {/* CTA */}
                <Button
                  variant={service.highlight ? "whatsapp" : "outline"}
                  size="lg"
                  className="w-full mt-auto"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;