"use client";

import { HireProvider } from "./HireContext";
import { ThemeProvider } from "./ThemeContext";
import HireModal from "./HireModal";
import ToTop from "./ToTop";

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <HireProvider>
        {children}
        <HireModal />
        <ToTop />
      </HireProvider>
    </ThemeProvider>
  );
}
