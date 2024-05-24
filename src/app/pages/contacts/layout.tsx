import { SvgIcon } from "@/app/assets/icons"
import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import Script from "next/script"

const nunito_sans = Nunito_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TuanXu | My Portfolio"
}

export default function ContactsPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href={SvgIcon.ImportLogoApp} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className={nunito_sans.className}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></Script>
        <Script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
