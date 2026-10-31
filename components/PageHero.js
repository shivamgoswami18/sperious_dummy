import Link from "next/link";
import { Container } from "./ui";

export default function PageHero({ title, text }) {
  return (
    <section className="relative overflow-hidden border-b border-edge">
      <div className="mesh absolute inset-0" />
      <div className="orb left-[8%] top-6 h-40 w-40 bg-violet/30" />
      <div className="orb right-[12%] top-10 h-32 w-32 bg-accent/20" />
      <Container className="relative py-16 sm:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Sperious
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          {title}
        </h1>
        {text ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{text}</p>
        ) : null}
        <div className="mt-6 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <span>/</span>
          <span className="text-ink">{title}</span>
        </div>
      </Container>
    </section>
  );
}
