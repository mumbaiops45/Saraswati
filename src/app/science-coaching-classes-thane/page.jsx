
"use client"
import { useRef, useState, useEffect } from "react";


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

// ── DATA ──
const subjects = [
  {
    id: "physics",
    label: "Physics",
    icon: "⚛️",
    color: "from-blue-500 to-indigo-600",
    bgDark: "from-blue-950/40 to-indigo-950/20",
    border: "border-blue-500/30",
    tag: "bg-blue-500",
    lightBg: "bg-blue-50",
    lightBorder: "border-blue-200",
    lightText: "text-blue-700",
    heading: "Physics Coaching Classes in Thane",
    intro: "Our Physics coaching in Thane is handled by dedicated IIT JEE and NEET-experienced faculty. Full Maharashtra Board and CBSE syllabus for Class 11 and 12 — with special attention to the high-weightage chapters that determine exam scores.",
    chapters: ["Mechanics & Dynamics", "Thermodynamics", "Electromagnetism & Current Electricity", "Optics & Wave Physics", "Modern Physics & Semiconductor"],
    examTargets: ["JEE Mains — High-weightage Physics chapters", "NEET — Physics MCQ pattern preparation", "HSC Board — Full syllabus with numericals"],
    stat: { val: "25%", label: "of JEE score from Physics" },
  },
  {
    id: "chemistry",
    label: "Chemistry",
    icon: "🧪",
    color: "from-emerald-500 to-teal-600",
    bgDark: "from-emerald-950/40 to-teal-950/20",
    border: "border-emerald-500/30",
    tag: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    lightBorder: "border-emerald-200",
    lightText: "text-emerald-700",
    heading: "Chemistry Coaching Classes in Thane",
    intro: "Chemistry is the highest-scoring subject in JEE Mains and NEET when prepared correctly. Our Chemistry science coaching in Thane covers Physical, Organic and Inorganic Chemistry — NCERT as the base, JEE-level application on top.",
    chapters: ["Physical Chemistry — Thermodynamics, Equilibrium, Electrochemistry", "Organic Chemistry — Name Reactions, IUPAC, Mechanisms", "Inorganic Chemistry — Periodic Trends, Coordination Compounds", "Analytical Chemistry — Volumetric & Qualitative Analysis"],
    examTargets: ["JEE Mains — Organic + Inorganic shortcut techniques", "NEET — NCERT-based Chemistry with MCQ drills", "HSC Board — Chapter-wise tests after every topic"],
    stat: { val: "35%", label: "of NEET score from Chemistry" },
  },
  {
    id: "biology",
    label: "Biology",
    icon: "🌿",
    color: "from-rose-500 to-pink-600",
    bgDark: "from-rose-950/40 to-pink-950/20",
    border: "border-rose-500/30",
    tag: "bg-rose-500",
    lightBg: "bg-rose-50",
    lightBorder: "border-rose-200",
    lightText: "text-rose-700",
    heading: "Biology Coaching Classes in Thane",
    intro: "For NEET aspirants, our Biology science coaching classes in Thane include dedicated Botany and Zoology sessions — NCERT line-by-line reading, diagram practice and assertion-reason question training. Our students score 150+ in NEET Biology.",
    chapters: ["Cell Biology & Genetics — NCERT mastery", "Plant Physiology — Botany diagrams & classifications", "Human Physiology — Organ systems & NEET diagrams", "Ecology & Evolution", "Zoology — Reproduction, Genetics, Biotechnology"],
    examTargets: ["NEET — 150+ Biology score strategy", "HSC Board — Botany + Zoology full syllabus", "Assertion-Reason & diagram-based question training"],
    stat: { val: "50%", label: "of NEET score from Biology" },
  },
  {
    id: "maths",
    label: "Mathematics",
    icon: "📐",
    color: "from-violet-500 to-purple-600",
    bgDark: "from-violet-950/40 to-purple-950/20",
    border: "border-violet-500/30",
    tag: "bg-violet-500",
    lightBg: "bg-violet-50",
    lightBorder: "border-violet-200",
    lightText: "text-violet-700",
    heading: "Mathematics Coaching Classes in Thane",
    intro: "Our Maths science coaching classes in Thane cover the full Maharashtra Board and CBSE Class 11–12 syllabus with JEE Mains and MHT-CET integration. Dedicated Maths specialist for every batch — no combined-subject teaching.",
    chapters: ["Calculus — Differentiation, Integration, Differential Equations", "Algebra — Matrices, Determinants, Complex Numbers", "Coordinate Geometry — Conics, Straight Lines, Circles", "Vectors, 3D Geometry & Probability"],
    examTargets: ["JEE Mains — Calculus & Algebra problem speed", "MHT-CET — Maharashtra Board Maths alignment", "HSC Board — Full syllabus with board-pattern practice"],
    stat: { val: "33%", label: "of JEE score from Mathematics" },
  },
];

