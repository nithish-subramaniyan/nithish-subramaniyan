export const profile = {
  name: "Nithish Subramaniyan",
  shortName: "Nithish",
  role: "Backend Engineer",
  tagline: "Cloud-native systems. Distributed architecture. Production reliability.",
  email: "nithishsubramaniyan87@gmail.com",
  linkedin: "www.linkedin.com/in/nithish-subramaniyan",
  resumeHref: "/resume.pdf",
};

export const credibilityDomains = [
  "Backend Engineering",
  "AWS",
  "Distributed Systems",
  "Serverless",
  "Event-Driven Architecture",
  "AI Systems",
];

export const whyMePrinciples = [
  {
    id: "system-thinking",
    title: "System thinking",
    body: "I focus on how services interact, where systems fail, and how architecture behaves under real-world conditions.",
  },
  {
    id: "reliability",
    title: "Reliability",
    body: "Retries, failure modes, observability, scalability, and recovery are part of the design, not an afterthought.",
  },
  {
    id: "data-flow",
    title: "Data flow",
    body: "Understanding how data moves through a system is as important as writing the code that moves it.",
  },
  {
    id: "product-impact",
    title: "Product impact",
    body: "Technology matters when it improves speed, reliability, customer experience, cost, and operations.",
  },
];

export type Tradeoff = { question: string; answer: string };

export type Project = {
  number: string;
  slug: string;
  title: string;
  impact: string;
  domains: string[];
  problem: string;
  system: string[];
  engineering: string[];
  decisions: Tradeoff[];
  results: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "interaction-platform",
    title: "Cloud-native interaction platform",
    impact: "Real-time routing architecture designed for scale.",
    domains: ["AWS", "Serverless", "Event-Driven", "AI"],
    problem:
      "Customer interactions arrived through several disconnected channels, each handled by a different service with its own retry logic and no shared view of state. Under load, failures in one channel had a way of quietly affecting the others.",
    system: [
      "Client / channel intake",
      "API layer (authentication, validation, rate limiting)",
      "Event stream (ordered, replayable)",
      "Routing microservices",
      "Serverless workers (Lambda)",
      "Data layer (durable state + cache)",
    ],
    engineering: [
      "Replaced synchronous, point-to-point calls between channel handlers with a single ordered event stream, so every consumer sees the same sequence of events.",
      "Modeled routing decisions as small, independently deployable services rather than branches inside one large handler.",
      "Used serverless workers for bursty, unpredictable workloads instead of pre-provisioned capacity sitting idle most of the day.",
      "Introduced idempotency keys at the API boundary so retried requests never produce duplicate side effects downstream.",
    ],
    decisions: [
      {
        question: "Why event-driven instead of direct service-to-service calls?",
        answer:
          "Direct calls couple a service's uptime to every service it talks to. An event stream lets producers and consumers fail, retry, and redeploy independently, and it gives a replayable record for debugging incidents after the fact.",
      },
      {
        question: "Why serverless for the routing workers?",
        answer:
          "Interaction volume is spiky by nature — steady most of the day, then sharp bursts around specific hours. Serverless workers scale with that shape directly, instead of paying for headroom that sits idle overnight.",
      },
      {
        question: "Why asynchronous processing at the routing layer?",
        answer:
          "Routing decisions don't need to block the caller. Making the API layer accept and acknowledge quickly, then process asynchronously, kept response times predictable even when a downstream dependency was slow.",
      },
    ],
    results: [
      "Removed a class of cross-channel failures caused by shared synchronous dependencies.",
      "Made it possible to deploy and roll back individual routing services without a coordinated release.",
      "Gave the team a replayable event log for diagnosing production issues, instead of reconstructing timelines from scattered logs.",
    ],
  },
  {
    number: "02",
    slug: "workflow-modernization",
    title: "Enterprise workflow modernization",
    impact: "Migrating a legacy, request-heavy workflow onto managed, event-driven infrastructure.",
    domains: ["AWS", "Serverless", "Microservices"],
    problem:
      "A core enterprise workflow ran as a long, tightly-coupled batch process on fixed infrastructure. A single stalled step could hold up everything behind it, and scaling meant adding whole servers, not just the part of the pipeline under load.",
    system: [
      "Ingestion API",
      "Step-level event queue",
      "Independently scaled processing services",
      "Object storage for intermediate artifacts",
      "Managed relational store for final state",
    ],
    engineering: [
      "Broke the monolithic batch job into discrete steps, each triggered by an event rather than a position in a fixed schedule.",
      "Used a queue between steps so a slow or failed step doesn't block the ones after it — it degrades gracefully instead of stalling the whole pipeline.",
      "Moved large intermediate artifacts to object storage instead of passing them through application memory or a shared database table.",
      "Added dead-letter handling so a step that fails repeatedly is set aside for inspection rather than retried forever or silently dropped.",
    ],
    decisions: [
      {
        question: "Why break a single pipeline into separate services?",
        answer:
          "The steps had very different resource and scaling profiles. Splitting them let each one scale on its own terms, and let a failure in one step be isolated rather than taking down the whole workflow.",
      },
      {
        question: "Why a queue instead of direct chaining?",
        answer:
          "A queue absorbs bursts and buys time when a downstream step is temporarily unavailable, which is the difference between a slow morning and a full outage.",
      },
      {
        question: "Why this data model?",
        answer:
          "Splitting transient, large artifacts from durable final state kept the primary database small and fast, and made it possible to reprocess a step without re-running the entire workflow.",
      },
    ],
    results: [
      "Reduced operational complexity by giving each stage of the workflow its own scaling and failure boundary.",
      "Enabled horizontal scalability for the specific steps that actually needed it, instead of the whole pipeline.",
      "Modernized a legacy process without requiring a single high-risk cutover — steps were migrated one at a time.",
    ],
  },
  {
    number: "03",
    slug: "intelligent-routing",
    title: "Intelligent conversational routing",
    impact: "AI-assisted intake that routes requests to the right system without a rigid decision tree.",
    domains: ["Amazon Lex", "Amazon Bedrock", "Event-Driven", "AI"],
    problem:
      "Incoming requests were triaged by a long chain of hardcoded conditionals. Every new request type meant editing a growing, increasingly fragile decision tree shared by the whole team.",
    system: [
      "Conversational intake (Amazon Lex)",
      "Intent classification layer (Amazon Bedrock)",
      "Event bus",
      "Domain-specific handler services",
      "Fallback / human handoff path",
    ],
    engineering: [
      "Used a managed conversational interface for intake instead of building and maintaining a custom NLU pipeline.",
      "Separated intent classification from execution — the model decides what a request is about, dedicated services decide what to do with it.",
      "Published classified intents as events, so new handler services can be added without touching the classification layer at all.",
      "Built an explicit fallback path so low-confidence classifications go to a human rather than a best-guess service.",
    ],
    decisions: [
      {
        question: "Why separate classification from execution?",
        answer:
          "Coupling them meant every new request type required changing the same fragile code path. Separating them turned adding a new capability into adding a new listener, not editing shared logic.",
      },
      {
        question: "Why keep a human-handoff path instead of always guessing?",
        answer:
          "A wrong automatic routing decision is often worse than a short delay. Confidence thresholds and an explicit fallback kept the system honest about what it didn't know.",
      },
      {
        question: "Why event-driven handlers instead of a central router service?",
        answer:
          "A central router becomes a bottleneck and a single point of failure as request types grow. Publishing events let each domain team own its own handler independently.",
      },
    ],
    results: [
      "Replaced a single fragile decision tree with independently owned, independently deployable handlers.",
      "Made it possible to add new request types without a team-wide code review of shared routing logic.",
      "Improved reliability by giving uncertain cases an explicit path to a human instead of a silent best guess.",
    ],
  },
];

