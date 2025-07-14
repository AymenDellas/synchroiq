const StorySection = () => {
  const steps = [
    {
      icon: "fas fa-question",
      title: "What's Blocking Growth After Signup?",
      content:
        "Your trial users log in once, click around... and vanish. No clue what they did. No clue what lost them.",
      highlight: '"We saw 70% of trial users never returned after day 1"',
    },
    {
      icon: "fas fa-exclamation-triangle",
      title: "Why Most Analytics Tools Don't Help",
      content:
        "Bloated dashboards. Endless configs. By the time it's set up, your user's already churned. You need answers — not a BI team.",
      highlight: '"We spent 3 weeks setting up without actionable insights"',
    },
    {
      icon: "fas fa-lightbulb",
      title: "How SyncroIQ Solves It",
      content:
        "Auto-tracks user behavior instantly. Reveals which features close the deal — and which ones kill retention. No setup. Just clarity.",
      highlight: '"Identified our conversion-killing feature in 48 hours"',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8F9FA] relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#6C63FF]/5 to-[#FF7F50]/5 clip-path-polygon"></div>

      <div className="container mx-auto max-w-4xl px-4 relative">
        <div className="relative pl-16">
          {/* Timeline line */}
          <div className="absolute left-[60px] top-0 bottom-0 w-1 bg-[#6C63FF]/20 rounded-full"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="mb-16 relative -skew-x-3 hover:skew-x-0 transition-all duration-300"
            >
              {/* Timeline marker */}
              <div className="absolute left-[-70px] top-0 w-12 h-12 rounded-full bg-white border-4 border-[#6C63FF] flex items-center justify-center">
                <i className={`${step.icon} text-[#6C63FF]`}></i>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="skew-x-3">
                  <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#3D3D4E] mb-6">{step.content}</p>
                  <div className="inline-block bg-[#FF7F50]/10 text-[#FF7F50] font-semibold py-2 px-4 rounded-full">
                    {step.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center  space-y-8">
          <div className=" bg-[#6C63FF]/10 text-[#6C63FF] font-bold py-3 px-6 rounded-full w-fit mx-auto">
            <i className="fas fa-lightbulb "></i> The #1 Feature That Makes 87%
            of Users Stick Around
          </div>
          <a
            href="#cta"
            className=" items-center bg-[#FF7F50] hover:bg-[#e66a40] text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#FF7F50]/40"
          >
            👉 Get My Free Product Analytics Audit
          </a>
          <p className=" text-[#3D3D4E] text-center mt-8">
            <i className="fas fa-lock mr-2"></i> Try Free — No Credit Card.
            Cancel Anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
