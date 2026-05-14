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
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const courses = [
  {
    id: "foundation",
    tag: "FOUNDATION",
    label: "Class 7 – 10",
    title: "Build the Strongest Academic Foundation in Thane",
    intro:
      "Designed for students in Class 7, 8, 9 and 10 across CBSE, ICSE and Maharashtra State Board. Our foundation coaching covers Maths, Science, English and Social Science — with a special focus on critical thinking and problem-solving skills.",
    color: "from-amber-500 to-orange-500",
    bgDark: "from-amber-950/40 to-orange-950/20",
    borderColor: "border-amber-500/30",
    tagBg: "bg-amber-500",
    icon: "🏗️",
    highlights: [
      { label: "Boards Covered", value: "CBSE, ICSE, SSC" },
      { label: "Subjects", value: "Maths, Science, English, Social Studies" },
      { label: "Batch Size", value: "Max 30 students" },
      { label: "Tests", value: "Weekly + Monthly comprehensive" },
    ],
    features: [
      "Olympiad preparation — NSO, IMO, NTSE",
      "Custom printed workbooks + digital resources",
      "Topic-wise chapter tests every week",
      "Personal doubt-clearing sessions",
    ],
  },
  {
    id: "hsc",
    tag: "11TH & 12TH SCIENCE",
    label: "HSC | CBSE",
    title: "Expert 11th–12th Science Coaching in Thane",
    intro:
      "Our most sought-after programme. Covers Physics, Chemistry, Maths and Biology with full syllabus completion, board exam technique and competitive exam foundation built in parallel for both CBSE and Maharashtra Board students.",
    color: "from-blue-500 to-indigo-500",
    bgDark: "from-blue-950/40 to-indigo-950/20",
    borderColor: "border-blue-500/30",
    tagBg: "bg-blue-500",
    icon: "📖",
    highlights: [
      { label: "Streams", value: "PCM · PCB · PCMB" },
      { label: "Boards", value: "Maharashtra HSC + CBSE" },
      { label: "Class Frequency", value: "5–6 days per week" },
      { label: "Tests", value: "Fortnightly HSC mock tests" },
    ],
    features: [
      "Dedicated subject specialists per subject",
      "Scheduled weekly doubt sessions",
      "Early JEE / NEET / MHT-CET foundation built in",
      "Board exam technique & answer-writing sessions",
    ],
  },
  {
    id: "jee",
    tag: "IIT JEE",
    label: "Mains + Advanced",
    title: "IIT JEE Coaching in Thane by IITian Faculty",
    intro:
      "Taught by IITian faculty with a deep understanding of what JEE actually tests. We cover the complete JEE Mains and Advanced syllabus with topic-wise coverage, PYQ analysis, formula sessions and full-length mock tests on the latest NTA pattern.",
    color: "from-emerald-500 to-teal-500",
    bgDark: "from-emerald-950/40 to-teal-950/20",
    borderColor: "border-emerald-500/30",
    tagBg: "bg-emerald-500",
    icon: "🎯",
    highlights: [
      { label: "Programme", value: "2-Year Integrated / 1-Year Intensive" },
      { label: "Faculty", value: "IITians & NITians, 5+ yrs exp." },
      { label: "Coverage", value: "Full JEE Mains + Advanced syllabus" },
      { label: "Tests", value: "Weekly chapter + Monthly full mock" },
    ],
    features: [
      "Previous Year Question (PYQ) deep-dive sessions",
      "Rank improvement programme",
      "NTA-pattern full-length mock tests",
      "Dropper batch with intensive revision",
    ],
  },
  {
    id: "neet",
    tag: "NEET UG",
    label: "Medical Entrance",
    title: "NEET Coaching in Thane for Medical Aspirants",
    intro:
      "Our NEET UG programme prepares students with NCERT as the foundation and exam-pattern practice on top. Faculty includes doctors and NEET-qualified educators who know exactly what NTA tests and how to crack it.",
    color: "from-rose-500 to-pink-500",
    bgDark: "from-rose-950/40 to-pink-950/20",
    borderColor: "border-rose-500/30",
    tagBg: "bg-rose-500",
    icon: "🩺",
    highlights: [
      { label: "Programme", value: "2-Year Integrated / 1-Year Intensive" },
      { label: "Subjects", value: "Physics, Chemistry, Botany, Zoology" },
      { label: "NCERT Focus", value: "85%+ NEET questions are NCERT-based" },
      { label: "Tests", value: "Bi-weekly NEET full-length tests" },
    ],
    features: [
      "Special NCERT mastery sessions",
      "Doctors & NEET-qualified educators on faculty",
      "Detailed test analysis after every mock",
      "Multiple NEET qualifiers per year",
    ],
  },
  {
    id: "mhtcet",
    tag: "MHT-CET",
    label: "Maharashtra Entrance",
    title: "MHT-CET Coaching Thane — Best Results in the Locality",
    intro:
      "Maharashtra's state engineering and pharmacy entrance exam. Our dedicated MHT-CET programme covers the Maharashtra State Board Class 11 and 12 syllabus for PCM and PCB with full exam pattern alignment and PYQ analysis.",
    color: "from-violet-500 to-purple-500",
    bgDark: "from-violet-950/40 to-purple-950/20",
    borderColor: "border-violet-500/30",
    tagBg: "bg-violet-500",
    icon: "🏆",
    highlights: [
      { label: "Exam", value: "MHT-CET Engineering + Pharmacy" },
      { label: "Coverage", value: "PCM & PCB — Class 11 + 12" },
      { label: "Pattern", value: "Latest MHT-CET paper alignment" },
      { label: "Options", value: "Integrated or Standalone crash course" },
    ],
    features: [
      "Previous year MHT-CET paper analysis",
      "Rank-improvement mock test series",
      "Integrated with 11th-12th coaching",
      "Crash course available for droppers",
    ],
  },
  {
    id: "olympiad",
    tag: "OLYMPIAD",
    label: "Class 7 – 10",
    title: "Olympiad Preparation Classes in Thane",
    intro:
      "For students in Class 7 to 10 who want to compete at the national level. Dedicated preparation for Mathematics and Science Olympiads including NSO, IMO, NTSE and KVPY — sharpening analytical thinking and problem-solving edge.",
    color: "from-yellow-500 to-amber-400",
    bgDark: "from-yellow-950/40 to-amber-950/20",
    borderColor: "border-yellow-500/30",
    tagBg: "bg-yellow-500",
    icon: "⭐",
    highlights: [
      { label: "Exams Covered", value: "NSO, IMO, NTSE, KVPY" },
      { label: "Classes", value: "Class 7 to 10" },
      { label: "Focus", value: "Analytical & critical thinking" },
      { label: "Edge", value: "Builds JEE/NEET problem-solving base" },
    ],
    features: [
      "National-level competition preparation",
      "Advanced problem-solving methodology",
      "Logical reasoning and aptitude training",
      "Builds strong base for future JEE/NEET prep",
    ],
  },
];

