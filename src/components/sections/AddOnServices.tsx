import { 
  MessageCircle, 
  Star, 
  PenTool, 
  Mail,
  Plus
} from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const addons = [
  {
    icon: MessageCircle,
    title: "WhatsApp Business Setup",
    price: "₹300",
    description: "Profile, description, hours, auto greeting message",
  },
  {
    icon: Star,
    title: "Google Reviews Starter Kit",
    price: "₹500",
    description: "Review QR code, message templates, customer guidance",
  },
  {
    icon: PenTool,
    title: "Google Profile Optimization",
    price: "₹1,000",
    description: "Description, services, keywords, photos optimization",
  },
  {
    icon: Mail,
    title: "Business Email Setup",
    price: "₹300",
    description: "Professional email setup (hosting paid by customer)",
  },
];

const AddOnServices = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Plus className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Add-On Services</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Add What You Need. Pay Only for That.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enhance your digital presence with these optional add-ons.
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div className="scroll-reveal">
          <div className="horizontal-scroll px-2 -mx-2">
            {addons.map((addon, index) => (
              <div
                key={addon.title}
                className="scroll-snap-card w-72 md:w-80 flex-shrink-0"
              >
                <div className="h-full bg-background p-6 rounded-2xl border border-border shadow-soft card-hover">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <addon.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{addon.title}</h3>
                  
                  <div className="text-2xl font-bold text-primary mb-3">{addon.price}</div>
                  
                  <p className="text-muted-foreground text-sm">{addon.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll hint */}
          <p className="text-center text-muted-foreground text-sm mt-4 md:hidden">
            ← Swipe to see more →
          </p>
        </div>
      </div>
    </section>
  );
};

export default AddOnServices;