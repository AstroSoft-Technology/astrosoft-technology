"use client";

import { useState } from "react";
import { Analytics } from "@vercel/analytics/next";

const openings = [
  {
    title: "Digital Marketing Intern",
    location: "Remote / Hybrid",
    type: "Internship (Full-Time/Part-Time)",
    summary:
      "Assist in planning and executing digital marketing campaigns, managing social media accounts, and analyzing engagement metrics to enhance brand visibility.",
    responsibilities: [
      "Assist with social media content creation, scheduling, and monitoring",
      "Support email marketing campaigns and website updates",
      "Conduct market research and analyze trends to identify opportunities",
      "Track and report on digital marketing performance metrics",
      "Collaborate with the team to brainstorm marketing strategies",
    ],
    requirements: [
      "Currently pursuing a degree in Marketing, Communications, or related field",
      "Basic understanding of social media platforms and digital marketing tools",
      "Strong communication and organizational skills",
      "Enthusiastic and eager to learn in a fast-paced environment",
    ],
    preferred: [
      "Familiarity with Google Analytics, SEO, and content management systems",
      "Experience with graphic design tools like Canva or Adobe Suite",
    ],
  },
  {
    title: "UI/UX Engineering Intern",
    location: "Remote / Hybrid",
    type: "Internship (Full-Time/Part-Time)",
    summary:
      "Support our product design and development team in creating user-friendly interfaces and enhancing user experiences across our applications.",
    responsibilities: [
      "Support the design and prototyping of web and mobile interfaces",
      "Collaborate with developers to implement front-end designs",
      "Conduct usability testing and gather user feedback",
      "Assist in maintaining design systems and documentation",
    ],
    requirements: [
      "Currently pursuing a degree in Computer Science, Design, Human-Computer Interaction, or related field",
      "Basic understanding of HTML, CSS, and front-end frameworks",
      "Familiarity with design tools such as Figma, Sketch, or Adobe XD",
      "Strong attention to detail and problem-solving abilities",
    ],
    preferred: [
      "Experience in responsive web design",
      "Knowledge of accessibility standards and UX best practices",
    ],
  },
  {
    title: "Junior FullStack Developer",
    location: "Remote / Hybrid",
    type: "Full-Time",
    summary:
      "Assist in developing, testing, and maintaining web applications across the full software stack. Collaborate with designers and engineers to deliver high-quality products.",
    responsibilities: [
      "Assist in building and maintaining web applications using modern frameworks",
      "Collaborate with the team to design scalable and efficient solutions",
      "Participate in code reviews and contribute to improving code quality",
      "Write clean, maintainable, and well-documented code",
      "Troubleshoot and debug applications across front-end and back-end",
      "Learn and adapt to new technologies as required",
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field (or equivalent experience)",
      "Basic proficiency in front-end technologies such as HTML, CSS, and JavaScript",
      "Familiarity with at least one front-end library or framework (React, Vue, or Angular)",
      "Basic knowledge of back-end development using Node.js, Python, or similar",
      "Understanding of RESTful APIs and database fundamentals (SQL/NoSQL)",
      "Strong problem-solving skills and eagerness to learn",
    ],
    preferred: [
      "Experience with Git and version control",
      "Exposure to cloud services or DevOps tools",
      "Previous internship or project experience in full-stack development",
    ],
  },
];

export default function CareersPage() {
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set());

  const toggleJob = (title: string) => {
    const newExpanded = new Set(expandedJobs);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedJobs(newExpanded);
  };

  return (
    <div className="flex flex-col gap-12">
      <section className="space-y-4 animate-fade-up">
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

      <section
        className="card px-6 py-8 sm:px-8 animate-fade-up"
        style={{ animationDelay: "90ms" }}
      >
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
          {openings.map((role, index) => (
            <div
              key={role.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 animate-fade-up"
              style={{ animationDelay: `${index * 100 + 110}ms` }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="text-xl font-semibold text-slate-900">
                    {role.title}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {role.location} · {role.type}
                  </div>
                </div>
                <a
                  href={`mailto:careers@astrosofttech.dev?subject=Application for ${encodeURIComponent(
                    role.title
                  )}`}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Apply now
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    About the Role
                  </h3>
                  <p className="text-sm text-slate-700">{role.summary}</p>
                </div>
                {expandedJobs.has(role.title) && (
                  <>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-2">
                        Required Skills and Qualifications
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                        {role.requirements.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-2">
                        Preferred Skills
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                        {role.preferred.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-xs text-slate-500">
                        How to Apply: Send your resume and relevant work samples
                        to{" "}
                        <a
                          href={`mailto:careers@astrosofttech.dev?subject=Application for ${encodeURIComponent(
                            role.title
                          )}`}
                          className="text-slate-900 underline"
                        >
                          careers@astrosofttech.dev
                        </a>
                      </p>
                    </div>
                  </>
                )}

                <button
                  onClick={() => toggleJob(role.title)}
                  className="text-sm font-semibold text-slate-900 underline decoration-2 underline-offset-8 hover:text-slate-700 transition"
                >
                  {expandedJobs.has(role.title) ? "Show less" : "Show more"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {["Learning stipend", "Remote flexibility", "Inclusive culture"].map(
          (item, index) => (
            <div
              key={item}
              className="card p-6 text-sm text-slate-700 animate-fade-up"
              style={{ animationDelay: `${index * 90 + 140}ms` }}
            >
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
