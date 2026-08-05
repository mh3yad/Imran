import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imran — From 0 to 1 in Tech"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
