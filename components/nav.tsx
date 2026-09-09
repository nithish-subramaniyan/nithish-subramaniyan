"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "#why-me", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#systems", label: "Systems" },
  { href: "#experience", label: "Experience" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="text-lg font-medium tracking-tight text-foreground"
        >
          {profile.shortName}.
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="rounded-full border border-border p-2 text-muted transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href={profile.resumeHref}
            download
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Download resume
          </a>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform duration-300 ease-premium hover:scale-[1.03]"
          >
            Let&rsquo;s talk
          </a>
        </div>

        <button
          type="button"
          className="p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 pt-3">
              <a
                href={profile.resumeHref}
                download
                className="text-sm text-muted"
              >
                Download resume
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle color theme"
                className="rounded-full border border-border p-2 text-muted"
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </li>
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground"
              >
                Let&rsquo;s talk
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
