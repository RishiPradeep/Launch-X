// Import necessary dependencies
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";

const inter = Manrope({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html className="htmlmain" lang="en" style={{ scrollBehavior: "smooth" }}>
        <body className={`${inter.className}`}>{children}</body>
      </html>
    </StoreProvider>
  );
}
