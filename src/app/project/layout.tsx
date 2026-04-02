import ProjectHeaderNav from "components/layout/ProjectHeaderNav";

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ProjectHeaderNav />
            {children}
        </>
    )
}
