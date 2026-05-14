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
    subject: "Mathematics",
    classes: "Class 7 – 12",
    icon: "📐",
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    border: "border-blue-200",
    textAccent: "text-blue-700",
    desc: "Algebra, Geometry, Trigonometry, Calculus, Statistics — full syllabus for all boards. JEE and MHT-CET aligned for Class 11–12.",
    boards: ["CBSE", "ICSE", "Maharashtra State Board"],
  },
  {
    subject: "Science",
    classes: "Class 7 – 10",
    icon: "🔬",
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    border: "border-emerald-200",
    textAccent: "text-emerald-700",
    desc: "Physics, Chemistry and Biology for Class 7–10. Board-aligned with diagram practice, numericals and MCQ preparation for SSC and CBSE.",
    boards: ["CBSE", "ICSE", "Maharashtra State Board (SSC)"],
  },
  {
    subject: "Physics",
    classes: "Class 11 & 12",
    icon: "⚛️",
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    border: "border-violet-200",
    textAccent: "text-violet-700",
    desc: "HSC and CBSE Physics — Mechanics, Electrostatics, Optics, Modern Physics. Integrated with JEE Mains and MHT-CET problem sets.",
    boards: ["Maharashtra HSC Board", "CBSE"],
  },
  {
    subject: "Chemistry",
    classes: "Class 11 & 12",
    icon: "🧪",
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50",
    border: "border-rose-200",
    textAccent: "text-rose-700",
    desc: "Physical, Organic and Inorganic Chemistry — name reactions, IUPAC, equilibrium and electrochemistry. Board + NEET + JEE aligned.",
    boards: ["Maharashtra HSC Board", "CBSE"],
  },
  {
    subject: "Biology",
    classes: "Class 11 & 12",
    icon: "🌿",
    color: "from-teal-500 to-cyan-600",
    bgLight: "bg-teal-50",
    border: "border-teal-200",
    textAccent: "text-teal-700",
    desc: "Botany and Zoology — NCERT mastery, diagram drilling, classification and NEET-pattern MCQ practice. Ideal for medical aspirants.",
    boards: ["Maharashtra HSC Board", "CBSE", "NEET-aligned"],
  },
  {
    subject: "Maths (JEE/CET)",
    classes: "Class 11 & 12",
    icon: "🎯",
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
    border: "border-amber-200",
    textAccent: "text-amber-700",
    desc: "Advanced Mathematics for JEE Mains and MHT-CET — Calculus, Coordinate Geometry, Vectors and 3D. Chapter tests every week.",
    boards: ["JEE Mains", "JEE Advanced", "MHT-CET"],
  },
];

const vsHometuition = [
  { point: "Faculty",            saraswati: "Subject-specialist full-time faculty — IITians, NITians, M.Sc.", home: "Single teacher covering all subjects"               },
  { point: "Structure",          saraswati: "Structured curriculum, chapter-by-chapter with tests",           home: "Ad-hoc — depends on teacher's judgment"             },
  { point: "Testing",            saraswati: "Weekly chapter tests + monthly comprehensive tests",             home: "Rarely tested — no formal assessment"               },
  { point: "Parent Reports",     saraswati: "Weekly WhatsApp updates + monthly parent-teacher meets",         home: "Verbal feedback only — no documentation"            },
  { point: "Accountability",     saraswati: "Faculty accountable to centre management + parents",             home: "No accountability structure"                        },
  { point: "Study Material",     saraswati: "Custom printed workbooks + digital resources included",          home: "School textbooks only — no supplementary material"   },
];

const centres = [
  { name: "Kapurbawdi",       slug: "kapurbawdi",       area: "Near Ghodbunder Road, Brahmand, Pokhran"    },
  { name: "Majiwada",         slug: "majiwada",         area: "Near Majiwada Flyover, Kolbad, Vasant Vihar"},
  { name: "Highland Dhokali", slug: "highland-dhokali", area: "Near Dhokali Junction, Naupada"             },
  { name: "Lodha Amara",      slug: "lodha-amara",      area: "Near Kasarvadavali, Ghodbunder Road"        },
  { name: "Kasheli",          slug: "kasheli",          area: "Near Bhiwandi Road, Manpada"                },
  { name: "Gokul Nagar",      slug: "gokul-nagar",      area: "Near Wagle Estate, Teen Hath Naka"          },
];

const centreNames = centres.map((c) => c.name);

const stats = [
  { val: "6",    label: "Tuition Centres in Thane West" },
  { val: "6",    label: "Subjects Covered"               },
  { val: "7–12", label: "Classes Covered"                },
  { val: "24+",  label: "Years of Excellence"            },
];

const initialForm = { studentName: "", parentName: "", mobile: "", grade: "", board: "", subject: "" };

