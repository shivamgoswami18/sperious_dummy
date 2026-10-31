"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ value, suffix = "", className = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) {
          return;
        }
        started.current = true;
        const duration = 1400;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * eased));
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
