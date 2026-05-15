"use client"
import { useState, useRef, useEffect } from "react";


function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >{children}</div>
  );
}


const resourceCategories = [
  {
    id: "jee",
    label: "IIT JEE",
    icon: "🎯",
    color: "from-emerald-500 to-teal-500",
    tagBg: "bg-emerald-500",
    bgLight: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-700",
    resources: [
      { title: "JEE Mains Previous Year Papers 2018–2025", type: "PDF", size: "24 MB", desc: "Complete question papers with official answer keys for all shifts", tag: "PYQ" },
      { title: "JEE Advanced Previous Year Papers 2018–2025", type: "PDF", size: "18 MB", desc: "Full papers with detailed solutions and marking scheme", tag: "PYQ" },
      { title: "JEE Mains Formula Sheet — Physics", type: "PDF", size: "2.1 MB", desc: "All key formulas, derivations and constants for JEE Physics", tag: "Formula" },
      { title: "JEE Mains Formula Sheet — Chemistry", type: "PDF", size: "1.8 MB", desc: "Reaction summaries, name reactions and periodic table data", tag: "Formula" },
      { title: "JEE Mains Formula Sheet — Mathematics", type: "PDF", size: "2.4 MB", desc: "Formulas, identities and theorem summaries for all JEE Math topics", tag: "Formula" },
      { title: "Chapter-wise JEE Practice Questions", type: "PDF", size: "15 MB", desc: "600+ questions sorted by chapter and difficulty level", tag: "Practice" },
    ],
  },
  {
    id: "neet",
    label: "NEET UG",
    icon: "🩺",
    color: "from-rose-500 to-pink-500",
    tagBg: "bg-rose-500",
    bgLight: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-700",
    resources: [
      { title: "NEET UG Previous Year Papers 2018–2025", type: "PDF", size: "20 MB", desc: "Complete NTA NEET papers with official answer keys", tag: "PYQ" },
      { title: "NCERT Quick Revision Notes — Biology", type: "PDF", size: "5.2 MB", desc: "Chapter-wise NCERT Biology notes — Botany and Zoology combined", tag: "Notes" },
      { title: "NCERT Quick Revision Notes — Physics", type: "PDF", size: "3.8 MB", desc: "NEET-focused Physics notes with key formulas and diagrams", tag: "Notes" },
      { title: "NCERT Quick Revision Notes — Chemistry", type: "PDF", size: "4.1 MB", desc: "Inorganic, Organic and Physical Chemistry NCERT summaries", tag: "Notes" },
      { title: "NEET Biology Formula Sheet", type: "PDF", size: "1.9 MB", desc: "Diagrams, classifications and key terms from NCERT Biology", tag: "Formula" },
      { title: "Chapter-wise NEET Practice Questions", type: "PDF", size: "14 MB", desc: "500+ NEET-pattern MCQs with explanations and answer keys", tag: "Practice" },
    ],
  },
  {
    id: "mhtcet",
    label: "MHT-CET",
    icon: "🏆",
    color: "from-violet-500 to-purple-500",
    tagBg: "bg-violet-500",
    bgLight: "bg-violet-50",
    border: "border-violet-200",
    text: "text-violet-700",
    resources: [
      { title: "MHT-CET Previous Year Papers 2018–2025", type: "PDF", size: "16 MB", desc: "Maharashtra State CET papers with solutions for PCM and PCB", tag: "PYQ" },
      { title: "MHT-CET Formula Sheet — Physics & Chemistry", type: "PDF", size: "2.3 MB", desc: "Maharashtra Board aligned formulas for PCM aspirants", tag: "Formula" },
      { title: "MHT-CET Mathematics Quick Notes", type: "PDF", size: "3.0 MB", desc: "Chapter-wise notes aligned to Maharashtra State Board Class 11–12", tag: "Notes" },
      { title: "MHT-CET Chapter-wise Practice Papers", type: "PDF", size: "12 MB", desc: "Topic-wise MCQs aligned to the latest MHT-CET paper pattern", tag: "Practice" },
      { title: "MHT-CET 2026 Paper Pattern Guide", type: "PDF", size: "0.8 MB", desc: "Updated marking scheme, section breakdown and syllabus mapping", tag: "Guide" },
    ],
  },
  {
    id: "board",
    label: "HSC & SSC Board",
    icon: "📜",
    color: "from-blue-500 to-indigo-500",
    tagBg: "bg-blue-500",
    bgLight: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    resources: [
      { title: "HSC Maharashtra Board Papers 2018–2025 — Science", type: "PDF", size: "18 MB", desc: "Physics, Chemistry, Maths and Biology board papers with model answers", tag: "PYQ" },
      { title: "SSC Maharashtra Board Papers 2018–2025", type: "PDF", size: "14 MB", desc: "Class 10 board exam papers across all subjects with marking scheme", tag: "PYQ" },
      { title: "HSC Physics Quick Revision Notes", type: "PDF", size: "2.6 MB", desc: "Chapter-wise key points, diagrams and numerical practice", tag: "Notes" },
      { title: "HSC Chemistry Formula Sheet", type: "PDF", size: "1.7 MB", desc: "Name reactions, IUPAC rules and key inorganic reactions", tag: "Formula" },
      { title: "HSC Score 90%+ Answer Writing Guide", type: "PDF", size: "1.1 MB", desc: "Board exam answer-writing technique, diagram tips and time management", tag: "Guide" },
    ],
  },
];

