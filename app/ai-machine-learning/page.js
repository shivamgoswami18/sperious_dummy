import ServiceDetailPage, { serviceMetadata } from "@/components/ServiceDetailPage";

export const metadata = serviceMetadata("ai-machine-learning");

export default function Page() {
  return <ServiceDetailPage slug="ai-machine-learning" />;
}
