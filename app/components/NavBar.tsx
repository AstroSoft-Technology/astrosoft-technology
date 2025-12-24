"use client";

import React from "react";
import { useEffect, useState, type SVGProps } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type IconProps = SVGProps<SVGSVGElement>;

function IconHome(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3 10.5L12 4l9 6.5V21a1 1 0 0 1-1 1h-6v-6H10v6H4a1 1 0 0 1-1-1v-10.5Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function IconTools(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M21 7.5a4.5 4.5 0 0 1-6.364 0L4.5 17.636a2 2 0 1 0 2.828 2.828L17.464 10.5A4.5 4.5 0 0 1 21 7.5Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6l-1.5-1.5a2.121 2.121 0 0 0-3 3L9 9"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBriefcase(props: IconProps) {
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
        y="7"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth={1.8}
      />
      <path
        d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path
        d="M3 12h18"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconInfo(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M12 10v7"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <circle cx="12" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

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

const navItems: {
  label: string;
  href: string;
  Icon: React.ComponentType<IconProps>;
}[] = [
  { label: "Home", href: "/", Icon: IconHome },
  { label: "Services", href: "/services", Icon: IconTools },
  { label: "Careers", href: "/careers", Icon: IconBriefcase },
  { label: "About", href: "/about", Icon: IconInfo },
];

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const [mobileHidden, setMobileHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;
    const handler = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;

      // Check if near the bottom of the page
      const isNearBottom =
        window.innerHeight + y >= document.body.scrollHeight - 100;

      if (y > 80 && goingDown) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      // Mobile navbar: hide when scrolling down or near bottom
      if ((y > 80 && goingDown) || isNearBottom) {
        setMobileHidden(true);
      } else if (!goingDown) {
        // Only show when scrolling UP
        setMobileHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`hidden md:block fixed inset-x-0 top-0 z-40 transition-transform duration-300 ease-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-24 rounded-full bg-gradient-to-r from-slate-50 to-slate-100/50 px-4 md:px-6 shadow-sm border border-slate-200/50 backdrop-blur-sm bg-white/80">
            {/* Left: logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/Final-Logo-Light-bgremoved.png"
                  alt="AstroSoft Technology"
                  width={120}
                  height={120}
                  priority
                  className="h-auto w-16 md:w-24"
                />
              </Link>
            </div>

            {/* Center: desktop nav */}
            <div className="hidden lg:flex items-center justify-center gap-10">
              <nav className="flex items-center gap-10">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right: CTA */}
            <div className="flex items-center justify-end gap-3 md:gap-5">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 md:px-7 md:py-2.5 md:text-sm"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav
        className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ease-out ${
          mobileHidden ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto max-w-md px-4 pb-4">
          <div className="flex items-center justify-around rounded-full bg-slate-900 px-2 py-2 shadow-lg">
            {navItems.map(({ href, label, Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="flex flex-col items-center gap-1 px-3 py-2 transition hover:opacity-90"
                  aria-current={active ? "page" : undefined}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      active
                        ? "bg-white text-slate-900"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-medium text-white">
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
