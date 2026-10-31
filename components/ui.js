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
  align = "center",
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-7 text-muted">{text}</p>
      ) : null}
    </div>
  );
}

const buttonClasses = {
  primary:
    "bg-accent text-on-accent shadow-accent-glow hover:bg-accent-dark hover:-translate-y-0.5",
  secondary:
    "bg-violet text-white hover:brightness-110 shadow-[0_0_24px_rgb(124_108_255_/_25%)] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-ink border border-edge-strong hover:border-accent/50 hover:bg-surface hover:-translate-y-0.5",
  light:
    "bg-surface-strong text-ink border border-edge-strong hover:bg-surface",
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${buttonClasses[variant]} ${className}`;

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
