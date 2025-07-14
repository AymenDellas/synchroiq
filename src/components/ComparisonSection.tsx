const ComparisonSection = () => {
  const features = [
    {
      title: "Setup Process",
      typical: "7-step setup",
      syncroiq: "Instant tracking",
    },
    {
      title: "Reporting",
      typical: "Confusing reports",
      syncroiq: "Clear insights",
    },
    {
      title: "Technical Requirements",
      typical: "Dev team required",
      syncroiq: "No-code install",
    },
    {
      title: "Value Provided",
      typical: "Just data",
      syncroiq: "Real retention strategy",
    },
  ];

  return (
    <section className="py-20 bg-[#1A1A2E] text-white relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] -mt-[300px] -ml-[300px] bg-radial-gradient(circle, #FF7F50 0%, transparent 70%) opacity-10"></div>

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            Why Founders Are Ditching Overbuilt Analytics Stacks
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            See how SyncroIQ compares to traditional analytics tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Typical Tools Card */}
          <div
            className={`bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 rounded-2xl p-8 transition-all duration-300 `}
          >
            <div className="flex items-center mb-6 pb-6 border-b  border-white/10">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-[#FF7F50] text-xl mr-4">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk">
                Typical Tools
              </h3>
            </div>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center py-2 border-b border-white/5"
                >
                  <i className="fas fa-times text-[#FF4500] mr-3 text-xl"></i>
                  <span className="text-white/90">{feature.typical}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SyncroIQ Card */}
          <div
            className={`bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 rounded-2xl p-8 transition-all duration-300 `}
          >
            <div className="flex items-center mb-6 pb-6 border-b border-white/10">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-[#6C63FF] text-xl mr-4">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk">
                SyncroIQ
              </h3>
            </div>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center py-2 border-b border-white/5"
                >
                  <i className="fas fa-check text-[#32CD32] mr-3 text-xl"></i>
                  <span className="text-white/90">{feature.syncroiq}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-[#FFD700]/20 text-[#FFD700] font-bold py-3 px-6 rounded-full animate-pulse">
            <i className="fas fa-clock mr-2"></i> Only 2 early access slots left
            this week
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