const deadlines = [
  { exam: "JEE Mains Session 1",  date: "Jan 22 – 31, 2026", status: "upcoming", color: "from-emerald-500 to-teal-500",   icon: "🎯" },
  { exam: "JEE Mains Session 2",  date: "Apr 2 – 8, 2026",   status: "upcoming", color: "from-emerald-500 to-teal-500",   icon: "🎯" },
  { exam: "JEE Advanced 2026",    date: "May 18, 2026",       status: "upcoming", color: "from-amber-500 to-orange-500",   icon: "🔥" },
  { exam: "NEET UG 2026",         date: "May 3, 2026",        status: "upcoming", color: "from-rose-500 to-pink-500",      icon: "🩺" },
  { exam: "MHT-CET PCM 2026",     date: "Apr 19 – 30, 2026",  status: "upcoming", color: "from-violet-500 to-purple-500",  icon: "🏆" },
  { exam: "MHT-CET PCB 2026",     date: "May 2 – 14, 2026",   status: "upcoming", color: "from-violet-500 to-purple-500",  icon: "🏆" },
  { exam: "HSC Maharashtra Board", date: "Feb 21 – Mar 18, 2026", status: "upcoming", color: "from-blue-500 to-indigo-500", icon: "📜" },
  { exam: "JEE Mains Registration", date: "Nov 1 – 30, 2025",  status: "done",    color: "from-gray-400 to-gray-500",      icon: "✅" },
];

const tagColors = {
  PYQ:      "bg-amber-100 text-amber-700 border border-amber-200",
  Formula:  "bg-emerald-100 text-emerald-700 border border-emerald-200",
  Notes:    "bg-blue-100 text-blue-700 border border-blue-200",
  Practice: "bg-violet-100 text-violet-700 border border-violet-200",
  Guide:    "bg-rose-100 text-rose-700 border border-rose-200",
};

const stats = [
  { val: "40+", label: "Free Resources"       },
  { val: "8",   label: "Years of Papers"      },
  { val: "4",   label: "Exam Categories"      },
  { val: "100%",label: "Free — No Signup"     },
];

const centres = ["Kapurbawdi", "Majiwada", "Highland Dhokali", "Lodha Amara", "Kasheli", "Gokul Nagar"];

