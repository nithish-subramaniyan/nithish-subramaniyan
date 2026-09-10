"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { designSteps } from "@/lib/data";

export function HowIDesign() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="systems" className="section-pad">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-balance text-display-2 font-medium text-foreground"
        >
          Before I write code, I map the system.
        </motion.h2>

        <div ref={ref} className="relative mt-16 max-w-2xl">
          <div className="absolute left-[15px] top-2 h-[calc(100%-2rem)] w-px bg-border md:left-[19px]" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[15px] top-2 w-px bg-accent md:left-[19px]"
          />

          <ol className="space-y-12">
            {designSteps.map((step) => (
              <li key={step.step} className="relative flex gap-6 pl-10 md:gap-8 md:pl-12">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background font-mono text-xs text-muted">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-base font-medium text-foreground md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
