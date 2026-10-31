const chips = [
  { label: "React.js", className: "left-[6%] top-[14%]", delay: "0s" },
  { label: "Node.js", className: "right-[8%] top-[22%]", delay: "0.8s" },
  { label: "Vue.js", className: "left-[12%] bottom-[28%]", delay: "1.4s" },
  { label: "Python", className: "right-[14%] bottom-[18%]", delay: "2s" },
];

export default function HeroVisual() {
  return (
    <div className="relative isolate min-h-[420px] overflow-hidden rounded-[2rem] border border-edge-strong bg-surface p-6 shadow-card sm:min-h-[500px] sm:p-8">
      <div className="orb -left-8 top-6 h-44 w-44 bg-violet/40" />
      <div className="orb right-0 top-20 h-36 w-36 bg-accent/30" style={{ animationDelay: "1.4s" }} />
      <div className="orb bottom-6 left-20 h-28 w-28 bg-[#ff6b6b]/25" style={{ animationDelay: "2.2s" }} />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" style={{ animation: "pulse-ring 1.8s infinite" }} />
          Live delivery
        </div>
        <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
          From idea to deployed product
        </h2>
        <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
          Dedicated developers, web apps, and mobile products — designed around
          your stack, timeline, and business outcomes.
        </p>
      </div>

      {chips.map((chip) => (
        <span
          key={chip.label}
          className={`absolute z-10 rounded-full border border-edge-strong bg-paper/80 px-4 py-2 text-xs font-semibold text-ink backdrop-blur ${chip.className}`}
          style={{ animation: "floaty 5.5s ease-in-out infinite", animationDelay: chip.delay }}
        >
          {chip.label}
        </span>
      ))}

      <div className="absolute bottom-6 left-6 right-6 z-10 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-edge-strong bg-paper/70 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.16em] text-accent">Model</p>
          <p className="mt-1 font-display text-lg">Dedicated squads</p>
        </div>
        <div className="rounded-2xl border border-edge-strong bg-paper/70 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.16em] text-gold">Focus</p>
          <p className="mt-1 font-display text-lg">Web + mobile</p>
        </div>
      </div>
    </div>
  );
}
