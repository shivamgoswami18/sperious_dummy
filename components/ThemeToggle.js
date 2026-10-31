"use client";

import { useTheme } from "./ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className={`theme-toggle inline-flex items-center rounded-full border border-edge bg-surface p-1 ${className}`}
    >
      <span className="theme-sun flex h-8 w-8 items-center justify-center rounded-full text-muted">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 3v1.6M12 19.4V21M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3 12h1.6M19.4 12H21M4.9 19.1 6 18M18 6l1.1-1.1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="theme-moon flex h-8 w-8 items-center justify-center rounded-full text-muted">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M16.5 13.2A6.4 6.4 0 0 1 10.8 7.5 5.8 5.8 0 1 0 16.5 13.2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
