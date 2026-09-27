"use client";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, sectionId } from "@/data/portfolio";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    navigation.forEach((label) => {
      const el = document.getElementById(sectionId(label));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          className="wordmark"
          href="#home"
          aria-label="Rishabh Bhagchandani home"
        >
          Rishabh <span>Bhagchandani</span>
        </a>
        <button
          ref={buttonRef}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
        >
          {navigation.map((label) => (
            <a
              key={label}
              href={`#${sectionId(label)}`}
              aria-current={
                active === sectionId(label) ? "location" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
              {label === "Contact" && (
                <ArrowUpRight size={15} aria-hidden="true" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
