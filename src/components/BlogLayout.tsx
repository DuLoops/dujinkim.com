export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-slate lg:prose-lg dark:prose-invert prose-headings:scroll-mt-28 prose-a:text-blue-600 dark:prose-a:text-blue-400">
          {children}
        </div>
      </main>
    </div>
  )
}
