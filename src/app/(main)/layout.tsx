import MainHeaderNav from "components/layout/MainHeaderNav";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <MainHeaderNav />
            {children}
        </>
    )
}