export const designSteps = [
  {
    step: "01",
    title: "Understand the flow",
    body: "Where does the request start? Where does the data move? Where can it fail?",
  },
  {
    step: "02",
    title: "Find the pressure points",
    body: "Traffic, latency, dependencies, data consistency, and failure modes — the places a system actually breaks.",
  },
  {
    step: "03",
    title: "Design the system",
    body: "Sync vs. async. Monolith vs. services. Queues, events, caching, and where state actually lives.",
  },
  {
    step: "04",
    title: "Plan for failure",
    body: "Retries, timeouts, dead-letter queues, fallbacks, and the observability to know which one fired.",
  },
  {
    step: "05",
    title: "Optimize for reality",
    body: "Cost, scale, operations, maintainability, and the developer experience of the people who own it next.",
  },
];

export const experience = [
  {
    company: "TeleApps",
    role: "Software Engineer",
    period: "January 2023 — Present",
    focus: "Building backend systems for enterprise workloads.",
    points: [
      "Cloud-native modernization of legacy workflows",
      "API and microservice design",
      "Event-driven and serverless systems",
      "Real-time processing and production reliability",
    ],
  },
  {
    company: "TeleApps",
    role: "Software Engineer Trainee",
    period: "January 2022 — December 2022",
    focus: "Learning the systems, conventions, and failure modes of a production codebase.",
    points: [
      "Backend feature development",
      "Debugging and root-cause analysis",
      "Working directly with production incidents",
    ],
  },
];

export const growthStages = [
  "Software Engineer Trainee",
  "Software Engineer",
  "System Ownership",
];

export const technicalDomains = [
  {
    id: "cloud",
    title: "Cloud architecture",
    items: ["AWS", "Serverless", "Amazon S3"],
  },
  {
    id: "distributed",
    title: "Distributed systems",
    items: ["Event-driven architecture", "Microservices", "Async processing", "Event streaming"],
  },
  {
    id: "backend",
    title: "Backend engineering",
    items: ["API design", "System design", "Data flow", "Reliability"],
  },
  {
    id: "ai",
    title: "AI systems",
    items: ["Amazon Lex", "Amazon Bedrock", "Intelligent routing", "AI-powered workflows"],
  },
  {
    id: "production",
    title: "Production engineering",
    items: ["Failure handling", "Performance", "Scalability", "High availability", "Cost optimization"],
  },
];

export const engineeringNotes = [
  "Why systems fail in production",
  "Designing APIs for real-world scale",
  "When serverless is the wrong choice",
  "Event-driven architecture without the buzzwords",
  "Retries are harder than they look",
  "How I think about system design interviews",
];

export const recruiterQuickView = {
  role: "Backend Engineer",
  focus: "Cloud-native systems",
  strength: "System architecture",
  experience: "Enterprise systems, 2022 — Present",
  specialties: [
    "Distributed systems",
    "Serverless",
    "Event-driven architecture",
    "AWS",
    "AI systems",
  ],
  lookingFor: [
    "Product engineering",
    "Backend engineering",
    "Platform engineering",
    "Cloud systems",
    "AI infrastructure",
  ],
};

export const playgroundControls = [
  { id: "traffic", label: "Increase traffic" },
  { id: "disable", label: "Disable a service" },
  { id: "latency", label: "Add latency" },
  { id: "retry", label: "Trigger retry" },
  { id: "scale", label: "Scale workers" },
  { id: "cache", label: "Enable caching" },
] as const;

export type PlaygroundControlId = (typeof playgroundControls)[number]["id"];
