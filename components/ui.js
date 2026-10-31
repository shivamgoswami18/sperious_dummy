import Link from "next/link";

export function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  align = "center",
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-gold" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-base leading-7 ${light ? "text-white/70" : "text-muted"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

const buttonClasses = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-sm hover:-translate-y-0.5",
  secondary:
    "bg-navy text-white hover:bg-navy-soft shadow-sm hover:-translate-y-0.5",
  ghost:
    "bg-white text-ink border border-line hover:border-ink/20 hover:-translate-y-0.5",
  light:
    "bg-white/10 text-white border border-white/15 hover:bg-white/16",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${buttonClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