export default function Page() {
  const [activeTab, setActiveTab]     = useState("jee");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloaded, setDownloaded]   = useState({});

  const activeCat  = resourceCategories.find((c) => c.id === activeTab);
  const filtered   = activeCat.resources.filter((r) =>
    searchQuery === "" ||
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = (title) => {
    setDownloaded((d) => ({ ...d, [title]: true }));
    // Wire to real file URLs when ready
  };

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        .gold-gradient  { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.10); }
        .shine-btn { position: relative; overflow: hidden; }
        .shine-btn::after {
          content:''; position:absolute; top:-50%; left:-75%; width:50%; height:200%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);
          transform:skewX(-20deg); animation:shine 3s infinite;
        }
        @keyframes shine  { 0%,100%{left:-75%} 50%{left:125%} }
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .float-anim  { animation: float 5s ease-in-out infinite; }
        .clip-hero   { clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%); }
        .marquee-track { display:flex; animation: marquee 18s linear infinite; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .tab-scroll::-webkit-scrollbar { display:none; }
        .resources-grid { animation: fadeUp 0.35s ease both; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        .search-input:focus { outline:none; }
        .pulse-dot::before { content:''; position:absolute; inset:0; border-radius:9999px; background:inherit; animation: pulse-ring 2s ease-out infinite; }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:1} 100%{transform:scale(1.8);opacity:0} }
        .deadline-row { transition: background 0.2s ease; }
        .deadline-row:hover { background: rgba(245,158,11,0.04); }
      `}</style>


      
      <section
        className=" min-h-[65vh] flex items-center relative overflow-hidden pt-24 pb-32"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">📥</span>
          <div><div className="font-semibold">40+ Free Resources</div><div className="text-white/60 text-xs">No signup required</div></div>
        </div>
        <div className="float-anim absolute bottom-44 right-28 hidden lg:flex items-center gap-2 bg-amber-500/90 rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">📅</span>
          <div><div className="font-semibold">Exam Deadlines 2026</div><div className="text-white/80 text-xs">All in one place</div></div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}
            >
              <span className="relative w-2 h-2 bg-amber-400 rounded-full pulse-dot" />
              Students Hub
            </div>

            <h1
              className="font-display text-4xl sm:text-5xl lg:text-5xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              Free Resources for<br />
              <span className="gold-text">IIT JEE, NEET,</span><br />
              MHT-CET & Board
            </h1>

            <p
              className="text-white text-md leading-relaxed max-w-2xl mb-8"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}
            >
              Previous year papers, formula sheets, NCERT revision notes, practice questions and the 2026 exam deadline calendar — all free from Saraswati Educare for Thane students.
            </p>

           
            <div
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 max-w-xl"
              style={{ animation: "fadeIn 0.9s ease 0.7s both" }}
            >
              <svg className="w-4 h-4 text-white/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search resources — formula sheet, PYQ, notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input bg-transparent text-white placeholder-white/40 text-sm flex-1 border-0"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-white/50 hover:text-white text-lg leading-none">×</button>
              )}
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-gray-950 py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="font-display text-4xl lg:text-5xl font-black gold-text">{s.val}</div>
              <div className="text-gray-400 text-xs mt-2 font-medium tracking-wide">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

     
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Free Downloads
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5">
                Everything Your Child<br />Needs — <span className="gold-text">100% Free</span>
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
                No signup. No paywall. Download directly — previous year papers, formula sheets, notes and practice questions.
              </p>
            </div>
          </AnimatedSection>

         
          <AnimatedSection delay={0.08}>
            <div className="tab-scroll flex overflow-x-auto gap-3 pb-4 mb-8 justify-start lg:justify-center">
              {resourceCategories.map((cat) => (
                <button key={cat.id} onClick={() => { setActiveTab(cat.id); setSearchQuery(""); }}
                  className={`shrink-0 flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeTab === cat.id
                      ? `${cat.tagBg} text-white border-transparent shadow-lg scale-105`
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  }`}>
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>

         
          <AnimatedSection delay={0.1}>
            <div className={`rounded-2xl ${activeCat.bgLight} border ${activeCat.border} px-6 py-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{activeCat.icon}</span>
                <div>
                  <div className={`font-bold ${activeCat.text}`}>{activeCat.label} Resources</div>
                  <div className="text-gray-500 text-xs">{activeCat.resources.length} free downloads available</div>
                </div>
              </div>
              <div className="text-gray-500 text-xs">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                {searchQuery ? ` for "${searchQuery}"` : ""}
              </div>
            </div>
          </AnimatedSection>

         
          <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 gap-5 resources-grid">
            {filtered.length > 0 ? filtered.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start gap-5 group">
                  
                  <div className={`w-12 h-12 bg-gradient-to-br ${activeCat.color} rounded-xl flex items-center justify-center text-xl shrink-0 shadow-md group-hover:scale-110 transition-transform duration-200`}>
                    {r.tag === "PYQ" ? "📄" : r.tag === "Formula" ? "🔢" : r.tag === "Notes" ? "📝" : r.tag === "Practice" ? "✏️" : "📋"}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm leading-snug">{r.title}</h3>
                      <span className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${tagColors[r.tag]}`}>
                        {r.tag}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">{r.desc}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          {r.type}
                        </span>
                        <span>{r.size}</span>
                      </div>

                      <button
                        onClick={() => handleDownload(r.title)}
                        className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                          downloaded[r.title]
                            ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                            : `bg-gradient-to-r ${activeCat.color} text-white shadow-sm hover:scale-105`
                        }`}
                      >
                        {downloaded[r.title] ? (
                          <>✅ Downloaded</>
                        ) : (
                          <>
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Free
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )) : (
              <div className="col-span-2 text-center py-14 text-gray-400">
                <div className="text-4xl mb-3">🔍</div>
                <p className="font-medium text-gray-500">No resources found for "{searchQuery}"</p>
                <button onClick={() => setSearchQuery("")} className="mt-4 text-amber-600 text-sm underline underline-offset-2">
                  Clear search
                </button>
              </div>
            )}
          </div>

          
          <AnimatedSection delay={0.1}>
            <div className="mt-14 text-center">
              <p className="text-gray-400 text-sm mb-6">Browse resources from other exam categories</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {resourceCategories.filter((c) => c.id !== activeTab).map((cat) => (
                  <button key={cat.id} onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold ${cat.bgLight} ${cat.border} border ${cat.text} hover:opacity-80 transition-opacity duration-200`}>
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                Exam Calendar
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5">
                Admission Deadlines<br /><span className="gold-text">2026</span>
              </h2>
              <p className="text-gray-500 mt-3 text-sm">
                Key dates for JEE, NEET, MHT-CET and HSC Board — all in one place.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {deadlines.map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className={`deadline-row flex items-center gap-4 rounded-2xl border px-5 py-4 ${
                  d.status === "done"
                    ? "border-white/5 bg-white/3 opacity-50"
                    : "border-white/10 bg-white/5"
                }`}>
                 
                  <div className={`w-10 h-10 bg-gradient-to-br ${d.color} rounded-xl flex items-center justify-center text-lg shrink-0 shadow-md`}>
                    {d.icon}
                  </div>

                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">{d.exam}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{d.date}</div>
                  </div>

                  <span className={`shrink-0 text-xs font-bold px-3 py-1 rounded-full ${
                    d.status === "done"
                      ? "bg-gray-700 text-gray-400"
                      : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  }`}>
                    {d.status === "done" ? "Closed" : "Upcoming"}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <p className="text-center text-gray-600 text-xs mt-6 italic">
              * Dates are indicative based on 2025–26 cycle. Always verify on official NTA / MHT-CET websites before applying.
            </p>
          </AnimatedSection>
        </div>
      </section>

     
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                How to Use
              </span>
              <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mt-5">
                Make the Most of These <span className="gold-text">Resources</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: "📥", title: "Download Free",    desc: "Click any resource and download instantly — no signup, no payment, no form to fill." },
              { step: "02", icon: "📖", title: "Study the Notes",  desc: "Start with formula sheets and NCERT revision notes to build your conceptual base." },
              { step: "03", icon: "✏️", title: "Solve PYQs",       desc: "Work through previous year papers under timed conditions to benchmark your readiness." },
              { step: "04", icon: "🎯", title: "Join the Classes", desc: "Combine self-study with expert faculty guidance at any Saraswati Educare centre in Thane." },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm text-center h-full">
                  <div className="font-display text-4xl font-black gold-text mb-3">{s.step}</div>
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-8 bg-amber-500 overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          {[...centres, ...centres, ...centres, ...centres].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-4 mr-10 text-white font-bold text-sm uppercase tracking-widest">
              <span className="w-2 h-2 bg-white/60 rounded-full inline-block" />{c}
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-95" />
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{ top:`${20+i*12}%`, left:`${5+i*16}%`, animation:`float ${3+i*0.5}s ease-in-out infinite`, animationDelay:`${i*0.4}s` }} />
          ))}
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Resources + Expert Guidance<br />= Better Results
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Free resources are a great start. Combine them with Saraswati Educare's IITian faculty and small-batch coaching for the best results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="shine-btn bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Your Free Demo
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" className="bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-200 text-base">
                💬 WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}