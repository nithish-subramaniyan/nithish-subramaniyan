"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full flex-col gap-4 py-8 text-left md:flex-row md:items-center md:gap-8"
      >
        <span className="font-mono text-sm text-muted md:w-12">
          {project.number}
        </span>

        <div className="flex-1">
          <h3 className="text-xl font-medium text-foreground md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm text-muted md:text-base">
            {project.impact}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {project.domains.map((d) => (
              <li key={d} className="font-mono text-xs text-muted">
                {d}
              </li>
            ))}
          </ul>
        </div>

        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-transform duration-300 ease-premium",
            open ? "rotate-45 border-accent text-accent" : "group-hover:border-accent/60"
          )}
        >
          <ArrowUpRight size={16} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-10 pb-12 pt-2 md:grid-cols-2 md:pl-20">
              <div>
                <p className="label-tag mb-3">The problem</p>
                <p className="text-sm leading-relaxed text-muted">
                  {project.problem}
                </p>

                <p className="label-tag mb-3 mt-8">The system</p>
                <ol className="space-y-2">
                  {project.system.map((s, i) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 text-sm text-foreground/85"
                    >
                      <span className="font-mono text-xs text-muted">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>

                <p className="label-tag mb-3 mt-8">The engineering</p>
                <ul className="space-y-3">
                  {project.engineering.map((e) => (
                    <li
                      key={e}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="label-tag mb-3">The decisions</p>
                <div className="space-y-5">
                  {project.decisions.map((d) => (
                    <div key={d.question}>
                      <p className="text-sm font-medium text-foreground">
                        {d.question}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {d.answer}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="label-tag mb-3 mt-8">The result</p>
                <ul className="space-y-2">
                  {project.results.map((r) => (
                    <li
                      key={r}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
