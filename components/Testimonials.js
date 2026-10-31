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
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
      <p className="max-w-3xl font-display text-2xl leading-9 text-white sm:text-3xl">
        “{item.quote}”
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Image
          src={item.image}
          alt={item.name}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-white">{item.name}</p>
          <p className="text-sm text-white/55">Client</p>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() =>
            setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)
          }
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/10"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setIndex((value) => (value + 1) % testimonials.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/10"
        >
          →
        </button>
        <div className="ml-2 flex gap-1.5">
          {testimonials.map((entry, i) => (
            <button
              key={entry.name}
              type="button"
              aria-label={`Show testimonial from ${entry.name}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
