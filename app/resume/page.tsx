'use client'

export default function ResumePage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; margin: 0; }
          .page {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 24px 32px !important;
            max-width: 100% !important;
            border-radius: 0 !important;
          }
        }
        @page { size: A4; margin: 0; }
      `}</style>

      {/* Toolbar */}
      <div className="no-print sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <a href="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">← Back to portfolio</a>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 hidden sm:block">Browser will open Save as PDF dialog</span>
          <button
            onClick={() => window.print()}
            style={{ backgroundColor: '#7c3aed', color: '#ffffff' }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <span>↓</span> Download PDF
          </button>
        </div>
      </div>

      {/* Resume page */}
      <div
        id="resume-content"
        className="page bg-white mx-auto my-8 shadow-lg max-w-[794px] px-12 py-10 text-[13px] leading-snug text-gray-900"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {/* Header */}
        <div className="mb-6 pb-5 border-b border-gray-200">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">Rajat Kumar Rout</h1>
          <p className="text-gray-500 text-sm mb-3">Backend Engineer · Founding Product Engineer</p>
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
            Backend engineer with 3+ years building microservices, event-driven systems, and fintech infrastructure at scale.
            Currently Founding Product Engineer at FlyWl — shaping product direction and owning backend systems end-to-end.
            Experienced in AWS, Kafka, ElasticSearch, PBAC, and AI-powered workflows. Strong track record of high-impact delivery
            in small, fast-moving teams.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <Job
            company="FlyWl"
            role="Founding Product Engineer"
            period="Nov 2024 – Present"
            bullets={[
              'Shaped product vision, feature scoping, and roadmap alongside founders',
              'Built Seller Profile & Claim Module end-to-end — CRUD with pagination/search, FUID generation via nanoid, seller claim flow, PBAC guards, login refactor, company attribute updates, and vendor search by website',
              'Engineered Notification & Analytics Event Engine from scratch — event builder, SNS publisher interface, event store consumer; integrated SuprSend (Email/Push) and Mixpanel analytics; session ID propagation via AsyncLocalStorage into structured logger',
              'Implemented PBAC permission system — role/permission guards, permission management APIs, FinOps and procurement roles, internal user migration permissions',
              'Built AWS Spend Modelling & EDP — spend comparison, EDP commitment costs, marketplace summary, drawdown overage and dead weight loss calculations; AWS Marketplace users migration',
              'Designed AI-powered vendor matching: LLM API enriches vendor details, creates embeddings stored in vector DB for semantic similarity search at match time',
              'Built Wallet/Credit Module — wallet creation API, global ledger, cron job for credit expiry, expired credit balance calculations',
              'Built Product Catalog search (ElasticSearch), User Invitations flow, and AWS Cognito authentication',
              'Used Cursor AI, ChatGPT, and Claude Code as force multipliers — cut feature delivery time by ~40%',
            ]}
          />
          <Job
            company="Klub"
            role="SDE1 — Backend Engineer"
            period="Nov 2022 – Sept 2024"
            bullets={[
              'Automated 98% of loan applications — reduced manual ops workload by 90%',
              'Built product config system with PostgreSQL indexing optimisations — 10× faster queries',
              'Document storage with polymorphic associations — 80% faster search performance',
              'Kafka event-driven data platform for NBFC partners — 70% faster data delivery SLA',
              'Managed 20+ BPMN workflows in Camunda — 50% fewer manual interventions',
              'Upgraded 7+ microservices from Node.js v12 to v18 with zero-downtime migrations',
            ]}
          />
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="space-y-1.5">
            {[
              ['Languages & Frameworks', 'TypeScript, JavaScript, Node.js, NestJS, Express.js, GraphQL'],
              ['Databases',             'PostgreSQL, MongoDB, Redis, ElasticSearch, Vector DB'],
              ['Cloud & Infra',         'AWS Lambda, SQS, SNS, CloudWatch, S3, Cognito, Serverless, AWS Marketplace, EDP'],
              ['Messaging & Events',    'Apache Kafka, Event-Driven Architecture, BPMN, Camunda'],
              ['Auth & Security',       'JWT, PBAC, ORY Oathkeeper, ORY Kratos, OAuth, AWS Cognito'],
              ['AI & Productivity',     'Cursor AI, ChatGPT, Claude Code, LLM APIs, Vector Embeddings'],
              ['Analytics',             'Mixpanel, SuprSend, CloudWatch, AsyncLocalStorage, Structured Logging'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="text-gray-900 font-semibold shrink-0 w-44">{label}</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Key Projects">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {[
              ['Credit Engine',             'Full ledger + wallet management, ACID-safe earn/redeem/expire/rollback'],
              ['Catalog Search Engine',     'ElasticSearch relevance scoring, fuzzy matching, custom analysers'],
              ['Notification Engine',       'Multi-channel (Email/SMS/Push), async, deduplication-safe'],
              ['Loan Automation Platform',  '98% automated loan processing, serverless, 90% ops reduction'],
              ['Kafka Event Platform',      'Real-time NBFC data pipeline, schema-validated, 70% faster SLA'],
              ['BPMN Workflow Engine',      '20+ Camunda processes, 50% fewer manual interventions'],
            ].map(([name, desc]) => (
              <div key={name}>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
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
      <h2 className="text-xs font-bold uppercase tracking-widest mb-3 pb-1 border-b border-gray-100" style={{ color: '#7c3aed' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

function Job({ company, role, period, bullets }: {
  company: string
  role: string
  period: string
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
      <ul className="space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-gray-600">
            <span className="shrink-0 mt-0.5" style={{ color: '#7c3aed' }}>·</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}
