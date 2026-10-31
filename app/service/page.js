import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
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
        text="AI, web, mobile, analytics, cybersecurity, and cloud — engineered around the products our clients actually ship."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <ServiceCard key={item.href} item={item} />
          ))}
        </Container>
      </section>
    </>
  );
}
