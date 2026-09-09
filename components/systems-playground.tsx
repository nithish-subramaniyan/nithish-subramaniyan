"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { playgroundControls, type PlaygroundControlId } from "@/lib/data";
import { cn } from "@/lib/utils";

type State = {
  traffic: boolean;
  serviceDown: boolean;
  latency: boolean;
  scaled: boolean;
  caching: boolean;
};

const initialState: State = {
  traffic: false,
  serviceDown: false,
  latency: false,
  scaled: false,
  caching: false,
};

function describe(id: PlaygroundControlId, next: State): string[] {
  switch (id) {
    case "traffic":
      return next.traffic
        ? ["Traffic increases to a sustained burst.", "Queue depth rises to absorb the load."]
        : ["Traffic returns to baseline."];
    case "disable":
      return next.serviceDown
        ? ["Service B stops responding.", "The queue holds its requests instead of dropping them.", "Fallback service takes over affected traffic."]
        : ["Service B comes back online.", "Traffic resumes its normal path."];
    case "latency":
      return next.latency
        ? ["Added latency on the data layer.", "The API layer keeps accepting requests without blocking on it."]
        : ["Data layer latency returns to normal."];
    case "retry":
      return next.serviceDown
        ? ["Retry policy activates.", "Exponential backoff, then handoff to the fallback service."]
        : ["Retry policy activates.", "Request succeeds on the first attempt."];
    case "scale":
      return next.scaled
        ? ["Worker concurrency scales out.", "Queue depth drains faster under load."]
        : ["Worker concurrency scales back to baseline."];
    case "cache":
      return next.caching
        ? ["Caching enabled in front of the data layer.", "Repeated reads stop reaching the database."]
        : ["Caching disabled.", "All reads go directly to the data layer again."];
  }
}

export function SystemsPlayground() {
  const [state, setState] = useState<State>(initialState);
  const [log, setLog] = useState<string[]>([
    "Simulation ready. Traffic is steady, all services healthy.",
  ]);
  const reduceMotion = useReducedMotion();
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [log]);

  function handleToggle(id: PlaygroundControlId) {
    setState((prev) => {
      const next = { ...prev };
      if (id === "traffic") next.traffic = !prev.traffic;
      if (id === "disable") next.serviceDown = !prev.serviceDown;
      if (id === "latency") next.latency = !prev.latency;
      if (id === "scale") next.scaled = !prev.scaled;
      if (id === "cache") next.caching = !prev.caching;

      const messages = describe(id, id === "retry" ? prev : next);
      setLog((l) => [...l, ...messages].slice(-8));
      return next;
    });
  }

  const queueDepth = state.serviceDown ? 3 : state.traffic ? 2 : 1;
  const effectiveDepth = state.scaled ? Math.max(1, queueDepth - 1) : queueDepth;

  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="flex flex-col gap-3">
          <span className="label-tag">Interactive architecture simulation</span>
          <h2 className="max-w-xl text-balance text-display-2 font-medium text-foreground">
            Let&rsquo;s break the architecture.
          </h2>
          <p className="max-w-lg text-sm text-muted">
            This is a conceptual model, not a production system — it exists
            to show how the pieces are meant to behave under stress.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-y-6 md:gap-4">
              <Node label="Client" status="healthy" />
              <Arrow />
              <Node
                label="API layer"
                status={state.latency ? "strained" : "healthy"}
              />
              <Arrow />
              <div className="flex flex-col items-center gap-1">
                <Node label="Queue" status={effectiveDepth > 1 ? "strained" : "healthy"} />
                <span className="font-mono text-[10px] text-muted">
                  depth: {effectiveDepth}
                </span>
              </div>
              <Arrow />
              <div className="flex flex-col gap-3">
                <Node label="Service A" status="healthy" compact />
                <Node
                  label="Service B"
                  status={state.serviceDown ? "down" : "healthy"}
                  compact
                />
              </div>
              <Arrow />
              {state.caching && (
                <>
                  <Node label="Cache" status="healthy" compact />
                  <Arrow />
                </>
              )}
              <Node
                label="Data layer"
                status={state.latency ? "strained" : "healthy"}
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {playgroundControls.map((control) => {
                const isActive =
                  (control.id === "traffic" && state.traffic) ||
                  (control.id === "disable" && state.serviceDown) ||
                  (control.id === "latency" && state.latency) ||
                  (control.id === "scale" && state.scaled) ||
                  (control.id === "cache" && state.caching);

                return (
                  <button
                    key={control.id}
                    type="button"
                    onClick={() => handleToggle(control.id)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs font-medium transition-colors duration-300",
                      isActive
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-foreground hover:border-accent/60"
                    )}
                  >
                    {control.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface/40 p-6">
            <p className="label-tag mb-4">Event log</p>
            <div
              ref={logRef}
              className="h-64 space-y-2 overflow-y-auto pr-1 font-mono text-xs leading-relaxed text-muted lg:h-full"
            >
              <AnimatePresence initial={false}>
                {log.map((line, i) => (
                  <motion.p
                    key={`${i}-${line}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-accent">›</span> {line}
                  </motion.p>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Node({
  label,
  status,
  compact,
}: {
  label: string;
  status: "healthy" | "strained" | "down";
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors duration-300",
        status === "down"
          ? "border-dashed border-border/70 opacity-50"
          : "border-border",
        compact ? "text-xs" : "text-sm"
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "healthy" && "bg-accent",
          status === "strained" && "bg-accent animate-pulse-soft",
          status === "down" && "bg-muted"
        )}
      />
      <span className="text-foreground/90">{label}</span>
    </div>
  );
}

function Arrow() {
  return (
    <span className="hidden text-muted md:inline" aria-hidden>
      →
    </span>
  );
}
