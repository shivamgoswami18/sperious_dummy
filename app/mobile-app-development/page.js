import ServiceDetailPage, { serviceMetadata } from "@/components/ServiceDetailPage";

export const metadata = serviceMetadata("mobile-app-development");

export default function Page() {
  return <ServiceDetailPage slug="mobile-app-development" />;
}
