"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-edge-strong bg-gradient-to-br from-surface-strong via-surface to-violet/10 p-5 sm:p-7">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
      <p className="relative max-w-3xl font-display text-lg leading-7 text-ink sm:text-xl sm:leading-8">
        “{item.quote}”
      </p>
      <div className="relative mt-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={item.image}
            alt={item.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-accent/50"
          />
          <div>
            <p className="text-sm font-semibold text-ink">{item.name}</p>
            <p className="text-xs text-accent">Client</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() =>
              setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)
            }
            className="flex h-8 w-8 items-center justify-center rounded-full border border-edge-strong text-sm text-ink hover:border-accent hover:text-accent"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((value) => (value + 1) % testimonials.length)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-edge-strong text-sm text-ink hover:border-accent hover:text-accent"
          >
            →
          </button>
          <div className="ml-1.5 flex gap-1.5">
            {testimonials.map((entry, i) => (
              <button
                key={entry.name}
                type="button"
                aria-label={`Show testimonial from ${entry.name}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-accent" : "w-1.5 bg-fade"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
