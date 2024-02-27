import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { poppins } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Doodoo",
  description: "The best to-do app ever!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
