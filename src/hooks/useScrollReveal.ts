import { useEffect, useRef } from "react";

export const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe the main element and all children with scroll-reveal classes
    const revealElements = element.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
    );
    
    revealElements.forEach((el) => observer.observe(el));
    
    // Also observe the main element if it has a reveal class
    if (
      element.classList.contains("scroll-reveal") ||
      element.classList.contains("scroll-reveal-left") ||
      element.classList.contains("scroll-reveal-right") ||
      element.classList.contains("scroll-reveal-scale")
    ) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
};

export default useScrollReveal;