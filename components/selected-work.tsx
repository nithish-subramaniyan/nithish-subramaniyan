"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function SelectedWork() {
  return (
    <section id="work" className="section-pad">
      <div className="container-page">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-2 font-medium text-foreground"
          >
            Selected work
          </motion.h2>
          <p className="max-w-sm text-sm text-muted">
            Each case study is a short engineering story: the problem, the
            system, the decisions, and what changed.
          </p>
        </div>

        <div className="mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
