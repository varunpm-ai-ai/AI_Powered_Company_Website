"use client";

import { useEffect, useState, useRef } from "react";

const SERVICES_INITIAL = [
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    icon: "📈",
    base:
      "Predict future outcomes using historical data to reduce risk and increase ROI across campaigns and operations.",
  },
  {
    id: "automation",
    title: "AI Automation",
    icon: "🤖",
    base:
      "Automate repetitive processes so teams focus on strategy — reduce manual hours and accelerate delivery.",
  },
  {
    id: "cloud-engineering",
    title: "Cloud Engineering",
    icon: "☁️",
    base:
      "Design scalable cloud architectures that improve reliability and lower operational costs for growth-ready apps.",
  },
  {
    id: "product-dev",
    title: "Product Development",
    icon: "🛠️",
    base:
      "End-to-end product delivery from prototyping to production, with continuous feedback and measurable KPIs.",
  },
];

export default function LandingPage() {
  const [services, setServices] = useState(
    SERVICES_INITIAL.map((s) => ({ ...s, ai: s.base }))
  );
  const [refining, setRefining] = useState(null); // service id being refined
  const [keyword, setKeyword] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { who: "bot", text: "Hi there! I'm your AI Service Assistant. How can I help you today?" },
  ]);
  const inputRef = useRef(null);

  function refineDescription(serviceId, keywords) {
    const svc = services.find((s) => s.id === serviceId);
    const k = (keywords || "").trim();
    let refined = svc.base;
    if (k.length > 0) {
      refined = `${svc.base} Tailored for "${k}" — emphasizes faster time-to-value, domain-specific KPIs, and deployment patterns relevant to ${k}.`;
    } else {
      refined = `${svc.base} (general).`;
    }
    setServices((prev) => prev.map((p) => (p.id === serviceId ? { ...p, ai: refined } : p)));
    setRefining(null);
    setKeyword("");
  }

  function sendUserMessage(text) {
    if (!text) return;
    setChatMessages((m) => [...m, { who: "user", text }]);
    setTimeout(() => {
      // simple quick-response logic
      const lower = text.toLowerCase();
      let reply =
        "I can help you with service details, pricing, or booking a consultation. Try: 'Tell me about Predictive Analytics'";
      if (lower.includes("predict")) reply = services.find(s=>s.id==='predictive-analytics').ai;
      if (lower.includes("automation")) reply = services.find(s=>s.id==='automation').ai;
      if (lower.includes("pricing")) reply = "Our pricing depends on scope — we offer fixed-scope pilots and usage-based models. Want a quote?";
      if (lower.includes("consult")) reply = "Great — provide a preferred time and we will connect you with an expert.";
      setChatMessages((m) => [...m, { who: "bot", text: reply }]);
    }, 700);
  }

  // quick replies for chat
  const quickReplies = [
    "Tell me about Predictive Analytics",
    "Pricing info",
    "Book a consultation",
  ];

  // keyboard focus for chat input when opened
  useEffect(() => {
    if (chatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [chatOpen]);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#071d3a] via-[#082b50] to-[#051a36] text-slate-100">
      {/* Header / Navbar */}
      <header className="sticky top-0 backdrop-blur-sm bg-slate-900/30 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-linear-to-br from-[#0f4473] to-[#1b73b8] flex items-center justify-center font-bold">MS</div>
            <div>
              <div className="font-extrabold text-white">Mastersolis</div>
              <div className="text-xs text-slate-300 -mt-0.5">Infotech</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a className="hidden sm:inline-block bg-[#ff7a3d] px-4 py-2 rounded-md font-semibold hover:bg-[#ff8a55] transition" href="#services">Explore Services</a>
            {/* mobile menu could go here */}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* neural background pattern - subtle svg pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            {/* create a subtle neural network-like pattern */}
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#0f4473" />
                <stop offset="1" stopColor="#1b73b8" />
              </linearGradient>
            </defs>
            <g stroke="url(#g)" strokeWidth="1" fill="none">
              {/* sample nodes / lines */}
              <circle cx="10%" cy="20%" r="4" />
              <circle cx="25%" cy="35%" r="3" />
              <circle cx="40%" cy="18%" r="4" />
              <circle cx="65%" cy="30%" r="3" />
              <circle cx="80%" cy="15%" r="4" />
              <line x1="10%" y1="20%" x2="25%" y2="35%" />
              <line x1="25%" y1="35%" x2="40%" y2="18%" />
              <line x1="40%" y1="18%" x2="65%" y2="30%" />
              <line x1="65%" y1="30%" x2="80%" y2="15%" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Our Services, <span className="text-[#ff7a3d]">Enhanced by AI Innovation</span>
            </h1>

            <p className="text-slate-200 max-w-xl">
              Discover tailored solutions with descriptions generated by our intelligent platform for maximum relevance.
              Each service can be refined to your domain or use-case so the benefits are clear and directly applicable.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-[#ff7a3d] px-5 py-3 rounded-lg text-sm font-semibold shadow hover:bg-[#ff8a55] transition"
                aria-label="Explore Services"
              >
                Explore Services
              </a>
              <button
                onClick={() => setChatOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 text-sm hover:bg-white/5 transition"
                aria-label="Open AI Assistant"
              >
                Chat with AI
              </button>
            </div>
          </div>

          {/* visual / subtle graphic */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl bg-linear-to-br from-[#0b2d50]/40 to-transparent border border-white/5 flex items-center justify-center">
            {/* place a stylized neural/ai illustration (SVG placeholder) */}
            <svg className="w-56 h-56 opacity-80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="nm" x1="0" x2="1"><stop offset="0" stopColor="#0f4473" /><stop offset="1" stopColor="#1b73b8" /></linearGradient>
              </defs>
              <g fill="none" stroke="url(#nm)" strokeWidth="2" strokeLinecap="round">
                <circle cx="100" cy="100" r="40" />
                <circle cx="60" cy="60" r="6" fill="#0f4473" stroke="none" />
                <circle cx="140" cy="60" r="6" fill="#1b73b8" stroke="none" />
                <circle cx="60" cy="140" r="6" fill="#1b73b8" stroke="none" />
                <circle cx="140" cy="140" r="6" fill="#0f4473" stroke="none" />
                <path d="M60 60 L100 100 L140 60" />
                <path d="M60 140 L100 100 L140 140" />
                <path d="M100 60 L100 140" />
              </g>
            </svg>
            <div className="absolute bottom-6 left-6 bg-white/6 px-3 py-1 rounded-full text-xs">AI Neural Pattern</div>
          </div>
        </div>
      </section>

      {/* Services Listing Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold">Our Services</h2>
            <p className="text-slate-300 text-sm">Card-based layout for quick scanning. Refine AI descriptions for your industry.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">

          {services.map((s) => (
            <article
              key={s.id}
              className="bg-slate-800/60 border border-white/6 rounded-xl p-5 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md bg-linear-to-br from-[#0f4473] to-[#1b73b8] flex items-center justify-center text-xl">
                    <span aria-hidden>{s.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <div className="text-xs text-slate-400 flex items-center gap-2 mt-1">
                      <svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span>AI Generated Description</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-slate-200 text-sm min-h-[72px]">{s.ai}</p>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setRefining(s.id)}
                    className="text-sm bg-white/5 px-3 py-2 rounded-md hover:bg-white/7 transition"
                    aria-label={`Refine description for ${s.title}`}
                  >
                    Refine description
                  </button>
                  <button
                    onClick={() => {
                      // quick sample: set industry to retail for demonstration
                      refineDescription(s.id, "retail");
                    }}
                    className="text-sm bg-white/5 px-3 py-2 rounded-md hover:bg-white/7 transition"
                    aria-label={`Refine for retail for ${s.title}`}
                  >
                    Refine for Retail
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <a className="text-sm bg-[#ff7a3d] px-3 py-2 rounded-md font-semibold hover:bg-[#ff8a55] transition" href="#contact">
                    Inquire Now
                  </a>
                  <a className="text-sm px-3 py-2 rounded-md border border-white/6 hover:bg-white/5 transition" href={`#${s.id}`}>
                    Learn More
                  </a>
                </div>
              </div>

              {/* refine modal / inline form */}
              {refining === s.id && (
                <div className="mt-4 bg-slate-900/70 border border-white/5 rounded-md p-3">
                  <label className="text-xs text-slate-300">Refine description (add keyword / industry)</label>
                  <div className="mt-2 flex gap-2">
                    <input
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      placeholder="e.g., retail, healthcare, fintech"
                      className="flex-1 bg-transparent border border-white/6 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1b73b8]"
                    />
                    <button
                      onClick={() => refineDescription(s.id, keyword)}
                      className="bg-[#1b73b8] px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Apply
                    </button>
                  </div>
                  <div className="mt-2 text-xs text-slate-400">Tip: Try industry keywords like 'retail' or 'logistics'.</div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* AI Assistant Floating - Chat */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end">
        {/* floating trigger */}
        <button
          onClick={() => setChatOpen((v) => !v)}
          className="mb-3 flex items-center gap-2 bg-linear-to-br from-[#0f4473] to-[#1b73b8] px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
          aria-label="Open AI Assistant"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 8a9 9 0 0118 0v3a9 9 0 01-9 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="hidden sm:inline text-sm font-semibold">AI Help</span>
        </button>

        {/* sliding chat */}
        <div
          className={`w-[340px] bg-slate-900/95 border border-white/6 rounded-xl shadow-xl overflow-hidden transform transition-all ${
            chatOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
          }`}
          role="dialog"
          aria-hidden={!chatOpen}
        >
          <div className="px-4 py-3 bg-linear-to-r from-[#0b2d50] to-[#0b3f66] flex items-center justify-between">
            <div className="text-sm font-semibold">Hi there! I'm your AI Service Assistant.</div>
            <div className="flex items-center gap-2">
              <button className="text-xs text-slate-200/90" onClick={() => {
                // minimalize = close
                setChatOpen(false);
              }}>Minimize</button>
            </div>
          </div>

          <div className="p-3 max-h-64 overflow-y-auto space-y-3">
            {chatMessages.map((m, i) => (
              <div key={i} className={`flex ${m.who === "user" ? "justify-end" : ""}`}>
                <div className={`${m.who === "user" ? "bg-[#0f4473] text-white" : "bg-white/6 text-slate-200"} rounded-xl px-3 py-2 max-w-[80%]`}>
                  <div className="text-sm">{m.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 py-3 border-t border-white/6">
            <div className="flex gap-2 mb-2">
              {quickReplies.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendUserMessage(q)}
                  className="text-xs bg-white/6 px-3 py-1 rounded-full hover:bg-white/8"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const txt = e.target.message.value.trim();
                if (!txt) return;
                sendUserMessage(txt);
                e.target.reset();
              }}
              className="flex gap-2"
            >
              <input
                name="message"
                ref={inputRef}
                className="flex-1 bg-transparent border border-white/6 rounded-md px-3 py-2 focus:outline-none"
                placeholder="Ask about a service or say 'pricing'..."
                aria-label="Message to AI assistant"
              />
              <button type="submit" className="bg-[#1b73b8] px-3 py-2 rounded-md">Send</button>
            </form>

            <div className="text-xs text-slate-400 mt-2">
              <button
                onClick={() => {
                  setChatMessages((m) => [...m, { who: "bot", text: "Connecting you to a human agent..." }]);
                }}
                className="underline"
              >
                Connect with a human agent
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-300 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Mastersolis Infotech</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#ff7a3d]">Privacy</a>
            <a href="#" className="hover:text-[#ff7a3d]">Terms</a>
            <a href="#" className="hover:text-[#ff7a3d]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
