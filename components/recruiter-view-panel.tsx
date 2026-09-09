"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Briefcase } from "lucide-react";
import { profile, recruiterQuickView, projects } from "@/lib/data";

export function RecruiterViewPanel() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-3 text-sm font-medium text-foreground shadow-lg backdrop-blur-md transition-transform duration-300 ease-premium hover:scale-[1.03] md:bottom-8 md:right-8"
      >
        <Briefcase size={15} className="text-accent" />
        Recruiter view
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              aria-hidden
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Recruiter summary"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col overflow-y-auto border-l border-border bg-background p-8"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted">Recruiter summary</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close recruiter summary"
                  className="rounded-full border border-border p-2 text-muted hover:text-foreground"
                >
                  <X size={15} />
                </button>
              </div>

              <h2 className="mt-6 text-2xl font-medium text-foreground">
                {profile.name}
              </h2>
              <p className="mt-1 text-sm text-accent">
                {recruiterQuickView.role}
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="label-tag mb-2">Core expertise</p>
                  <ul className="flex flex-wrap gap-2">
                    {recruiterQuickView.specialties.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-border px-3 py-1 text-xs text-foreground/85"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="label-tag mb-2">Experience</p>
                  <p className="text-sm text-foreground/85">
                    {recruiterQuickView.experience} — TeleApps
                  </p>
                </div>

                <div>
                  <p className="label-tag mb-2">Key projects</p>
                  <ul className="space-y-3">
                    {projects.map((p) => (
                      <li key={p.slug}>
                        <p className="text-sm font-medium text-foreground">
                          {p.title}
                        </p>
                        <p className="text-xs text-muted">{p.impact}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="label-tag mb-2">Looking for</p>
                  <ul className="flex flex-wrap gap-2">
                    {recruiterQuickView.lookingFor.map((l) => (
                      <li
                        key={l}
                        className="rounded-full border border-border px-3 py-1 text-xs text-foreground/85"
                      >
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={profile.resumeHref}
                  download
                  className="rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-accent-foreground"
                >
                  Download resume
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full border border-border px-5 py-3 text-center text-sm font-medium text-foreground"
                >
                  Email {profile.name.split(" ")[0]}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
