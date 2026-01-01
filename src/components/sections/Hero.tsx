import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown, Zap, Clock, IndianRupee, Store } from "lucide-react";

const WHATSAPP_NUMBER = "919739130926";
const WHATSAPP_MESSAGE = "Hi! I'm interested in getting a website for my business.";

const trustChips = [
  { icon: IndianRupee, label: "No Monthly Fees" },
  { icon: Zap, label: "Fast Setup" },
  { icon: Clock, label: "Transparent Pricing" },
  { icon: Store, label: "Local Business Friendly" },
];

const Hero = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative section-padding container-width w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in border border-primary/20"
          >
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            One-Stop Digital Solution
          </div>

          {/* Main Headline */}
          <h1
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Everything Your Local Business Needs to Be{" "}
            <span className="text-primary relative">
              Found Online
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C47.6667 2.16667 152.4 -2.4 199 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/40" />
              </svg>
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Websites, Google Maps, WhatsApp & more — simple, affordable, and done-for-you.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="whatsapp" size="xl" asChild className="animate-glow">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">
                <ChevronDown className="w-5 h-5" />
                See Services & Pricing
              </a>
            </Button>
          </div>

          {/* Trust Chips */}
          <div
            className="flex flex-wrap justify-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {trustChips.map((chip, index) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-border/50 shadow-soft"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <chip.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{chip.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown className="w-8 h-8 text-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;