import Link from "next/link";
import { Container } from "./ui";

export default function PageHero({ title, text }) {
  return (
    <section className="border-b border-line bg-navy text-white">
      <div className="site-grid">
        <Container className="py-16 sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Sperious
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {text ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">{text}</p>
          ) : null}
          <div className="mt-6 flex items-center gap-2 text-sm text-white/55">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </div>
        </Container>
      </div>
    </section>
  );
}
