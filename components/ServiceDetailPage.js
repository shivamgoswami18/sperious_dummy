import ServiceDetail from "./ServiceDetail";
import { getService } from "@/lib/content";
import { notFound } from "next/navigation";

export function serviceMetadata(slug) {
  const item = getService(slug);
  return {
    title: item ? `${item.title} | Sperious` : "Services | Sperious",
  };
}

export default function ServiceDetailPage({ slug }) {
  const item = getService(slug);

  if (!item) {
    notFound();
  }

  return (
    <ServiceDetail title={item.title} image={item.image}>
      {item.detail.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </ServiceDetail>
  );
}
