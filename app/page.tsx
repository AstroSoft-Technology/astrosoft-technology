import Link from "next/link";
import Image from "next/image";

const stats = [
  { label: "Projects delivered", value: "120+" },
  { label: "Average uplift", value: "38%" },
  { label: "Uptime on launches", value: "99.9%" },
];

const highlights = [
  {
    title: "Digital product builds",
    copy: "Design, engineer, and ship secure web and mobile platforms built to scale.",
  },
  {
    title: "Cloud-native modernization",
    copy: "Migrate legacy stacks into resilient, observable architectures on AWS and Azure.",
  },
  {
    title: "Data and AI enablement",
    copy: "Integrate analytics pipelines and pragmatic AI to unlock measurable outcomes.",
  },
];

const work = [
  {
    name: "Fintech risk suite",
    detail:
      "Reduced underwriting decision times from 3 days to 30 minutes with event-driven services.",
  },
  {
    name: "Retail experience refresh",
    detail:
      "Rebuilt storefront for 4x faster load times and +22% conversion uplift across devices.",
  },
  {
    name: "Industrial IoT platform",
    detail:
      "Unified telemetry and alerting across 18 facilities with zero unplanned downtime at launch.",
  },
];

const services = [
  {
    number: "01",
    title: "Web, Mobile Applications",
    description:
      "We build secure, scalable web, mobile, and cloud apps that fast-track your business growth.",
  },
  {
    number: "02",
    title: "UI/UX Designs",
    description:
      "We craft holistic, people-friendly digital experiences so that your products are loved by users.",
  },
  {
    number: "03",
    title: "Digital Marketting",
    description:
      "Strategic campaigns that amplify your brand and drive measurable engagement across channels.",
  },
  {
    number: "04",
    title: "IT Consultancy",
    description:
      "Expert guidance on architecture, security, and roadmaps to align technology with business goals.",
  },
  {
    number: "05",
    title: "IT System/Technical Support",
    description:
      "Reliable support and maintenance to keep your systems running smoothly around the clock.",
  },
  {
    number: "06",
    title: "Quality Assurance (QA) & Testing",
    description:
      "Comprehensive testing strategies to ensure your product launches flawlessly and stays resilient.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Mobile logo section */}
      <div className="md:hidden flex justify-center pt-8">
        <Image
          src="/images/Final-Logo-Light-bgremoved.png"
          alt="AstroSoft Technology"
          width={160}
          height={160}
          priority
          className="h-auto w-40"
        />
      </div>

      <section className="card overflow-hidden px-8 py-10 sm:px-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
          <span className="pill">Enterprise-grade builds</span>
          <span>AstroSoft Technology</span>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                We architect software that endures and elevates businesses.
              </h1>
              <p className="text-lg text-slate-600">
                Strategy, design, and engineering teams working as one. We
                modernize products, build new ones, and keep them reliable long
                after launch.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Explore services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-300"
              >
                Talk with us
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 px-4 py-3"
                >
                  <div className="text-2xl font-semibold text-slate-900">
                    {item.value}
                  </div>
                  <div className="text-sm text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card relative overflow-hidden p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
              <div className="relative space-y-6 text-white">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Delivery sprints</span>
                  <span>Confidence at launch</span>
                </div>
                <div className="space-y-4">
                  {[
                    "Discovery",
                    "Design system",
                    "MVP",
                    "Scale",
                    "Sustain",
                  ].map((phase, index) => (
                    <div key={phase} className="flex items-center gap-3">
                      <div className="h-2.5 w-full rounded-full bg-white/10">
                        <div
                          className="h-2.5 rounded-full bg-emerald-300"
                          style={{ width: `${60 + index * 8}%` }}
                        />
                      </div>
                      <span className="w-28 text-sm text-slate-200">
                        {phase}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-white/10 p-4 text-sm leading-6 text-slate-200 shadow-inner">
                  "AstroSoft translated our roadmap into a reliable platform in
                  record time. Their calm delivery kept our team focused on the
                  customer."
                  <div className="mt-3 font-semibold text-white">
                    COO, Global Retail Group
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we can build for you */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">
            What we can build for you
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="card relative overflow-hidden p-6"
            >
              <div className="absolute right-4 top-4 text-5xl font-bold text-slate-900">
                {service.number}
              </div>
              <div className="relative space-y-3">
                <h3 className="text-lg font-semibold text-slate-900 pr-16">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              What we do
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Expert teams for critical software moments
            </h2>
          </div>
          <Link
            href="/about"
            className="text-sm font-semibold text-slate-900 underline decoration-2 underline-offset-8"
          >
            About the studio
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="card h-full p-6">
              <div className="text-sm font-semibold text-slate-500">
                {item.title}
              </div>
              <p className="mt-3 text-base text-slate-700">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card px-6 py-8 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Selected work
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">
              Outcomes with measurable lift
            </h3>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-slate-900 underline decoration-2 underline-offset-8"
          >
            View services
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {work.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="text-sm font-semibold text-slate-500">
                {item.name}
              </div>
              <p className="mt-3 text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
