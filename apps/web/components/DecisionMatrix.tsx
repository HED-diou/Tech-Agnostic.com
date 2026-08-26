/**
 * The hero artefact: a stripped-down version of the scored decision matrix that
 * ships with every audit. The product is the illustration — no stock imagery,
 * no abstract dashboard mock (BRAND.md §8).
 *
 * v2 renders it as a light, raised panel with a second small card tucked
 * behind, so the hero reads as "here is what you actually receive".
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
  { name: 'Rewrite', scores: [2, 3, 4, 1], total: 21, best: false },
  { name: 'Managed', scores: [3, 4, 1, 5], total: 25, best: false },
  { name: 'Queue fix', scores: [5, 4, 4, 4], total: 39, best: true },
];

export function DecisionMatrix() {
  return (
    <div className="relative">
      {/* Stacked-paper edges peeking below: the matrix is one page of a
          fuller deliverable. Purely decorative, and it cannot overlap the
          panel's own content. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-5 -bottom-2 h-10 rounded-b-panel border border-edge bg-panel/80 shadow-sm"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-10 -bottom-4 h-10 rounded-b-panel border border-edge bg-panel/55"
      />

      <figure className="relative rounded-panel border border-edge bg-panel shadow-lift">
        <figcaption className="flex items-center justify-between gap-4 border-b border-edge px-6 py-4">
          <span className="text-sm font-semibold text-frost">Decision matrix</span>
          <span className="flex items-center gap-2 text-[0.6875rem] font-semibold tracking-wide text-dim uppercase">
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
              Worked example of a weighted decision matrix comparing three
              options across four criteria. The queue fix scores highest at 39
              points and is the recommended option.
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-[0.6875rem] font-semibold tracking-wide text-dim uppercase"
                >
                  Criterion
                </th>
                {options.map((o) => (
                  <th
                    key={o.name}
                    scope="col"
                    className={`px-3 py-3 text-center text-[0.6875rem] font-semibold tracking-wide uppercase ${
                      o.best ? 'text-signal' : 'text-dim'
                    }`}
                  >
                    {o.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((c, row) => (
                <tr key={c.label} className="border-t border-edge">
                  <th
                    scope="row"
                    className="px-6 py-3.5 text-sm font-medium text-frost"
                  >
                    {c.label}{' '}
                    <span className="font-mono text-xs font-normal text-dim">
                      {c.weight}
                    </span>
                  </th>
                  {options.map((o) => (
                    <td key={o.name} className="px-3 py-3.5 text-center">
                      <Bar value={o.scores[row] ?? 0} accent={o.best} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-edge bg-panel-2/60">
                <th
                  scope="row"
                  className="px-6 py-4 text-[0.6875rem] font-semibold tracking-wide text-dim uppercase"
                >
                  Weighted total
                </th>
                {options.map((o) => (
                  <td
                    key={o.name}
                    className={`px-3 py-4 text-center font-display text-lg font-bold ${
                      o.best ? 'text-signal' : 'text-dim'
                    }`}
                  >
                    {o.total}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="border-t border-edge px-6 py-4 text-sm text-dim">
          <span className="font-semibold text-frost">Recommendation:</span> keep
          the framework, fix the integration. Saves 21 months.
        </p>
      </figure>
    </div>
  );
}

function Bar({ value, accent }: { value: number; accent: boolean }) {
  return (
    <span className="inline-flex items-center gap-[3px]">
      <span className="sr-only">{value} out of 5</span>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`block h-3.5 w-[3px] rounded-full ${
            i <= value
              ? accent
                ? 'bg-signal'
                : 'bg-faint'
              : 'bg-panel-3'
          }`}
        />
      ))}
    </span>
  );
}
