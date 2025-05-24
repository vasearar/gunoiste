import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Gunoiște - serviciul eco de evacuare a deșeurilor",
  description: "Dăruim viață deșeurilor tale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
                <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap"
            as="style"
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Unbounded:wght@200..900&display=swap"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Unbounded:wght@200..900&display=swap"
            rel="stylesheet"
          />
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
