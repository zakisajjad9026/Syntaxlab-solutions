"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useThemeStore } from "@/lib/stores/theme-store";
import { useUiStore } from "@/lib/stores/ui-store";
import type { NavigationItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { IconMenu, IconClose } from "@/components/ui/icons";

interface NavigationProps {
  items: NavigationItem[];
}

const SECTION_MAP: { id: string; navId: string }[] = [
  { id: "top", navId: "home" },
  { id: "process", navId: "process" },
  { id: "manifesto", navId: "process" },
  { id: "solutions", navId: "solutions" },
  { id: "work", navId: "work" },
  { id: "featured-work", navId: "work" },
  { id: "about", navId: "about" },
  { id: "pricing", navId: "about" },
  { id: "contact", navId: "contact" },
  { id: "footer", navId: "contact" },
];

function getInitialActiveSection(pathname: string | null): string {
  if (!pathname || pathname === "/" || pathname === "/home") return "home";
  const segment = pathname.replace(/^\//, "");
  if (["process", "solutions", "work", "about", "contact"].includes(segment)) {
    return segment;
  }
  if (segment === "manifesto") return "process";
  if (segment === "featured-work") return "work";
  if (segment === "pricing") return "about";
  return "home";
}

export function Navigation({ items }: NavigationProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const mode = useThemeStore((state) => state.mode);
  const toggleMode = useThemeStore((state) => state.toggleMode);
  const isOpen = useUiStore((state) => state.isMobileMenuOpen);
  const toggleMenu = useUiStore((state) => state.toggleMobileMenu);
  const closeMenu = useUiStore((state) => state.closeMobileMenu);

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [activeSection, setActiveSection] = useState<string>(() => getInitialActiveSection(pathname));

  // Sync active section if pathname changes during client navigation
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setActiveSection(getInitialActiveSection(pathname));
  }

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  // Prevent background scroll while mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear click timeout on unmount
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  // Release click lock immediately if user manually interacts (wheel or touch)
  useEffect(() => {
    const handleUserInteraction = () => {
      if (isClickScrollingRef.current) {
        isClickScrollingRef.current = false;
        if (clickTimeoutRef.current) {
          clearTimeout(clickTimeoutRef.current);
        }
      }
    };

    window.addEventListener("wheel", handleUserInteraction, { passive: true });
    window.addEventListener("touchmove", handleUserInteraction, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchmove", handleUserInteraction);
    };
  }, []);

  // Scroll detection for sticky state and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // During smooth scroll triggered by nav click, do not overwrite active section
      if (isClickScrollingRef.current) {
        return;
      }

      // Top of page
      if (scrollY < 120) {
        setActiveSection("home");
        return;
      }

      // Bottom of page
      const isBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      // Detection checkpoint line ~160px from viewport top
      const offset = 160;
      let matchedNavId: string | null = null;
      let lastPassedNavId: string | null = null;

      for (const section of SECTION_MAP) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            lastPassedNavId = section.navId;
          }
          if (rect.top <= offset && rect.bottom > offset) {
            matchedNavId = section.navId;
            break;
          }
        }
      }

      if (matchedNavId) {
        setActiveSection(matchedNavId);
      } else if (lastPassedNavId) {
        setActiveSection(lastPassedNavId);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth in-page navigation handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    navId: string
  ) => {
    const targetId =
      href === "/home" || href === "/" ? "top" : href.replace(/^\//, "");
    const el = document.getElementById(targetId);

    if (el) {
      e.preventDefault();

      // Immediately set active section and lock against scroll-spy overwrite during transition
      setActiveSection(navId);
      isClickScrollingRef.current = true;
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
      clickTimeoutRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 850);

      if (typeof window !== "undefined" && window.history) {
        window.history.pushState(null, "", href);
      }

      const navOffset = window.innerWidth >= 768 ? 72 : 64;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });

      closeMenu();
    }
  };

  const isItemActive = (itemId: string) => {
    return activeSection === itemId;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ease-out",
        isScrolled
          ? "border-b border-border/70 bg-background/85 dark:bg-background/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          : "border-b border-transparent bg-transparent backdrop-blur-none shadow-none"
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1240px] items-center justify-between px-4 sm:px-6">
        {/* Brand Logo with [ - ] Mark */}
        <Link
          href="/home"
          onClick={(e) => handleNavClick(e, "/home", "home")}
          className="flex items-center gap-3 group rounded-md focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          <span className="flex size-6 items-center justify-center rounded-sm border border-accent/60 bg-surface-elevated text-accent transition-all duration-200 group-hover:border-accent group-hover:shadow-[0_0_12px_rgba(196,114,68,0.3)]">
            <svg className="size-3 text-accent" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="7.25" width="10" height="1.5" rx="0.5" />
            </svg>
          </span>
          <span className="type-nav text-foreground">
            SYNTAXLAB <span className="text-accent">SOLUTIONS</span>
          </span>
        </Link>

        {/* Live Agency Availability Pill */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-surface/80 text-[11px] font-mono text-muted-foreground shadow-xs">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-[10px]">Available</span>
          <span className="text-border/80">|</span>
          <span className="text-[10.5px]">Q2/Q3 Projects</span>
        </div>

        {/* Desktop Navigation Links with Smooth Shared Hover Surface */}
        <nav
          className="hidden items-center gap-1.5 lg:flex relative"
          aria-label="Primary navigation"
          onMouseLeave={() => setHoveredId(null)}
        >
          {items.map((item) => {
            const active = isItemActive(item.id);
            const isHovered = hoveredId === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId(null)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "type-nav relative rounded-lg px-3.5 py-1.5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent",
                  active
                    ? "text-accent font-semibold"
                    : isHovered
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {/* Aceternity-inspired Shared Motion Hover Background */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      key={`nav-hover-${item.id}`}
                      layoutId={shouldReduceMotion ? undefined : "navHoverBackground"}
                      className="absolute inset-0 z-0 rounded-lg bg-accent/10 border border-accent/25 dark:bg-accent/15 dark:border-accent/30 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.18, ease: "easeOut" },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, ease: "easeIn" },
                      }}
                    />
                  )}
                </AnimatePresence>

                <span className="relative z-10">{item.label}</span>

                {/* Restrained Technical Active Section Underline */}
                {active && (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : "navActiveIndicator"}
                    className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-accent pointer-events-none"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: Theme Toggle + CTA Button */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} theme`}
            className="group relative flex size-9 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-all duration-200 hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            onClick={toggleMode}
            type="button"
          >
            <motion.div
              animate={{ rotate: mode === "dark" ? 0 : 180, scale: [0.85, 1] }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              {mode === "dark" ? (
                <svg className="size-4 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a6 6 0 0 0 9 9 9 0 1 1-9-9Z" />
                </svg>
              ) : (
                <svg className="size-4 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m-7.07-17.07 1.41 1.41m12.73 12.73 1.41 1.41M2 12h2m16 0h2m-17.07 7.07 1.41-1.41m12.73-12.73 1.41-1.41" />
                </svg>
              )}
            </motion.div>
          </button>

          <Link
            href="/contact"
            onClick={(e) => handleNavClick(e, "/contact", "contact")}
            className="type-button group relative inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-accent px-4 text-[#08090A] shadow-[0_4px_16px_rgba(196,114,68,0.25)] transition-all duration-200 active:scale-[0.98] active:duration-100 hover:bg-[#b06337] hover:shadow-[0_6px_22px_rgba(196,114,68,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>START A PROJECT</span>
            <span
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="group relative flex size-9 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-all duration-200 hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 lg:hidden"
          onClick={toggleMenu}
          type="button"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="icon-close"
                initial={{ opacity: 0, rotate: -45, scale: 0.85 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.85 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <IconClose className="size-5 text-foreground transition-colors group-hover:text-accent" />
              </motion.div>
            ) : (
              <motion.div
                key="icon-menu"
                initial={{ opacity: 0, rotate: 45, scale: 0.85 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -45, scale: 0.85 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <IconMenu className="size-5 text-foreground transition-colors group-hover:text-accent" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-b border-border bg-surface/95 backdrop-blur-md px-4 py-4 shadow-xl lg:hidden"
          >
            <div className="mx-auto max-w-[1240px]">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {items.map((item) => {
                  const active = isItemActive(item.id);
                  return (
                    <Link
                      className={cn(
                        "type-nav flex min-h-[44px] items-center justify-between border-b border-border/60 py-3 transition-colors duration-150 last:border-b-0",
                        active ? "text-accent font-semibold" : "text-muted-foreground hover:text-foreground"
                      )}
                      href={item.href}
                      key={item.id}
                      onClick={(e) => handleNavClick(e, item.href, item.id)}
                      aria-current={active ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      {active && <span className="size-1.5 rounded-full bg-accent" />}
                    </Link>
                  );
                })}
                <button
                  className="type-nav flex min-h-[44px] items-center justify-between border-b border-border/60 py-3 text-muted-foreground transition-colors duration-150 hover:text-foreground"
                  onClick={toggleMode}
                  type="button"
                  aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} theme`}
                >
                  <span>THEME: {mode.toUpperCase()}</span>
                  {mode === "dark" ? (
                    <svg className="size-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3a6 6 0 0 0 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  ) : (
                    <svg className="size-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="4" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v2m0 16v2m-7.07-17.07 1.41 1.41m12.73 12.73 1.41 1.41M2 12h2m16 0h2m-17.07 7.07 1.41-1.41m12.73-12.73 1.41-1.41" />
                    </svg>
                  )}
                </button>
                <Link
                  className="type-button mt-3 flex min-h-[44px] items-center justify-center gap-1.5 rounded-md bg-accent px-5 text-[#08090A] transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-accent"
                  href="/contact"
                  onClick={(e) => handleNavClick(e, "/contact", "contact")}
                >
                  <span>START A PROJECT</span>
                  <span>→</span>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
