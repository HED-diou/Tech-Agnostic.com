/**
 * Deltavantis — content model.
 *
 * All marketing copy lives here so that components stay structural and the
 * whole funnel can be re-written without touching JSX.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * ⚠  PLACEHOLDER CONTENT
 * Case-study numbers and quotes below are illustrative and must be replaced
 * with real, verifiable engagements before this site goes live. Publishing
 * invented results would contradict the brand's own positioning.
 * See docs/CONTENT.md for the swap checklist.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Deltavantis',
  wordmark: 'deltavantis',
  domain: 'deltavantis.com',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://deltavantis.com',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@deltavantis.com',
  tagline: 'Independent IT consulting.',
  description:
    'Independent IT consulting. We help teams choose, ship and own the right stack — without vendor kickbacks or stack religion.',
  locale: 'en',
  social: {
    linkedin: 'https://www.linkedin.com/company/deltavantis',
    github: 'https://github.com/deltavantis',
  },
} as const;

export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Work', href: '/#work' },
  { label: 'Method', href: '/#method' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/blog' },
] as const;

/* -------------------------------------------------------------------------
 * Funnel step 1 — position and qualify
 * ---------------------------------------------------------------------- */

export const hero = {
  eyebrow: 'independent it consulting',
  title: 'The right stack is the one you can still afford in three years.',
  lead: 'We are not resellers and we take no vendor commission. You get the recommendation we would follow ourselves — with the cost model, the migration risk and the exit path written down.',
  primary: { label: 'Book a 30-min technical review', href: '/contact' },
  secondary: { label: 'See how we work', href: '/#method' },
  proof: 'Fixed scope. Fixed price. Everything we build, you own.',
} as const;

/** Rendered as text chips, never as vendor logos — see BRAND.md §8. */
export const stacks = [
  'AWS',
  'GCP',
  'Azure',
  'Hetzner',
  'Kubernetes',
  'Terraform',
  'Postgres',
  'ClickHouse',
  'Kafka',
  'Temporal',
  'Next.js',
  'Django',
  'Rails',
  'Go',
  'Rust',
  '.NET',
  'Laravel',
  'dbt',
] as const;

/* -------------------------------------------------------------------------
 * Trust band — the numbers a non-technical buyer scans for
 * ---------------------------------------------------------------------- */

