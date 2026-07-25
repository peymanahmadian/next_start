


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div><div>this is a internal layout</div><div>{children}</div></div>
  );
}
