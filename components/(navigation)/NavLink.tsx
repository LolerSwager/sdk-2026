"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${pathname === href ? "text-purple-600" : "text-gray-700"}`}
    >
      {children}
    </Link>
  );
}
