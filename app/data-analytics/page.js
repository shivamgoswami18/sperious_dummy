import ServiceDetailPage, { serviceMetadata } from "@/components/ServiceDetailPage";

export const metadata = serviceMetadata("data-analytics");

export default function Page() {
  return <ServiceDetailPage slug="data-analytics" />;
}
