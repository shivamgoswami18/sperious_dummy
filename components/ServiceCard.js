import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ item }) {
  return (
    <Link
      href={item.href}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-edge bg-surface shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-paper">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-2xl font-semibold text-ink">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
        <span className="mt-auto inline-flex pt-6 text-sm font-semibold text-accent group-hover:gap-2">
          Read more →
        </span>
      </div>
    </Link>
  );
}
