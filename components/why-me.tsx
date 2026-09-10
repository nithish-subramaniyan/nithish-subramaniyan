"use client";

import { motion } from "framer-motion";
import { whyMePrinciples } from "@/lib/data";

export function WhyMe() {
  return (
    <section id="why-me" className="section-pad">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-balance text-display-2 font-medium text-foreground"
        >
          I don&rsquo;t just build APIs. I think about what happens after they
          fail.
        </motion.h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {whyMePrinciples.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-background p-7"
            >
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-4 text-base font-medium text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
