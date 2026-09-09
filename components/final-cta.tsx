"use client";

<<<<<<< HEAD
export function FinalCTA() {
  const email = "nithishsubramaniyan87@gmail.com";
  const linkedin =
    "https://www.linkedin.com/in/nithish-subramaniyan";

  return (
    <section
      id="contact"
      className="section-pad"
    >
      <div className="container-page text-center">
        
        <h2 className="mx-auto max-w-2xl text-display-1 font-medium text-foreground">
          Let&apos;s build something that has to work.
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-base text-muted">
          I&apos;m interested in solving difficult backend and infrastructure
          problems where architecture, reliability, and scale actually matter.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          <a
            href={`mailto:${email}`}
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:scale-105"
          >
            Start a conversation
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:scale-105"
          >
            LinkedIn →
          </a>

          <a
            href={`mailto:${email}`}
            className="rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:scale-105"
          >
            Email →
          </a>

        </div>
      </div>
    </section>
  );
}
=======
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function FinalCTA() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-page text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-balance text-display-1 font-medium text-foreground"
        >
          Let&rsquo;s build something that has to work.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-lg text-balance text-base text-muted"
        >
          I&rsquo;m interested in solving difficult backend and
          infrastructure problems where architecture, reliability, and scale
          actually matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-transform duration-300 ease-premium hover:scale-[1.03]"
          >
            Start a conversation
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/60"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/60"
          >
            <Mail size={16} />
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
>>>>>>> 9fbaa46cbb439209774d79749003b3a33784ccd4
