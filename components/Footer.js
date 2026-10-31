import Image from "next/image";
import Link from "next/link";
import { navLinks, services } from "@/lib/content";
import { Container } from "./ui";
import FooterHireButton from "./FooterHireButton";

export default function Footer() {
  return (
    <footer className="mt-8 bg-navy text-white">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
            <Image
              src="/assets/img/SPERIOUS S PNG.png"
              alt="Sperious"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="font-display text-lg font-semibold">Sperious</span>
          </Link>
          <p className="max-w-xs text-sm leading-7 text-white/65">
            One of India&apos;s leading web development and design companies.
            Research, development, automation, and system integration for
            software and hardware.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
            Services
          </h3>
          <ul className="space-y-2.5">
            {services.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
            Quick links
          </h3>
          <ul className="space-y-2.5">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition hover:text-white"
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
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              Science City Rd,
              <br />
              Ahemdabad - 380060
            </li>
            <li>
              <a
                href="mailto:contact@sperious.co"
                className="transition hover:text-white"
              >
                contact@sperious.co
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            Copyright © 2016{" "}
            <Link href="/" className="text-white/80 hover:text-white">
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
