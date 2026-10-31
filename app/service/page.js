import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata = {
  title: "Services | Sperious",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        title="Services"
        text="Web and mobile engineering across the stacks our clients actually ship."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-3xl border border-edge bg-surface p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                0{index + 1}
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-accent">
                Read more →
              </span>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