export default function TuitionClassesThaneWest() {
  const [form, setForm]           = useState(initialForm);
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeSubject, setActiveSubject] = useState(0);

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
    if (!form.grade)   e.grade   = "Required";
    if (!form.board)   e.board   = "Required";
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
      errors[f] ? "border-rose-400 focus:ring-2 focus:ring-rose-100" : "border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
    }`;

  const selectCls = (f) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none transition-all duration-200 appearance-none ${
      errors[f] ? "border-rose-400 focus:ring-2 focus:ring-rose-100" : "border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
    }`;

  const active = subjects[activeSubject];

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        .gold-gradient  { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .teal-gradient  { background: linear-gradient(135deg, #0d9488, #0f766e); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .teal-text { background: linear-gradient(135deg, #2dd4bf, #0d9488); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
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
        .subject-tab { transition: all 0.2s ease; }
        .vs-row:nth-child(odd) { background: rgba(13,148,136,0.04); }
      `}</style>

     
      <section
        className="clip-hero min-h-[72vh] flex items-center relative overflow-hidden pt-24 pb-36"
        style={{ background: "linear-gradient(135deg, #001a18 0%, #043a35 45%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">📚</span>
          <div><div className="font-semibold">Structured Tuition Classes</div><div className="text-white/60 text-xs">Not home tuition — professional centres</div></div>
        </div>
        <div className="float-anim absolute bottom-48 right-28 hidden lg:flex items-center gap-2 bg-teal-700/80 backdrop-blur-md rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">📍</span>
          <div><div className="font-semibold">6 Centres — Thane West</div><div className="text-white/80 text-xs">One near you</div></div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">


            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 text-teal-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}>
              <span className="relative w-2 h-2 bg-teal-400 rounded-full pulse-dot" />
              Tuition Classes · Thane West
            </div>

            {/* H1 */}
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              Best Tuition Classes<br />
              in <span className="teal-text">Thane West</span> —<br />
              <span className="gold-text">Saraswati Educare</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}>
              Not home tuitions — professional, faculty-led <strong className="text-white/90">tuition classes in Thane West</strong> at 6 coaching centres. Maths, Science, Physics, Chemistry, Biology — Class 7 to 12, all boards, weekly tests, monthly reports.
            </p>

            <div className="flex flex-wrap gap-4" style={{ animation: "fadeIn 0.9s ease 0.7s both" }}>
              <a href="#demo-form"
                className="shine-btn teal-gradient text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-teal-500/30 hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free Demo Class
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
              <div className="font-display text-4xl lg:text-5xl font-black teal-text">{s.val}</div>
              <div className="text-gray-400 text-xs mt-2 font-medium tracking-wide">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-700 text-xs font-bold tracking-widest uppercase bg-teal-50 border border-teal-200 px-4 py-1.5 rounded-full">
                Professional vs Home Tuition
              </span>
              {/* H2 */}
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                What Makes Our <span className="teal-text">Tuition Classes</span><br />
                in Thane West Different
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
                Most tuition classes in Thane West operate from a single teacher's home with no curriculum structure, no tests and no accountability. Saraswati Educare's tuition classes in Thane West are different — here's how.
              </p>
            </div>
          </AnimatedSection>

          {/* VS Table */}
          <AnimatedSection delay={0.1}>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              {/* Header */}
              <div className="grid grid-cols-3 bg-gray-950">
                <div className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Feature</div>
                <div className="px-5 py-3.5 text-xs font-bold text-teal-400 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-teal-400 rounded-full" /> Saraswati Educare
                </div>
                <div className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-gray-600 rounded-full" /> Home Tuition
                </div>
              </div>
              {vsHometuition.map((row, i) => (
                <div key={i} className={`vs-row grid grid-cols-3 border-t border-gray-100`}>
                  <div className="px-5 py-4 text-gray-600 text-xs font-semibold">{row.point}</div>
                  <div className="px-5 py-4 text-teal-700 text-xs leading-snug font-medium">{row.saraswati}</div>
                  <div className="px-5 py-4 text-gray-400 text-xs leading-snug">{row.home}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── INTERACTIVE SUBJECT EXPLORER ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-teal-700 text-xs font-bold tracking-widest uppercase bg-teal-50 border border-teal-200 px-4 py-1.5 rounded-full">
                Subjects & Classes
              </span>
              {/* H2 */}
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                Subjects Covered at Our<br />
                <span className="teal-text">Thane West Tuition Classes</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Select a subject to see what's covered at our tuition classes in Thane West.</p>
            </div>
          </AnimatedSection>

          {/* Subject tab pills */}
          <AnimatedSection delay={0.08}>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {subjects.map((s, i) => (
                <button key={i} onClick={() => setActiveSubject(i)}
                  className={`subject-tab flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border ${
                    activeSubject === i
                      ? `bg-gradient-to-r ${s.color} text-white border-transparent shadow-md`
                      : `bg-white text-gray-600 border-gray-200 hover:border-gray-300`
                  }`}>
                  <span>{s.icon}</span>
                  <span>{s.subject}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Active subject detail */}
          <AnimatedSection delay={0.05}>
            <div className={`max-w-3xl mx-auto rounded-3xl border ${active.border} ${active.bgLight} p-8 lg:p-10`}>
              <div className="flex items-start gap-6 flex-col sm:flex-row">
                <div className={`w-16 h-16 bg-gradient-to-br ${active.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg shrink-0`}>
                  {active.icon}
                </div>
                <div className="flex-1">
                  <div className={`inline-block bg-gradient-to-r ${active.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                    {active.classes}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">{active.subject} Tuition Classes — Thane West</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{active.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {active.boards.map((b, i) => (
                      <span key={i} className={`text-xs font-semibold px-3 py-1 rounded-full ${active.bgLight} border ${active.border} ${active.textAccent}`}>
                        {b}
                      </span>
                    ))}
                  </div>
                  <a href="#demo-form"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${active.color} text-white font-semibold px-6 py-3 rounded-full text-sm hover:scale-105 transition-transform duration-200 shadow-md`}>
                    Book Free Demo for {active.subject} →
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 6 CENTRES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-teal-700 text-xs font-bold tracking-widest uppercase bg-teal-50 border border-teal-200 px-4 py-1.5 rounded-full">
                Locations
              </span>
              {/* H2 */}
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                Tuition Classes in Thane West —<br />
                <span className="teal-text">6 Convenient Locations</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                Wherever you live in Thane West, the best tuition classes in Thane West are close to home.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {centres.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <a href={`/centres/${c.slug}`}
                  className="card-hover flex items-start gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 group hover:border-teal-200 hover:bg-teal-50/20 transition-all duration-200">
                  <div className="w-12 h-12 teal-gradient rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {c.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{c.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5 leading-snug">{c.area}</div>
                    <div className="text-teal-600 text-xs mt-1.5 font-medium">View tuition batches →</div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO FORM ── */}
      <section id="demo-form" className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="text-teal-400 text-xs font-bold tracking-widest uppercase bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 rounded-full">
                Book a Demo
              </span>
              <h2 className="font-display text-3xl lg:text-4xl text-white mt-5">
                Book Free Tuition Demo<br />
                <span className="teal-text">in Thane West</span>
              </h2>
              <p className="text-gray-500 mt-3 text-sm">No fees. No commitment. We respond within 2 hours.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {submitted ? (
                <div className="success-pop text-center py-8">
                  <div className="w-16 h-16 teal-gradient rounded-full flex items-center justify-center text-3xl mx-auto mb-5 shadow-xl shadow-teal-500/30">✅</div>
                  <h3 className="font-display text-xl text-gray-900 mb-2">Demo Booked!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto mb-5">
                    We've received your tuition enquiry and will call <strong>{form.parentName}</strong> within 2 hours to confirm your free demo class.
                  </p>
                  <button onClick={() => { setForm(initialForm); setSubmitted(false); }} className="text-teal-600 text-sm font-medium underline underline-offset-2">
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
                        {["Class 7","Class 8","Class 9","Class 10","11th PCM","11th PCB","12th PCM","12th PCB","JEE Mains","NEET","MHT-CET","Other"].map(o => <option key={o}>{o}</option>)}
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
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Subject Needed</label>
                      <select name="subject" value={form.subject} onChange={handle} className={selectCls("subject")}>
                        <option value="">Select subject</option>
                        {["Mathematics","Science (Class 7–10)","Physics","Chemistry","Biology","Maths (JEE/CET)","All Subjects"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <button type="submit"
                    className="shine-btn w-full teal-gradient text-white font-bold py-4 rounded-xl mt-5 text-base shadow-xl shadow-teal-500/20 hover:scale-[1.02] transition-transform duration-200">
                    📅 Book My Free Tuition Demo →
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-3">No fees. No commitment. 2-hour response guaranteed.</p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SEO TEXT + LINKS ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 text-center max-w-2xl mx-auto">
              <p>
                Our <strong>tuition classes in Thane West</strong> produce board toppers because we treat tuition seriously — not casually. Subject-specialist faculty, weekly tests, monthly report cards and parent communication make our tuition classes in Thane West the most accountable option for families in Thane West.
              </p>
              <p>
                Book a free demo for <strong>tuition classes in Thane West</strong> at Saraswati Educare today — at any of our 6 centres across Kapurbawdi, Majiwada, Highland Dhokali, Lodha Amara, Kasheli and Gokul Nagar.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              {[
                { label: "View All Courses",       href: "/courses"      },
                { label: "See Our Results",         href: "/results"      },
                { label: "Find Your Centre",        href: "/centres"      },
                { label: "Free Study Resources",    href: "/students-hub" },
              ].map((l, i) => (
                <a key={i} href={l.href}
                  className="text-sm font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-4 py-2 rounded-full hover:bg-teal-100 transition-colors duration-200">
                  {l.label} →
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-8 overflow-hidden" style={{ background: "#0f766e" }}>
        <div className="marquee-track whitespace-nowrap">
          {[...centreNames, ...centreNames, ...centreNames, ...centreNames].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-4 mr-10 text-white font-bold text-sm uppercase tracking-widest">
              <span className="w-2 h-2 bg-white/60 rounded-full inline-block" />{c} — Tuition Classes
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
              📚 Tuition Classes in Thane West — All 6 Centres
            </div>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Professional Tuition Classes<br />in Thane West — First Demo Free
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              6 subject options. 6 centres. Class 7 to 12. CBSE, ICSE and Maharashtra Board. Book your free demo at the nearest centre today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#demo-form"
                className="shine-btn bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free Tuition Demo
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