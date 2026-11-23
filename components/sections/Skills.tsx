'use client'

import { motion } from 'framer-motion'

const groups = [
  { label: 'AI & LLM',            highlight: true, skills: ['Anthropic Claude', 'OpenAI', 'Ollama (Llama 3)', 'Vercel AI SDK', 'MCP', 'Tool Calling', 'SSE Streaming', 'RAG', 'Embeddings', 'LLM Evals'] },
  { label: 'Core Languages',      skills: ['TypeScript', 'JavaScript (ES2022)', 'Node.js'] },
  { label: 'Frameworks',          skills: ['NestJS', 'Express.js', 'Next.js', 'GraphQL', 'REST API Design', 'Serverless Framework'] },
  { label: 'Databases',           skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch', 'pgvector', 'Pinecone', 'Prisma', 'TypeORM'] },
  { label: 'Cloud & Infra',       skills: ['AWS Lambda', 'SQS', 'SNS', 'S3', 'CloudWatch', 'Cognito', 'AWS Marketplace', 'EDP', 'Docker'] },
  { label: 'Messaging & Events',  skills: ['Apache Kafka', 'Event-Driven Architecture', 'pg-boss', 'BPMN', 'Camunda'] },
  { label: 'Auth & Security',     skills: ['JWT', 'PBAC', 'ORY Oathkeeper', 'ORY Kratos', 'OAuth 2.0', 'AWS Cognito'] },
  { label: 'Observability',       skills: ['Langfuse', 'OpenTelemetry', 'New Relic', 'Mixpanel', 'SuprSend', 'CloudWatch', 'AsyncLocalStorage', 'Structured Logging'] },
  { label: 'AI Dev Tools',        skills: ['Cursor AI', 'Claude Code'] },
  { label: 'Architecture & APIs', skills: ['Microservices', 'Domain-Driven Design', 'System Design', 'CI/CD', 'Vector Similarity Search'] },
]

const fade = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-6"
    >
      <motion.div variants={fade}>
        <p className="section-label mb-2">06 — skills</p>
        <h2 className="section-title">Tech Stack</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.map((g) => (
          <motion.div
            key={g.label}
            variants={fade}
            className={`rounded-xl border p-5 shadow-card ${
              g.highlight ? 'md:col-span-2 border-violet/30 bg-violet/5' : 'bg-surface border-border'
            }`}
          >
            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${g.highlight ? 'text-violet' : 'text-muted'}`}>
              {g.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className={`tag transition-colors cursor-default ${
                    g.highlight
                      ? 'bg-surface text-violet border-violet/30'
                      : 'bg-subtle text-slate-700 dark:text-slate-300 border-border hover:border-violet/40 hover:text-violet'
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
