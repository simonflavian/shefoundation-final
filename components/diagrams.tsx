'use client'

import { MapPin } from 'lucide-react'
import { CountUp, Reveal } from '@/components/motion'

export function StepFlow({ steps }: { steps: { n: string; title: string; text: string }[] }) {
  return (
    <div className="step-flow" style={{ ['--steps' as any]: steps.length }}>
      {steps.map((step, i) => (
        <Reveal key={step.n} delay={i * 110} variant="scale" className="step-flow-item">
          <span className="step-flow-dot">{step.n}</span>
          <strong>{step.title}</strong>
          <span>{step.text}</span>
        </Reveal>
      ))}
    </div>
  )
}

export function Timeline({ items }: { items: { year: string; title: string; text: string }[] }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <Reveal key={item.year + item.title} delay={i * 130} variant={i % 2 === 0 ? 'left' : 'right'} className="timeline-item">
          <div className="timeline-marker">
            <span />
          </div>
          <div className="timeline-body">
            <em>{item.year}</em>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function StatBlock({ stats }: { stats: { value: number; suffix: string; label: string; source: string }[] }) {
  return (
    <div className="stat-block">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 100} variant="up" className="stat-block-item">
          <strong>
            <CountUp value={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} />
            <span>{stat.suffix}</span>
          </strong>
          <p>{stat.label}</p>
          <small>{stat.source}</small>
        </Reveal>
      ))}
    </div>
  )
}

export function RegionChips({ regions, label }: { regions: string[]; label: string }) {
  return (
    <div className="region-chips">
      <span className="region-chips-label">
        <MapPin size={15} /> {label}
      </span>
      <div className="region-chips-list">
        {regions.map((region, i) => (
          <Reveal key={region} as="span" delay={i * 70} variant="scale" className="region-chip">
            {region}
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export function RadialDiagram({ items }: { items: { title: string; text: string }[] }) {
  const radius = 42
  return (
    <div className="radial-diagram" aria-hidden={false}>
      <svg viewBox="0 0 100 100" className="radial-diagram-rings">
        <circle cx="50" cy="50" r={radius} className="radial-ring" />
        <circle cx="50" cy="50" r={radius - 14} className="radial-ring radial-ring-inner" />
      </svg>
      <div className="radial-diagram-core">
        <span>{items.length}</span>
        <em>Focus areas</em>
      </div>
      {items.map((item, i) => {
        const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2
        const x = 50 + radius * Math.cos(angle)
        const y = 50 + radius * Math.sin(angle)
        return (
          <div key={item.title} className="radial-diagram-node" style={{ left: `${x}%`, top: `${y}%` }}>
            <Reveal variant="fade" delay={i * 120}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </Reveal>
          </div>
        )
      })}
    </div>
  )
}

type TeamPerson = { name: string; role: string; photo: string; lead?: boolean }

function TeamNode({ person, size }: { person: TeamPerson; size: 'lg' | 'sm' }) {
  const initials = person.name.split(' ').map((p) => p[0]).slice(0, 2).join('')
  return (
    <div className={`team-node team-node-${size}`}>
      <span className="team-node-photo">
        {person.photo ? <img src={person.photo} alt={person.name} loading="lazy" /> : <em>{initials}</em>}
      </span>
      <strong>{person.name}</strong>
      <span className="team-node-role">{person.role}</span>
    </div>
  )
}

export function TeamTree({ members }: { members: TeamPerson[] }) {
  const lead = members.find((m) => m.lead) ?? members[0]
  const branches = members.filter((m) => m !== lead)

  return (
    <div className="team-tree">
      <Reveal variant="scale">
        <TeamNode person={lead} size="lg" />
      </Reveal>
      <div className="team-tree-trunk" />
      <div className="team-tree-branches" style={{ ['--branches' as any]: branches.length }}>
        {branches.map((member, i) => (
          <div className="team-tree-branch-item" key={member.name}>
            <Reveal variant="up" delay={i * 110 + 80}>
              <TeamNode person={member} size="sm" />
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  )
}
