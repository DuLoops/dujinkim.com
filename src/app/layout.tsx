import type { Metadata } from 'next'
import './globals.css'
import { montserrat, montserratAlternates, courgette, poiretOne } from 'data/fonts'
import HeaderNav from 'components/layout/HeaderNav'
export const metadata: Metadata = {
  title: 'Dujin Kim',
  description: "DuJin Kim's personal website",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ `${montserrat.variable} ${montserratAlternates.variable} ${courgette.variable} ${poiretOne.variable} 
      bg-neutral-800 font-m  w-screen `}>
        <HeaderNav />
          {children}
        </body>
    </html>
  )
}
