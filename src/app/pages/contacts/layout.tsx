import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact | My Portfolio Page",
  icons: "../../icon-tuanxu.svg",
  description:
    "Get in touch with me through the contact page of my portfolio. Let's discuss projects, collaborations, or opportunities to work together. Explore my developer skills and experiences!"
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
