import type { Metadata } from 'next'
import './globals.css'
import { montserrat, montserratAlternates, courgette, poiretOne } from 'data/fonts'
import HeaderNav from 'components/layout/HeaderNav'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Dujin Kim | Software Developer\' Blog & Portfolio',
  description: 'Personal website of Dujin Kim, featuring full-stack development projects, technical blog posts, fitness journey, photography, and professional contact information.',
  keywords: [
    'Dujin Kim', 
    'full-stack developer', 
    'software engineer', 
    'web development', 
    'portfolio', 
    'programming blog',
    'fitness', 
    'photography', 
  ],
  creator: 'Dujin Kim',
  openGraph: {
    title: 'Dujin Kim | Full-stack Developer',
    description: 'Full-stack development portfolio, technical blog, and personal interests',
    url: 'https://dujinkim.com',
    siteName: 'Dujin Kim',
    images: [
      {
        url: '/images/dev/dujinlogo.png', // Replace with your actual site cover image
        width: 1200,
        height: 630,
        alt: 'Dujin Kim - Developer Portfolio',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dujin Kim | Full-stack Developer',
    description: 'Portfolio, technical blog, and more',
    images: ['/images/dev/dujinlogo.png'], // Replace with your actual cover image
    creator: '@yourTwitterHandle', // Replace with your Twitter handle if applicable
  },
  verification: {
    // google: 'your-google-verification-code', // Optional: Add if you have Google verification
  },
  alternates: {
    canonical: 'https://dujinkim.com', // Replace with your actual domain
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/images/dev/favicon.ico" sizes="any" /> */}
        <link
          rel="icon"
          href="/images/dev/dujinlogo.svg"
          type="/images/dev/dujinlogo.svg"
          sizes="32x32"
      
        />
        <link
          rel="apple-touch-icon"
          href="/images/dev/dujinlogo.svg"
          type="/images/dev/dujinlogo.svg"
          sizes="32x32"
          color='#fff'
        />
      </head>
      <body className={`${montserrat.variable} ${montserratAlternates.variable} ${courgette.variable} ${poiretOne.variable} 
      bg-neutral-800 font-m  w-screen overflow-x-hidden md:pt-[30px] relative min-h-screen`}>
        <HeaderNav />
          {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
