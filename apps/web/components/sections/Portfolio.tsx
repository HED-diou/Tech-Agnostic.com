'use client';

import { useState } from 'react';
import { portfolio } from '@/lib/site';
import { Section, SectionHead, Button, ArrowRight } from '../ui';
import { Reveal } from '../Reveal';

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? portfolio.projects
      : portfolio.projects.filter((p: (typeof portfolio.projects)[number]) => p.category === activeCategory);

  return (
    <Section id="portfolio" className="band-panel">
      <SectionHead
        eyebrow={portfolio.eyebrow}
        title={portfolio.title}
        lead={portfolio.lead}
      />

      {/* Category filter tabs */}
      <div className="mt-10 flex flex-wrap items-center gap-2">
        {portfolio.categories.map((cat: string) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-150 ease-out cursor-pointer ${
              activeCategory === cat
                ? 'bg-signal text-night font-bold shadow-sm'
                : 'border border-edge bg-panel text-dim hover:border-edge-2 hover:text-frost'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project: (typeof portfolio.projects)[number], idx: number) => (
          <Reveal key={project.id} delay={(idx % 3) * 60} className="h-full">
            <article className="flex h-full flex-col justify-between rounded-card border border-edge bg-panel p-7 shadow-card transition-all duration-200 ease-out hover:border-edge-2 hover:shadow-lift">
              <div>
                {/* Header tag and client sector */}
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-signal-veil px-2.5 py-1 font-mono text-[0.6875rem] font-semibold text-signal uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <span className="text-xs font-medium text-dim">
                    {project.sector}
                  </span>
                </div>

                <h3 className="mt-4 text-h3 leading-snug font-bold text-frost">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-edge/70">
                {/* KPI Metrics Rail */}
                <dl className="grid grid-cols-3 gap-2 rounded-lg bg-panel-2 p-3 text-center">
                  {project.kpis.map((kpi: { label: string; value: string }) => (
                    <div key={kpi.label}>
                      <dt className="text-[0.625rem] font-medium uppercase tracking-wider text-dim truncate">
                        {kpi.label}
                      </dt>
                      <dd className="mt-1 font-display text-sm font-bold text-frost">
                        {kpi.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Stack chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech: string) => (
                    <span
                      key={tech}
                      className="rounded border border-edge bg-night/60 px-2 py-0.5 font-mono text-[0.6875rem] text-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Bottom CTA banner */}
      <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-card border border-edge bg-panel p-8 shadow-card">
        <div>
          <h4 className="text-h3 font-bold text-frost">
            Have a mission-critical architecture challenge?
          </h4>
          <p className="mt-1 text-sm text-dim">
            We scope fixed-price reviews with zero vendor bias and full code ownership.
          </p>
        </div>
        <Button href="/contact" className="shrink-0">
          Discuss your stack
          <ArrowRight />
        </Button>
      </div>
    </Section>
  );
}
