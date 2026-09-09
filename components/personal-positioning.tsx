"use client";

import { motion } from "framer-motion";

export function PersonalPositioning() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-balance text-display-2 font-medium leading-tight text-foreground"
        >
          Simple systems are rarely simple. They are usually the result of
          difficult decisions.
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-md text-sm leading-relaxed text-muted"
        >
          I enjoy breaking complex systems into understandable pieces,
          finding the pressure points, and designing software that survives
          real-world usage.
        </motion.p>
      </div>
    </section>
  );
}
