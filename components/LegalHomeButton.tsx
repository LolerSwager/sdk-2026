import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LegalHomeButton() {
  return (
    <Link href="/" className="legal-home-button">
      <ArrowLeft aria-hidden="true" size={16} />
      Back to home
    </Link>
  );
}
