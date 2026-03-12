import "./globals.css";

export const metadata = {
  title: "Built Wright Construction Inc.",
  description: "Premium construction services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="m-0 p-0 overflow-x-hidden max-w-[100vw] relative">
        {children}
      </body>
    </html>
  );
}