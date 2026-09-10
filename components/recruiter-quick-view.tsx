"use client";

import { motion } from "framer-motion";
import { recruiterQuickView, profile } from "@/lib/data";

const rows: { label: string; value: string | string[] }[] = [
  { label: "Role", value: recruiterQuickView.role },
  { label: "Focus", value: recruiterQuickView.focus },
  { label: "Strength", value: recruiterQuickView.strength },
  { label: "Experience", value: recruiterQuickView.experience },
  { label: "Specialties", value: recruiterQuickView.specialties },
  { label: "Looking for", value: recruiterQuickView.lookingFor },
];

export function RecruiterQuickView() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-border bg-surface/50 p-8 md:p-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-display-3 font-medium text-foreground">
              30 seconds?
            </h2>
            <a
              href={profile.resumeHref}
              download
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/60"
            >
              Download resume
            </a>
          </div>

          <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {rows.map((row) => (
              <div key={row.label} className="hairline pt-4">
                <dt className="label-tag">{row.label}</dt>
                <dd className="mt-2 text-sm text-foreground/90">
                  {Array.isArray(row.value) ? (
                    <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                      {row.value.map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                    </ul>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
