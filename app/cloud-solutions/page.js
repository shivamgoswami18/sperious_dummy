import ServiceDetailPage, { serviceMetadata } from "@/components/ServiceDetailPage";

export const metadata = serviceMetadata("cloud-solutions");

export default function Page() {
  return <ServiceDetailPage slug="cloud-solutions" />;
}
