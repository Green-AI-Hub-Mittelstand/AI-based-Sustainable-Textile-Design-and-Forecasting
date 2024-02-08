"use client";

import { Banner } from "./components/page-content/Banner";
import { Main } from "./components/page-content/Main";
import { Footer } from "./components/page-content/Footer";

export default function Homepage() {
  return (
    <div className="text-gray-600 antialiased">
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}
