"use client";

import { useState, type SVGProps } from "react";
import Link from "next/link";

type IconProps = SVGProps<SVGSVGElement>;

// --- Icons ---
function IconMail(props: IconProps) {
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

function IconPhone(props: IconProps) {
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

function IconLinkedIn(props: IconProps) {
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

function IconFacebook(props: IconProps) {
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

function IconWhatsApp(props: IconProps) {
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

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4.61.24 1.04.52 1.5.98.46.46.74.89.98 1.5.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43-.24.61-.52 1.04-.98 1.5-.46.46-.89.74-1.5.98-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4-.61-.24-1.04-.52-1.5-.98-.46-.46-.74-.89-.98-1.5-.16-.46-.35-1.26-.4-2.43-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43.24-.61.52-1.04.98-1.5.46-.46.89-.74 1.5-.98.46-.16 1.26-.35 2.43-.4 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.39-2.13-.67-.67-1.34-1.08-2.13-1.39-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
    </svg>
  );
}

const contacts = [
  {
    label: "Email",
    value: "info@astrosofttech.dev",
    href: "mailto:info@astrosofttech.dev",
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
    name: "Instagram",
    href: "https://www.instagram.com/astrosoft_technology?igsh=Nnk4d2ppeGM1MGtw&utm_source=qr",
    hover: "hover:bg-[#E4405F]",
    Icon: IconInstagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/94786692313",
    hover: "hover:bg-[#25D366]",
    Icon: IconWhatsApp,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });

  const [errors, setErrors] = useState({ email: "", phone: "" });

  // Validations
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\+?[0-9\s\-]{7,15}$/.test(phone);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear errors as user types
    if (name === "email") setErrors((prev) => ({ ...prev, email: "" }));
    if (name === "phone") setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid work email.",
      }));
      hasError = true;
    }
    if (!validatePhone(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid phone number.",
      }));
      hasError = true;
    }

    if (hasError) return;

    const recipient = "info@astrosofttech.dev";
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Customer Details:\n------------------\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nProject Overview:\n------------------\n${formData.project}`;

    // Use window.open to ensure it triggers properly in all browsers
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col gap-12">
      <section className="space-y-4 animate-fade-up">
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

      <section
        className="grid gap-6 lg:grid-cols-3 animate-fade-up"
        style={{ animationDelay: "80ms" }}
      >
        {/* Left info panel */}
        <div
          className="card p-6 space-y-5 animate-fade-up"
          style={{ animationDelay: "110ms" }}
        >
          <h2 className="text-2xl font-semibold text-slate-900">
            Get in touch
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Building resilient, elegant software for the future.
          </p>
          <div className="space-y-4">
            {contacts.map(({ label, value, href, Icon }, index) => (
              <div
                key={label}
                className="flex items-start gap-3 border-b border-slate-200/70 pb-4 last:border-0 last:pb-0 animate-fade-up"
                style={{ animationDelay: `${index * 80 + 140}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {label}
                  </div>
                  <a
                    href={href}
                    className="text-base text-slate-700 underline decoration-2 underline-offset-8"
                  >
                    {value}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-2">
            <div className="text-sm font-semibold text-slate-900">
              Follow our social media
            </div>
            <div className="mt-3 flex items-center gap-3">
              {social.map(({ name, href, hover, Icon }, index) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white transition ${hover} animate-fade-up`}
                  style={{ animationDelay: `${index * 70 + 180}ms` }}
                  aria-label={name}
                >
                  <Icon className="h-5 w-5 text-slate-700 transition group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="card p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Send us a message
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Work Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@company.com"
                  className={`rounded-xl border ${
                    errors.email ? "border-red-500" : "border-slate-200"
                  } px-4 py-3 text-sm outline-none focus:border-slate-400`}
                  required
                />
                {errors.email && (
                  <span className="text-xs text-red-500 mt-1 font-medium">
                    {errors.email}
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+94 XX XXX XXXX"
                  className={`rounded-xl border ${
                    errors.phone ? "border-red-500" : "border-slate-200"
                  } px-4 py-3 text-sm outline-none focus:border-slate-400`}
                  required
                />
                {errors.phone && (
                  <span className="text-xs text-red-500 mt-1 font-medium">
                    {errors.phone}
                  </span>
                )}
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              Project overview
              <textarea
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                placeholder="What are you looking to build?"
                rows={5}
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
                required
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 active:scale-95"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
