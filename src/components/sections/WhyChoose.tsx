import { IndianRupee, Clock, Store, Eye, MessageSquare, Award } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const reasons = [
  { icon: Store, title: "Built for Local Businesses" },
  { icon: IndianRupee, title: "Affordable & Transparent" },
  { icon: Clock, title: "Fast Turnaround" },
  { icon: MessageSquare, title: "No Tech Jargon" },
  { icon: Eye, title: "One-Stop Solution" },
  { icon: Award, title: "Personal Support" },
];

const WhyChoose = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Bubbli Digital Services?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto scroll-reveal">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex items-center gap-3 bg-accent/50 p-4 rounded-xl border border-primary/10">
              <reason.icon className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="font-medium text-foreground text-sm">{reason.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;