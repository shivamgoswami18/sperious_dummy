import { Manrope, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Sperious",
  description:
    "Sperious is one of Indian leading companies in the field of Web Development and Designing Company. The company offers a large variety of services, including research, development and technological works automation, distribution, development and system integration of software and hardware.",
  keywords:
    "Sperious - Ahmedabad, Website Development Company in Ahmedabad, Top Website Development Company in Gujarat, Web Development Company in Ahmedabad, Web Development Company in Gujarat, Best Software Development Company in Ahmedabad",
  authors: [{ name: "sperious.co" }],
  robots: "index,follow",
  icons: {
    icon: "/assets/img/SPERIOUS S PNG.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
