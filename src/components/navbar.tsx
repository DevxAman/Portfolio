import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { logo, menu, close } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

type NavbarProps = {
  hide: boolean;
};

// Navbar
export const Navbar = ({ hide }: NavbarProps) => {
  // state variables
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollPosition = window.scrollY;
      setIsAtBottom(scrollPosition > 10);

      // Reset active when at the very top (Hero section)
      if (scrollPosition < 200) {
        setActive("");
        return;
      }

      // Scroll Spy: last section whose top has passed the upper part of the viewport
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const link = NAV_LINKS[i];
        if (link.link) continue;
        const section = document.getElementById(link.id);
        if (section && section.getBoundingClientRect().top <= 300) {
          setActive(link.title);
          break;
        }
      }
    };

    // Batch scroll work into one update per animation frame
    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Close mobile menu on Escape, outside tap, or when resizing up to desktop
  useEffect(() => {
    if (!toggle) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setToggle(false);
    const onResize = () => window.innerWidth >= 1280 && setToggle(false);
    const onPointer = (e: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setToggle(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [toggle]);

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center fixed top-0 z-50 transition-[background-color,padding,margin,box-shadow] duration-300",
        isAtBottom
          ? "py-3 bg-primary/85 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "py-5 bg-transparent",
        isAtBottom || hide ? "mt-0" : "mt-20"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 sm:w-10 sm:h-10 object-contain bg-white rounded-full p-1" />
          <p className="text-white text-[16px] sm:text-[18px] font-bold cursor-pointer flex whitespace-nowrap">
            Amandeep Singh
          </p>
        </Link>

        {/* Nav Links (Desktop) */}
        <ul className="list-none hidden xl:flex flex-row gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.title;
            return (
              <li
                key={link.id}
                className={cn(
                  isActive ? "text-white" : "text-secondary",
                  "relative hover:text-white text-[15px] 2xl:text-[16px] font-medium cursor-pointer px-3 2xl:px-4 py-2 rounded-full whitespace-nowrap transition-colors"
                )}
                onClick={() => !link.link && setActive(link.title)}
              >
                {link.link ? (
                  <a href={link.link} target="_blank" rel="noreferrer noopener" className="relative z-10">
                    {link.title}
                  </a>
                ) : (
                  <a href={`#${link.id}`} className="relative z-10">{link.title}</a>
                )}
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-[#915eff]/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#915eff] rounded-t-full">
                      <div className="absolute w-12 h-6 bg-[#915eff]/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-[#915eff]/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-[#915eff]/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div ref={menuRef} className="xl:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            aria-label={toggle ? "Close menu" : "Open menu"}
            aria-expanded={toggle}
            onClick={() => setToggle(!toggle)}
            className="p-2 -mr-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915eff]"
          >
            <img src={toggle ? close : menu} alt="" className="w-[26px] h-[26px] object-contain" />
          </button>

          <AnimatePresence>
            {toggle && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="p-5 black-gradient absolute top-full right-0 mx-4 mt-2 min-w-[200px] z-10 rounded-xl border border-white/10 shadow-2xl origin-top-right"
                >
                  {/* Nav Links (Mobile) */}
                  <ul className="list-none flex justify-end items-stretch flex-col gap-1">
                    {NAV_LINKS.map((link) => (
                      <li
                        key={link.id}
                        className={cn(
                          active === link.title ? "text-white bg-white/5" : "text-secondary",
                          "font-poppins font-medium text-[16px] rounded-lg hover:text-white transition-colors"
                        )}
                        onClick={() => {
                          setToggle(false);
                          !link.link && setActive(link.title);
                        }}
                      >
                        {link.link ? (
                          <a className="block px-3 py-2.5" href={link.link} target="_blank" rel="noreferrer noopener">
                            {link.title}
                          </a>
                        ) : (
                          <a className="block px-3 py-2.5" href={`#${link.id}`}>{link.title}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};
