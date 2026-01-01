import { AlertCircle, Search, MapPinOff, MessageCircleOff, Users } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const problems = [
  {
    icon: Search,
    title: "Customers Can't Find You",
    description: "When people search for your service on Google, they find your competitors instead.",
  },
  {
    icon: Users,
    title: "No Website = Low Trust",
    description: "Without a website, potential customers don't trust your business and go elsewhere.",
  },
  {
    icon: MapPinOff,
    title: "No Google Maps = Lost Walk-ins",
    description: "Customers searching nearby can't discover your location or directions.",
  },
  {
    icon: MessageCircleOff,
    title: "No WhatsApp Setup = Missed Enquiries",
    description: "Without proper WhatsApp business setup, you're losing potential customers daily.",
  },
];

const Problem = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-gradient-to-b from-secondary/50 to-background">
      <div className="container-width">
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 text-destructive mb-4">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">The Problem</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Is Your Business Invisible Online?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every day, customers are searching for services like yours. Without proper digital presence, you're losing them to competitors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className={`scroll-reveal ${index % 2 === 0 ? 'delay-100' : 'delay-200'}`}
            >
              <div className="bg-background p-6 lg:p-8 rounded-2xl border border-border shadow-soft h-full flex gap-5">
                <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;