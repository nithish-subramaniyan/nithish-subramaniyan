"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { credibilityDomains } from "@/lib/data";

const rotatingWords = ["Systems.", "Scale.", "Reliability.", "Products."];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="container-page grid gap-16 pb-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10 md:pb-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 text-sm text-muted"
          >
            Nithish Subramaniyan — Backend Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance font-medium text-display-1 text-foreground"
          >
            I build systems that keep working when things get complicated.
          </motion.h1>

          <div className="mt-6 flex h-10 items-center gap-3 md:h-12">
            <span className="text-sm text-muted">Focused on</span>
            <div className="relative h-7 overflow-hidden md:h-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-mono text-lg text-accent md:text-xl"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-balance text-base leading-relaxed text-muted md:text-lg"
          >
            Backend engineer focused on cloud-native platforms, distributed
            systems, event-driven architecture, serverless computing, and
            production reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 ease-premium hover:scale-[1.03]"
            >
              View my work
            </a>
            <a
              href="#systems"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent/60"
            >
              How I think
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 hairline pt-6"
          >
            <p className="mb-4 text-xs text-muted">Architectural domains</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {credibilityDomains.map((domain) => (
                <li key={domain} className="text-sm text-foreground/80">
                  {domain}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <ArchitectureDiagram />
        </motion.div>
      </div>
    </section>
  );
}
