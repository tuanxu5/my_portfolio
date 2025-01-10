import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contacts | Portfolio Website",
  icons: "../../icon-tuanxu.svg",
  keywords: ["portfolio", "website", "tuanxu", "cv", "tuanxu5"],
  description:
    "Get in touch via the contact page of my portfolio. Let's discuss projects, collaborations, or opportunities to work together!"
};

export default function ContactsPageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="../../icon-tuanxu.svg" />
        <link rel="canonical" href="https://tuanxu5.pages.dev" />
        <meta property="og:title" content="Contact - Tuanxu Portfolio Website" />
        <meta
          property="og:description"
          content="Get in touch with me through the contact page of my portfolio. Let's discuss projects, collaborations, or opportunities to work together. Explore my developer skills and experiences."
        />
        <meta property="og:image" content="https://example.com/images/contact-thumbnail.jpg" />
        <meta property="og:url" content="https://tuanxu5.pages.dev/pages/contacts" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Contact Tuanxu Portfolio" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "headline default",
              author: {
                "@type": "Person",
                name: "Tuanxu",
                url: "https://tuanxu5.pages.dev/"
              },
              image: "https://tuanxu5.pages.dev/images/contact-thumbnail.jpg",
              datePublished: "2025-01-01",
              dateModified: "2025-01-01"
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
