"use client";

import { createContext, useCallback, useContext, useState } from "react";

const HireContext = createContext({
  isOpen: false,
  openHire: () => {},
  closeHire: () => {},
});

export function HireProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openHire = useCallback(() => setIsOpen(true), []);
  const closeHire = useCallback(() => setIsOpen(false), []);

  return (
    <HireContext.Provider value={{ isOpen, openHire, closeHire }}>
      {children}
    </HireContext.Provider>
  );
}

export function useHire() {
  return useContext(HireContext);
}
