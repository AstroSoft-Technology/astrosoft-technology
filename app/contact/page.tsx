const contacts = [
  {
    label: "Email",
    value: "astrosofttechnology@gmail.com",
    href: "mailto:astrosofttechnology@gmail.com",
  },
  { label: "Phone", value: "+94 78 669 2313", href: "tel:+94786692313" },
  {
    label: "WhatsApp",
    value: "+94 78 669 2313",
    href: "https://wa.me/94786692313",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/company/astrosoft-technology",
    href: "https://www.linkedin.com/company/astrosoft-technology/",
  },
  {
    label: "Facebook",
    value: "facebook.com/astrosoft-technology",
    href: "https://www.facebook.com/profile.php?id=61585606672302 ",
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
        <div className="card p-6 lg:col-span-2">
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
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
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              Project overview
              <textarea
                name="project"
                placeholder="What are you looking to build or modernize?"
                rows={4}
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
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
        <div className="card p-6 space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Direct lines
            </h2>
            <p className="text-sm text-slate-600">
              Prefer a quick note? Reach out directly and we will follow up.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            {contacts.map((item) => (
              <li key={item.label} className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-slate-900 underline decoration-2 underline-offset-8"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-slate-900">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
