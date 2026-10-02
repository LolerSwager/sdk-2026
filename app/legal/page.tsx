import type { Metadata } from "next";
import LegalBreadcrumb from "@/components/LegalBreadcrumb";
import LegalHomeButton from "@/components/LegalHomeButton";

export const metadata: Metadata = {
  title: "Legal notice | LolerSwager",
  description: "Operator and legal information for LolerSwager.",
};

export default function LegalNotice() {
  return (
    <main className="legal-page">
      <header className="legal-page__header">
        <LegalBreadcrumb />
        <div className="legal-page__title-row">
          <h1>Legal notice</h1>
          <LegalHomeButton />
        </div>
        <p>Last updated: October 2, 2026</p>
      </header>

      <div className="legal-page__sections">
        <section className="legal-section">
          <h2>Operator</h2>
          <p>Online name: LolerSwager</p>
          <p>Country: Denmark</p>
          <p>Website: LolerSwager.com</p>
          <p>
            Contact: <a href="https://discord.com/invite/uaCRvZU">community Discord</a>
          </p>
        </section>

        <section className="legal-section">
          <h2>Independent community</h2>
          <p>
            This is an independently operated gaming community website. It is
            not affiliated with, sponsored by, or endorsed by Discord.
            Discord&apos;s trademarks and materials belong to their respective
            owners.
          </p>
        </section>

        <section className="legal-section">
          <h2>Related policies</h2>
          <ul>
            <li><a href="/terms">Terms of use</a></li>
            <li><a href="/privacy">Privacy notice</a></li>
            <li><a href="/cookies">Cookie notice</a></li>
          </ul>
        </section>
      </div>

      <aside className="legal-callout">
        <strong>Operator details are incomplete.</strong> Add the operator&apos;s
        full legal name, a postal address, and a direct email address before
        treating this page as publication-ready. Add a CVR number and any other
        business disclosures if applicable. Whether Danish e-commerce and
        consumer-information rules apply depends on the actual activity,
        including whether it is offered commercially; get Denmark-specific
        advice if the site is monetized or used for a business.
      </aside>
    </main>
  );
}