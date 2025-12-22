import { Analytics } from "@vercel/analytics/next";

const services = [
  {
    title: "Product strategy",
    detail:
      "Roadmapping, experience strategy, and validation to ensure we build the right thing before building it right.",
  },
  {
    title: "Full-stack engineering",
    detail:
      "Cloud-native web and mobile development with modern stacks, strong DX, and automated quality gates.",
  },
  {
    title: "Platform modernization",
    detail:
      "Refactoring legacy systems into resilient services with observability, CI/CD, and cost-aware architectures.",
  },
  {
    title: "Data and AI",
    detail:
      "Analytics, MLOps, and pragmatic AI integrations that deliver measurable lift without compromising security.",
  },
  {
    title: "Design systems",
    detail:
      "Design languages, component libraries, and accessibility standards that keep teams moving in sync.",
  },
  {
    title: "Managed reliability",
    detail:
      "Site reliability practices, 24/7 monitoring, and incident readiness so your launches stay steady.",
  },
];

const process = [
  {
    phase: "Discover",
    description:
      "Align on objectives, users, and risks. Shape a measurable north star and success criteria.",
  },
  {
    phase: "Design",
    description:
      "Create flows, prototypes, and systems that communicate intent and reduce delivery friction.",
  },
  {
    phase: "Build",
    description:
      "Ship in confident increments with paired engineering, automated tests, and observability baked in.",
  },
  {
    phase: "Scale",
    description:
      "Optimize for performance, reliability, and maintainability as usage and teams grow.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="space-y-4 animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Services
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Built-to-last software delivery
        </h1>
        <p className="max-w-3xl text-lg text-slate-600">
          From concept to scale, AstroSoft Technology assembles
          multidisciplinary pods to design, build, and sustain digital products.
          Every engagement is engineered for reliability, clarity, and
          measurable business impact.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="card h-full p-6 animate-fade-up"
            style={{ animationDelay: `${index * 90 + 90}ms` }}
          >
            <div className="text-base font-semibold text-slate-900">
              {service.title}
            </div>
            <p className="mt-3 text-sm text-slate-700">{service.detail}</p>
          </div>
        ))}
      </section>

      <section
        className="card px-6 py-8 sm:px-8 animate-fade-up"
        style={{ animationDelay: "120ms" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Delivery model
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              A clear, accountable process
            </h2>
          </div>
          <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Weekly demos
          </span>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {process.map((item, index) => (
            <div
              key={item.phase}
              className="rounded-2xl border border-slate-200 bg-white p-5 animate-fade-up"
              style={{ animationDelay: `${index * 80 + 140}ms` }}
            >
              <div className="text-sm font-semibold text-slate-500">
                {item.phase}
              </div>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
