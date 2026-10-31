/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  cacheComponents: false,
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: false },
      { source: "/home", destination: "/", permanent: false },
      { source: "/service.php", destination: "/service", permanent: false },
      { source: "/services", destination: "/service", permanent: false },
      { source: "/aboutUs.php", destination: "/aboutUs", permanent: false },
      { source: "/contactUs.php", destination: "/contactUs", permanent: false },
      { source: "/React.php", destination: "/web-development", permanent: false },
      { source: "/Vue.php", destination: "/web-development", permanent: false },
      { source: "/Angular.php", destination: "/web-development", permanent: false },
      { source: "/ReactNative.php", destination: "/mobile-app-development", permanent: false },
      { source: "/Node.php", destination: "/web-development", permanent: false },
      { source: "/Python.php", destination: "/ai-machine-learning", permanent: false },
      { source: "/React", destination: "/web-development", permanent: false },
      { source: "/Vue", destination: "/web-development", permanent: false },
      { source: "/Angular", destination: "/web-development", permanent: false },
      { source: "/ReactNative", destination: "/mobile-app-development", permanent: false },
      { source: "/Node", destination: "/web-development", permanent: false },
      { source: "/Python", destination: "/ai-machine-learning", permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: "/assets/php/form-process.php", destination: "/api/contact" },
    ];
  },
};

export default nextConfig;
