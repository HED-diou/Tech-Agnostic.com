/**
 * The hero artifact: a stripped-down version of the scored decision matrix
 * that ships with every audit. It is the product, so it is the illustration —
 * no stock imagery, no abstract dashboard mock. BRAND.md §8.
 *
 * Static by design. The numbers are a worked example, not live data.
 */

const criteria = [
  { label: 'Total cost / 3 yrs', weight: '×3' },
  { label: 'Hiring pool', weight: '×2' },
  { label: 'Exit cost', weight: '×3' },
  { label: 'Time to first ship', weight: '×1' },
];

const options = [
  { name: 'Rewrite', scores: [2, 3, 4, 1], total: 21, verdict: null },
  { name: 'Managed', scores: [3, 4, 1, 5], total: 25, verdict: null },
  {
    name: 'Queue fix',
    scores: [5, 4, 4, 4],
    total: 39,
    verdict: 'recommended',
  },
];

export function DecisionMatrix() {
  return (
    <figure className="rounded-card border border-ink-600 bg-ink-800/80 backdrop-blur-sm">
      <figcaption className="flex items-center justify-between gap-4 border-b border-ink-600 px-5 py-4">
        <span className="font-mono text-eyebrow uppercase text-steel-400">
          decision-matrix.v3
        </span>
        <span className="flex items-center gap-2 font-mono text-eyebrow uppercase text-steel-400">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-signal"
            aria-hidden="true"
          />
          weights set by you
        </span>
      </figcaption>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[330px] border-collapse text-left">
          <caption className="sr-only">
            Worked example of a weighted decision matrix comparing three options
            across four criteria. The queue fix scores highest at 39 points and
            is the recommended option.
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="px-5 py-3 font-mono text-[0.6875rem] font-normal uppercase tracking-[0.12em] text-steel-400"
              >
                Criterion
              </th>
              {options.map((o) => (
                <th
                  key={o.name}
                  scope="col"
                  className={`px-3 py-3 text-center font-mono text-[0.6875rem] font-normal uppercase tracking-[0.12em] ${
                    o.verdict ? 'text-signal' : 'text-steel-400'
                  }`}
                >
                  {o.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((c, row) => (
              <tr key={c.label} className="border-t border-ink-600">
                <th
                  scope="row"
                  className="px-5 py-3.5 text-sm font-normal text-steel-200"
                >
                  {c.label}{' '}
                  <span className="font-mono text-xs text-ink-500">
                    {c.weight}
                  </span>
                </th>
                {options.map((o) => (
                  <td key={o.name} className="px-3 py-3.5 text-center">
                    <Bar value={o.scores[row] ?? 0} accent={!!o.verdict} />
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t border-ink-600 bg-ink-900/40">
              <th
                scope="row"
                className="px-5 py-4 font-mono text-eyebrow font-normal uppercase text-steel-400"
              >
                Weighted total
              </th>
              {options.map((o) => (
                <td
                  key={o.name}
                  className={`px-3 py-4 text-center font-display text-lg ${
                    o.verdict ? 'text-signal' : 'text-steel-400'
                  }`}
                >
                  {o.total}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p className="border-t border-ink-600 px-5 py-4 text-sm text-steel-400">
        <span className="text-paper">Recommendation:</span> keep the framework,
        fix the integration. Saves 21 months.
      </p>
    </figure>
  );
}

function Bar({ value, accent }: { value: number; accent: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-[3px]"
      title={`${value} of 5`}
    >
      <span className="sr-only">{value} out of 5</span>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`block h-3.5 w-[3px] rounded-[1px] ${
            i <= value ? (accent ? 'bg-signal' : 'bg-steel-400') : 'bg-ink-600'
          }`}
        />
      ))}
    </span>
  );
}
