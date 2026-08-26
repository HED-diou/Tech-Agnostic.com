import { team } from '@/lib/site';
import { Section, SectionHead } from '../ui';
import { Reveal } from '../Reveal';
import { PhotoSlot } from '../PhotoSlot';

export function Team() {
  return (
    <Section id="team">
      <SectionHead eyebrow={team.eyebrow} title={team.title} lead={team.lead} />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.members.map((member, i) => (
          <Reveal key={member.slot} delay={i * 60} className="h-full">
            <article className="h-full overflow-hidden rounded-card border border-edge bg-panel shadow-card">
              <PhotoSlot ratio="4 / 5" slot={member.slot} brief={member.brief} />
              <div className="p-6">
                <h3 className="text-h3">{member.name}</h3>
                <p className="mt-2 text-sm text-dim">{member.role}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
