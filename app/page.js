import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import HeroVisual from "@/components/HeroVisual";
import HomeHireButton from "@/components/HomeHireButton";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import { Button, Container, SectionHeading } from "@/components/ui";
import { features, processSteps, services, stats, technologies } from "@/lib/content";

const featureTones = {
  mint: "from-accent/20 via-surface to-transparent hover:shadow-[0_0_40px_rgb(61_255_196_/_14%)]",
  violet: "from-violet/25 via-surface to-transparent hover:shadow-[0_0_40px_rgb(124_108_255_/_16%)]",
  coral: "from-[#ff6b6b]/20 via-surface to-transparent hover:shadow-[0_0_40px_rgb(255_107_107_/_14%)]",
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mesh absolute inset-0" />
        <div className="orb -left-16 top-10 h-72 w-72 bg-violet/30" />
        <div className="orb right-0 top-24 h-80 w-80 bg-accent/18" />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="animate-rise mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Software studio · Ahmedabad
            </p>
            <h1 className="animate-rise delay-1 font-display text-5xl font-semibold leading-[1.02] sm:text-7xl">
              Build products people <span className="glow-text">actually love</span> to use
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
          <div className="animate-rise delay-4">
            <HeroVisual />
          </div>
        </Container>
      </section>

      <section className="relative z-10 -mt-4">
        <Container>
          <div className="grid grid-cols-2 overflow-hidden rounded-[2rem] border border-edge-strong bg-surface md:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`px-5 py-7 text-center ${
                  index < stats.length - 1 ? "border-edge md:border-r" : ""
                } ${index % 2 === 0 ? "border-r border-edge md:border-r" : ""}`}
              >
                <CountUp
                  value={item.value}
                  suffix={item.suffix}
                  className="font-display text-3xl font-semibold text-accent sm:text-4xl"
                />
                <p className="mt-2 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="mt-16">
        <Marquee />
      </div>

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
                className="group rounded-3xl border border-edge bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift"
              >
                <span className="font-display text-sm font-semibold text-accent">
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
              className={`rounded-3xl border border-edge bg-gradient-to-br p-7 transition duration-300 hover:-translate-y-1 ${
                featureTones[item.tone]
              }`}
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
          <div className="relative overflow-hidden rounded-[2rem] border border-edge-strong bg-surface shadow-card">
            <div className="orb -left-8 top-8 h-32 w-32 bg-accent/20" />
            <Image
              src="/assets/img/it-services-home/choose.png"
              alt="Sperious team at work"
              width={720}
              height={560}
              className="relative h-full w-full object-cover"
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
                  className="rounded-full border border-edge-strong bg-surface px-4 py-2 text-sm text-ink"
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
                className="group rounded-3xl border border-edge bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
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

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="Teams that trusted Sperious"
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-gradient-to-r from-accent/15 via-violet/15 to-transparent px-8 py-12 text-center sm:px-16">
            <div className="orb left-8 top-0 h-32 w-32 bg-accent/25" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Start a project
            </p>
            <h2 className="relative mt-3 font-display text-3xl font-semibold sm:text-5xl">
              Ready to hire a dedicated developer?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted">
              Tell us the stack, timeline, and outcome. We&apos;ll match you
              with talent that can ship.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <HomeHireButton>Hire Developer</HomeHireButton>
              <Button href="/contactUs" variant="ghost">
                Talk to us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
