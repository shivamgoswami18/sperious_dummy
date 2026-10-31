"use client";

import Image from "next/image";
import PageHero from "./PageHero";
import { Button, Container } from "./ui";
import { useHire } from "./HireContext";

export default function ServiceDetail({ title, image, imageStyle, children }) {
  const { openHire } = useHire();

  return (
    <>
      <PageHero
        title="Services we provide"
        text="We are a digital transformation software development company that provides cutting edge engineering solutions based on the clients requirements."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-card">
            <Image
              src={image}
              alt={title}
              width={560}
              height={420}
              className="mx-auto h-auto w-full max-w-md object-contain"
              style={imageStyle}
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Capability
            </p>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              {title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-muted">
              {children}
            </div>
            <Button onClick={openHire} className="mt-8">
              Hire Developer
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
