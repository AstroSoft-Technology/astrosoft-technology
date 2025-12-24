import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 md:px-12">
        <div className="card rounded-[2.5rem] border border-slate-200/60 bg-white p-8 md:p-12 lg:p-16 shadow-sm">
          {/* NEW: "Let's Talk" Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 mb-12 border-b border-slate-100">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight max-w-2xl">
              Let’s talk about how to transform your business.
            </h2>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium text-slate-500">
                Ready to build great products?
              </p>
              <Link
                href="/contact"
                className="group flex items-center gap-4 text-3xl md:text-4xl font-bold text-slate-900 hover:text-sky-600 transition-colors"
              >
                Let’s Talk
                <span className="inline-block transform transition-transform group-hover:translate-x-2">
                  <svg
                    width="48"
                    height="24"
                    viewBox="0 0 48 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12H44M44 12L34 2M44 12L34 22"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>

              {/* Social Icons */}
              <div className="flex gap-4 mt-2">
                {[
                  {
                    name: "Email",
                    Icon: FaEnvelope,
                    href: "mailto:info@astrosofttech.dev",
                    hoverClass: "hover:bg-[#0F172A]",
                  },
                  {
                    name: "WhatsApp",
                    Icon: FaWhatsapp,
                    href: "https://wa.me/94786692313",
                    hoverClass: "hover:bg-[#25D366]",
                  },
                  {
                    name: "LinkedIn",
                    Icon: FaLinkedinIn,
                    href: "https://www.linkedin.com/company/astrosoft-technology/",
                    hoverClass: "hover:bg-[#0A66C2]",
                  },
                  {
                    name: "Facebook",
                    Icon: FaFacebookF,
                    href: "https://www.facebook.com/profile.php?id=61585606672302",
                    hoverClass: "hover:bg-[#1877F2]",
                  },
                  {
                    name: "Instagram",
                    Icon: FaInstagram,
                    href: "https://www.instagram.com/astrosoft_technology?igsh=Nnk4d2ppeGM1MGtw&utm_source=qr",
                    hoverClass: "hover:bg-[#E4405F]",
                  },
                ].map(({ name, Icon, href, hoverClass }, i) => (
                  <a
                    key={`${name}-${i}`}
                    href={href}
                    aria-label={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white ${hoverClass} transition-all`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Existing Footer Links Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-10">
            <div className="flex flex-col items-start sm:min-h-50">
              <Link href="/" className="mb-2">
                <Image
                  src="/images/Final-Logo-Light-bgremoved.png"
                  alt="AstroSoft Technology"
                  width={160}
                  height={160}
                  className="h-auto w-24 md:w-32 transform origin-left md:scale-110"
                />
              </Link>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">
                Product
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-slate-900 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <span className="text-slate-500">info@astrosofttech.dev</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">
                Connect
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Get in touch
                  </Link>
                </li>
                <li>
                  <span className="text-slate-500">+94 78 669 2313</span>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-12 mb-6 flex justify-center">
            <p className="text-center text-base md:text-lg font-bold text-slate-500 leading-relaxed">
              Building resilient, elegant software for the future.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100 pt-8 flex justify-center mb-6">
            <div className="flex items-center text-center">
              <p className="text-[11px] text-slate-400 font-medium">
                <span className="text-xs font-bold text-slate-900 tracking-tight mr-1.5">
                  AstroSoft{" "}
                  <span className="text-sky-600 font-semibold">
                    Technologies
                  </span>
                </span>
                © {new Date().getFullYear()} AstroSoft Technology. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