export const stats = {
  eyebrow: 'in practice',
  title: 'Small on purpose.',
  lead: 'We run a handful of engagements at a time. That is a deliberate constraint, not a stage we are trying to grow out of.',
  items: [
    { value: '0', label: 'vendor commissions taken', note: 'No reseller agreements, no partner tiers, no referral fees.' },
    { value: '1 in 3', label: 'audits end in "keep what you have"', note: 'That recommendation is worth as much as the other two.' },
    { value: '2 wks', label: 'from first call to a decision', note: 'Fixed scope, fixed price, dated deliverable.' },
    { value: '100%', label: 'of what we build, you own', note: 'Your repos, your cloud accounts, your documentation.' },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Who you actually work with — photo slots, see docs/PHOTOGRAPHY.md
 * ---------------------------------------------------------------------- */

export const team = {
  eyebrow: 'who you work with',
  title: 'The people on the call are the people doing the work.',
  lead: 'No account manager, no offshore handover, no bait and switch. You meet the engineers who will be in your repository.',
  members: [
    {
      slot: 'TEAM-01',
      name: 'Founder & principal consultant',
      role: 'Architecture · cost · vendor negotiation',
      brief: 'Portrait, natural light, at a desk or whiteboard — working, not posed',
    },
    {
      slot: 'TEAM-02',
      name: 'Senior engineer',
      role: 'Build sprints · platform · data',
      brief: 'Portrait, natural light, same treatment as TEAM-01',
    },
    {
      slot: 'TEAM-03',
      name: 'Senior engineer',
      role: 'Cloud · infrastructure · reliability',
      brief: 'Portrait, natural light, same treatment as TEAM-01',
    },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Funnel step 2 — name the pain
 * ---------------------------------------------------------------------- */

export const problems = {
  eyebrow: 'why teams call us',
  title: 'Three ways good teams lose a year.',
  lead: 'None of these are engineering-skill problems. They are decision problems, and they compound quietly.',
  items: [
    {
      n: '01',
      title: 'The stack was chosen by whoever was loudest',
      body: 'A framework picked in week two now dictates hiring, latency and licence cost in year three. Nobody wrote down why, so nobody can revisit it without it feeling personal.',
      tell: 'Tell: "we\'ve always done it this way" is the only answer available.',
    },
    {
      n: '02',
      title: 'The cloud bill grew faster than revenue',
      body: 'Spend was never modelled against usage, so every incident is answered with more instances. The invoice is now a fixed cost that nobody owns and nobody can explain line by line.',
      tell: 'Tell: infra cost per customer has gone up two quarters running.',
    },
    {
      n: '03',
      title: 'The roadmap is hostage to one integration',
      body: 'A single vendor sits on the critical path — a CRM, a payments provider, an internal legacy service. Every feature estimate now carries their release cycle inside it.',
      tell: 'Tell: half your estimates begin with "it depends on whether they...".',
    },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Funnel step 3 — the offer ladder
 * ---------------------------------------------------------------------- */

export const services = {
  eyebrow: 'services',
  title: 'Four ways to work with us.',
  lead: 'Each one has a fixed scope, a stated price and a dated deliverable. If we cannot scope it, we say so before you pay.',
  items: [
    {
      slug: 'audit',
      title: 'Stack & vendor audit',
      duration: '2 weeks',
      price: 'from €4,500',
      body: 'We map what you run, what it costs and what it locks you into — then give you a scored decision matrix instead of an opinion.',
      deliverables: [
        'Architecture and data-flow map',
        'Scored decision matrix with weights you set',
        '3-year cost model per option',
        'Migration risk register and exit path',
      ],
    },
    {
      slug: 'sprint',
      title: 'Build sprint',
      duration: '4–8 weeks',
      price: 'from €18,000',
      body: 'A senior pair ships one production increment end to end — the thing your roadmap keeps deferring because nobody has a clear month.',
      deliverables: [
        'Working increment in your production environment',
        'Tests, CI and runbook, not just code',
        'Weekly demo, no status decks',
        'Handover session with your engineers',
      ],
    },
    {
      slug: 'cost',
      title: 'Cloud & cost engineering',
      duration: '3 weeks',
      price: 'from €6,000',
      body: 'We find where the bill actually goes, fix the top offenders, and leave you the dashboard and the guardrails to keep it there.',
      deliverables: [
        'Cost attribution per service and per customer',
        'Prioritised remediation list with effort estimates',
        'Implemented quick wins',
        'Budget alerts and IaC guardrails',
      ],
    },
    {
      slug: 'fractional',
      title: 'Fractional CTO',
      duration: 'monthly, rolling',
      price: 'from €3,200 / mo',
      body: 'Two days a week of senior technical leadership: hiring, architecture calls, vendor negotiation and saying no to the wrong roadmap.',
      deliverables: [
        'Weekly leadership time with your founders',
        'Technical due-diligence support',
        'Hiring scorecards and interview loops',
        'Board-ready technical reporting',
      ],
    },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Funnel step 4 — evidence
 * ---------------------------------------------------------------------- */

export const work = {
  eyebrow: 'selected work',
  title: 'A short list, on purpose.',
  lead: 'We take a small number of engagements at a time. These are the ones we are allowed to describe.',
  items: [
    {
      slug: 'logistics-replatform',
      client: 'Series-A logistics SaaS',
      sector: 'Logistics · 40 engineers',
      title: 'Cut a two-year replatform down to one quarter',
      body: 'The team had committed to a full rewrite onto a new framework. Our audit showed 70% of the pain came from one synchronous integration, not the framework. We scoped a queue-based fix instead.',
      metrics: [
        { value: '11 weeks', label: 'instead of 2 years' },
        { value: '−63%', label: 'p95 order latency' },
        { value: '€0', label: 'licence change' },
      ],
      stack: ['Postgres', 'Temporal', 'Go'],
    },
    {
      slug: 'fintech-cost',
      client: 'Regulated fintech',
      sector: 'Payments · 12 engineers',
      title: 'Took 41% out of the cloud bill without touching the roadmap',
      body: 'Spend had tripled in 18 months. We attributed cost per customer, found three always-on clusters serving batch work, and moved them to scheduled capacity with budget guardrails in Terraform.',
      metrics: [
        { value: '−41%', label: 'monthly infra spend' },
        { value: '3 weeks', label: 'to first saving' },
        { value: '0', label: 'incidents caused' },
      ],
      stack: ['AWS', 'Terraform', 'Kubernetes'],
    },
    {
      slug: 'manufacturing-data',
      client: 'Industrial manufacturer',
      sector: 'Manufacturing · 200+ staff',
      title: 'Replaced a €190k/yr analytics suite with tooling they own',
      body: 'The incumbent BI vendor priced per seat, so reporting was rationed. We ran a scored evaluation with their finance and ops leads, then built the replacement pipeline and trained the internal team to run it.',
      metrics: [
        { value: '€190k', label: 'annual licence removed' },
        { value: '9 weeks', label: 'to full cutover' },
        { value: '4', label: 'internal owners trained' },
      ],
      stack: ['ClickHouse', 'dbt', 'Next.js'],
    },
  ],
} as const;

export const portfolio = {
  eyebrow: 'client portfolio',
  title: 'Proven engineering outcomes across critical industries.',
  lead: 'From regulated banking to high-throughput IoT, here is how we help organizations build scalable, cost-efficient, and vendor-neutral systems.',
  categories: [
    'All',
    'Fintech & Payments',
    'Cloud & FinOps',
    'Data & Real-Time',
    'Architecture & Scale',
  ] as const,
  projects: [
    {
      id: 'pay-orchestrator',
      category: 'Fintech & Payments',
      client: 'Tier-1 Payment Gateway',
      sector: 'Fintech',
      title: 'Resilient Payment Orchestrator for 12M Daily Transactions',
      description:
        'Decomposed a bottlenecked payments core into an event-driven Go cluster with idempotent state machines, eliminating outage risks during peak transaction spikes.',
      stack: ['Go', 'Postgres', 'Kafka', 'Kubernetes', 'Terraform'],
      kpis: [
        { label: 'Latency Drop', value: '−72%' },
        { label: 'Daily Volume', value: '12M tx' },
        { label: 'System Uptime', value: '99.999%' },
      ],
      tag: 'Core Banking',
    },
    {
      id: 'iot-telemetry',
      category: 'Data & Real-Time',
      client: 'Global Fleet Telematics',
      sector: 'Logistics & IoT',
      title: 'Sub-Second Real-Time Telemetry Pipeline for 45,000 Connected Vehicles',
      description:
        'Replaced expensive managed SaaS ingest pipelines with a custom ClickHouse + Rust stream architecture, unlocking instant vehicle status queries and cutting monthly bills.',
      stack: ['Rust', 'ClickHouse', 'Vector', 'GCP', 'Grafana'],
      kpis: [
        { label: 'Ingest Bill', value: '−64%' },
        { label: 'Query P95', value: '<800ms' },
        { label: 'Active Devices', value: '45,000' },
      ],
      tag: 'Big Data',
    },
    {
      id: 'finops-saas',
      category: 'Cloud & FinOps',
      client: 'Enterprise B2B SaaS',
      sector: 'Cloud Infrastructure',
      title: 'Cloud Cost Remediation & Multi-Tenant Infrastructure Isolation',
      description:
        'Audited AWS multi-region deployments, replaced over-provisioned ECS instances with Karpenter auto-scaling and spot fleets, recovering 48% compute runway.',
      stack: ['AWS', 'Kubernetes', 'Karpenter', 'Terraform', 'Datadog'],
      kpis: [
        { label: 'Annual Saved', value: '€340k' },
        { label: 'Compute Waste', value: '−48%' },
        { label: 'Time to ROI', value: '2 Weeks' },
      ],
      tag: 'FinOps',
    },
    {
      id: 'health-gateway',
      category: 'Architecture & Scale',
      client: 'HealthTech Platform',
      sector: 'Healthcare',
      title: 'Zero-Trust FHIR Interoperability & Medical Records Gateway',
      description:
        'Designed an end-to-end encrypted integration bridge linking hospital legacy EHR systems with patient mobile applications under strict HIPAA and GDPR standards.',
      stack: ['TypeScript', 'Node.js', 'Postgres', 'AWS KMS', 'OpenTelemetry'],
      kpis: [
        { label: 'Compliance', value: '100% Passed' },
        { label: 'Integrations', value: '18 Hospitals' },
        { label: 'Leak Incidents', value: '0' },
      ],
      tag: 'Zero-Trust',
    },
    {
      id: 'industrial-mes',
      category: 'Architecture & Scale',
      client: 'Automotive Parts Manufacturer',
      sector: 'Industry 4.0',
      title: 'Manufacturing Execution System De-coupling & Queue Modernization',
      description:
        'Eliminated assembly line freezes caused by database contention by introducing Temporal resilient workflows and distributed asynchronous queues.',
      stack: ['Temporal', 'Go', 'Postgres', 'Docker', 'RabbitMQ'],
      kpis: [
        { label: 'Line Freezes', value: '0 Incidents' },
        { label: 'Throughput', value: '4.2x' },
        { label: 'Delivery', value: '6 Weeks' },
      ],
      tag: 'Industrial IT',
    },
    {
      id: 'media-vector-search',
      category: 'Data & Real-Time',
      client: 'Digital News Network',
      sector: 'Media & Publishing',
      title: 'High-Scale Semantic Search Engine across 50M Editorial Archives',
      description:
        'Engineered an in-house hybrid vector retrieval engine combining Postgres pgvector and lightweight semantic caches, reducing latency from 4s to 120ms.',
      stack: ['Python', 'pgvector', 'Postgres', 'Redis', 'Next.js'],
      kpis: [
        { label: 'Search Latency', value: '120ms' },
        { label: 'Indexed Docs', value: '50M+' },
        { label: 'CTR Growth', value: '+34%' },
      ],
      tag: 'AI / Search',
    },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Funnel step 5 — de-risk
 * ---------------------------------------------------------------------- */

export const method = {
  eyebrow: 'method',
  title: 'How an engagement actually runs.',
  lead: 'The same four steps whether it is a two-week audit or a six-month build. You can stop after any of them.',
  steps: [
    {
      n: '01',
      title: 'Map',
      duration: 'days 1–3',
      body: 'We read the code, the invoices and the incident history — then interview the people who carry the pager. You get the map back even if you stop here.',
    },
    {
      n: '02',
      title: 'Decide',
      duration: 'days 4–10',
      body: 'Options get scored against criteria you weight, with a three-year cost model attached. We recommend one, and we write down what would make us wrong.',
    },
    {
      n: '03',
      title: 'Ship',
      duration: 'weeks 3+',
      body: 'A senior pair works inside your repo, your CI and your standups. Weekly working software, never a status deck.',
    },
    {
      n: '04',
      title: 'Hand over',
      duration: 'final week',
      body: 'Runbooks, architecture decision records and a live walkthrough with your team. Our goal is that you do not need us for version two.',
    },
  ],
} as const;

export const principles = {
  eyebrow: 'how we are paid',
  title: 'The conflicts of interest, removed.',
  items: [
    {
      title: 'No vendor commission. Ever.',
      body: 'We hold no reseller agreements and take no referral fees. If we recommend a product, it is because it scored highest against your criteria.',
    },
    {
      title: 'Fixed price, or we re-scope for free.',
      body: 'Scope creep is a scoping failure, and that is our job. If we got the estimate wrong, the correction is on us.',
    },
    {
      title: 'You own everything.',
      body: 'Code, infrastructure, documentation and accounts are in your organisation from day one. There is no Deltavantis platform to be locked into.',
    },
    {
      title: 'We will tell you not to build it.',
      body: 'A third of our audits end with "keep what you have". That recommendation is worth exactly as much as the other two-thirds.',
    },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Funnel step 6 — commit
 * ---------------------------------------------------------------------- */

export const pricing = {
  eyebrow: 'engagement models',
  title: 'Start small. Escalate only if it earns it.',
  lead: 'Most clients start with a review or an audit. Roughly half stop there, and that is a fine outcome.',
  tiers: [
    {
      name: 'Technical review',
      price: 'Free',
      unit: '30 minutes',
      body: 'A working call, not a sales call. Bring a real problem and you will leave with a first opinion.',
      features: [
        'Live architecture or cost walkthrough',
        'Written summary within 48 hours',
        'A referral elsewhere if we are not the right fit',
      ],
      cta: { label: 'Book the review', href: '/contact' },
      featured: false,
    },
    {
      name: 'Audit',
      price: 'from €4,500',
      unit: '2 weeks, fixed',
      body: 'The full decision package. Most teams use it to unblock a choice that has been stuck for months.',
      features: [
        'Everything in the review',
        'Scored decision matrix and 3-year cost model',
        'Migration risk register and exit path',
        'Read-out session with your leadership',
      ],
      cta: { label: 'Scope an audit', href: '/contact?intent=audit' },
      featured: true,
    },
    {
      name: 'Embedded',
      price: 'from €12,000',
      unit: 'per month',
      body: 'A senior pair or a fractional CTO inside your team, on a rolling monthly basis. 30 days notice, both ways.',
      features: [
        'Senior engineers in your repo and standups',
        'Weekly working software',
        'Hiring and vendor-negotiation support',
        'Cancel with 30 days notice',
      ],
      cta: { label: 'Talk about capacity', href: '/contact?intent=embedded' },
      featured: false,
    },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Funnel step 7 — handle objections
 * ---------------------------------------------------------------------- */

export const faq = {
  eyebrow: 'objections',
  title: 'The questions you were going to ask on the call.',
  items: [
    {
      q: 'Are you really vendor-neutral, or is that just positioning?',
      a: 'We hold no reseller agreements, partner tiers or referral contracts, and we will put that in writing in the engagement letter. Our revenue comes from day rates only. You can also ask us for the last five recommendations we made and what we recommended against — we will tell you.',
    },
    {
      q: 'We already have engineers. Why would we need you?',
      a: 'Usually you do not need us to write code — you need someone with no internal history to score the options and absorb the political cost of the answer. That is most of what an audit is. If your team has the time and the distance to do it themselves, we will say so.',
    },
    {
      q: 'How fast can you start?',
      a: 'Reviews within a week. Audits typically start 2–3 weeks out. Build sprints depend on capacity — we run a small number of engagements at once and we will give you a real date, not a maybe.',
    },
    {
      q: 'What if we disagree with the recommendation?',
      a: 'Good. The decision matrix is built from criteria you weight, so disagreement usually means a weight is wrong, and that is a productive conversation. You get the model itself, so you can re-run it without us.',
    },
    {
      q: 'Do you work with our existing agency or vendor?',
      a: 'Yes, and often that is the point. We are frequently brought in specifically to review work delivered by someone else. We will talk to them directly and share our findings with both sides.',
    },
    {
      q: 'What does it cost to find out if this is worth it?',
      a: 'Nothing. The 30-minute technical review is free and you get a written summary whether or not you go further. If we do not think we can help, we will say so on the call.',
    },
  ],
} as const;

/* -------------------------------------------------------------------------
 * Lead form — qualification model
 * ---------------------------------------------------------------------- */

export const formOptions = {
  intent: [
    { value: 'audit', label: 'Review a decision we are stuck on' },
    { value: 'sprint', label: 'Ship something we keep deferring' },
    { value: 'cost', label: 'Get our cloud bill under control' },
    { value: 'embedded', label: 'Add senior capacity to the team' },
    { value: 'other', label: 'Something else' },
  ],
  timeline: [
    { value: 'now', label: 'Now — it is already blocking us' },
    { value: 'quarter', label: 'This quarter' },
    { value: 'later', label: 'Next quarter or later' },
    { value: 'exploring', label: 'Just exploring' },
  ],
  budget: [
    { value: 'under-5k', label: 'Under €5k' },
    { value: '5-20k', label: '€5k – €20k' },
    { value: '20-60k', label: '€20k – €60k' },
    { value: '60k-plus', label: '€60k+' },
    { value: 'unknown', label: 'Not decided yet' },
  ],
  teamSize: [
    { value: '1-5', label: '1–5 engineers' },
    { value: '6-20', label: '6–20 engineers' },
    { value: '21-50', label: '21–50 engineers' },
    { value: '50-plus', label: '50+ engineers' },
  ],
} as const;

export type FormOptionGroup = keyof typeof formOptions;
