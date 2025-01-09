import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact | My Portfolio",
  icons: "../../icon-tuanxu.svg",
  description:
    "Welcome to my portfolio! Here, you’ll find my projects, skills, and experiences that highlight my journey as a developer. Explore my work and feel free to connect if you’re interested in collaboration or learning more about my expertise."
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
