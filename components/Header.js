"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { Button, Container } from "./ui";
import { useHire } from "./HireContext";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const { openHire } = useHire();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled
          ? "border-b border-edge bg-paper/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-[78px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-surface ring-1 ring-edge-strong">
            <Image
              src="/assets/img/SPERIOUS S PNG.png"
              alt="Sperious"
              width={36}
              height={36}
              className="h-8 w-8 object-contain"
            />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Sperious
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-edge bg-surface p-1.5 lg:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-accent text-on-accent shadow-[0_0_18px_rgb(61_255_196_/_28%)]"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden lg:block">
            <Button onClick={openHire}>Hire Developer</Button>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-edge-strong bg-surface lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-ink transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-ink transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-ink transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        className={`overflow-hidden border-t border-edge bg-paper/95 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-transparent"
        }`}
      >
        <Container className="flex flex-col gap-2 py-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                pathname === item.href
                  ? "bg-accent text-on-accent"
                  : "bg-surface text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button onClick={openHire} className="mt-2 w-full">
            Hire Developer
          </Button>
        </Container>
      </div>
    </header>
  );
}
