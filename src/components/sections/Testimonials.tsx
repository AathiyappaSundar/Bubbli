import { Star, Quote } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const testimonials = [
    {
        name: "Rajesh Kumar",
        business: "Sai Kirana Store",
        text: "I was losing customers to online apps. Bubbli built me a simple website and put my shop on Google Maps. Now new people find me every day!",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        business: "Sharma Boutique",
        text: "Setup was so fast. I didn't have to do anything. They handled the domain, design, and even WhatsApp button. Highly recommended for small businesses.",
        rating: 5,
    },
    {
        name: "Amit Patel",
        business: "Fast Track Auto Garage",
        text: "Very affordable. Other agencies asked for ₹15,000+. Bubbli did it for a fraction of the cost and the quality is amazing.",
        rating: 5,
    },
];

const Testimonials = () => {
    const sectionRef = useScrollReveal();

    return (
        <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-secondary/30">
            <div className="container-width">
                <div className="text-center mb-16 scroll-reveal">
                    <span className="text-sm font-semibold uppercase tracking-wide text-primary mb-4 block">
                        Success Stories
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Trusted by Local Business Owners
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        See what our partners are saying about their digital transformation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className={`scroll-reveal-scale delay-${(index + 1) * 100}`}
                        >
                            <div className="bg-background p-6 rounded-2xl shadow-soft border border-border/50 h-full flex flex-col">
                                <div className="mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-warning fill-current inline-block" />
                                    ))}
                                </div>

                                <div className="mb-6 flex-grow relative">
                                    <Quote className="w-8 h-8 text-primary/10 absolute -top-2 -left-2" />
                                    <p className="text-foreground/90 italic relative z-10 pl-4">"{t.text}"</p>
                                </div>

                                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-foreground">{t.name}</h4>
                                        <p className="text-xs text-muted-foreground">{t.business}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
