"use client";

import { useHire } from "./HireContext";

export default function FooterHireButton() {
  const { openHire } = useHire();

  return (
    <button
      type="button"
      onClick={openHire}
      className="text-sm text-muted transition hover:text-accent"
    >
      Hire Developer
    </button>
  );
}
