import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Metadata } from 'next'
import Image from 'next/image'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { ImageComponent } from '@/components/blog/ImageComponent'
import { ImageCarousel, CarouselImage } from '@/components/blog/ImageCarousel'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    openGraph: post.frontmatter.coverImage ? {
      images: [post.frontmatter.coverImage]
    } : undefined
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const components = {
    Image: (props: any) => <ImageComponent {...props} />,
    ImageComponent,
    ImageCarousel,
    CarouselImage,
    img: (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => (
      <ImageComponent src={props.src || ''} alt={props.alt || ''} title={props.title} />
    ),
  }



  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    image: post.frontmatter.coverImage ? [post.frontmatter.coverImage] : [],
    datePublished: post.frontmatter.date,
    author: {
      '@type': 'Person',
      name: 'Dujin Kim',
    },
  }

  return (
    <main className="min-h-screen bg-neutral-800 relative w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TableOfContents />
      <div className="max-w-[1500px] mx-auto relative flex justify-center xl:justify-start w-full">
        <article className="w-full px-6 md:px-12 py-20 xl:pl-[350px] xl:pr-12 prose prose-lg prose-invert max-w-none prose-p:text-white prose-headings:text-white prose-blockquote:text-white prose-strong:text-white prose-li:text-white prose-a:text-orange-400">
          <MDXRemote source={post.content} components={components} />
        </article>
      </div>
    </main>
  )
}
