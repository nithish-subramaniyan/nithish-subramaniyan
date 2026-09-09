"use client";

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