import type { Metadata } from 'next'
import './globals.css'
import { montserrat, montserratAlternates, courgette, poiretOne } from 'data/fonts'
import HeaderNav from 'components/layout/HeaderNav'
export const metadata: Metadata = {
  title: 'DuJin Blog',
  description: "DuJin's blog",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ `${montserrat.variable} ${montserratAlternates.variable} ${courgette.variable} ${poiretOne.variable} bg-neutral-800 font-m`}>
        <HeaderNav />
        <main className="overflow-x-hidden w-screen h-[calc(100vh-60px)] ">
          {children}
        </main>
        </body>
    </html>
  )
}
