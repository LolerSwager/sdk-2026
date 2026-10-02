import type { Metadata } from "next";
import LegalBreadcrumb from "@/components/LegalBreadcrumb";
import LegalHomeButton from "@/components/LegalHomeButton";

export const metadata: Metadata = {
  title: "Terms of use | LolerSwager",
  description: "Terms for using the LolerSwager community website.",
};

export default function Terms() {
  return (
    <main className="legal-page">
      <header className="legal-page__header">
        <LegalBreadcrumb />
        <div className="legal-page__title-row">
          <h1>Terms of use</h1>
          <LegalHomeButton />
        </div>
        <p>Last updated: October 2, 2026</p>
      </header>

      <div className="legal-page__sections">
        <section className="legal-section">
          <h2>About this site</h2>
          <p>
            LolerSwager is an independent community website with information
            and an invitation to its Discord community.
            The site does not currently offer purchases, paid subscriptions, or
            user accounts. These terms apply to your use of this website;
            Discord has separate terms for its service.
          </p>
        </section>

        <section className="legal-section">
          <h2>Using the site</h2>
          <p>
            Use the site lawfully and do not attempt to disrupt, overload,
            exploit, or gain unauthorized access to it. You are responsible
            for your device and for complying with Discord&apos;s terms and
            community rules when you follow the invite.
          </p>
        </section>

        <section className="legal-section">
          <h2>Information and availability</h2>
          <p>
            Discord activity counts are provided for convenience and may be
            incomplete, delayed, or unavailable. The invite and website may
            change or be unavailable without notice.
          </p>
          <p>
            The website is provided as available. It may be changed,
            interrupted, or removed without notice. Nothing in these terms
            limits rights or remedies that cannot legally be limited under
            applicable law.
          </p>
        </section>

        <section className="legal-section">
          <h2>Third-party services and intellectual property</h2>
          <p>
            Discord is an independent service. Its name, logo, and other
            materials belong to their respective owners. LolerSwager is not
            affiliated with or endorsed by Discord. Your use of Discord is
            governed by its own terms and privacy notice.
          </p>
          <p>
            The site&apos;s original text and design may not be republished in a
            misleading way. Third-party content remains subject to its
            owner&apos;s rights and license terms.
          </p>
        </section>

        <section className="legal-section">
          <h2>Liability</h2>
          <p>
            To the extent permitted by law, the operator is not responsible for
            outages, inaccurate activity counts, or issues caused by external
            services. This does not exclude
            liability where Danish or other mandatory consumer law does not
            allow it to be excluded.
          </p>
        </section>

        <section className="legal-section">
          <h2>Applicable law</h2>
          <p>
            Danish law applies to these terms, subject to any mandatory
            consumer protections and jurisdiction rules that apply to you.
            These terms do not remove rights granted by applicable EU or Danish
            law.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact and updates</h2>
          <p>
            Contact the operator through the
            <a href="https://discord.com/invite/uaCRvZU"> community Discord</a>.
            The operator may update these terms when the site changes. The date
            above indicates the latest revision.
          </p>
        </section>
      </div>

      <aside className="legal-callout">
        This is a general community-site draft, not legal advice. If the site is
        monetized, sells anything, or collects submissions, review these terms
        for Danish and EU consumer, marketing, and online-service requirements
        before launch.
      </aside>
    </main>
  );
}