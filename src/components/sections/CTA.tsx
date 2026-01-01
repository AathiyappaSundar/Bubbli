import { Button } from "@/components/ui/button";
import { MessageCircle, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "919739130926";
const WHATSAPP_MESSAGE = "Hi! I'm ready to get my business online.";

const CTA = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="container-width">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Your Business Online?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join local businesses across India who are now discoverable online.
          </p>

          <Button variant="secondary" size="xl" asChild className="mb-6">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </a>
          </Button>

          <div className="flex items-center justify-center gap-2 opacity-80">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Limited projects taken weekly to maintain quality.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;