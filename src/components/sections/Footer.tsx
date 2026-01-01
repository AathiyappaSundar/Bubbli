import { MessageCircle, Globe } from "lucide-react";

const WHATSAPP_NUMBER = "919739130926";
const WHATSAPP_MESSAGE = "Hi! I'd like to know more about your website services.";

const Footer = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <footer className="bg-foreground text-background section-padding py-12">
      <div className="container-width">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Globe className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">Bubbli Digital Services</span>
            </div>
            <p className="text-background/70 text-sm">
              Serving local businesses across India
            </p>
          </div>

          {/* WhatsApp Contact */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-5 py-3 rounded-full font-semibold hover:bg-whatsapp/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Contact on WhatsApp
          </a>
        </div>

        <hr className="border-background/20 my-8" />

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-background/60 text-xs mb-4">
            Domain charges are separate and paid by the customer at actual cost.
          </p>
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} Bubbli Digital Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
