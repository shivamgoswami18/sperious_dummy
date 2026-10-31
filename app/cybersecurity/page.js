import ServiceDetailPage, { serviceMetadata } from "@/components/ServiceDetailPage";

export const metadata = serviceMetadata("cybersecurity");

export default function Page() {
  return <ServiceDetailPage slug="cybersecurity" />;
}
