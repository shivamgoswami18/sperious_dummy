"use client";

import { HireProvider } from "./HireContext";
import HireModal from "./HireModal";
import ToTop from "./ToTop";

export default function Providers({ children }) {
  return (
    <HireProvider>
      {children}
      <HireModal />
      <ToTop />
    </HireProvider>
  );
}
