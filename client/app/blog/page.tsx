"use client";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
  summary?: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "Mastersolis Launches AI-Powered Automation Platform",
      author: "Team Mastersolis",
      date: "Nov 8, 2025",
      category: "Company Updates",
      content:
        "Mastersolis Infotech has officially launched its new AI-powered automation suite designed to help enterprises streamline workflow management, reduce redundancy, and boost productivity using advanced machine learning techniques. The platform integrates seamlessly with existing business software and provides insights through predictive analytics.",
      summary:
        "Mastersolis introduces an AI automation suite to optimize workflows and enhance productivity with predictive insights.",
    },
    {
      id: "2",
      title: "How AI is Transforming Business Decision Making",
      author: "Varun D.",
      date: "Nov 1, 2025",
      category: "AI Insights",
      content:
        "Artificial Intelligence is reshaping industries by improving decision-making processes. From predictive analytics to real-time customer data analysis, businesses are leveraging AI tools to gain faster, more accurate insights that drive better results.",
      summary:
        "AI helps companies make smarter, faster decisions using predictive analytics and real-time data insights.",
    },
  ]);

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [aiSummary, setAiSummary] = useState<string>("");

  // Simulated AI summarization
  const generateSummary = (content: string) => {
    setAiSummary("🤖 AI Summary: " + content.slice(0, 120) + "...");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#081b3a] to-[#031226] text-white">
      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0f4473] to-[#1b73b8] flex items-center justify-center rounded-full font-bold text-lg">
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
          <a href="/services" className="hover:text-[#ff7a3d] transition">
            Services
          </a>
          <a href="/careers" className="hover:text-[#ff7a3d] transition">
            Careers
          </a>
          <a href="/blog" className="text-[#ff7a3d]">
            Blog
          </a>
          <a href="/contact" className="hover:text-[#ff7a3d] transition">
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Company News & Insights
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Stay updated with Mastersolis Infotech — learn how we use AI to
          transform business, innovation, and technology.
        </p>
      </section>

      {/* BLOG LIST */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white/10 border border-white/10 p-6 rounded-xl hover:bg-white/15 transition cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            <div className="flex justify-between items-center mb-2 text-xs text-white/60">
              <span>{post.category}</span>
              <span>{post.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-white/70 text-sm mb-4">{post.summary}</p>
            <div className="text-xs text-white/60">By {post.author}</div>
          </article>
        ))}
      </section>

      {/* BLOG DETAIL MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-slate-900 w-full max-w-3xl p-6 rounded-xl relative">
            <button
              onClick={() => {
                setSelectedPost(null);
                setAiSummary("");
              }}
              className="absolute top-3 right-3 text-white/70 hover:text-white"
            >
              ✕
            </button>

            <div className="text-sm text-white/60 mb-1">
              {selectedPost.category} • {selectedPost.date}
            </div>
            <h3 className="text-2xl font-bold mb-2">{selectedPost.title}</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              {selectedPost.content}
            </p>

            {/* AI SUMMARY SECTION */}
            <div className="border-t border-white/10 pt-4">
              <button
                onClick={() => generateSummary(selectedPost.content)}
                className="bg-[#ff7a3d] hover:bg-[#ff8a55] text-sm px-4 py-2 rounded-md font-semibold transition"
              >
                🧠 AI Summarize
              </button>

              {aiSummary && (
                <p className="mt-4 text-white/80 bg-white/10 p-3 rounded-md text-sm leading-relaxed">
                  {aiSummary}
                </p>
              )}
            </div>
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
