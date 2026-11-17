"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { engineeringNotes } from "@/lib/data";

export function EngineeringNotes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="writing" className="section-pad">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-balance text-display-2 font-medium text-foreground"
        >
          Things I think about when nobody asks.
        </motion.h2>

        <ul className="mt-14">
          {engineeringNotes.map((note, i) => {
            const isOpen = openIndex === i;
            const panelId = `note-panel-${i}`;
            const buttonId = `note-button-${i}`;

            return (
              <motion.li
                key={note.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="hairline"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
                  >
                    <span
                      className={`text-base font-medium transition-colors ${
                        isOpen
                          ? "text-foreground"
                          : "text-foreground/90 group-hover:text-foreground"
                      }`}
                    >
                      {note.title}
                    </span>

                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="relative h-4 w-4 shrink-0 text-muted"
                    >
                      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-base leading-relaxed text-foreground/70">
                        {note.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}