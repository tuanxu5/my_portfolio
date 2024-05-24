import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import Head from "next/head"
import Script from "next/script"

const nunito_sans = Nunito_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TuanXu | My Portfolio",
  icons: "http://localhost:3000/_next/static/media/icon_logo_project.7faf818f.svg"
}

export default function ContactsPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="shortcut icon" href={favicon} /> */}
        <link rel="shortcut icon" href="../images/icons/favicon.ico" />
      </Head>
      <body className={nunito_sans.className}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></Script>
        <Script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
