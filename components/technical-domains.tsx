"use client";

import { motion } from "framer-motion";
import { technicalDomains } from "@/lib/data";

export function TechnicalDomains() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-2 font-medium text-foreground"
        >
          Technical domains
        </motion.h2>

        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {technicalDomains.map((domain, i) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hairline pt-6"
            >
              <h3 className="text-sm font-medium text-foreground">
                {domain.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {domain.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
