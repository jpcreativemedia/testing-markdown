import { useEffect, useState } from "react";

export function useScrollPosition(threshold = 0) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > threshold);

      if (currentScrollY < lastScrollY) {
        // scroll up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scroll down & past 100px
        setIsVisible(false);
      }
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, lastScrollY]);

  return { isScrolled, isVisible };
}
