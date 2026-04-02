import BlogHeaderNav from "components/layout/BlogHeaderNav";

export default function BlogPostLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <BlogHeaderNav />
            {children}
        </>
    )
}
