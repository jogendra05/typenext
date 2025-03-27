export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h2>Nested Navbar</h2>
        {children}
    </>
  );
}
