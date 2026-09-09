"use client";

import { motion } from "framer-motion";
import { experience, growthStages } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-2 font-medium text-foreground"
        >
          Experience
        </motion.h2>

        <div className="mt-14 grid gap-16 md:grid-cols-[1fr_1fr]">
          <div className="divide-y divide-border">
            {experience.map((job) => (
              <div key={job.role} className="py-8 first:pt-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium text-foreground">
                    {job.company}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-accent">{job.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {job.focus}
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="py-8">
              <h3 className="text-lg font-medium text-foreground">
                Education
              </h3>
              <p className="mt-1 text-sm text-muted">
                Bachelor of Commerce — Corporate Secretaryship &amp; Computer
                Applications
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                What&rsquo;s shaped the engineering more than the degree is
                the work itself: shipping production systems, owning
                incidents, and learning architecture by making it hold up
                under real load.
              </p>
            </div>
          </div>

          <div>
            <p className="label-tag mb-8">Career progression</p>
            <div className="relative pl-6">
              <div className="absolute left-[3px] top-1 h-[calc(100%-1.5rem)] w-px bg-border" />
              <ul className="space-y-10">
                {growthStages.map((stage, i) => (
                  <motion.li
                    key={stage}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative"
                  >
                    <span
                      className={
                        "absolute -left-6 top-1.5 h-2 w-2 rounded-full " +
                        (i === growthStages.length - 1
                          ? "bg-accent"
                          : "bg-muted")
                      }
                    />
                    <p
                      className={
                        i === growthStages.length - 1
                          ? "text-base font-medium text-foreground"
                          : "text-base text-muted"
                      }
                    >
                      {stage}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
