import { Analytics } from "@vercel/analytics/next";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Privacy
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Privacy & data protection
        </h1>
        <p className="max-w-3xl text-lg text-slate-600">
          We respect the privacy of our clients and users. The summary below
          outlines how AstroSoft Technology handles data and protects
          confidentiality.
        </p>
      </div>
      <div className="card p-6 space-y-3 text-sm text-slate-700">
        <p>
          <strong>Data usage:</strong> We only collect information necessary to
          deliver services and support. We do not sell or share data with third
          parties for advertising.
        </p>
        <p>
          <strong>Security:</strong> Access is role-based and audited. We employ
          encryption in transit and at rest for client environments where
          applicable.
        </p>
        <p>
          <strong>Confidentiality:</strong> Engagements include NDAs by default.
          Artifacts and source code remain the property of our clients unless
          otherwise agreed.
        </p>
        <p>
          <strong>Questions:</strong> Reach us at{" "}
          <a
            href="mailto:privacy@astrosoft.tech"
            className="text-slate-900 underline decoration-2 underline-offset-8"
          >
            privacy@astrosoft.tech
          </a>
          .
        </p>
      </div>
    </div>
  );
}
