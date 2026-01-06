"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { BubbleBackground } from "./components/BubbleBackground";

const stats = [
  { value: "20+", label: "Projects delivered" },
  { value: "2+", label: "Years experience" },
];

const highlights = [
  { title: "Strategy", copy: "We align technology with business goals." },
  { title: "Design", copy: "User-centric interfaces that delight." },
  { title: "Engineering", copy: "Scalable, maintainable code." },
];

const techIcons: Record<string, ReactElement> = {
  React: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <g stroke="currentColor" strokeWidth="1.6" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="4.2" ry="10" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      </g>
    </svg>
  ),
  "React Native": (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
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
  "Next.js": (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.2 8.2v7.6M10 10l6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Node: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <path
        d="M12 3 4 7v10l8 4 8-4V7l-8-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M9 12h6v3l-3 1.5L9 15v-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
  ),
  npm: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
      <rect x="3" y="7" width="18" height="10" rx="1.2" />
      <rect x="6" y="10" width="4" height="4" fill="#fff" />
      <rect x="12" y="10" width="3" height="4" fill="#fff" />
      <rect x="12" y="10" width="1" height="4" />
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <path
        d="M4 12c2-4 6-4 8 0 2 4 6 4 8 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 16c2-4 6-4 8 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Vue: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <path
        d="M3 6h5l4 7 4-7h5l-9 15L3 6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <path d="M6.5 6 12 15 17.5 6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  Angular: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <path
        d="M12 3 4 7l2 10 6 4 6-4 2-10-8-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M8.5 14h7L12 7 8.5 14Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7.5 10h2v4h-2m0 0v-4m7 0h2v4h-2m0 0v-4M12 10h2v4h-2v-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <path
        d="m5 18 3-12 3 6 2-4 6 10-14 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  "Google Cloud": (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <path
        d="M8 16a4 4 0 1 1 0-8c1.2 0 2.3.5 3 1.3a4 4 0 1 1 5 6.7"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M10 16h7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <path
        d="M4 14c3 3 13 3 16 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6 10h3m2 0h3m2 0h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Android: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <rect
        x="6"
        y="8"
        width="12"
        height="9"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 7l2-3M16 7l-2-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="10" cy="11" r="0.8" fill="currentColor" />
      <circle cx="14" cy="11" r="0.8" fill="currentColor" />
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <path
        d="M5 3h14l-1.5 16L12 21l-5.5-2L5 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <path d="M8 7h8M8 11h7M9 15h6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <path
        d="M5 3h14l-1.5 16L12 21l-5.5-2L5 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <path d="M8 7h8M8 11h8M8 15h7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  WordPress: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 8c1 0 2 2 3 6 1 3 2 5 2 5M7 12c0 2 1 4 2 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Laravel: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <path
        d="M4 8 10 5l4 2-6 3-4-2Zm6 3 4 2 6-3-4-2-6 3Zm0 0v6l4 2v-6l-4-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none">
      <path
        d="M5 13 14 4h5L7 16l3.9 4H15l-5.8-5.9 8.9-8.9"
        fill="currentColor"
      />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <path
        d="M12 3s5 4 5 10-5 8-5 8-5-2-5-8 5-10 5-10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M12 7v10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
      <path
        d="M6 16c0-3 3-6 6-6s6 3 6 6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 16c0-2 1.5-3 3-3s3 1 3 3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3 16h18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
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
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
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
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
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
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
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
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
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
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
      <path d="m12 5 8.5 14h-17z" />
    </svg>
  ),
  Expo: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none">
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
  Swift: (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none">
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9.2 7.3c1.6 1.9 3.6 3.6 5.1 4.4l-3.8-4.7c1.3 1.5 3.6 3.6 5.4 4.5 1.1 2.2.5 4-1.7 5-2.1.9-4.5.6-6.6-.6.9.1 2.1-.2 2.7-.6-1.7-.6-3.5-1.8-4.8-3.1C4.5 9.6 6 6.8 6 6.8s1.5 2.4 3.2 4z"
        fill="currentColor"
      />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none">
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2.4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 10h3m-1.5 0v6M14.2 12.4c0-1.2 1-2.4 2.8-2.4 1.5 0 2.8.9 2.8 2.3 0 1-.6 1.7-1.6 2-.9.3-1.4.6-1.4 1.2V16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none">
      <path
        d="M9.5 16c1 1.1 2.4 1.6 4 1.6 2 0 3.6-.9 3.6-2.3 0-1.3-1.4-1.8-3-2.1-1.6-.3-2.4-.8-2.4-1.6 0-.9 1-1.6 2.5-1.6 1.2 0 2.2.5 2.4 1.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M7.8 17.3c1 1.2 3.4 1.7 5.8 1.7 2.5 0 4.7-.6 5.8-1.7M12.4 5.5c0 1.3 2 2 2 3.3 0 .7-.5 1.4-1.6 2.1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  Go: (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none">
      <path
        d="M3 12h5.5M3 9h7M3 15h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.5 13.2c0-1.8 1.6-3.2 4.2-3.2 2.5 0 4.2 1.2 4.2 3.1 0 1.8-1.6 3.1-3.9 3.1-1.1 0-2-.3-2.7-.8l-.3 1.2h-1.5l.7-2.6c-.5-.6-.7-1.2-.7-1.8Zm5.5-.6c0-.9-.7-1.5-1.6-1.5s-1.6.6-1.6 1.5c0 .9.7 1.5 1.6 1.5s1.6-.6 1.6-1.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  "C#": (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none">
      <path
        d="M12 3.4 4 7.6v8.8l8 4.2 8-4.2V7.6L12 3.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M11 14.5c-.6.6-1.6.5-2.1-.1-.4-.5-.4-1.3 0-1.8.5-.6 1.5-.7 2.1-.1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M14.2 9.5v5M16.4 9.5v5M13.4 11.8h4M13.4 13.7h4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  ),
  "C++": (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none">
      <path
        d="M12 3.3 4 7.6v8.8l8 4.3 8-4.3V7.6L12 3.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M11.2 12.5c-.5.5-1.3.5-1.8 0-.5-.5-.5-1.3 0-1.8.5-.5 1.3-.5 1.8 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M14.2 10.2v4.6M12.6 12.5h3.2M17.2 10.2v4.6M15.6 12.5h3.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  ),
  Rust: (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9.2 15.8V8.2h4c1.2 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1H9.8m2.1-.1 1.9 3.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Lightning: (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="none">
      <path d="M13.5 3 6 13h4l-1.5 8 7.5-10h-4L13.5 3Z" fill="currentColor" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" fill="none">
      <path
        d="M8 34c-1.5 8 5 15 13 15h22c10 0 15-7 14-16-7.5-2-11-9-11-9-1.8 1.3-4.1 1.8-6.4 1.5H8Z"
        fill="currentColor"
        opacity="0.35"
      />
      <rect x="14" y="28" width="6" height="6" fill="currentColor" />
      <rect x="22" y="28" width="6" height="6" fill="currentColor" />
      <rect x="30" y="28" width="6" height="6" fill="currentColor" />
      <rect x="22" y="20" width="6" height="6" fill="currentColor" />
      <rect x="30" y="20" width="6" height="6" fill="currentColor" />
      <rect x="38" y="28" width="6" height="6" fill="currentColor" />
      <rect x="38" y="20" width="6" height="6" fill="currentColor" />
      <path
        d="M46 34c2.3-.1 3.6-1 4.3-2.3 1.1 1 2.8 1.8 5.2 1.8-1 6-6 9.5-13 9.5H21C12 43 9 36 10 34h36Z"
        fill="currentColor"
      />
    </svg>
  ),
  Kubernetes: (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="none">
      <path
        d="M11.9 2.5 4.3 6.4 3 12l1.3 5.6 7.6 3.9 7.6-3.9L21 12l-1.4-5.6-7.7-3.9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 6v12m0-12c2 0 3.5 1.7 3.5 4s-1.5 4-3.5 4-3.5-1.7-3.5-4S10 6 12 6Zm-5 7.5 10-.1M7 9l10 6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="none">
      <path
        d="m4.5 11.5 7-7 8 8-7 7-8-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <circle cx="10" cy="10" r="1.3" fill="currentColor" />
      <circle cx="14" cy="14" r="1.3" fill="currentColor" />
      <circle cx="14" cy="10" r="1.3" fill="currentColor" />
      <path
        d="M10 10.5v3M10 10.5h4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  Nginx: (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="none">
      <path
        d="M12 3 3 8.5v7L12 19l9-3.5v-7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M9 15V9l6 6V9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Feather: (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="none">
      <path
        d="M19 5 9 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M19 5c0 6-4 10-10 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14 5H5v9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5 12h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const techColors: Record<string, { bg: string; fg: string }> = {
  React: { bg: "#E0F2FE", fg: "#0EA5E9" },
  "React Native": { bg: "#E0F2FE", fg: "#0284C7" },
  "Next.js": { bg: "#F8FAFC", fg: "#0B1220" },
  Node: { bg: "#E6F7F0", fg: "#047857" },
  npm: { bg: "#FEE2E2", fg: "#B91C1C" },
  Tailwind: { bg: "#E0F7FA", fg: "#0EA5A3" },
  Vue: { bg: "#E8F5E9", fg: "#16A34A" },
  Angular: { bg: "#FEE2E2", fg: "#DC2626" },
  PHP: { bg: "#EDE9FE", fg: "#4C1D95" },
  Firebase: { bg: "#FFF7ED", fg: "#EA580C" },
  "Google Cloud": { bg: "#EFF6FF", fg: "#3B82F6" },
  AWS: { bg: "#FFF7ED", fg: "#7C2D12" },
  Android: { bg: "#ECFDF5", fg: "#059669" },
  HTML5: { bg: "#FFF1F2", fg: "#DC2626" },
  CSS3: { bg: "#EFF6FF", fg: "#2563EB" },
  WordPress: { bg: "#E0F2FE", fg: "#0369A1" },
  Laravel: { bg: "#FFE4E6", fg: "#E11D48" },
  Flutter: { bg: "#E0F2FE", fg: "#0284C7" },
  MongoDB: { bg: "#ECFDF5", fg: "#16A34A" },
  MySQL: { bg: "#E0E7FF", fg: "#4338CA" },
  Python: { bg: "#FFF7E6", fg: "#D97706" },
  Postgres: { bg: "#E0ECFF", fg: "#3B82F6" },
  Django: { bg: "#E9F5EE", fg: "#166534" },
  FastAPI: { bg: "#E6FFFA", fg: "#0F766E" },
  "Machine Learning": { bg: "#F1F5F9", fg: "#334155" },
  Vercel: { bg: "#F8FAFC", fg: "#0F172A" },
  Expo: { bg: "#F3F4F6", fg: "#111827" },
};

const work = [
  {
    name: "PlantGuard",
    link: "https://github.com/Shiwarne-Silva/PlantGuard",
    detail:
      "AI-powered plant disease detection app using CNN image classification to identify crop diseases in real-time, helping farmers protect their yields.",
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
    name: "DS Motors",
    link: "https://www.dsmotors.lk/",
    detail:
      "Garage workflow site for bookings and service visibility, delivered with a lightweight React front end on Vercel.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0' y1='1' x2='1' y2='0'%3E%3Cstop offset='0%' stop-color='%230ea5e9'/%3E%3Cstop offset='100%' stop-color='%2310b981'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='240' fill='url(%23g3)'/%3E%3Ccircle cx='200' cy='120' r='90' fill='%23ffffff15'/%3E%3Ctext x='38' y='205' fill='%23ffffff' font-size='24' font-family='Inter,Arial' font-weight='600'%3EDS Motors%3C/text%3E%3C/svg%3E",
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

const marqueeLogos = [
  "React.js",
  "vue.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Django",
  "FastAPI",
  "Go",
  "Flutter",
  "angular",
  "laravel",
  "java",
  "javascript",
  "android",
  "firebase",
  "vercel",
  "vite.js",
  "photoshop",
  "lighrooom",
  "figma",
  "adobe xd",
  "html",
  "React Native",
  "Swift",
  "Kotlin",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "GitHub",
  "Jenkins",
  "GitLab",
  "Postman",
  "GitHub Copilot",
  "ChatGPT",
  "gemini ai",
];

const deviconClasses: Record<string, string> = {
  "React.js": "react-original",
  "vue.js": "vuejs-plain",
  "Next.js": "nextjs-original",
  TypeScript: "typescript-plain",
  "Tailwind CSS": "tailwindcss-plain",
  "Node.js": "nodejs-plain",
  Python: "python-plain",
  Django: "django-plain",
  FastAPI: "fastapi-plain",
  Go: "go-plain",
  Flutter: "flutter-plain",
  angular: "angularjs-plain",
  laravel: "laravel-plain",
  java: "java-plain",
  javascript: "javascript-plain",
  android: "android-plain",
  firebase: "firebase-plain",
  vercel: "vercel-original",
  "vite.js": "vitejs-plain",
  photoshop: "photoshop-plain",
  lighrooom: "lightroom-plain",
  figma: "figma-plain",
  "adobe xd": "xd-plain",
  html: "html5-plain",
  "React Native": "react-original",
  Swift: "swift-plain",
  Kotlin: "kotlin-plain",
  PostgreSQL: "postgresql-plain",
  MySQL: "mysql-plain",
  MongoDB: "mongodb-plain",
  Redis: "redis-plain",
  AWS: "amazonwebservices-original",
  "Microsoft Azure": "azure-plain",
  "Google Cloud": "googlecloud-plain",
  Docker: "docker-plain",
  Kubernetes: "kubernetes-plain",
  GitHub: "github-original",
  Jenkins: "jenkins-line",
  GitLab: "gitlab-plain",
  Postman: "postman-plain",
};

// Minimal monochrome icons for tools not available in Devicon
const customMarqueeIcons: Record<string, ReactElement> = {
  "GitHub Copilot": (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none">
      <rect
        x="3"
        y="8"
        width="18"
        height="9"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="8.5" cy="12.5" r="1.6" fill="currentColor" />
      <circle cx="15.5" cy="12.5" r="1.6" fill="currentColor" />
      <path
        d="M7 8V6a5 5 0 0 1 10 0v2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  ChatGPT: (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none">
      <path
        d="M12 4.5c2.2 0 4 1.8 4 4 0 .3 0 .6-.1.8 1.1.6 1.9 1.8 1.9 3.1 0 2-1.6 3.6-3.6 3.6h-6.1A3.5 3.5 0 0 1 4.5 12c0-1.2.6-2.2 1.6-2.9A4 4 0 0 1 12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 9.5 12 7m-1 4.5 4-2.5M8.2 13.8l3.8 2.2m3-2.2-3.8 2.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  "gemini ai": (
    <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none">
      <circle cx="9" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
};

const fallbackAbbr = (label: string) =>
  label
    .replace(/[^A-Za-z0-9\s.-]/g, "")
    .split(/[\s.-]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

export default function Home() {
  const [workIndex, setWorkIndex] = useState(0);
  const resetTimeout = useRef<NodeJS.Timeout | null>(null);

  const _visibleWork = useMemo(() => {
    if (work.length <= 3) return work;
    return [0, 1, 2].map((offset) => work[(workIndex + offset) % work.length]);
  }, [workIndex]);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWorkIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Clean up any pending reset timeouts
  useEffect(() => {
    return () => {
      if (resetTimeout.current) clearTimeout(resetTimeout.current);
    };
  }, []);

  const handleTransitionEnd = () => {
    setWorkIndex((prev) => {
      if (prev >= work.length) return prev - work.length;
      if (prev < 0) return prev + work.length;
      return prev;
    });
  };

  return (
    <div className="flex flex-col gap-16">
      {/* Mobile logo section */}
      <div className="md:hidden flex justify-center pt-1">
        <Image
          src="/images/Final-Logo-Light-bgremoved.png"
          alt="AstroSoft Technology"
          width={160}
          height={160}
          priority
          className="h-auto w-40"
        />
      </div>

      <section className="card overflow-hidden px-8 py-10 sm:px-10 animate-fade-up relative">
        <BubbleBackground interactive={true} className="absolute inset-0 z-0" />
        <div className="relative z-10 flex flex-wrap items-center gap-3 text-sm text-slate-700">
          <span className="pill">Enterprise-grade builds</span>
          <span>
            <span className="font-semibold text-slate-900">AstroSoft</span>{" "}
            <span className="font-semibold text-sky-500">Technologies</span>
          </span>
        </div>
        <div className="relative z-10 mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
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
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-600 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-300"
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
            <div className="card relative overflow-hidden p-4 md:p-6 bg-linear-to-br from-slate-50 to-slate-100">
              <div className="relative space-y-4 text-slate-900">
                <div className="text-center mb-6 animate-fade-up">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-1">
                    WHAT WE DO
                  </h3>
                  <p className="text-lg font-semibold text-slate-900">
                    Our Work Process
                  </p>
                </div>

                {/* Step 01 - Right aligned */}
                <div
                  className="relative flex items-center justify-end animate-fade-up group"
                  style={{ animationDelay: "100ms" }}
                >
                  <div className="relative bg-linear-to-r from-sky-500 to-sky-600 text-white rounded-xl p-4 max-w-xs shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-sky-700 text-white font-bold text-lg shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl">
                      01
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white/30 group-hover:rotate-12">
                          <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">
                          Share Your Vision
                        </h4>
                      </div>
                      <p className="text-xs text-white/90 leading-relaxed transition-opacity duration-300 group-hover:text-white">
                        Contact us with your project idea and requirements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                <div className="flex justify-center animate-soft-pulse">
                  <svg
                    className="h-8 w-8 text-slate-300 transition-all duration-300 hover:text-slate-500 hover:scale-125"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>

                {/* Step 02 - Left aligned */}
                <div
                  className="relative flex items-center justify-start animate-fade-up group"
                  style={{ animationDelay: "200ms" }}
                >
                  <div className="relative bg-linear-to-r from-teal-500 to-teal-600 text-white rounded-xl p-4 max-w-xs shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 text-white font-bold text-lg shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl">
                      02
                    </div>
                    <div className="mr-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white/30 group-hover:rotate-12">
                          <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">
                          We Plan & Build
                        </h4>
                      </div>
                      <p className="text-xs text-white/90 leading-relaxed transition-opacity duration-300 group-hover:text-white">
                        Our team designs and develops with regular updates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                <div className="flex justify-center animate-soft-pulse">
                  <svg
                    className="h-8 w-8 text-slate-300 transition-all duration-300 hover:text-slate-500 hover:scale-125"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>

                {/* Step 03 - Right aligned */}
                <div
                  className="relative flex items-center justify-end animate-fade-up group"
                  style={{ animationDelay: "300ms" }}
                >
                  <div className="relative bg-linear-to-r from-emerald-500 to-emerald-600 text-white rounded-xl p-4 max-w-xs shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white font-bold text-lg shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl">
                      03
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white/30 group-hover:rotate-12">
                          <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">
                          Launch & Support
                        </h4>
                      </div>
                      <p className="text-xs text-white/90 leading-relaxed transition-opacity duration-300 group-hover:text-white">
                        We deliver and provide ongoing support reliably.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="pt-4 text-center animate-fade-up"
                  style={{ animationDelay: "400ms" }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-2 hover:scale-110 active:scale-95"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="animate-fade-up" style={{ animationDelay: "60ms" }}>
        <div className="logo-marquee-viewport">
          <div className="logo-marquee-track">
            {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map(
              (name, index) => {
                return (
                  <div key={`${name}-${index}`} className="logo-marquee-item">
                    <span className="logo-marquee-icon">
                      {customMarqueeIcons[name] ? (
                        customMarqueeIcons[name]
                      ) : deviconClasses[name] ? (
                        <i
                          className={`devicon-${deviconClasses[name]}`}
                          aria-hidden
                        />
                      ) : (
                        <span className="logo-fallback-dot" aria-hidden>
                          {fallbackAbbr(name)}
                        </span>
                      )}
                      <span className="sr-only">{name}</span>
                    </span>
                  </div>
                );
              }
            )}
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
              onClick={() => setWorkIndex((prev) => prev - 1)}
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
              onClick={() => setWorkIndex((prev) => prev + 1)}
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
        <div className="mt-6 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${(workIndex * 100) / 3}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {[...work, ...work.slice(0, 3)].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="shrink-0 w-full md:w-1/3 px-2"
              >
                <div className="rounded-2xl border border-slate-200 bg-white p-5 h-full">
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
                      {item.tech.map((tag) => {
                        const colors = techColors[tag] ?? {
                          bg: "#F1F5F9",
                          fg: "#334155",
                        };
                        return (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                            style={{
                              backgroundColor: colors.bg,
                              color: colors.fg,
                            }}
                          >
                            {techIcons[tag] ?? (
                              <span className="inline-block h-3 w-3 rounded-full bg-slate-400" />
                            )}
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
