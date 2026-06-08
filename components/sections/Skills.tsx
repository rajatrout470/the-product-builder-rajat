'use client'

import { motion } from 'framer-motion'

const groups = [
  { label: 'Languages & Frameworks', skills: ['TypeScript', 'JavaScript', 'Node.js', 'NestJS', 'Express.js', 'GraphQL'] },
  { label: 'Databases',              skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch', 'Vector DB'] },
  { label: 'Cloud & Infra',          skills: ['AWS Lambda', 'SQS', 'SNS', 'CloudWatch', 'S3', 'Cognito', 'Serverless', 'AWS Marketplace', 'EDP'] },
  { label: 'Messaging & Events',     skills: ['Apache Kafka', 'Event-Driven Architecture', 'BPMN', 'Camunda'] },
  { label: 'Auth & Security',        skills: ['JWT', 'PBAC', 'ORY Oathkeeper', 'ORY Kratos', 'OAuth', 'AWS Cognito'] },
  { label: 'AI & Productivity',      skills: ['Cursor AI', 'ChatGPT', 'Claude Code', 'LLM APIs', 'Vector Embeddings', 'AI prototyping', 'Code generation'] },
  { label: 'Analytics & Observability', skills: ['Mixpanel', 'SuprSend', 'CloudWatch', 'AsyncLocalStorage', 'Structured Logging'] },
  { label: 'Product & Business',     skills: ['Feature scoping', 'Roadmap planning', 'User feedback loops', 'Go-to-market'] },
]

const fade = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-6"
    >
      <motion.div variants={fade}>
        <p className="section-label mb-2">02 — skills</p>
        <h2 className="font-display font-bold text-3xl text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>
          Tech Stack
        </h2>
      </motion.div>

      {groups.map((g) => (
        <motion.div key={g.label} variants={fade} className="bg-surface rounded-xl border border-border p-5 shadow-card card-hover">
          <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">{g.label}</h3>
          <div className="flex flex-wrap gap-2">
            {g.skills.map((s) => (
              <span key={s} className="tag bg-gray-50 text-slate-700 border-border hover:border-violet/40 hover:text-violet transition-colors cursor-default">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