const whyPoints = [
  { icon: "🎓", title: "Subject Specialists — One Per Subject",    desc: "Every science coaching class in Thane has a dedicated teacher per subject. Your child's Physics teacher teaches only Physics. No combined-subject compromise." },
  { icon: "📋", title: "Weekly Chapter Tests — Every Subject",     desc: "After every chapter — a test. After every month — a full mock. Science coaching classes in Thane where accountability is built into the structure." },
  { icon: "👥", title: "Small Batches — Max 30 Students",          desc: "Science coaching in Thane where every doubt is heard. No crowded halls. No ignored questions. Individual progress tracked every week." },
  { icon: "📊", title: "Board + Competitive — Both Covered",       desc: "Our science coaching classes in Thane prepare students for HSC boards, JEE, NEET and MHT-CET simultaneously — from the same class hours." },
  { icon: "📲", title: "Monthly Parent Reports + WhatsApp",        desc: "Monthly performance reports, test scores and attendance summaries sent to parents. Science coaching in Thane with full parent visibility." },
  { icon: "📍", title: "6 Centres Across Thane West",              desc: "Science coaching classes in Thane at Kapurbawdi, Majiwada, Highland Dhokali, Lodha Amara, Kasheli and Gokul Nagar." },
];

const centres = [
  { name: "Kapurbawdi",       slug: "kapurbawdi",       note: "Science coaching near Ghodbunder Road"   },
  { name: "Majiwada",         slug: "majiwada",         note: "Science coaching classes near Majiwada"  },
  { name: "Highland Dhokali", slug: "highland-dhokali", note: "Science coaching near Dhokali Junction"  },
  { name: "Lodha Amara",      slug: "lodha-amara",      note: "Science coaching near Kasarvadavali"     },
  { name: "Kasheli",          slug: "kasheli",          note: "Science coaching near Bhiwandi Road"     },
  { name: "Gokul Nagar",      slug: "gokul-nagar",      note: "Science coaching near Wagle Estate"      },
];

const centreNames = centres.map((c) => c.name);

const stats = [
  { val: "4",    label: "Science Subjects Covered"    },
  { val: "9–12", label: "Classes Covered"             },
  { val: "6",    label: "Centres in Thane West"       },
  { val: "24+",  label: "Years of Science Coaching"   },
];

const initialForm = { studentName: "", parentName: "", mobile: "", grade: "", board: "", subject: "" };

