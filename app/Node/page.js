import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Node.js | Sperious",
};

export default function NodePage() {
  return (
    <ServiceDetail title="Node js" image="/assets/img/node.png">
      <p>
        Sperious is one of India&apos;s leading web development companies that
        has become a distinguished name in web app development. Our main
        responsibility for writing server-side web application logic in
        JavaScript and/or variants of it. Our Node.js services usually develop
        back-end components, connect the application with the other (often
        third-party) web services, and support the front-end developers by
        integrating their work with the Node.js application.
      </p>
    </ServiceDetail>
  );
}
