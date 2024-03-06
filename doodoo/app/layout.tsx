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
    <html lang="en" dir="ltr" className="h-full">
      <body className={`${poppins.className} bg-c2 text-c3 h-full`}>
        {children}
      </body>
    </html>
  );
}
