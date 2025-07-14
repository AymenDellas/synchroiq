// src/components/TestimonialSection.jsx
import { useState, useEffect } from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "We used to stare at charts without knowing what to do. Now we know what features matter. Our retention jumped in days.",
      author: "Liam T.",
      position: "Co-Founder @ Optibase",
      initials: "LT",
    },
    {
      quote:
        "SyncroIQ was a game-changer. We found our 'aha moment' feature within a week and doubled our conversion rate.",
      author: "Maya R.",
      position: "CEO @ LoopStack",
      initials: "MR",
    },
    {
      quote:
        "Forget complex analytics tools. SyncroIQ gives us the insights we need without the overhead. Retention up 22% in a month.",
      author: "David S.",
      position: "CTO @ FunnelPilot",
      initials: "DS",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="relative h-[400px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full p-8 md:p-12 bg-gradient-to-br from-white to-[#F8F9FA] rounded-3xl shadow-lg transition-all duration-700 ${
                index === activeIndex
                  ? "opacity-100 z-10 translate-x-0"
                  : "opacity-0 z-0 -translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="absolute top-[-30px] left-[-30px] text-8xl text-[#6C63FF]/10 font-serif">
                  "
                </div>
                <blockquote className="text-2xl italic text-[#1A1A2E] pl-8 mt-8">
                  {testimonial.quote}
                </blockquote>
              </div>

              <div className="flex items-center mt-10 pt-6 border-t border-[#6C63FF]/10">
                <div className="w-16 h-16 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-xl font-bold mr-5">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-xl font-bold font-space-grotesk">
                    {testimonial.author}
                  </h4>
                  <p className="text-[#3D3D4E]">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-[#6C63FF] w-8 scale-125"
                  : "bg-[#6C63FF]/30"
              }`}
            ></button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-16">
          <div className="flex items-center bg-white py-2 px-5 rounded-full shadow-md">
            <i className="fas fa-shield-alt text-[#6C63FF] mr-2"></i>
            <span>SSL Secure</span>
          </div>
          <div className="flex items-center bg-white py-2 px-5 rounded-full shadow-md">
            <i className="fas fa-graduation-cap text-[#6C63FF] mr-2"></i>
            <span>YC Alumni</span>
          </div>
          <div className="flex items-center bg-white py-2 px-5 rounded-full shadow-md">
            <i className="fas fa-star text-[#6C63FF] mr-2"></i>
            <span>Featured in IndieHackers</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-6">
          <span className="font-bold text-[#6C63FF] opacity-80">Optibase</span>
          <span className="font-bold text-[#6C63FF] opacity-80">LoopStack</span>
          <span className="font-bold text-[#6C63FF] opacity-80">
            FunnelPilot
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
