import './globals.css'
import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "devstage",
};
const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium'
})

const monterrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${monterrat.variable}`}>
      <body className='bg-gray-900 text-gray-100 antialiased'>{children}</body>
    </html>
  );
}
