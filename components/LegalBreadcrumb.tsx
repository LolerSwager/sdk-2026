import Link from "next/link";

export default function LegalBreadcrumb() {
  return (
    <nav className="legal-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">LOLERSWAGER</Link>
        </li>
        <li>LEGAL</li>
      </ol>
    </nav>
  );
}
