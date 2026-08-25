/**
 * The hero artifact: a scored decision matrix that ships with every audit.
 * It is the product, so it is the illustration — BRAND.md §8.
 * Precision-engineered layout with high-contrast typography and subtle data visualization.
 */

const criteria = [
  { label: '3-Year TCO', weight: '×3', desc: 'Licence + infra + maintenance' },
  { label: 'Talent Pool & Hiring', weight: '×2', desc: 'Time to fill key senior roles' },
  { label: 'Exit & Migration Cost', weight: '×3', desc: 'Vendor lock-in reversibility' },
  { label: 'Time to First Ship', weight: '×1', desc: 'Days to initial production MVP' },
];

const options = [
  { name: 'Full Rewrite', scores: [2, 3, 4, 1], total: 21, verdict: null },
  { name: 'Managed SaaS', scores: [3, 4, 1, 5], total: 25, verdict: null },
  {
    name: 'Targeted Fix',
    scores: [5, 4, 4, 4],
    total: 39,
    verdict: 'recommended',
  },
];

export function DecisionMatrix() {
  return (
    <figure className="relative overflow-hidden rounded-card border border-ink-600 bg-ink-800 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]">
      {/* Header bar */}
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-600 bg-ink-900/60 px-5 py-3.5 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-signal/80 ring-2 ring-signal/20" aria-hidden="true" />
          <span className="font-mono text-eyebrow uppercase tracking-wider text-steel-200">
            Audit Deliverable // Decision-Matrix.v3
          </span>
        </div>
        <span className="font-mono text-[0.6875rem] uppercase tracking-wider text-steel-400">
          Scored by Criteria &amp; Weights
        </span>
      </figcaption>

      {/* Matrix Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[340px] border-collapse text-left">
          <caption className="sr-only">
            Worked example of a weighted decision matrix comparing three options
            across four criteria. The queue fix scores highest at 39 points and
            is the recommended option.
          </caption>
          <thead>
            <tr className="border-b border-ink-600/80 bg-ink-800">
              <th
                scope="col"
                className="py-3.5 pl-5 pr-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-steel-400 sm:pl-6"
              >
                Evaluation Criteria
              </th>
              {options.map((o) => (
                <th
                  key={o.name}
                  scope="col"
                  className={`px-3 py-3.5 text-center font-mono text-[0.6875rem] font-medium uppercase tracking-[0.12em] ${
                    o.verdict ? 'bg-signal/10 text-signal font-semibold' : 'text-steel-400'
                  }`}
                >
                  {o.name}
                  {o.verdict ? (
                    <span className="block text-[0.5625rem] font-normal tracking-normal text-signal">
                      (Recommended)
                    </span>
                  ) : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-600/60 text-sm">
            {criteria.map((c, row) => (
              <tr key={c.label} className="transition-colors duration-100 hover:bg-ink-700/40">
                <th
                  scope="row"
                  className="py-3 pl-5 pr-3 font-normal sm:pl-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-paper text-[0.875rem] font-medium">{c.label}</span>
                    <span className="rounded bg-ink-900 px-1.5 py-0.5 font-mono text-[0.6875rem] text-steel-400 border border-ink-600/60">
                      {c.weight}
                    </span>
                  </div>
                </th>
                {options.map((o) => (
                  <td
                    key={o.name}
                    className={`px-3 py-3 text-center ${
                      o.verdict ? 'bg-signal/5' : ''
                    }`}
                  >
                    <Bar value={o.scores[row] ?? 0} accent={!!o.verdict} />
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t-2 border-ink-600 bg-ink-900/90 font-medium">
              <th
                scope="row"
                className="py-4 pl-5 pr-3 font-mono text-eyebrow font-semibold uppercase tracking-wider text-paper sm:pl-6"
              >
                Weighted Total
              </th>
              {options.map((o) => (
                <td
                  key={o.name}
                  className={`px-3 py-4 text-center font-display text-lg sm:text-xl font-bold ${
                    o.verdict ? 'bg-signal/15 text-signal' : 'text-steel-400'
                  }`}
                >
                  {o.total}
                  <span className="text-xs font-mono font-normal opacity-70"> /50</span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Recommendation Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-ink-600 bg-ink-900/80 px-5 py-3.5 sm:px-6">
        <div className="flex items-start sm:items-center gap-2.5 text-xs text-steel-200">
          <span className="inline-flex shrink-0 items-center justify-center rounded-sm bg-signal px-1.5 py-0.5 font-mono text-[0.625rem] font-bold uppercase text-ink-900">
            OUTCOME
          </span>
          <p className="leading-tight">
            Keep existing core, refactor queue bottleneck. <strong className="text-paper">Saves 21 months &amp; €0 licence change.</strong>
          </p>
        </div>
        <span className="shrink-0 font-mono text-[0.6875rem] text-steel-400">
          100% Client Owned
        </span>
      </div>
    </figure>
  );
}

function Bar({ value, accent }: { value: number; accent: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1"
      title={`${value} of 5`}
    >
      <span className="sr-only">{value} out of 5</span>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`block h-3.5 w-1 rounded-[1px] ${
            i <= value
              ? accent
                ? 'bg-signal'
                : 'bg-steel-400'
              : 'bg-ink-600/80'
          }`}
        />
      ))}
    </span>
  );
}
