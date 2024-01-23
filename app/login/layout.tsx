export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="h-screen flex bg-white">{children}</div>;
}