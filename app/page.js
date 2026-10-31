import Image from "next/image";
import Link from "next/link";
import HomeHireButton from "@/components/HomeHireButton";
import Testimonials from "@/components/Testimonials";
import { Button, Container, SectionHeading } from "@/components/ui";
import {
  features,
  processSteps,
  services,
  stats,
  technologies,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="site-grid absolute inset-0 opacity-70" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div>
            <p className="animate-rise mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Software studio · Ahmedabad
            </p>
            <h1 className="animate-rise delay-1 font-display text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
              Who we are
            </h1>
            <p className="animate-rise delay-2 mt-6 max-w-xl text-lg leading-8 text-muted">
              We&apos;re a digital metamorphosis software development company
              that provides leading-edge engineering answers predicated on the
              customers necessities.
            </p>
            <div className="animate-rise delay-3 mt-8 flex flex-wrap gap-3">
              <Button href="/contactUs">Get in Touch</Button>
              <Button href="/service" variant="ghost">
                Explore services
              </Button>
            </div>
          </div>
          <div className="animate-rise delay-4 relative overflow-hidden rounded-[2rem] border border-line bg-navy p-8 text-white shadow-card">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Delivery model
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              From idea to deployed product
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Dedicated developers, web apps, and mobile products — designed
              around your stack, timeline, and business outcomes.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5"
                >
                  <p className="font-display text-2xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-xs text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A clear path from brief to hire"
            text="Four steps to get the right developers on your project."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="font-display text-sm font-semibold text-gold">
                  {item.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container className="grid gap-5 lg:grid-cols-3">
          {features.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-line bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="font-display text-2xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              <div className="mt-6">
                {item.action === "hire" ? (
                  <HomeHireButton>{item.actionLabel}</HomeHireButton>
                ) : (
                  <Button href={item.href} variant="ghost">
                    {item.actionLabel}
                  </Button>
                )}
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-card">
            <Image
              src="/assets/img/it-services-home/choose.png"
              alt="Sperious team at work"
              width={720}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="About us"
              title="We've been thriving for 5+ years in tech"
              align="left"
            />
            <p className="mt-6 text-left text-base leading-8 text-muted lg:max-w-xl">
              Sperious is one of Indian leading companies in the field of Web
              Development and Designing Company. The company offers a large
              variety of services, including research, development and
              technological works automation, distribution, development and
              system integration of software and hardware.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {technologies.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/aboutUs" className="mt-8">
              View more about us
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Our services"
            title="From initial design to deployment, anywhere"
            text="Top-tier digital products from a web and mobile development company with a focus on your online business profitability and ownership."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl border border-line bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-accent group-hover:gap-2">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-white">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="Teams that trusted Sperious"
            light
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </Container>
      </section>
    </>
  );
}
