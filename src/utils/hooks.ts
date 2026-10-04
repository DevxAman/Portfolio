import { useEffect, useRef, useState } from "react";

// True once the element has come near the viewport (used to lazy-mount heavy canvases)
export const useInView = <T extends Element>(rootMargin = "200px", once = true) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, once]);

  return [ref, inView] as const;
};

// Tracks a media query (e.g. small screens, touch devices, reduced motion)
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
};

export const useIsMobile = () => useMediaQuery("(max-width: 767px)");
export const useIsTouch = () => useMediaQuery("(hover: none), (pointer: coarse)");
