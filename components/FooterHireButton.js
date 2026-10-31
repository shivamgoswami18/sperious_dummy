"use client";

import { useHire } from "./HireContext";

export default function FooterHireButton() {
  const { openHire } = useHire();

  return (
    <button
      type="button"
      onClick={openHire}
      className="text-sm text-white/75 transition hover:text-white"
    >
      Hire Developer
    </button>
  );
}
