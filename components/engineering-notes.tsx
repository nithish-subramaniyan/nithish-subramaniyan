"use client";

import { motion } from "framer-motion";
import { engineeringNotes } from "@/lib/data";

export function EngineeringNotes() {
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
          {engineeringNotes.map((note, i) => (
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
              className="hairline grid gap-2 py-6 md:grid-cols-[1fr_1.6fr] md:gap-10"
            >
              <h3 className="text-base font-medium text-foreground">
                {note.title}
              </h3>
              <p className="text-base leading-relaxed text-foreground/70">
                {note.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}