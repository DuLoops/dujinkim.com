export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="prose prose-slate lg:prose-lg dark:prose-invert mx-auto">
        {children}
      </div>
    </article>
  )
}
