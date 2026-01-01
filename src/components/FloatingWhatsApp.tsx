import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919739130926"; // Replace with actual number
const WHATSAPP_MESSAGE = "Hi! I'm interested in getting a website for my business.";

const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-4 py-3 rounded-full shadow-floating hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-soft md:px-5 md:py-3.5"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      <span className="font-semibold text-sm md:text-base">Chat Now</span>
    </a>
  );
};

export default FloatingWhatsApp;
