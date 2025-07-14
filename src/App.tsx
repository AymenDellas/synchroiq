// src/App.js
import React from "react";

import Hero from "./components/Hero";
import StorySection from "./components/StorySection";
import ComparisonSection from "./components/ComparisonSection";
import TestimonialSection from "./components/TestimonialSection";
import CtaSection from "./components/CtaSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#edf2f7] font-inter">
      <Hero />
      <StorySection />
      <ComparisonSection />
      <TestimonialSection />
      <CtaSection />
    </div>
  );
}

export default App;
