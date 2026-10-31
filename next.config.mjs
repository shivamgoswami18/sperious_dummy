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
      { source: "/React.php", destination: "/React", permanent: false },
      { source: "/Vue.php", destination: "/Vue", permanent: false },
      { source: "/Angular.php", destination: "/Angular", permanent: false },
      { source: "/ReactNative.php", destination: "/ReactNative", permanent: false },
      { source: "/Node.php", destination: "/Node", permanent: false },
      { source: "/Python.php", destination: "/Python", permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: "/assets/php/form-process.php", destination: "/api/contact" },
    ];
  },
};

export default nextConfig;
