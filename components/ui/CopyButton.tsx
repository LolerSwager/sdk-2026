"use client";

import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ copy }: { copy: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(copy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <span className="flex group w-fit">
      <code className="px-3 py-2 border border-gray-600 rounded-l-md transition-colors group-hover:border-sky-500">
        {copy}
      </code>

      <button
        onClick={handleCopy}
        className="bg-sky-500 p-2 rounded-r-md cursor-pointer flex gap-2"
      >
        {copied ? (
          <>
            copied
            <CopyCheck />
          </>
        ) : (
          <>
            Copy
            <Copy />
          </>
        )}
      </button>
    </span>
  );
}
