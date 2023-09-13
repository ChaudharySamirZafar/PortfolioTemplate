import Navbar from "@/app/layoutComponents/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samir Zafar",
  description:
    "A multi-purpose site aiming to help fellow engineers out whilst showing off my latest creations and skills",
  publisher: "Chaudhary Samir Zafar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-white max-w-4xl mx-auto px-8">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
