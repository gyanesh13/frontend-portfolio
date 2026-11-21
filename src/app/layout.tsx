
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gyanesh Patidar | Senior Frontend Engineer",
  description:
    "Frontend Engineer with 5+ years of experience building scalable React applications, modern UI architectures and high-performance web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
