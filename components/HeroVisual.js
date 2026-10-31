import { technologies } from "@/lib/content";

export default function HeroVisual() {
  return (
    <div className="relative isolate flex min-h-[420px] flex-col overflow-hidden rounded-[2rem] border border-edge-strong bg-surface p-6 shadow-card sm:min-h-[500px] sm:p-8">
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
          Dedicated developers across AI, web, mobile, analytics, security, and
          cloud — designed around your timeline and business outcomes.
        </p>
      </div>

      <div className="relative z-10 my-6 flex flex-1 items-center">
        <div className="grid w-full grid-cols-3 gap-2 sm:gap-3">
          {technologies.map((label) => (
            <span
              key={label}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-edge-strong bg-paper/80 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-ink backdrop-blur sm:text-xs"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-edge-strong bg-paper/70 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.16em] text-accent">Model</p>
          <p className="mt-1 font-display text-lg">Dedicated squads</p>
        </div>
        <div className="rounded-2xl border border-edge-strong bg-paper/70 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.16em] text-gold">Focus</p>
          <p className="mt-1 font-display text-lg">Product + platform</p>
        </div>
      </div>
    </div>
  );
}
