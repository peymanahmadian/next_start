export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      
    >
        layout for authentications
      <div className="min-h-full flex flex-col">{children}</div>
    </div>
  );
}