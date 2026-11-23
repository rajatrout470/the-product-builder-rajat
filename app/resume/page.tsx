'use client'

export default function ResumePage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
          .page { box-shadow: none; margin: 0; padding: 28px 36px; max-width: 100%; }
        }
        @page { size: A4; margin: 0; }
      `}</style>

      {/* Toolbar — hidden when printing */}
      <div className="no-print sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <a href="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">← Back to portfolio</a>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors"
        >
          <span>↓</span> Download PDF
        </button>
      </div>

      {/* Resume page */}
      <div className="page bg-white mx-auto my-8 no-print:shadow-lg max-w-[794px] px-12 py-10 text-[13px] leading-snug text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>

        {/* Header */}
        <div className="mb-6 pb-5 border-b border-gray-200">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">Rajat Kumar Rout</h1>
          <p className="text-gray-500 text-sm mb-3">Backend Engineer · NestJS · Node.js · AWS · Kafka · ElasticSearch · LLM Applications</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
            <a href="mailto:rajatrout470@gmail.com" className="hover:text-violet-600">rajatrout470@gmail.com</a>
            <span>+91 9408142406</span>
            <a href="https://linkedin.com/in/rajatrout" className="hover:text-violet-600">linkedin.com/in/rajatrout</a>
            <a href="https://github.com/rajatrout" className="hover:text-violet-600">github.com/rajatrout</a>
            <span>Bengaluru, India</span>
          </div>
        </div>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-gray-600 leading-relaxed">
            Backend Engineer with 4 years of experience designing and shipping microservices, event-driven systems, and RESTful
            APIs using NestJS and Node.js. Deep expertise in distributed architecture — Kafka pipelines, AWS serverless
            infrastructure, ElasticSearch, PostgreSQL, and vector databases. Currently Founding Product Engineer at FlyWl, owning
            backend systems end-to-end in a fast-moving startup, including FlyWl&apos;s multi-LLM AI chatbot (Claude, OpenAI, Llama 3)
            with streaming responses, tool calling via MCP, and LLM observability, and detections for a production multi-agent AI
            platform for procurement spend. Uses Cursor AI and Claude Code daily to accelerate
            development cycles by 40% without compromising code quality or system reliability.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <Job
            company="FlyWl"
            role="Founding Product Engineer (Backend)"
            period="Nov 2024 – Present"
            stack="NestJS · PostgreSQL · AWS SQS/SNS · ElasticSearch · Redis · Kafka · Vector DB · Vercel AI SDK · Claude / OpenAI"
            bullets={[
              'Architected and built multiple NestJS microservices end-to-end — seller profiles, notification engine, wallet/credit module, AWS spend modelling — each as independently deployable modules with clean domain boundaries.',
              'Designed RESTful APIs with pagination, search, filtering, and PBAC role guards; implemented FUID generation, polymorphic associations, and soft-delete patterns across services.',
              'Built a Notification & Event Engine: SNS publisher interface, event store consumer, SuprSend (Email/Push), and Mixpanel integration; propagated session IDs via AsyncLocalStorage into a structured logger.',
              'Engineered AI-powered vendor matching: a NestJS service calls an LLM API to enrich vendor data, generates embeddings, stores them in a vector DB, and performs semantic similarity search at match time.',
              'Built a Wallet/Credit module: global ledger, ACID-safe earn/redeem/rollback flows, and a cron job for credit expiry using the NestJS scheduler.',
              'Implemented a PBAC permission system: role/permission guards as NestJS decorators, permission management APIs, and FinOps/procurement role definitions.',
              'Built full-text and fuzzy search on the Product Catalog using ElasticSearch — custom analyzers, relevance scoring, and multi-field boosting.',
              'Used Cursor AI and Claude Code as daily development tools for boilerplate generation, test scaffolding, and cross-module refactoring — cutting feature delivery time by 40%.',
            ]}
          />
          <div className="-mt-2 mb-5 pl-3 border-l-2 border-violet-200">
            <p className="font-semibold text-violet-700 mb-0.5">FlyWl AI Agent Platform — Multi-Agent Procurement AI</p>
            <p className="text-[11px] italic text-gray-400 mb-1.5">TypeScript · NestJS · React · Vercel AI SDK · Claude / OpenAI · LLM Tool Use · MCP · PostgreSQL · pg-boss · Zod · Jest · Langfuse · New Relic</p>
            <Bullets items={[
              'Worked on a production multi-agent AI platform for enterprise cloud and SaaS procurement (Claude, OpenAI) with three agents: a spend-insight agent that analyzes cost data and recommends actions; a contract-extraction agent that turns contract PDFs into structured commitments, pricing, and clauses, citing the page for each value; and a catalog-enrichment agent that uses web search to identify the vendor, website, and logo behind marketplace listings.',
              'Built AI-spend detections for the spend-insight agent: runaway API-key spend, unattributed key spend, prompt-cache efficiency gaps, batch-processing savings, and user spend concentration.',
              'Added per-key LLM cost tracking for OpenAI and Anthropic — spend spikes are traced to a named key, workspace, and owner, with per-key breakdowns and trend charts.',
              'Worked within a six-stage queued agent pipeline (detect, narrate, act, judge, persist, alert) designed so code computes every financial figure and models only write the explanation.',
              'Made insight cards more reliable: stopped card flicker, scaled detection minimums to each customer\'s spend, and added a guard so the agent never recommends a more expensive or less suitable model.',
              'Built the product-catalog (PIM) review screens and API changes that show the catalog-enrichment agent\'s output, including vendor and product-family logos, so reviewers can check AI-identified vendors before they go live.',
            ]} />
          </div>
          <div className="mb-5 pl-3 border-l-2 border-violet-200">
            <p className="font-semibold text-violet-700 mb-1.5">FlyWl AI Chatbot — Sales &amp; Procurement Assistant</p>
            <Bullets items={[
              "Built FlyWl's AI chatbot for sales and procurement teams: users chat over uploaded contracts and documents (PDF, Word, Excel, scanned images via OCR) and get answers grounded in their own data, live web search, and AWS Marketplace.",
              'Designed a provider-agnostic LLM layer using the Vercel AI SDK — Anthropic Claude, OpenAI GPT-4, and self-hosted Llama 3 (Ollama), switchable per tenant from settings.',
              'Built the streaming chat backend in NestJS: token-by-token responses over Server-Sent Events, JWT-authenticated sessions, and a kill switch to disable AI instantly in production.',
              'Integrated MCP (Model Context Protocol) tools so the bot can query live AWS Marketplace and FlyWl data (listings, offers, agreements) mid-conversation, with per-tool timeouts.',
              'Prevented hallucinated figures: all spend numbers are computed deterministically in code and the LLM only writes the narrative — it never sees raw spend data or generates a number.',
              'Added LLM observability and quality gates: end-to-end tracing with Langfuse and OpenTelemetry, plus an LLM-as-judge eval suite to catch answer regressions before release.',
            ]} />
          </div>
          <Job
            company="Klub"
            role="SDE1, Backend Engineer"
            period="Nov 2022 – Sept 2024"
            stack="Node.js · Express · PostgreSQL · Kafka · Camunda · AWS Lambda · Serverless"
            bullets={[
              'Built and maintained 10 Node.js microservices for fintech loan processing — each service owned its own DB schema, event contracts, and API surface.',
              'Designed serverless REST APIs on AWS Lambda (Serverless Framework) handling loan applications, document storage, and partner integrations.',
              'Automated 98% of loan applications end-to-end using rule-engine-driven Node.js services — reduced manual ops workload by 90%.',
              'Built a Kafka event-driven data pipeline for NBFC partners: schema-validated producers/consumers, dead-letter queues, and retry logic — 70% faster data delivery SLA.',
              'Optimized PostgreSQL queries with composite indexes and materialized views — 10x faster config lookups, 80% faster document search.',
              'Managed 20 BPMN workflows in Camunda integrated with Node.js microservices — 50% fewer manual interventions.',
              'Upgraded 7+ microservices from Node.js v12 to v18, including dependency audits, ESM migration, and zero-downtime deployments.',
            ]}
          />
        </Section>

        {/* Skills */}
        <Section title="Technical Skills">
          <div className="space-y-1.5">
            {[
              ['Core Languages',      'TypeScript, JavaScript (ES2022), Node.js'],
              ['Frameworks',          'NestJS, Express.js, React, Next.js, GraphQL, REST API Design, Serverless Framework'],
              ['AI & LLM',            'Anthropic Claude, OpenAI, Ollama (Llama 3), Vercel AI SDK, Multi-Agent Pipelines, MCP, Tool Calling, SSE Streaming, RAG, Embeddings, LLM Evals, LLM Cost Tracking'],
              ['Databases',           'PostgreSQL, MongoDB, Redis, ElasticSearch, Vector DB (pgvector / Pinecone), Prisma, TypeORM'],
              ['Cloud & Infra',       'AWS Lambda, SQS, SNS, S3, CloudWatch, Cognito, AWS Marketplace, EDP, Docker'],
              ['Messaging & Events',  'Apache Kafka, Event-Driven Architecture, pg-boss, BPMN, Camunda'],
              ['Auth & Security',     'JWT, PBAC, ORY Oathkeeper / Kratos, OAuth 2.0, AWS Cognito'],
              ['Testing & Validation', 'Jest, Zod'],
              ['AI Dev Tools',        'Cursor AI, Claude Code — daily use for code generation, refactoring, test scaffolding'],
              ['Observability',       'Langfuse, OpenTelemetry, New Relic, Mixpanel, SuprSend, CloudWatch, AsyncLocalStorage, Structured Logging'],
              ['Architecture & APIs', 'Microservices, Domain-Driven Design, System Design, CI/CD, Vector Similarity Search'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="text-gray-900 font-semibold shrink-0 w-40">{label}</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3 pb-1 border-b border-gray-100">
        {title}
      </h2>
      {children}
    </div>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((b, i) => (
        <li key={i} className="flex gap-2 text-gray-600">
          <span className="text-violet-400 shrink-0 mt-0.5">·</span>
          {b}
        </li>
      ))}
    </ul>
  )
}

function Job({ company, role, period, stack, bullets }: {
  company: string
  role: string
  period: string
  stack?: string
  bullets: string[]
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-baseline justify-between gap-4 mb-1.5 flex-wrap">
        <div>
          <span className="font-bold text-gray-900">{company}</span>
          <span className="text-gray-500 ml-2">— {role}</span>
        </div>
        <span className="text-xs text-gray-400 shrink-0">{period}</span>
      </div>
      {stack && <p className="text-[11px] italic text-gray-400 mb-1.5">{stack}</p>}
      <Bullets items={bullets} />
    </div>
  )
}
