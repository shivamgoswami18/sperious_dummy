import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Contact Us | Sperious",
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        text="Get in touch and let's make something great together. Let's turn your idea into an even greater product."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-3xl border border-edge bg-surface p-8 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Send message
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              Reach out for a project
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Get in touch and let&apos;s make something great together.
            </p>
            <ul className="mt-8 space-y-5 text-sm">
              <li>
                <p className="font-semibold text-ink">Address</p>
                <p className="mt-1 text-muted">
                  Science City Rd,
                  <br />
                  Ahemdabad - 380060
                </p>
              </li>
              <li>
                <p className="font-semibold text-ink">Email</p>
                <a
                  href="mailto:contact@sperious.co"
                  className="mt-1 inline-block text-accent hover:text-accent-dark"
                >
                  contact@sperious.co
                </a>
              </li>
            </ul>
          </aside>

          <div className="rounded-3xl border border-edge bg-surface p-8 shadow-card">
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-edge-strong shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3670.708383951858!2d72.5153503!3d23.0711504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cb83bf13db7%3A0xaca693312bc7881!2sReitkart!5e0!3m2!1sen!2sin!4v1681302967294!5m2!1sen!2sin"
              title="Sperious office location"
              width="600"
              height="450"
              className="h-[360px] w-full border-0 sm:h-[450px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
