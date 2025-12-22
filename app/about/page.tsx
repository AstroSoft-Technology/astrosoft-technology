const values = [
  {
    title: "Clarity first",
    text: "We communicate decisions, risks, and trade-offs plainly so teams move with confidence.",
  },
  {
    title: "Calm delivery",
    text: "Predictable sprints, respectful collaboration, and steady launches—no heroics required.",
  },
  {
    title: "Long-term stewardship",
    text: "We build for maintainability and knowledge transfer, not just the next release date.",
  },
];

const milestones = [
  {
    year: "2016",
    detail:
      "AstroSoft Technology founded to bring enterprise-grade engineering to product teams quickly.",
  },
  {
    year: "2019",
    detail:
      "Expanded design and data practices, delivering first multi-region platform modernization.",
  },
  {
    year: "2023",
    detail:
      "Launched reliability program with 24/7 monitoring and proactive incident playbooks.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          About
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          The team behind AstroSoft Technology
        </h1>
        <p className="max-w-3xl text-lg text-slate-600">
          We are engineers, designers, and delivery leaders who have shipped
          mission-critical products for scale-ups and enterprises across
          industries. Our focus: pairing rigorous engineering with thoughtful
          experiences.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {values.map((item) => (
          <div key={item.title} className="card p-6">
            <div className="text-base font-semibold text-slate-900">
              {item.title}
            </div>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section className="card px-6 py-8 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Milestones
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              Progress built on partnerships
            </h2>
          </div>
          <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
            Global delivery
          </span>
        </div>
        <div className="mt-6 space-y-4">
          {milestones.map((item) => (
            <div
              key={item.year}
              className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="text-sm font-semibold text-slate-500">
                {item.year}
              </div>
              <p className="text-sm text-slate-700 sm:max-w-4xl">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
