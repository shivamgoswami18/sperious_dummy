import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Python | Sperious",
};

export default function PythonPage() {
  return (
    <ServiceDetail
      title="Python"
      image="/assets/img/Python-logo.png"
      imageStyle={{ height: 250, width: 350 }}
    >
      <p>
        Sperious is a leading Python development company that specializes in
        providing top-notch web application development services. Our team of
        experts has extensive experience in Python, Django, Flask, and other
        related technologies of python, making us the best choice for your
        Python project. We strive to create high-quality and customized
        applications that cater to the unique needs of our clients. Our Python
        developers are well-versed in creating scalable, efficient, and secure
        applications that are optimized for performance. We also offer
        comprehensive support and maintenance services to ensure the smooth
        functioning of your Python applications.
      </p>
    </ServiceDetail>
  );
}
