import type { Metadata } from "next";
import LegalBreadcrumb from "@/components/LegalBreadcrumb";
import LegalHomeButton from "@/components/LegalHomeButton";

export const metadata: Metadata = {
  title: "Privacy notice | LolerSwager",
  description: "How the LolerSwager community site handles personal data.",
};

export default function Privacy() {
  return (
    <main className="legal-page">
      <header className="legal-page__header">
        <LegalBreadcrumb />
        <div className="legal-page__title-row">
          <h1>Privacy notice</h1>
          <LegalHomeButton />
        </div>
        <p>Last updated: October 2, 2026</p>
      </header>

      <div className="legal-page__sections">
        <section className="legal-section">
          <h2>Who is responsible</h2>
          <p>
            The site operator, known online as LolerSwager and based in Denmark,
            is responsible for personal data processed through this site. The
            operator&apos;s full legal identity and postal address have not yet
            been supplied. Contact is currently available through the
            <a href="https://discord.com/invite/uaCRvZU"> community Discord</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>Data this site handles</h2>
          <p>
            The site has no account system, contact form, or user profile. The
            hosting provider may process standard request and security logs,
            which can include your IP address, request time, browser details,
            and requested page.
          </p>
          <p>
            To show Discord activity counts, the site server requests the
            public Discord widget response. It can include public member
            identifiers and activity information; this site uses it to
            calculate aggregate counts and does not display member names on
            the homepage. Widget data may be cached briefly by the site
            platform. This request is made by the site server, not directly by
            your browser.
          </p>
        </section>

        <section className="legal-section">
          <h2>Purpose and legal basis</h2>
          <p>
            Request logs are used to deliver the site, prevent abuse, and keep
              the service secure. Public Discord widget information is used to
              provide the community counts you request by visiting the site.
              Where personal data is involved, the intended basis is the operator&apos;s
            legitimate interest in operating and securing this community site
            (GDPR Article 6(1)(f)), balanced against the rights of affected
            people.
          </p>
        </section>

        <section className="legal-section">
          <h2>Providers and international processing</h2>
          <p>
            The site is hosted on Vercel, and Discord provides the public
            community data shown here. Each provider acts under its own terms
            and privacy information. If you follow the Discord invite, Discord
            receives information such as your IP address and browser details
            directly. Provider processing locations and any international
            transfer safeguards depend on the services and account
            configuration in use.
          </p>
        </section>

        <section className="legal-section">
          <h2>Retention</h2>
          <p>
            The site does not maintain user accounts or a profile database.
            Short-lived public widget responses may be cached to serve the
            homepage. Hosting and security log retention is controlled by the
            hosting provider and its current configuration; the operator should
            review and set the shortest period appropriate for security needs.
          </p>
        </section>

        <section className="legal-section">
          <h2>Your rights</h2>
          <p>
            Under the GDPR, you may have rights to access, correct, erase, or
            restrict personal data, to object to processing based on legitimate
            interests, and to receive portable data where applicable. Contact
            the operator through the community Discord to make a request. You
              may also complain to the Danish Data Protection Agency (Datatilsynet)
              at <a href="https://www.datatilsynet.dk/english">datatilsynet.dk</a>.
              If your request concerns data held by Discord or the hosting
              provider, you may need to contact that provider directly.
          </p>
        </section>

        <section className="legal-section">
          <h2>Changes</h2>
          <p>
            This notice may change when the site or its providers change. The
            date above shows the latest revision.
          </p>
        </section>
      </div>

      <aside className="legal-callout">
        Before relying on this notice, the operator must add a full legal name,
        postal address, and direct contact email, confirm the hosting log
        retention and data-region settings, and verify that the described data
        flows still match the deployed site.
      </aside>
    </main>
  );
}