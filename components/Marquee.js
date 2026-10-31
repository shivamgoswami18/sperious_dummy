import { technologies } from "@/lib/content";

export default function Marquee() {
  const items = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden border-y border-edge bg-surface py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />
      <div className="marquee-track gap-3">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-edge-strong bg-surface px-5 py-2 text-sm text-ink/90"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
