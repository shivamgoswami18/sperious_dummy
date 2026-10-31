import machineLearning from "@/data/assets/machine-learning.webp";
import webDevelopment from "@/data/assets/web-development.webp";
import mobileApp from "@/data/assets/computer-1149148_1280.jpg";
import dataAnalytics from "@/data/assets/data-analytics.webp";
import cyberSecurity from "@/data/assets/cyber-security.webp";
import cloudSolutions from "@/data/assets/cloud-solutions.webp";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Services" },
  { href: "/aboutUs", label: "About Us" },
  { href: "/contactUs", label: "Contact Us" },
];

export const processSteps = [
  {
    number: "01",
    title: "Share your requirements",
    text: "Tell us what you need and we match you with the right dedicated resource.",
  },
  {
    number: "02",
    title: "Define the stack",
    text: "Choose the technology you need. We have experienced developers across the stack.",
  },
  {
    number: "03",
    title: "Review developer CVs",
    text: "Receive CVs of developers who are ready to work and fit your expectations.",
  },
  {
    number: "04",
    title: "Schedule interviews",
    text: "Interview the candidates we propose and validate the fit before you hire.",
  },
];

export const features = [
  {
    title: "Dedicated Developer",
    text: "Contract-based dedicated resources, matched to your product and delivery needs.",
    href: null,
    action: "hire",
    actionLabel: "Hire Developers",
    tone: "mint",
  },
  {
    title: "Web Application",
    text: "Web applications built with the right technologies for your business and users.",
    href: "/service",
    actionLabel: "Read More",
    tone: "violet",
  },
  {
    title: "Mobile Application",
    text: "Native and cross-platform mobile apps designed for reliability and growth.",
    href: "/service",
    actionLabel: "Read More",
    tone: "coral",
  },
];

