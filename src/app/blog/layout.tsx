import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Dujin Kim',
  description: 'Personal blog sharing insights on software development, fitness journey, and photography by Dujin Kim.',
  keywords: ['software development', 'programming', 'fitness', 'photography', 'personal blog', 'web development', 'Dujin Kim'],
  openGraph: {
    title: 'Dujin Kim\'s Blog',
    description: 'Thoughts and insights on software development, fitness, and photography',
    images: [
      {
        url: '/images/dev/blog.png', // Replace with your actual blog cover image
        width: 1200,
        height: 630,
        alt: 'Dujin Kim Blog',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dujin Kim\'s Blog',
    description: 'Software development, fitness, and photography',
    images: ['/images/dev/blog.png'], // Same as OpenGraph or a different optimized image
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}