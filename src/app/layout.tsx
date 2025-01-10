import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import "./styles/globals.scss";
import "./styles/responsive.scss";

export const metadata: Metadata = {
  title: "Tuanxu | Portfolio Website",
  icons: "./icon-tuanxu.svg",
  keywords: ["portfolio", "website", "tuanxu", "cv", "tuanxu5", "contacts", "contact"],
  description:
    "Explore Tuanxu's portfolio showcasing innovative projects, developer skills, and professional experiences. Connect for collaborations or new opportunities."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="canonical" href="https://tuanxu5.pages.dev" />
        <meta property="og:title" content="Home - Tuanxu Portfolio Website" />
        <meta
          property="og:description"
          content="Explore Tuanxu's portfolio to discover innovative projects, advanced developer skills, and professional experiences. Connect for collaborations or opportunities to work together."
        />
        <meta property="og:image" content="https://example.com/images/contact-thumbnail.jpg" />
        <meta property="og:url" content="https://tuanxu5.pages.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Homepage Tuanxu Portfolio" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Tuanxu Portfolio",
              url: "https://tuanxu5.pages.dev/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://tuanxu5.pages.dev/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tuanxu Portfolio",
              url: "https://tuanxu5.pages.dev",
              logo: "https://tuanxu5.pages.dev/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "0386426150",
                contactType: "Customer Service"
              }
            })
          }}
        />
      </Head>

      <body>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></Script>
        <Script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
