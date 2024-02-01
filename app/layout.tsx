import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ weight: ["100", "300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aleen",
  description:
    "Aleen is a Montessori specialized pre-school which its environment is designed to meet your needs and turn your child’s potentialities into great abilitiesHurry up to save your child’s seat!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
