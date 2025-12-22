const openings = [
  {
    title: "Senior Software Engineer",
    location: "Remote / Hybrid",
    type: "Full-time",
    summary:
      "Own delivery of cloud-native services, collaborate with product teams, and mentor engineers across the stack.",
  },
  {
    title: "Product Designer",
    location: "Remote / Hybrid",
    type: "Full-time",
    summary:
      "Shape user flows, prototypes, and design systems that keep experiences cohesive across platforms.",
  },
  {
    title: "Delivery Lead",
    location: "Remote / Hybrid",
    type: "Full-time",
    summary:
      "Guide cross-functional pods, steward roadmaps, and ensure predictable delivery and stakeholder clarity.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Careers
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Build calmly. Ship boldly.
        </h1>
        <p className="max-w-3xl text-lg text-slate-600">
          We are a distributed team of engineers, designers, and delivery leads
          who care about craft and impact. If you thrive in accountable teams
          that prioritize clarity over chaos, let us know.
        </p>
      </section>

      <section className="card px-6 py-8 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Open roles</h2>
            <p className="text-sm text-slate-600">
              Remote-first, with regional hubs for collaboration.
            </p>
          </div>
          <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
            Applications reviewed weekly
          </span>
        </div>
        <div className="mt-6 space-y-4">
          {openings.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-slate-900">
                    {role.title}
                  </div>
                  <div className="text-sm text-slate-600">
                    {role.location} · {role.type}
                  </div>
                </div>
                <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
                  Apply now
                </button>
              </div>
              <p className="mt-3 text-sm text-slate-700">{role.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {["Learning stipend", "Remote flexibility", "Inclusive culture"].map(
          (item) => (
            <div key={item} className="card p-6 text-sm text-slate-700">
              <div className="text-base font-semibold text-slate-900">
                {item}
              </div>
              <p className="mt-3 leading-relaxed">
                We invest in growth, foster trust across time zones, and welcome
                every perspective that strengthens the team.
              </p>
            </div>
          )
        )}
      </section>
    </div>
  );
}