export default function ScienceCoachingThane() {
  const [activeSubject, setActiveSubject] = useState("physics");
  const [form, setForm]           = useState(initialForm);
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);

  const active = subjects.find((s) => s.id === activeSubject);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.studentName.trim()) e.studentName = "Required";
    if (!form.parentName.trim())  e.parentName  = "Required";
    if (!form.mobile.trim() || !/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = "Valid 10-digit number required";
    if (!form.grade) e.grade = "Required";
    if (!form.board) e.board = "Required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputCls = (f) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-200 ${
      errors[f] ? "border-rose-400 focus:ring-2 focus:ring-rose-100" : "border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
    }`;

  const selectCls = (f) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none transition-all duration-200 appearance-none ${
      errors[f] ? "border-rose-400 focus:ring-2 focus:ring-rose-100" : "border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
    }`;

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
       
        .gold-gradient  { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .sci-gradient   { background: linear-gradient(135deg, #7c3aed, #4f46e5); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .sci-text  { background: linear-gradient(135deg, #a78bfa, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.10); }
        .shine-btn { position: relative; overflow: hidden; }
        .shine-btn::after {
          content:''; position:absolute; top:-50%; left:-75%; width:50%; height:200%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);
          transform:skewX(-20deg); animation:shine 3s infinite;
        }
        @keyframes shine { 0%,100%{left:-75%} 50%{left:125%} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .float-anim { animation: float 5s ease-in-out infinite; }
        .clip-hero  { clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%); }
        .marquee-track { display:flex; animation: marquee 20s linear infinite; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .pulse-dot::before { content:''; position:absolute; inset:0; border-radius:9999px; background:inherit; animation: pulse-ring 2s ease-out infinite; }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:1} 100%{transform:scale(1.8);opacity:0} }
        select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 12px center; background-size:16px; padding-right:36px; }
        @keyframes successPop { 0%{transform:scale(0.8);opacity:0} 70%{transform:scale(1.05)} 100%{transform:scale(1);opacity:1} }
        .success-pop { animation: successPop 0.5s ease both; }
        .subject-panel-enter { animation: panelIn 0.3s ease both; }
        @keyframes panelIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <section
        className="clip-hero min-h-[72vh] flex items-center relative overflow-hidden pt-24 pb-36"
        style={{ background: "linear-gradient(135deg, #0d0020 0%, #2e1065 40%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        
        <div className="float-anim absolute top-36 right-16 hidden lg:grid grid-cols-2 gap-2">
          {["⚛️ Physics", "🧪 Chemistry", "🌿 Biology", "📐 Maths"].map((s, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-3 py-2 text-white text-xs font-medium">
              {s}
            </div>
          ))}
        </div>
        <div className="float-anim absolute bottom-48 right-28 hidden lg:flex items-center gap-2 bg-violet-600/80 backdrop-blur-md rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">🔬</span>
          <div><div className="font-semibold">Subject Specialists</div><div className="text-white/80 text-xs">One teacher per subject</div></div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
            

            <div className="inline-flex items-center gap-2 bg-violet-500/15 border border-violet-500/30 text-violet-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}>
              <span className="relative w-2 h-2 bg-violet-400 rounded-full pulse-dot" />
              Science Coaching · Thane
            </div>

            {/* H1 */}
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              Best Science Coaching<br />
              Classes in <span className="sci-text">Thane</span> —<br />
              <span className="gold-text">Saraswati Educare</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}>
              Thane's leading provider of <strong className="text-white/90">science coaching classes</strong> — Physics, Chemistry, Biology and Mathematics for Class 9 to 12. Subject-specialist faculty. Weekly tests. 6 centres. Board + JEE + NEET covered simultaneously.
            </p>

           
            <div className="flex flex-wrap gap-3 mb-8" style={{ animation: "fadeIn 0.9s ease 0.65s both" }}>
              {subjects.map((s) => (
                <a key={s.id} href={`#${s.id}`}
                  className={`flex items-center gap-1.5 bg-gradient-to-r ${s.color} text-white text-xs font-bold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-200`}>
                  {s.icon} {s.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4" style={{ animation: "fadeIn 0.9s ease 0.8s both" }}>
              <a href="#demo-form"
                className="shine-btn sci-gradient text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-violet-500/30 hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free Science Demo Class
              </a>
              <a href="tel:+91XXXXXXXXXX"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 text-base">
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-gray-950 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="font-display text-4xl lg:text-5xl font-black sci-text">{s.val}</div>
              <div className="text-gray-400 text-xs mt-2 font-medium tracking-wide">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── INTERACTIVE SUBJECT DEEP-DIVE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-violet-600 text-xs font-bold tracking-widest uppercase bg-violet-50 border border-violet-200 px-4 py-1.5 rounded-full">
                Subject Deep-Dive
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                Physics · Chemistry · Biology · Maths —<br />
                <span className="sci-text">All at Our Thane Centres</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Click a subject to explore what's covered in our science coaching classes in Thane.</p>
            </div>
          </AnimatedSection>

          {/* Subject selector */}
          <AnimatedSection delay={0.08}>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {subjects.map((s) => (
                <button key={s.id} onClick={() => setActiveSubject(s.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeSubject === s.id
                      ? `bg-gradient-to-r ${s.color} text-white border-transparent shadow-lg scale-105`
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  }`}>
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Active subject panel */}
          <div key={activeSubject} className="subject-panel-enter">
            <div id={active.id} className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                {/* Left — overview */}
                <div className={`lg:col-span-2 bg-gradient-to-br ${active.bgDark} border ${active.border} rounded-2xl p-7 flex flex-col justify-between`}
                  style={{ background: "#0f172a" }}>
                  <div>
                    <div className={`inline-block bg-gradient-to-r ${active.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                      Science Coaching — Thane
                    </div>
                    <div className="text-5xl mb-4">{active.icon}</div>
                    {/* H2 per subject */}
                    <h2 className="font-display text-2xl font-bold text-white mb-3">{active.heading}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{active.intro}</p>

                    {/* Exam stat badge */}
                    <div className={`inline-flex items-center gap-3 ${active.lightBg} border ${active.lightBorder} rounded-xl px-4 py-3`}>
                      <div className={`font-display text-3xl font-black ${active.lightText}`}>{active.stat.val}</div>
                      <div className={`text-xs font-medium ${active.lightText} leading-snug`}>{active.stat.label}</div>
                    </div>
                  </div>

                  <a href="#demo-form"
                    className={`mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r ${active.color} text-white font-semibold px-5 py-3 rounded-full text-sm hover:scale-105 transition-transform duration-200 shadow-md`}>
                    Book Demo for {active.label} →
                  </a>
                </div>

                {/* Right — chapters + targets */}
                <div className="lg:col-span-3 space-y-5">
                  {/* Chapters covered */}
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">📋 Topics Covered</div>
                    <div className="space-y-2.5">
                      {active.chapters.map((ch, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`w-5 h-5 bg-gradient-to-r ${active.color} rounded-full flex items-center justify-center shrink-0 mt-0.5`}>
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{ch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Exam targets */}
                  <div className={`${active.lightBg} border ${active.lightBorder} rounded-2xl p-6`}>
                    <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${active.lightText}`}>🎯 Exam Targets</div>
                    <div className="space-y-3">
                      {active.examTargets.map((t, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.color} shrink-0 mt-1.5`} />
                          <span className={`text-sm ${active.lightText} font-medium`}>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schedule strip */}
                  <div className="bg-gray-950 rounded-2xl p-5 flex flex-wrap gap-4">
                    {[
                      { icon: "📋", label: "Chapter Test",  val: "After every chapter" },
                      { icon: "📊", label: "Mock Test",     val: "Monthly full-length" },
                      { icon: "🔍", label: "PYQ Session",   val: "Bi-monthly analysis"  },
                      { icon: "📲", label: "Parent Report", val: "Weekly WhatsApp"      },
                    ].map((item, i) => (
                      <div key={i} className="text-center flex-1 min-w-[80px]">
                        <div className="text-lg mb-1">{item.icon}</div>
                        <div className="text-gray-500 text-xs">{item.label}</div>
                        <div className="text-white text-xs font-semibold mt-0.5">{item.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SECTION ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-violet-600 text-xs font-bold tracking-widest uppercase bg-violet-50 border border-violet-200 px-4 py-1.5 rounded-full">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                Why Our <span className="sci-text">Science Coaching Classes</span><br />
                in Thane Stand Apart
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full group">
                  <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-200">
                    {p.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 CENTRES ── */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-violet-400 text-xs font-bold tracking-widest uppercase bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 rounded-full">
                Our Locations
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5 mb-4">
                Join Saraswati Educare for<br />
                <span className="sci-text">Science Coaching in Thane</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
                Science coaching classes in Thane at all 6 centres — open for new admissions. Call, WhatsApp or walk in.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {centres.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <a href={`/centres/${c.slug}`}
                  className="card-hover flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 group hover:border-violet-500/30 hover:bg-white/8 transition-all duration-200">
                  <div className="w-12 h-12 sci-gradient rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {c.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{c.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{c.note}</div>
                    <div className="text-violet-400 text-xs mt-1.5 font-medium">View science batches →</div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact options */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/15 transition-all duration-200 text-sm">
                📞 Call Now
              </a>
              <a href="https://wa.me/91XXXXXXXXXX"
                className="flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/40 text-[#4ade80] font-semibold px-6 py-3 rounded-full hover:bg-[#25D366]/30 transition-all duration-200 text-sm">
                💬 WhatsApp Us
              </a>
              <a href="#demo-form"
                className="shine-btn sci-gradient text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-200 text-sm">
                📅 Book Free Demo
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── DEMO FORM ── */}
      <section id="demo-form" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="text-violet-600 text-xs font-bold tracking-widest uppercase bg-violet-50 border border-violet-200 px-4 py-1.5 rounded-full">
                Book a Demo
              </span>
              <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mt-5">
                Book Your Free Demo for<br />
                <span className="sci-text">Science Coaching in Thane</span>
              </h2>
              <p className="text-gray-500 mt-3 text-sm">No fees. No commitment. We respond within 2 hours.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl">
              {submitted ? (
                <div className="success-pop text-center py-8">
                  <div className="w-16 h-16 sci-gradient rounded-full flex items-center justify-center text-3xl mx-auto mb-5 shadow-xl shadow-violet-300/30">✅</div>
                  <h3 className="font-display text-xl text-gray-900 mb-2">Demo Booked!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto mb-5">
                    We've received your science coaching enquiry and will call <strong>{form.parentName}</strong> within 2 hours.
                  </p>
                  <button onClick={() => { setForm(initialForm); setSubmitted(false); }} className="text-violet-600 text-sm font-medium underline underline-offset-2">
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Student Name <span className="text-rose-500">*</span></label>
                      <input name="studentName" value={form.studentName} onChange={handle} placeholder="Student's full name" className={inputCls("studentName")} />
                      {errors.studentName && <p className="text-rose-500 text-xs mt-1">{errors.studentName}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Parent Name <span className="text-rose-500">*</span></label>
                      <input name="parentName" value={form.parentName} onChange={handle} placeholder="Parent's full name" className={inputCls("parentName")} />
                      {errors.parentName && <p className="text-rose-500 text-xs mt-1">{errors.parentName}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Mobile <span className="text-rose-500">*</span></label>
                      <input name="mobile" value={form.mobile} onChange={handle} placeholder="10-digit number" maxLength={10} inputMode="numeric" className={inputCls("mobile")} />
                      {errors.mobile && <p className="text-rose-500 text-xs mt-1">{errors.mobile}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Class <span className="text-rose-500">*</span></label>
                      <select name="grade" value={form.grade} onChange={handle} className={selectCls("grade")}>
                        <option value="">Select class</option>
                        {["Class 9","Class 10","11th PCM","11th PCB","12th PCM","12th PCB","JEE Mains","JEE Advanced","NEET","MHT-CET","Other"].map(o => <option key={o}>{o}</option>)}
                      </select>
                      {errors.grade && <p className="text-rose-500 text-xs mt-1">{errors.grade}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Board <span className="text-rose-500">*</span></label>
                      <select name="board" value={form.board} onChange={handle} className={selectCls("board")}>
                        <option value="">Select board</option>
                        {["CBSE","ICSE","Maharashtra State Board"].map(o => <option key={o}>{o}</option>)}
                      </select>
                      {errors.board && <p className="text-rose-500 text-xs mt-1">{errors.board}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Science Subject</label>
                      <select name="subject" value={form.subject} onChange={handle} className={selectCls("subject")}>
                        <option value="">Select subject</option>
                        {["Physics","Chemistry","Biology","Mathematics","All Science Subjects"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <button type="submit"
                    className="shine-btn w-full sci-gradient text-white font-bold py-4 rounded-xl mt-5 text-base shadow-xl shadow-violet-500/20 hover:scale-[1.02] transition-transform duration-200">
                    📅 Book My Free Science Coaching Demo →
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-3">No fees. No commitment. 2-hour response guaranteed.</p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SEO TEXT ── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 text-center max-w-2xl mx-auto">
              <p>
                <strong>Science coaching classes in Thane</strong> at Saraswati Educare cover all four pillars — Physics, Chemistry, Biology and Mathematics — with subject-specialist faculty, weekly tests and a curriculum that prepares students for HSC boards, JEE, NEET and MHT-CET simultaneously.
              </p>
              <p>
                <strong>Science coaching in Thane</strong> at its best — only at Saraswati Educare. Open for new admissions at all 6 Thane centres. Walk in Monday to Saturday 8AM–8PM.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              {[
                { label: "View All Science Courses",  href: "/courses"      },
                { label: "See Exam Results",           href: "/results"      },
                { label: "Free Science Resources",     href: "/students-hub" },
                { label: "Find Your Centre",           href: "/centres"      },
              ].map((l, i) => (
                <a key={i} href={l.href}
                  className="text-sm font-semibold text-violet-700 bg-violet-50 border border-violet-200 px-4 py-2 rounded-full hover:bg-violet-100 transition-colors duration-200">
                  {l.label} →
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-8 overflow-hidden" style={{ background: "#4f46e5" }}>
        <div className="marquee-track whitespace-nowrap">
          {[...centreNames, ...centreNames, ...centreNames, ...centreNames].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-4 mr-10 text-white font-bold text-sm uppercase tracking-widest">
              <span className="w-2 h-2 bg-white/60 rounded-full inline-block" />{c} — Science Coaching
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
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
            <div className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/30">
              🔬 Science Coaching Classes in Thane — All 6 Centres Open
            </div>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Science Coaching in Thane<br />at Its Best — First Class Free
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Physics, Chemistry, Biology and Mathematics. Class 9 to 12. 6 centres. Book your free demo at the nearest Saraswati Educare centre today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#demo-form"
                className="shine-btn bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free Science Demo
              </a>
              <a href="tel:+91XXXXXXXXXX"
                className="bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-200 text-base">
                📞 Call Now
              </a>
              <a href="/centres"
                className="bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-200 text-base">
                📍 Find Nearest Centre
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

   
    </div>
  );
}