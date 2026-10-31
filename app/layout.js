import { DM_Sans, Syne } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import "./globals.css";

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
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
    <html
      lang="en"
      data-theme="light"
      className={`${body.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Script id="sperious-theme" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("sperious-theme");var next=t==="dark"?"dark":"light";document.documentElement.dataset.theme=next;document.documentElement.style.colorScheme=next;}catch(e){document.documentElement.dataset.theme="light";document.documentElement.style.colorScheme="light";}})();`}
        </Script>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
