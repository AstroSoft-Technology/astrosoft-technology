import type { SVGProps } from "react";

function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth={1.8}
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 2h3l2 5-2 1c1 2 3 4 5 5l1-2 5 2v3c0 1.1-.9 2-2 2C9.82 18 6 14.18 6 9c0-1.1.9-2 2-2Z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5Zm7.5 0h3.84v1.98h.06c.54-1.02 1.86-2.1 3.83-2.1 4.09 0 4.85 2.7 4.85 6.21V23h-4v-6.49c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43V23h-4V8.5Z" />
    </svg>
  );
}

function IconFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M13.5 8.5V6.75c0-.72.48-1.41 1.6-1.41h1.4V2h-2.4C11.6 2 10 3.6 10 6.1V8.5H8v3h2V22h3.5v-10.5H16l.5-3h-3Z" />
    </svg>
  );
}

function IconWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.36 0 0 5.36 0 12c0 2.12.56 4.09 1.56 5.81L0 24l6.34-1.64A11.97 11.97 0 0 0 12 24c6.64 0 12-5.36 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 21.5c-1.94 0-3.76-.56-5.28-1.62l-.38-.25-3.72.96.99-3.62-.25-.38A9.46 9.46 0 0 1 2.5 12C2.5 6.72 6.72 2.5 12 2.5S21.5 6.72 21.5 12 17.28 21.5 12 21.5Zm5.12-7.22c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.62.14-.19.28-.71.9-.87 1.09-.16.19-.32.21-.59.07-.28-.14-1.17-.43-2.22-1.38-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.47.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.62-1.49-.85-2.03-.22-.53-.44-.46-.62-.46h-.53c-.19 0-.5.07-.76.35-.26.28-.99.97-.99 2.36s1.02 2.74 1.16 2.93c.14.19 2.01 3.06 4.86 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33Z" />
    </svg>
  );
}

const contacts = [
  {
    label: "Email",
    value: "astrosofttechnology@gmail.com",
    href: "mailto:astrosofttechnology@gmail.com",
    Icon: IconMail,
  },
  {
    label: "Call",
    value: "+94 78 669 2313",
    href: "tel:+94786692313",
    Icon: IconPhone,
  },
];

const social = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/astrosoft-technology/",
    hover: "hover:bg-[#0A66C2]",
    Icon: IconLinkedIn,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61585606672302",
    hover: "hover:bg-[#1877F2]",
    Icon: IconFacebook,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/94786692313",
    hover: "hover:bg-[#25D366]",
    Icon: IconWhatsApp,
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Contact
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Let us know what you are building
        </h1>
        <p className="max-w-3xl text-lg text-slate-600">
          Tell us about your roadmap, challenges, or upcoming launch. We will
          respond within two business days with the right people from
          engineering and design on the first call.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {/* Left info panel */}
        <div className="card p-6 space-y-5">
          <h2 className="text-2xl font-semibold text-slate-900">
            Get in touch
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Sociosqu viverra lectus placerat sem efficitur molestie vehicula
            cubilia leo etiam nam.
          </p>
          <div className="space-y-4">
            {contacts.map(({ label, value, href, Icon }) => (
              <div
                key={label}
                className="flex items-start gap-3 border-b border-slate-200/70 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-base text-slate-700 underline decoration-2 underline-offset-8"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="text-base text-slate-700">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-2">
            <div className="text-sm font-semibold text-slate-900">
              Follow our social media
            </div>
            <div className="mt-3 flex items-center gap-3">
              {social.map(({ name, href, hover, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white transition ${hover}`}
                  aria-label={name}
                >
                  <Icon className="h-5 w-5 text-slate-700 transition group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Right form panel */}
        <div className="card p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Send us a message
          </h2>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm sm:text-base font-medium text-slate-800">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm sm:text-base font-medium text-slate-800">
                Work email
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                  required
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm sm:text-base font-medium text-slate-800">
              Project overview
              <textarea
                name="project"
                placeholder="What are you looking to build or modernize?"
                rows={4}
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm sm:text-base font-medium text-slate-800">
              Timeline
              <select
                name="timeline"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
              >
                <option>As soon as possible</option>
                <option>1-3 months</option>
                <option>3-6 months</option>
                <option>6+ months</option>
              </select>
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
