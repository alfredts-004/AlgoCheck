import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from './providers'
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400' , '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "AlgoCheck",
  description: "Online code learning platform",
  icons: {
    icon: '/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}><Providers>{children}</Providers></body>
    </html>
    </ClerkProvider>
  );
}