export const services = [
  {
    slug: "ai-machine-learning",
    href: "/ai-machine-learning",
    title: "AI & Machine Learning",
    text: "Innovative AI solutions to automate processes and enhance decision-making.",
    image: machineLearning,
    detail: [
      "Sperious designs and ships AI and machine learning systems that turn operational data into reliable decisions. We help teams automate repetitive work, surface the signals that matter, and put models into production without disrupting the products people already depend on.",
      "Our engineers cover the full path from discovery to deployment: data preparation, model selection, training, evaluation, and integration with existing web, mobile, and cloud platforms. Whether you need intelligent search, forecasting, document processing, or recommendation engines, we build solutions that stay maintainable after launch.",
      "We work with product owners to define success metrics, keep humans in the loop where it matters, and monitor model quality over time. The result is practical AI that reduces cost, speeds up decisions, and stays aligned with your business outcomes.",
    ],
  },
  {
    slug: "web-development",
    href: "/web-development",
    title: "Web Development",
    text: "Custom web solutions built with cutting-edge technologies for optimal performance and user experience.",
    image: webDevelopment,
    detail: [
      "Sperious builds custom web applications that are fast, secure, and designed around the way your customers actually work. From marketing sites and customer portals to complex internal tools, we focus on performance, accessibility, and a clear path from design to deployment.",
      "Our team covers front-end and back-end engineering, APIs, and integrations with the systems you already run. We choose the stack that fits the product — not the other way around — so you get software that is easier to extend, easier to host, and easier for users to adopt.",
      "Every engagement includes a delivery plan, regular reviews, and a handoff that leaves your team in control. We stay involved for launch support and iteration so the product keeps improving after the first release.",
    ],
  },
  {
    slug: "mobile-app-development",
    href: "/mobile-app-development",
    title: "Mobile App Development",
    text: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    image: mobileApp,
    detail: [
      "Sperious designs and develops native and cross-platform mobile applications that feel reliable on day one and stay that way as you grow. We pay attention to onboarding, performance, offline behavior, and the small interactions that decide whether people keep an app or delete it.",
      "Our mobile team works across iOS and Android, connects apps to secure APIs and cloud services, and ships with the analytics and release process you need to iterate after launch. If you already have a web product, we can extend it into a mobile experience that shares the same business logic.",
      "From first prototype to App Store and Play Store release, we keep the scope honest, the UI consistent, and the codebase ready for the next feature — not just the first version.",
    ],
  },
  {
    slug: "data-analytics",
    href: "/data-analytics",
    title: "Data Analytics",
    text: "Transform your data into actionable insights with our advanced analytics solutions.",
    image: dataAnalytics,
    detail: [
      "Sperious helps you turn scattered operational data into a clear picture of what is happening and what to do next. We design analytics foundations that collect, clean, and connect data from the systems your teams already use.",
      "Our work covers dashboards, reporting, and the pipelines behind them: warehouse design, transformation, quality checks, and the metrics leadership actually reviews. We focus on answers you can act on — revenue, operations, product usage, and customer health — not charts that look busy and say little.",
      "Once the first reports are live, we help you keep them trustworthy. That means documented definitions, access controls, and a path to add new sources without rebuilding everything from scratch.",
    ],
  },
  {
    slug: "cybersecurity",
    href: "/cybersecurity",
    title: "Cybersecurity",
    text: "Protect your digital assets with our comprehensive security solutions and best practices.",
    image: cyberSecurity,
    detail: [
      "Sperious helps organizations protect applications, data, and infrastructure without slowing delivery. We assess the risks that matter for your product, close the gaps that attackers actually exploit, and build security into the way your team ships software.",
      "Our cybersecurity work includes secure architecture reviews, application hardening, identity and access controls, vulnerability management, and practical guidance for cloud and web platforms. We pair engineering fixes with the policies and monitoring that keep those fixes in place.",
      "Whether you need a focused review before launch or an ongoing security partner, we keep recommendations concrete, prioritized, and tied to business impact — so you can reduce risk without freezing the product roadmap.",
    ],
  },
  {
    slug: "cloud-solutions",
    href: "/cloud-solutions",
    title: "Cloud Solutions",
    text: "Scalable cloud infrastructure and services to modernize your business operations.",
    image: cloudSolutions,
    detail: [
      "Sperious designs and runs cloud infrastructure that scales with your product instead of fighting it. We help you move workloads to the cloud, modernize what you already host, and set up environments that development, staging, and production can share safely.",
      "Our cloud engineers cover architecture, migration, automation, and day-to-day operations: compute, storage, networking, CI/CD, observability, and cost control. We choose managed services when they save time and keep the design simple enough for your team to own.",
      "The goal is infrastructure you can trust at launch and grow later — with clear environments, repeatable deployments, and the monitoring you need to know when something is wrong before your customers do.",
    ],
  },
];

export const technologies = services.map((item) => item.title);

export const stats = [
  { value: 70, suffix: "+", label: "Happy clients" },
  { value: 150, suffix: "+", label: "Projects designed" },
  { value: 30, suffix: "+", label: "Team members" },
  { value: 10, suffix: "+", label: "Technologies" },
];

export const testimonials = [
  {
    name: "Joan Climent",
    image: "/assets/img/Joan Climent.jpg",
    quote:
      "I really had a good experience working with the team on an e-commerce Web application development. The team is really flexible in adopting changes. The culture of the company is very professional and they have good processes in place. Highly recommended for app development.",
  },
  {
    name: "Akash S",
    image: "/assets/img/Akash S.jpeg",
    quote:
      "I am really impressed by the quality of services I received from Sperious. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time.",
  },
  {
    name: "Andrea Gittens",
    image: "/assets/img/Andrea Gittens.jpeg",
    quote:
      "I have been involved in big projects for major corporations and the team at Sperious is the best that I have worked with. I would recommend them to anyone.",
  },
  {
    name: "Smith C",
    image: "/assets/img/Smith C.jpeg",
    quote:
      "If you're looking for an honest, hardworking and a dedicated freelancer. Nilesh is your guy! Highly recommended and very professional.",
  },
  {
    name: "Elaine Burr",
    image: "/assets/img/Elaine.jpeg",
    quote:
      "I had started working with Sperious years ago! They offer prompt service and superior developers who are respectful of all users' experience levels, all at an affordable price.",
  },
];

export const hireTechnologies = services.map((item) => item.title);

export const hireDurations = ["0 - 3", "3 - 6", "6 - 12", "12 +"];

export function getService(slug) {
  return services.find((item) => item.slug === slug);
}
