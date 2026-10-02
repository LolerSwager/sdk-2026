import type { Metadata } from "next";
import LegalBreadcrumb from "@/components/LegalBreadcrumb";
import LegalHomeButton from "@/components/LegalHomeButton";

export const metadata: Metadata = {
  title: "Cookie notice | LolerSwager",
  description: "Cookie and similar technology information for LolerSwager.",
};

export default function Cookies() {
  return (
    <main className="legal-page">
      <header className="legal-page__header">
        <LegalBreadcrumb />
        <div className="legal-page__title-row">
          <h1>Cookie notice</h1>
          <LegalHomeButton />
        </div>
        <p>Last updated: October 2, 2026</p>
      </header>

      <div className="legal-page__sections">
        <section className="legal-section">
          <h2>What this site uses</h2>
          <p>
            The current site does not intentionally use analytics, advertising,
            or social-media tracking cookies, and it has no consent or
            preference cookie because optional tracking is not enabled in the
            current version.
          </p>
        </section>

        <section className="legal-section">
          <h2>Hosting and external services</h2>
          <p>
            The hosting platform or security services may use strictly necessary
            storage or similar technologies to deliver and protect the site.
            Their presence and lifetime can depend on the production
            configuration. When you follow the Discord invite, Discord applies
            its own cookie and privacy practices.
          </p>
        </section>

        <section className="legal-section">
          <h2>Your choices</h2>
          <p>
            You can manage cookies through your browser settings. Blocking
            strictly necessary technologies may affect site delivery or
            security. If non-essential cookies or tracking tools are added in
            the future, this notice will be updated and any consent required by
            Danish and EU rules will be requested before they are activated.
          </p>
        </section>

        <section className="legal-section">
          <h2>Questions</h2>
          <p>
            Contact the operator through the
            <a href="https://discord.com/invite/uaCRvZU"> community Discord</a>.
            See the <a href="/privacy">privacy notice</a> for more information
            about personal data.
          </p>
        </section>
      </div>

      <aside className="legal-callout">
        Before launch, check the deployed site and hosting configuration for
        cookies and similar storage. If optional analytics, advertising, or
        tracking are enabled, add a compliant opt-in consent mechanism and a way
        to withdraw consent.
      </aside>
    </main>
  );
}
