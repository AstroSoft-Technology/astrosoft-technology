import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";

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
    year: "2023",
    detail:
      "AstroSoft Technology launched, pairing enterprise-grade engineering with rapid product delivery.",
  },
  {
    year: "2024",
    detail:
      "Expanded design and data practices; delivered first multi-region modernization for a global client.",
  },
  {
    year: "2025",
    detail:
      "Rolled out reliability program with 24/7 monitoring, proactive playbooks, and AI-assisted operations.",
  },
];

type Leader = {
  name: string;
  role: string;
  image: string;
  bio: string;
  accent: string; // circle + dot color
};

const leaders: Leader[] = [
  {
    name: "Jehan Silva",
    role: "Founder & COO",
    image: "/images/Jehan.JPG",
    bio: "Runs operations and delivery quality, keeping sprints predictable and teams aligned.",
    accent: "#D9F0FF",
  },
  {
    name: "Shiwarne Silva",
    role: "Founder & CEO",
    image: "/images/Shiwarne.jpeg",
    bio: "Sets vision, client outcomes, and calm delivery standards across every program.",
    accent: "#FEEFD3",
  },
  {
    name: "Dinali Perera",
    role: "Co-Founder & CTO",
    image: "/images/Dinali.JPG",
    bio: "Leads engineering strategy, security, and scalability for mission-critical platforms.",
    accent: "#E8F6EF",
  },
];

export default function AboutPage() {
  const centerIndex = Math.floor(leaders.length / 2);
  return (
    <div className="flex flex-col gap-12">
      <section className="space-y-4 animate-fade-up">
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
        {values.map((item, index) => (
          <div
            key={item.title}
            className="card p-6 animate-fade-up"
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            <div className="text-base font-semibold text-slate-900">
              {item.title}
            </div>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              {item.text}
            </p>
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
          {milestones.map((item, index) => (
            <div
              key={item.year}
              className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-start sm:justify-between animate-fade-up"
              style={{ animationDelay: `${index * 80 + 140}ms` }}
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

      {/* Leadership */}
      <section
        className="card px-6 py-8 sm:px-8 animate-fade-up"
        style={{ animationDelay: "140ms" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Our Leadership
          </h2>
        </div>

        {/* Centered rows like the reference */}
        <div className="mt-10 flex flex-wrap justify-center gap-12">
          {leaders.map((person, index) => {
            const isCenter = index === centerIndex;
            return (
              <div
                key={`${person.name}-${index}`}
                className={`group flex ${
                  isCenter
                    ? "order-1 md:order-0 w-80"
                    : "order-2 md:order-0 w-72"
                } flex-col items-center text-center animate-fade-up`}
                style={{ animationDelay: `${index * 80 + 160}ms` }}
              >
                {/* Circular avatar with accent background */}
                <div
                  className={`relative ${
                    isCenter
                      ? "h-64 w-64 -translate-y-2 md:-translate-y-3"
                      : "h-56 w-56"
                  } overflow-hidden rounded-full ring-8 ring-white shadow-md transition-transform duration-300 ease-out group-hover:scale-105 group-hover:shadow-lg`}
                  style={{ backgroundColor: person.accent }}
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes={isCenter ? "256px" : "224px"}
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Accent dot */}
                <div
                  className={`mt-3 ${
                    isCenter ? "h-6 w-6" : "h-5 w-5"
                  } rounded-full border border-white shadow-sm transition-transform duration-300 ease-out group-hover:scale-110`}
                  style={{ backgroundColor: person.accent }}
                  aria-hidden="true"
                />

                {/* Text stack: role, name, bio */}
                <div className="mt-3 space-y-1">
                  <div className="text-base font-semibold uppercase tracking-wide text-slate-600">
                    {person.role}
                  </div>
                  <div
                    className={`${
                      isCenter ? "text-xl" : "text-lg"
                    } font-semibold text-slate-900`}
                  >
                    {person.name}
                  </div>
                  <p
                    className={`mx-auto ${
                      isCenter ? "max-w-[36ch]" : "max-w-[32ch]"
                    } text-sm leading-relaxed text-slate-600`}
                  >
                    {person.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
