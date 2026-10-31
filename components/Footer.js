import Image from "next/image";
import Link from "next/link";
import { navLinks, services } from "@/lib/content";
import { Container } from "./ui";
import FooterHireButton from "./FooterHireButton";

export default function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden border-t border-edge bg-navy text-ink">
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-violet/15 blur-3xl" />
      <Container className="relative grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-surface ring-1 ring-edge-strong">
              <Image
                src="/assets/img/SPERIOUS S PNG.png"
                alt="Sperious"
                width={32}
                height={32}
                className="h-7 w-7 object-contain"
              />
            </span>
            <span className="font-display text-lg font-semibold">Sperious</span>
          </Link>
          <p className="max-w-xs text-sm leading-7 text-muted">
            One of India&apos;s leading web development and design companies.
            Research, development, automation, and system integration for
            software and hardware.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Services
          </h3>
          <ul className="space-y-2.5">
            {services.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition hover:text-accent"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Quick links
          </h3>
          <ul className="space-y-2.5">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <FooterHireButton />
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              Science City Rd,
              <br />
              Ahemdabad - 380060
            </li>
            <li>
              <a
                href="mailto:contact@sperious.co"
                className="transition hover:text-accent"
              >
                contact@sperious.co
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-edge-strong">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted sm:flex-row">
          <p>
            Copyright © 2016{" "}
            <Link href="/" className="text-ink hover:text-accent">
              Sperious
            </Link>
            . All Rights Reserved.
          </p>
          <div className="flex gap-5">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
