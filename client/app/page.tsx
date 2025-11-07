"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [aiText, setAiText] = useState("Generating intelligent suggestions...");
  const suggestions = [
    "Automate repetitive workflows and free up 40% of developer time.",
    "Use predictive analytics to prioritize high-value customers.",
    "Deploy conversational assistants to reduce support tickets by half.",
  ];

  useEffect(() => {
    let idx = 0;
    setAiText(suggestions[0]);
    const id = setInterval(() => {
      idx = (idx + 1) % suggestions.length;
      setAiText(suggestions[idx]);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#072b57] to-[#08294f] text-white antialiased">
      {/* NAV */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0f4473] to-[#1b73b8] flex items-center justify-center font-bold text-lg">
            MS
          </div>
          <div>
            <div className="font-extrabold text-lg">Mastersolis</div>
            <div className="text-sm text-white/70 -mt-0.5">Infotech</div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center py-10">
        {/* Left: text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Elevate Your Future with{" "}
            <span className="text-[#ff7a3d]">Intelligent Solutions</span>
          </h1>

          <p className="text-white/85 max-w-xl">
            We combine AI, automation, and cloud engineering to build scalable systems that reduce manual work,
            accelerate decision-making, and unlock growth.
          </p>

          <div className="flex gap-3">
            <a
              href="#contact"
              className="bg-[#ff7a3d] px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#ff8c55] transition"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/5 transition"
            >
              Our Services
            </a>
          </div>

          <div className="mt-6 bg-white/5 p-4 rounded-lg w-full max-w-md">
            <div className="font-semibold">AI-Powered Snapshot</div>
            <p className="text-sm text-white/85 mt-1 transition-opacity">{aiText}</p>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="relative w-full h-72 md:h-96 lg:h-[480px] rounded-xl overflow-hidden">
          {/* Use public/hero.png */}
          <Image
            src="/hero.png"
            alt="Hero illustration — person working on laptop with analytics"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority
            quality={90}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#072b57]/60 via-transparent to-[#072b57]/30 pointer-events-none" />
        </div>
      </section>

      {/* SERVICES HIGHLIGHTS (image + textual fallback) */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-extrabold mb-6">Our Services</h2>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-white/85 max-w-2xl">
              We provide end-to-end product development, AI & automation engineering, cloud architecture,
              and continuous support so your business can innovate faster and operate smarter.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <li className="bg-white/5 p-4 rounded-lg">AI & Automation</li>
              <li className="bg-white/5 p-4 rounded-lg">Data & Analytics</li>
              <li className="bg-white/5 p-4 rounded-lg">Cloud & DevOps</li>
              <li className="bg-white/5 p-4 rounded-lg">24/7 Support</li>
            </ul>
          </div>

          {/* services image (use public/services.png) */}
          <div className="relative w-full h-56 md:h-72 lg:h-80 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
            <Image
              src="/services.png"
              alt="Services highlights infographic"
              fill
              sizes="(max-width:768px) 100vw, 480px"
              priority
              quality={90}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (image + grid) */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-extrabold mb-6">What our clients say</h2>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* textual cards (left) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <article className="bg-white/5 p-6 rounded-lg">
              <p className="text-white/90 italic">"Mastersolis cut our reporting time by 70% — the automation they built is a game changer."</p>
              <div className="mt-4 font-semibold">Rohit S., Operations Head</div>
            </article>

            <article className="bg-white/5 p-6 rounded-lg">
              <p className="text-white/90 italic">"Their AI recommendations improved our conversion rates and lowered churn significantly."</p>
              <div className="mt-4 font-semibold">Anjali P., Product Lead</div>
            </article>

            <article className="bg-white/5 p-6 rounded-lg">
              <p className="text-white/90 italic">"Fast, communicative team that delivered beyond expectations."</p>
              <div className="mt-4 font-semibold">Samir K., Founder</div>
            </article>
          </div>

          {/* big testimonial image (use public/testimonials.png) */}
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/testimonials.png"
              alt="Testimonials artwork"
              fill
              sizes="(max-width:768px) 100vw, 480px"
              priority
              quality={90}
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#072b57]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-12 text-center">
        <div className="bg-white/6 p-8 rounded-xl inline-block">
          <h3 className="text-2xl font-semibold">Ready to transform your future?</h3>
          <p className="text-white/80 mt-2">Book a free consultation and see what automation + AI can do for you.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#contact" className="bg-[#ff7a3d] px-6 py-3 rounded-lg font-semibold shadow">Request a Call</a>
            <a href="#services" className="px-6 py-3 rounded-lg border border-white/10">Explore Services</a>
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 py-8 text-center text-white/70">
        © {new Date().getFullYear()} Mastersolis Infotech • Intelligent. Modern. Scalable.
      </footer>
    </main>
  );
}
