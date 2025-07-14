const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden ">
      {/* Background element */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] -mt-[300px] -mr-[300px] bg-radial-gradient(circle, #6C63FF 0%, transparent 70%) opacity-10"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block bg-[#FF7F50]/15 text-[#FF7F50] font-semibold py-2 px-5 rounded-full mb-6 -rotate-3">
              <i className="fas fa-bolt mr-2"></i> Early Access Program
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk leading-tight mb-6">
              Stop Guessing What Users Want.{" "}
              <span className="text-[#6C63FF] relative">
                Get 20% Higher Retention
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FFD700]/40 rounded-md -z-10"></span>
              </span>{" "}
              Without Complex Analytics
            </h1>

            <p className="text-xl text-[#3D3D4E] mb-8 max-w-2xl">
              SyncroIQ helps early-stage SaaS teams instantly track feature
              usage, spot churn signals, and increase trial-to-paid conversions
              — all without a single line of code.
            </p>

            <a
              href="#cta"
              className="inline-flex items-center bg-[#6C63FF] hover:bg-[#5a52e0] text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#6C63FF]/40 -skew-x-3"
            >
              👉 See How It Works{" "}
              <i className="fas fa-arrow-right ml-3 transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>

            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-[#6C63FF] rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="text-3xl font-bold text-[#6C63FF]">20%</div>
                  <div className="text-[#3D3D4E]">Higher Retention</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-[#6C63FF] rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="text-3xl font-bold text-[#6C63FF]">0</div>
                  <div className="text-[#3D3D4E]">Lines of Code</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-[#6C63FF] rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="text-3xl font-bold text-[#6C63FF]">14s</div>
                  <div className="text-[#3D3D4E]">Setup Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
