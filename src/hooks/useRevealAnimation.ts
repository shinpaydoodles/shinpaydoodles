import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function useRevealAnimation<T extends HTMLElement>(ref: RefObject<T | null>, selector = "[data-reveal]") {
  const reduced = useReducedMotion();
  useLayoutEffect(() => {
    if (!ref.current || reduced) return;
    const context = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(selector, ref.current ?? undefined);
      gsap.fromTo(items, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .62, stagger: .08, ease: "power2.out", scrollTrigger: { trigger: ref.current, start: "top 84%", once: true } });
    }, ref);
    return () => context.revert();
  }, [ref, reduced, selector]);
}
