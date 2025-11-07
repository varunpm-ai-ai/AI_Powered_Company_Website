"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#072b57] via-[#0b3268] to-[#0a2955] text-white">
      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0f4473] to-[#1b73b8] font-bold">
            MS
          </div>
          <div>
            <h1 className="text-xl font-extrabold">Mastersolis</h1>
            <p className="text-sm text-white/70 -mt-1">Infotech</p>
          </div>
        </div>
      </header>

      {/* Hero / Intro */}
      <section className="max-w-6xl mx-auto px-6 text-center mt-12 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
        >
          Our Story, Vision & Values
        </motion.h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          We believe technology should simplify life — not complicate it. Mastersolis Infotech was founded
          to empower businesses through automation, intelligence, and innovation.
        </p>
      </section>

      {/* 1. WHY — The Founding Story */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-[#ff7a3d]">
            1. The Moment It All Began
          </h3>
          <p className="text-white/85">
            It started with a simple frustration — repetitive processes slowing innovation. 
            Our founders experienced firsthand how inefficiency can limit creativity and 
            growth. That’s when we decided to create a company focused on solving problems 
            with intelligent automation and modern software design.
          </p>
          <p className="text-white/70">
            We didn’t just want to build another tech firm — we wanted to redefine how 
            businesses interact with technology. That purpose became our “why.”
          </p>
        </div>

        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src="/about.png"
            alt="Founding inspiration"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#072b57]/60 to-transparent" />
        </div>
      </section>

      {/* 2. WHO — Founding Team */}
      <section className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/about-team.png"
              alt="Founding team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#072b57]/70 to-transparent" />
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-[#ff7a3d]">
              2. The People Behind the Vision
            </h3>
            <p className="text-white/85">
              Our founding team is made up of engineers, designers, and strategists who 
              believe in building meaningful digital systems. With deep roots in software 
              development, automation, and data analytics, we knew we were the right people 
              to bring this idea to life.
            </p>
            <p className="text-white/70">
              Together, we’ve created a culture that values curiosity, creativity, and 
              commitment to progress.
            </p>
          </div>
        </div>
      </section>

      {/* 3. JOURNEY — Company Evolution */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-[#ff7a3d]">
            3. How We Evolved
          </h3>
          <p className="text-white/85">
            From a small team of innovators to a global technology partner — our journey 
            has been one of constant learning and adaptation. Every challenge became an 
            opportunity to grow stronger.
          </p>
          <ul className="list-disc list-inside text-white/80">
            <li>2018 — Conceptualized the idea of AI-driven process optimization</li>
            <li>2020 — Built our first automation platform for enterprise clients</li>
            <li>2022 — Expanded globally with cloud transformation projects</li>
            <li>2024 — Launched AI-powered analytics suite</li>
          </ul>
        </div>

        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src="/about-journey.png"
            alt="Company growth timeline"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#072b57]/60 to-transparent" />
        </div>
      </section>

      {/* 4. FUTURE — Mission & Vision */}
      <section className="bg-white/5 backdrop-blur-sm py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-[#ff7a3d] mb-4">
            4. Our Mission & Vision
          </h3>
          <p className="text-white/85 text-lg leading-relaxed">
            Our mission is to simplify business operations using the power of AI and 
            automation. We aim to make innovation accessible for every organization — big 
            or small.
          </p>
          <p className="text-white/75 mt-4">
            Our vision is a world where technology enhances human creativity, decision-making, 
            and collaboration. We’re building solutions that empower businesses to adapt, 
            grow, and thrive in the digital age.
          </p>

          <div className="mt-10">
            <a
              href="/#contact"
              className="inline-block bg-[#ff7a3d] px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#ff8a55] transition"
            >
              Join Our Mission
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-white/70 text-sm py-10">
        © {new Date().getFullYear()} Mastersolis Infotech • Built with purpose and innovation.
      </footer>
    </main>
  );
}