const admissionSteps = [
  { step: "01", title: "Book a Free Demo", desc: "Call or WhatsApp us to book a free demo class at your nearest centre." },
  { step: "02", title: "Attend the Demo", desc: "Attend the demo class — no fees, no obligation, no pressure." },
  { step: "03", title: "Fill Admission Form", desc: "If you wish to enrol, fill the admission form at the centre." },
  { step: "04", title: "Pay & Get Your Kit", desc: "Pay the course fee and receive your study kit on Day 1." },
  { step: "05", title: "Start Classes", desc: "Begin attending regular batches within 2 working days." },
];

const centres = ["Kapurbawdi", "Majiwada", "Highland Dhokali", "Lodha Amara", "Kasheli", "Gokul Nagar"];

export default function Page() {
  const [activeTab, setActiveTab] = useState("foundation");

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
      
        .gold-gradient { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
        .shine-btn { position: relative; overflow: hidden; }
        .shine-btn::after {
          content: ''; position: absolute; top: -50%; left: -75%; width: 50%; height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg); animation: shine 3s infinite;
        }
        @keyframes shine { 0%,100%{left:-75%} 50%{left:125%} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .float-anim { animation: float 5s ease-in-out infinite; }
        .clip-hero { clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%); }
        .marquee-track { display:flex; animation: marquee 18s linear infinite; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .tab-scroll::-webkit-scrollbar { display: none; }
        .course-card-enter { animation: cardEnter 0.4s ease both; }
        @keyframes cardEnter { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
      `}</style>


      <section
        className="clip-hero min-h-[65vh] flex items-center relative overflow-hidden pt-24 pb-32"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        
        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">📚</span>
          <div>
            <div className="font-semibold">6 Programmes</div>
            <div className="text-white/60 text-xs">Class 7 to JEE Advanced</div>
          </div>
        </div>
        <div className="float-anim absolute bottom-44 right-28 hidden lg:flex items-center gap-2 bg-amber-500/90 backdrop-blur-md rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">🎓</span>
          <div>
            <div className="font-semibold">IITian Faculty</div>
            <div className="text-white/80 text-xs">Full-time Only</div>
          </div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}
            >
              All Courses
            </div>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-5xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              From Class 7{" "}
              <span className="gold-text">Foundation</span>
              <br />to IIT JEE &{" "}
              <span className="gold-text">NEET</span>
            </h1>
            <p
              className="text-white text-md leading-relaxed max-w-2xl"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}
            >
              Every stage of your child's academic journey — under one roof, guided by expert faculty, across 6 centres in Thane.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Our Programmes
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5">
                Explore <span className="gold-text">All Courses</span>
              </h2>
            </div>
          </AnimatedSection>

        
          <AnimatedSection delay={0.1}>
            <div className="tab-scroll flex overflow-x-auto gap-3 pb-4 mb-10 justify-start lg:justify-center">
              {courses.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(c.id)}
                  className={`shrink-0 flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeTab === c.id
                      ? `${c.tagBg} text-white border-transparent shadow-lg scale-105`
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900"
                  }`}
                >
                  <span>{c.icon}</span>
                  <span>{c.tag}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {courses.map((c) =>
            activeTab === c.id ? (
              <div key={c.id} className="course-card-enter">
                <div className={`rounded-3xl border ${c.borderColor} overflow-hidden bg-gradient-to-br ${c.bgDark} backdrop-blur-sm`}
                  style={{ background: "#0f172a" }}>
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                   
                    <div className="lg:col-span-2 p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
                      <div>
                        <div className={`inline-block bg-gradient-to-r ${c.color} text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4`}>
                          {c.tag}
                        </div>
                        <div className="text-4xl mb-4">{c.icon}</div>
                        <div className="text-gray-400 text-sm mb-2 font-medium uppercase tracking-wider">{c.label}</div>
                        <h3 className="font-display text-2xl lg:text-3xl text-white font-bold leading-snug mb-5">
                          {c.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">{c.intro}</p>
                      </div>
                      <div className="mt-8 flex gap-3 flex-wrap">
                        <a href="#" className={`shine-btn bg-gradient-to-r ${c.color} text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg hover:scale-105 transition-transform duration-200`}>
                          Enrol Now →
                        </a>
                        <a href="#" className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/15 transition-all duration-200">
                          Book Free Demo
                        </a>
                      </div>
                    </div>

                    
                    <div className="lg:col-span-3 p-10">
                     
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {c.highlights.map((h, i) => (
                          <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{h.label}</div>
                            <div className="text-white font-semibold text-sm">{h.value}</div>
                          </div>
                        ))}
                      </div>

                     
                      <div>
                        <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">What's Included</div>
                        <div className="space-y-3">
                          {c.features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${c.color} flex items-center justify-center shrink-0 mt-0.5`}>
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-300 text-sm leading-relaxed">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>

     
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                At a Glance
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5">
                All <span className="gold-text">Programmes</span> Overview
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <AnimatedSection key={c.id} delay={i * 0.07}>
                <div
                  className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full cursor-pointer group"
                  onClick={() => {
                    setActiveTab(c.id);
                    document.querySelector("section:nth-of-type(2)")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <div className={`inline-block bg-gradient-to-r ${c.color} text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4`}>
                    {c.tag}
                  </div>
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <div className="text-gray-400 text-xs font-medium mb-1">{c.label}</div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-3 leading-snug">{c.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{c.intro}</p>
                  <div className={`mt-5 w-8 h-1 rounded-full bg-gradient-to-r ${c.color} group-hover:w-16 transition-all duration-300`} />
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
              <span className="w-2 h-2 bg-white/60 rounded-full inline-block" />
              {c}
            </span>
          ))}
        </div>
      </section>

     
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                How to Join
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5">
                Simple <span className="gold-text">Admission</span> Process
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                Five easy steps to secure your child's seat at Thane's most trusted coaching institute.
              </p>
            </div>
          </AnimatedSection>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {admissionSteps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="relative text-center group">
               
                  {i < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-amber-500/40 to-transparent" />
                  )}
                  <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-4 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-200">
                    {s.step}
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-sm">{s.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-95" />
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                top: `${20 + i * 12}%`,
                left: `${5 + i * 16}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/30">
              🎉 Admissions Open for 2026–27
            </div>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Find the Right Course<br />for Your Child
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Limited seats across all 6 centres. Book a free demo class today — no commitment, no pressure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="shine-btn bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Your Free Demo
              </a>
              <a href="#" className="bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-200 text-base">
                💬 WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

    
    </div>
  );
}