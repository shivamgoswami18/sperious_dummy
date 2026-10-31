"use client";

import { Button } from "./ui";
import { useHire } from "./HireContext";

export default function HomeHireButton({ children, className = "" }) {
  const { openHire } = useHire();
  return (
    <Button onClick={openHire} className={className}>
      {children}
    </Button>
  );
}
