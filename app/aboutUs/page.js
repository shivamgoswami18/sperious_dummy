import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/ui";
import { stats } from "@/lib/content";

export const metadata = {
  title: "About Us | Sperious",
};

const values = [
  {
    title: "Our Vision",
    text: "The vision at Sperious, is of a highly trained and efficient team of Web/Software Development and customer service personnel, ready for anything that may occur and quick to respond to customer needs and concerns.",
  },
  {
    title: "Our Mission",
    text: "At Sperious every person in our company is a member of the team and a team player, with the expectation and need that they perform their duties to their fullest capacity and potential. Our objective is a commitment to the highest quality and customer service. The client satisfaction is our main focus, reached through innovative and cost effective security services. We will lead the IT industry in trained officers and rapid customer service.",
  },
  {
    title: "Who we are",
    text: "We are a digital transformation software development company that provides cutting edge engineering solutions based on the clients requirements.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About Us"
        text="A digital transformation studio building software with care, clarity, and consistency."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-card">
            <Image
              src="/assets/img/it-services-home/about.png"
              alt="About Sperious"
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
            <p className="mt-6 text-base leading-8 text-muted">
              Sperious is one of Indian leading companies in the field of Web
              Development and Designing Company. The company offers a large
              variety of services, including research, development and
              technological works automation, distribution, development and
              system integration of software and hardware.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid gap-5 lg:grid-cols-3">
          {values.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-line bg-white p-7 shadow-card"
            >
              <h3 className="font-display text-2xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-navy py-16 text-white">
        <Container className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-8 text-center"
            >
              <p className="font-display text-3xl font-semibold">{item.value}</p>
              <p className="mt-2 text-sm text-white/60">{item.label}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
