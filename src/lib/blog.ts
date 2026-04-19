import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPostType, BlogType, homeBlogPosts } from '@/data/blogPosts'

const contentDir = path.join(process.cwd(), 'content/blog')

export interface BlogFrontmatter {
  title: string
  excerpt: string
  date: string
  coverImage?: string
  tags?: string[]
}

export interface BlogPost {
  slug: string
  frontmatter: BlogFrontmatter
  content: string
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDir, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as BlogFrontmatter,
      content,
    }
  } catch (error) {
    return null
  }
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) {
    return []
  }
  
  const slugs = fs.readdirSync(contentDir)
  const posts = slugs
    .filter((slug) => slug.endsWith('.mdx'))
    .map((slug) => getPostBySlug(slug.replace(/\.mdx$/, '')))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1))

  return posts
}

export function mapMdxToBlogPostType(post: BlogPost): BlogPostType {
  const parsedTags: BlogType[] = (post.frontmatter.tags || []).map(t => {
    const typeStr = t.toLowerCase()
    if (typeStr === 'software') return BlogType.Software;
    if (typeStr === 'design') return BlogType.Design;
    if (typeStr === 'art') return BlogType.Art;
    if (typeStr === 'philosophy') return BlogType.Philosophy;
    return BlogType.Software;
  })

  return {
    id: post.slug,
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    tags: parsedTags,
    link: post.slug,
    date: post.frontmatter.date,
    card: {
      image: post.frontmatter.coverImage ? [post.frontmatter.coverImage] : []
    }
  }
}

export function getMergedBlogPosts(): BlogPostType[] {
  const mdxPosts = getAllPosts().map(mapMdxToBlogPostType)
  
  const mdxLinks = new Set(mdxPosts.map(p => p.link))
  // Filter out hardcoded posts if there's an MDX file covering the same route
  const filteredHardcoded = homeBlogPosts.filter(p => !mdxLinks.has(p.link))

  const merged = [...mdxPosts, ...filteredHardcoded]
  // Sort by date (descending)
  merged.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
  
  return merged
}
