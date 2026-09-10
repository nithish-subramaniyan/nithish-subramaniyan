"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Node = {
  id: string;
  label: string;
  concept: string;
  detail: string;
};

const nodes: Node[] = [
  {
    id: "client",
    label: "Client",
    concept: "Entry point",
    detail: "Web, mobile, and partner integrations. Requests are made idempotent here.",
  },
  {
    id: "api",
    label: "API layer",
    concept: "Retry",
    detail: "Authentication, validation, and rate limiting, with backoff on repeated calls.",
  },
  {
    id: "stream",
    label: "Event stream",
    concept: "Event processing",
    detail: "Ordered and replayable. Producers and consumers can fail independently.",
  },
  {
    id: "services",
    label: "Microservices",
    concept: "Failure handling",
    detail: "Each service owns one part of the domain, so one failure stays contained.",
  },
  {
    id: "workers",
    label: "Serverless workers",
    concept: "Scaling",
    detail: "Concurrency scales with load instead of sitting on pre-provisioned capacity.",
  },
  {
    id: "data",
    label: "Data layer",
    concept: "Latency",
    detail: "Durable storage plus a cache in front of it for hot, repeated reads.",
  },
];

export function ArchitectureDiagram() {
  const [active, setActive] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const activeNode = nodes.find((n) => n.id === active) ?? null;

  return (
    <div className="relative">
      <div
        className="relative rounded-2xl border border-border bg-surface/60 p-6 md:p-8"
        role="group"
        aria-label="Interactive system architecture diagram"
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="label-tag">System overview</span>
          <span className="label-tag">Live diagram</span>
        </div>

        <div className="relative flex flex-col">
          {nodes.map((node, i) => (
            <div key={node.id} className="relative">
              <button
                type="button"
                onMouseEnter={() => setActive(node.id)}
                onFocus={() => setActive(node.id)}
                onMouseLeave={() => setActive(null)}
                onBlur={() => setActive(null)}
                className={cn(
                  "group relative z-10 w-full rounded-lg border px-4 py-3 text-left transition-colors duration-300",
                  active === node.id
                    ? "border-accent bg-surface-2"
                    : "border-border bg-surface hover:border-accent/50"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    {node.label}
                  </span>
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-colors duration-300",
                      active === node.id ? "bg-accent" : "bg-muted/50"
                    )}
                  />
                </div>
              </button>

              {i < nodes.length - 1 && (
                <div className="relative flex h-8 items-center justify-start pl-8">
                  <svg
                    width="2"
                    height="100%"
                    className="absolute left-8 top-0 h-full"
                    aria-hidden
                  >
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="100%"
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                    />
                  </svg>
                  {!reduceMotion && (
                    <motion.span
                      aria-hidden
                      className="absolute left-[27px] h-1.5 w-1.5 rounded-full bg-accent"
                      animate={{ top: ["0%", "100%"] }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 min-h-[64px] rounded-xl border border-border bg-surface/40 px-4 py-3">
        {activeNode ? (
          <div>
            <p className="label-tag mb-1">{activeNode.concept}</p>
            <p className="text-sm text-muted">{activeNode.detail}</p>
          </div>
        ) : (
          <p className="text-sm text-muted">
            Hover a layer to see how it handles load, failure, and scale.
          </p>
        )}
      </div>
    </div>
  );
}
