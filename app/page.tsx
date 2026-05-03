export default function Home() {
  const faqs = [
    {
      q: "How many citation sources do you check?",
      a: "We scan 200+ directories including Google Business Profile, Yelp, Bing Places, Apple Maps, Facebook, Foursquare, and hundreds of niche and local directories."
    },
    {
      q: "What do I get in the gap analysis report?",
      a: "A prioritized list of missing citations, submission instructions for each source, NAP consistency checks, and an overall citation health score for your business."
    },
    {
      q: "Do I need technical skills to use this?",
      a: "No. Just enter your business name, address, and phone number. We handle the scanning and deliver a clear, actionable report you can follow step by step."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Local SEO Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Find Missing Citations<br />
          <span className="text-[#58a6ff]">Hurting Your Rankings</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Scan 200+ citation sources to discover where your business listing is missing. Get a full gap analysis with submission instructions and priority rankings.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Start Finding Gaps — $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No contracts.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-4">
            <span className="text-5xl font-extrabold text-white">$12</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Scan 200+ citation sources",
              "Full gap analysis report",
              "NAP consistency checker",
              "Priority submission instructions",
              "Citation health score",
              "Unlimited scans per month"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
