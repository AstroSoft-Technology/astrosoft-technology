"use client";

import { useState, useMemo } from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Team members" },
  { value: "5+", label: "Years experience" },
];

const highlights = [
  { title: "Strategy", copy: "We align technology with business goals." },
  { title: "Design", copy: "User-centric interfaces that delight." },
  { title: "Engineering", copy: "Scalable, maintainable code." },
];

const techIcons: Record<string, ReactElement> = {
  React: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
      <g stroke="currentColor" strokeWidth="1.6" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="4.2" ry="10" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      </g>
    </svg>
  ),
  "React Native": (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
      <g stroke="currentColor" strokeWidth="1.6" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse
          cx="12"
          cy="12"
          rx="4.2"
          ry="10"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="4.2"
          ry="10"
          transform="rotate(120 12 12)"
        />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      </g>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
      <path
        d="M11.5 4.5h3.5a3 3 0 0 1 3 3V11c0 1.1-.9 2-2 2h-6a2 2 0 0 0-2 2v1.5c0 1.1.9 2 2 2H17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 19.5H9a3 3 0 0 1-3-3V13c0-1.1.9-2 2-2h6a2 2 0 0 0 2-2V7.5c0-1.1-.9-2-2-2H7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="6.5" r="0.9" fill="currentColor" />
      <circle cx="15" cy="17.5" r="0.9" fill="currentColor" />
    </svg>
  ),
  Postgres: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
      <ellipse
        cx="12"
        cy="6"
        rx="7"
        ry="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  Django: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
      <rect
        x="5"
        y="5"
        width="6"
        height="14"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="13"
        y="9"
        width="6"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 8.5v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 12.5v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  FastAPI: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 12h6m-2.5-4.5-3 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Machine Learning": (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="9" cy="12" r="1.4" fill="currentColor" />
      <circle cx="15" cy="10" r="1.4" fill="currentColor" />
      <circle cx="15" cy="14" r="1.4" fill="currentColor" />
      <path
        d="M9 12h5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="m12 5 8.5 14h-17z" />
    </svg>
  ),
  Expo: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
      <path
        d="m9 18 3-12 3 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 18h11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const work = [
  {
    name: "PlantGuard",
    link: "https://github.com/Shiwarne-Silva/PlantGuard",
    detail:
      "Machine Learning, Image Processing, CNN, FastAPI, React Native, Vercel",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%' stop-color='%2310b981'/%3E%3Cstop offset='100%' stop-color='%230f172a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='240' fill='url(%23g1)'/%3E%3Ccircle cx='90' cy='120' r='70' fill='%23ffffff22'/%3E%3Ccircle cx='220' cy='80' r='40' fill='%23ffffff18'/%3E%3Ctext x='26' y='200' fill='%23ffffff' font-size='24' font-family='Inter,Arial' font-weight='600'%3EPlantGuard%3C/text%3E%3C/svg%3E",
    tech: ["Machine Learning", "FastAPI", "React Native", "Vercel"],
  },
  {
    name: "Kidemy",
    link: "",
    detail:
      "Educational portal with lesson practice, AI-marked question banks, feedback, and adaptive remediation for students, teachers, and tutors.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%' stop-color='%233b82f6'/%3E%3Cstop offset='100%' stop-color='%236b21a8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='240' fill='url(%23g2)'/%3E%3Ccircle cx='110' cy='90' r='55' fill='%23ffffff22'/%3E%3Ccircle cx='260' cy='150' r='70' fill='%23ffffff18'/%3E%3Ctext x='34' y='210' fill='%23ffffff' font-size='24' font-family='Inter,Arial' font-weight='600'%3EKidemy%3C/text%3E%3C/svg%3E",
    tech: ["React", "Python", "Postgres", "Django"],
  },
  {
    name: "ds-motors",
    link: "https://www.dsmotors.lk/",
    detail:
      "Garage workflow site for bookings and service visibility, delivered with a lightweight React front end on Vercel.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0' y1='1' x2='1' y2='0'%3E%3Cstop offset='0%' stop-color='%230ea5e9'/%3E%3Cstop offset='100%' stop-color='%2310b981'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='240' fill='url(%23g3)'/%3E%3Ccircle cx='200' cy='120' r='90' fill='%23ffffff15'/%3E%3Ctext x='38' y='205' fill='%23ffffff' font-size='24' font-family='Inter,Arial' font-weight='600'%3Eds-motors%3C/text%3E%3C/svg%3E",
    tech: ["React", "Vercel"],
  },
  {
    name: "TaskFlow",
    link: "https://github.com/Shiwarne-Silva/todo-list-react-native",
    detail:
      "React Native to-do app with auth, quick add/delete, and streamlined task management for iOS and Android.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%' stop-color='%23f97316'/%3E%3Cstop offset='100%' stop-color='%23ef4444'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='240' fill='url(%23g4)'/%3E%3Ccircle cx='90' cy='140' r='60' fill='%23ffffff18'/%3E%3Ccircle cx='270' cy='90' r='70' fill='%23ffffff15'/%3E%3Ctext x='36' y='205' fill='%23ffffff' font-size='24' font-family='Inter,Arial' font-weight='600'%3ETaskFlow%3C/text%3E%3C/svg%3E",
    tech: ["React Native", "Expo", "Vercel"],
  },
  {
    name: "Ceylon Ayurveda (UK)",
    link: "https://github.com/Shiwarne-Silva/ceylon-ayurveda-therapist",
    detail:
      "Cross-platform mobile app for therapists to manage appointments, patients, and treatment records with Ayurvedic-aligned UX.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='1' y1='0' x2='0' y2='1'%3E%3Cstop offset='0%' stop-color='%238b5cf6'/%3E%3Cstop offset='100%' stop-color='%23256b98'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='240' fill='url(%23g5)'/%3E%3Ccircle cx='140' cy='100' r='70' fill='%23ffffff18'/%3E%3Ccircle cx='250' cy='150' r='55' fill='%23ffffff12'/%3E%3Ctext x='22' y='208' fill='%23ffffff' font-size='24' font-family='Inter,Arial' font-weight='600'%3ECeylon Ayurveda%3C/text%3E%3C/svg%3E",
    tech: ["React Native", "Vercel"],
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
  const [workIndex, setWorkIndex] = useState(0);

  const visibleWork = useMemo(() => {
    if (work.length <= 3) return work;
    return [0, 1, 2].map((offset) => work[(workIndex + offset) % work.length]);
  }, [workIndex]);

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

      <section className="card overflow-hidden px-8 py-10 sm:px-10 animate-fade-up">
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
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 px-4 py-3 animate-fade-up"
                  style={{ animationDelay: `${index * 80 + 80}ms` }}
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
              <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900" />
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
      <section
        className="space-y-8 animate-fade-up"
        style={{ animationDelay: "80ms" }}
      >
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">
            What we can build for you
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="card relative overflow-hidden p-6 animate-fade-up"
              style={{ animationDelay: `${index * 90 + 100}ms` }}
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

      <section
        className="space-y-8 animate-fade-up"
        style={{ animationDelay: "100ms" }}
      >
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
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="card h-full p-6 animate-fade-up"
              style={{ animationDelay: `${index * 90 + 120}ms` }}
            >
              <div className="text-sm font-semibold text-slate-500">
                {item.title}
              </div>
              <p className="mt-3 text-base text-slate-700">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="card px-6 py-8 sm:px-8 animate-fade-up"
        style={{ animationDelay: "120ms" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Work delivered
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">
              Recent builds and launches
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous projects"
              onClick={() =>
                setWorkIndex((prev) => (prev - 1 + work.length) % work.length)
              }
              className="h-10 w-10 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 transition flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M14 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              aria-label="Next projects"
              onClick={() => setWorkIndex((prev) => (prev + 1) % work.length)}
              className="h-10 w-10 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 transition flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M10 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {visibleWork.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 animate-fade-up"
              style={{ animationDelay: `${index * 90 + 140}ms` }}
            >
              <div className="relative h-44 w-full overflow-hidden rounded-xl border border-slate-100 mb-4">
                <Image
                  src={item.image}
                  alt={`${item.name} cover`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 320px"
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-slate-900">
                  {item.name}
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-700 underline decoration-2 underline-offset-4 hover:text-slate-900"
                  >
                    View
                  </a>
                ) : (
                  <span className="text-[11px] font-semibold text-amber-600 uppercase tracking-wide">
                    Development stage
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {item.detail}
              </p>
              <div className="mt-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 mb-2">
                  Technology used
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {techIcons[tag] ?? (
                        <span className="inline-block h-2 w-2 rounded-full bg-slate-400" />
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
