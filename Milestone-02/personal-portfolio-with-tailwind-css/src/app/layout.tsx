// app/layout.tsx
"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Transition from "./Components/Transition";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Navigation from "./Components/Navigation";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap everything inside AnimatePresence for route-based transitions */}
        <AnimatePresence mode="wait" initial={false}>
          {/* Use unique key values for each child */}
          <Transition key={`transition-${pathname}`} />
          
          {/* Page content with Navbar and Navigation */}
          <div key={`page-${pathname}`} className="relative z-0">
            <Navbar />
            {children}
            <Navigation />
          </div>
        </AnimatePresence>
      </body>
    </html>
  );
}
