import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SDK",
  description: "Privacy information for LolerSwager.com.",
};

const sections = [
  {
    title: "Information this site handles",
    content: (
      <>
        <p>
          This site does not ask you to create an account or submit personal
          information through a form. Its pages may request public information
          from Discord, such as server name and activity counts, and from Steam,
          such as game details. Those requests are made by the site to display
          its features.
        </p>
        <p>
          When you visit, the hosting provider may process technical request
          data such as your IP address, browser type, and the time of the
          request to deliver and secure the site. The provider&apos;s own
          privacy terms explain how it handles that information.
        </p>
      </>
    ),
  },
  {
    title: "Third-party services",
    content: (
      <p>
        Discord and Steam are independent services. If you follow a link to
        them, or use a feature that requests their data, they may receive
        information as described in their own privacy policies. This site does
        not control their data practices.
      </p>
    ),
  },
  {
    title: "Cookies and analytics",
    content: (
      <p>
        The site currently does not use analytics or advertising trackers, and
        its application code does not set cookies for tracking. Hosting or
        third-party services may use their own necessary technologies when you
        access their services.
      </p>
    ),
  },
  {
    title: "Storage and security",
    content: (
      <p>
        The site does not provide an account or profile feature. Technical logs
        may be retained by the hosting provider for its operational and security
        purposes; retention depends on that provider. No internet transmission
        or storage method can be guaranteed completely secure.
      </p>
    ),
  },
  {
    title: "Children and policy changes",
    content: (
      <p>
        This site is not intended to collect personal information from children.
        This policy may be updated as the site changes; the date at the top
        indicates when it was last revised.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <p>
        For privacy questions, contact the site operator through the Discord
        community link on the home page.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16">
      <header className="mb-10 border-b border-zinc-300 pb-8 dark:border-zinc-700">
        <p className="mb-3 font-mono text-sm uppercase text-zinc-500">
          LolerSwager.com
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-zinc-500">
          Last updated: October 2, 2026
        </p>
      </header>

      <div className="space-y-8">
        {sections.map(({ title, content }) => (
          <section className="space-y-3" key={title}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="space-y-3 leading-7 text-zinc-700 dark:text-zinc-300">
              {content}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
