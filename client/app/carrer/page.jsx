"use client";
import { useState } from "react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "AI Engineer",
      location: "Remote",
      type: "Full-time",
      description:
        "Design and implement intelligent automation systems using machine learning and natural language models.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Build beautiful, high-performance web interfaces with React and Tailwind CSS.",
    },
    {
      id: 3,
      title: "Data Scientist",
      location: "Remote / Hybrid",
      type: "Contract",
      description:
        "Analyze large datasets to develop predictive models and uncover actionable business insights.",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-[#081b3a] to-[#031226] text-white">
      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-linear-to-b from-[#0f4473] to-[#1b73b8] flex items-center justify-center rounded-full font-bold text-lg">
            MS
          </div>
          <div>
            <h1 className="font-extrabold text-xl">Mastersolis</h1>
            <p className="text-sm text-white/70 -mt-1">Infotech</p>
          </div>
        </div>

        <nav className="space-x-6 text-sm font-semibold hidden md:block">
          <a href="/" className="hover:text-[#ff7a3d] transition">
            Home
          </a>
          <a href="/about" className="hover:text-[#ff7a3d] transition">
            About
          </a>
          <a href="/services" className="hover:text-[#ff7a3d] transition">
            Services
          </a>
          <a href="/careers" className="text-[#ff7a3d]">
            Careers
          </a>
          <a href="/contact" className="hover:text-[#ff7a3d] transition">
            Contact
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Join <span className="text-[#ff7a3d]">Mastersolis Infotech</span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Explore exciting career opportunities with us. We’re driven by AI innovation, automation, and
          creative problem-solving — and we’d love for you to be part of our journey.
        </p>
      </section>

      {/* JOB LISTING SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-[#ff7a3d] pl-3">
          Open Positions
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg p-6 transition"
            >
              <h4 className="text-xl font-semibold mb-1">{job.title}</h4>
              <p className="text-sm text-white/70 mb-2">
                {job.location} • {job.type}
              </p>
              <p className="text-white/80 text-sm mb-4">{job.description}</p>
              <button
                onClick={() => setSelectedJob(job)}
                className="bg-[#ff7a3d] hover:bg-[#ff8a55] px-4 py-2 rounded-md text-sm font-semibold transition"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-slate-900 rounded-xl p-6 w-full max-w-lg relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-3 right-3 text-white/70 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-1">
              Apply for {selectedJob.title}
            </h3>
            <p className="text-sm text-white/70 mb-6">
              {selectedJob.location} • {selectedJob.type}
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-2 rounded-md bg-transparent border border-white/10 focus:border-[#ff7a3d] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 rounded-md bg-transparent border border-white/10 focus:border-[#ff7a3d] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full px-3 py-2 rounded-md bg-transparent border border-white/10 focus:border-[#ff7a3d] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Upload Resume</label>
                <input
                  type="file"
                  className="w-full text-sm text-white/70 border border-white/10 rounded-md file:bg-[#ff7a3d] file:text-white file:border-none file:px-3 file:py-1 file:rounded file:mr-3 file:cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Cover Letter</label>
                <textarea
                  rows={4}
                  placeholder="Write a short message..."
                  className="w-full px-3 py-2 rounded-md bg-transparent border border-white/10 focus:border-[#ff7a3d] outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#ff7a3d] hover:bg-[#ff8a55] text-white font-semibold py-2 rounded-md transition"
              >
                Submit Application
              </button>

              <p className="text-xs text-center text-white/60 mt-2">
                You’ll receive an automatic email confirmation:
                <br />
                <span className="italic text-white/80">
                  “Thank you for applying to Mastersolis…”
                </span>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-20 py-8 border-t border-white/10 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Mastersolis Infotech — Innovating with
        Intelligence.
      </footer>
    </main>
  );
}
