const CtaSection = () => {
  return (
    <section id="cta" className="py-20 relative">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-gradient-to-r from-[#6C63FF] to-[#5a52e0] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
              Ready to Grow Without Guesswork?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Start your free trial today and see why SaaS founders are
              switching to SyncroIQ
            </p>

            <a
              href="#"
              className="inline-flex items-center bg-white text-[#6C63FF] hover:text-[#5a52e0] font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/20 -skew-x-3 group"
            >
              👉 Start My Free Trial — No Setup Needed
              <i className="fas fa-arrow-right ml-4 group-hover:translate-x-2 transition-transform duration-300"></i>
            </a>

            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm text-white py-3 px-6 rounded-full mt-8 border border-white/20">
              <i className="fas fa-sync-alt mr-3"></i>
              Cancel anytime. No credit card required.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
