import ServiceDetailPage, { serviceMetadata } from "@/components/ServiceDetailPage";

export const metadata = serviceMetadata("web-development");

export default function Page() {
  return <ServiceDetailPage slug="web-development" />;
}
