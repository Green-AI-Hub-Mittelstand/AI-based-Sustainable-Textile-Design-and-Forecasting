import type { Metadata } from "next";
import "./globals.css";

import { Banner } from "./components/page-content/Banner";
import { Footer } from "./components/page-content/Footer";

export const metadata: Metadata = {
  title: "GreenAI App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout für die ganze App */}
        <div className="text-gray-600 antialiased">
          <Banner />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
