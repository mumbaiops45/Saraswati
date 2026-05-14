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


const whyPoints = [
  { icon: "🩺", title: "NEET-Qualified & Science PG Faculty",    desc: "Our NEET coaching faculty includes NEET-qualified educators and M.Sc. postgraduates who know exactly where students lose marks and how to close those gaps." },
  { icon: "📗", title: "NCERT Mastery First — Always",           desc: "85%+ of NEET questions are directly NCERT-based. Our NEET coaching in Thane builds NCERT mastery before moving to application-level practice." },
  { icon: "📋", title: "Bi-Weekly Full-Length NEET Mock Tests",  desc: "Every 2 weeks, students sit a full 200-question NTA-pattern NEET mock test with detailed analysis of marks lost and marks gained." },
  { icon: "👥", title: "Small Batches — Max 30 Students",         desc: "NEET coaching in Thane where every student matters. Questions answered, doubts cleared, progress tracked individually." },
  { icon: "🔬", title: "Special Biology Sessions — Diagrams",    desc: "Botany and Zoology diagram practice, classification drilling and NCERT line-by-line revision — because Biology wins NEET." },
  { icon: "📍", title: "6 NEET Centres in Thane West",           desc: "NEET coaching near Kapurbawdi, Majiwada, Gokul Nagar and more — no commute to Mumbai required." },
];

const programmes = [
  {
    tag: "2-YEAR",
    title: "Integrated NEET Coaching",
    subtitle: "Class 11 + 12",
    desc: "Start NEET coaching in Thane from Class 11. Build NCERT concepts chapter by chapter, develop Biology diagram fluency and enter Class 12 with a strong NEET foundation already in place.",
    points: ["Full NEET syllabus — Physics, Chemistry, Botany, Zoology", "Board exam technique built in parallel with NEET prep", "Bi-weekly NEET mock tests from Semester 2 onwards", "Recommended for maximum NEET score improvement"],
    color: "from-rose-500 to-pink-500",
    icon: "📗",
  },
  {
    tag: "1-YEAR",
    title: "Intensive NEET Coaching",
    subtitle: "Class 12 / New Joiners",
    desc: "Accelerated NEET coaching in Thane for Class 12 students. Complete NCERT coverage in 8 months with special focus on Biology, high-weightage chapters and NTA exam strategy.",
    points: ["Rapid NCERT completion in Physics, Chemistry, Biology", "High-weightage chapter prioritisation based on PYQ analysis", "Weekly NEET mock tests from Month 3 onwards", "Doubt sessions 3x per week for quick gap-closing"],
    color: "from-violet-500 to-purple-500",
    icon: "📘",
  },
  {
    tag: "DROPPER",
    title: "NEET Dropper Batch",
    subtitle: "Repeat Aspirants",
    desc: "Dedicated NEET coaching in Thane for students repeating NEET. Structured revision, score improvement strategy and the mental conditioning needed to perform better in the second attempt.",
    points: ["Targeted revision — no time wasted re-teaching basics", "Personalised weak-subject improvement plan", "Peer group of serious NEET aspirants only", "Counselling and attempt-strategy sessions included"],
    color: "from-amber-500 to-orange-500",
    icon: "🔁",
  },
  {
    tag: "CRASH",
    title: "NEET Crash Course",
    subtitle: "3-Month Intensive",
    desc: "High-intensity NEET coaching in Thane for the final 3 months before the exam. Focus on maximum marks in minimum time — chapter selection, mock test frequency and revision strategy.",
    points: ["3-month sprint — high-impact chapters only", "Daily mock tests in the final 4 weeks", "NCERT revision + Biology diagram drills daily", "Available at all 6 Saraswati Educare Thane centres"],
    color: "from-blue-500 to-indigo-500",
    icon: "🚀",
  },
];

const ncertStats = [
  { val: "85%+",  label: "NEET questions directly from NCERT"       },
  { val: "200",   label: "Questions in NEET — all MCQ format"        },
  { val: "720",   label: "Maximum marks — every mark matters"        },
  { val: "3",     label: "Subjects: Physics · Chemistry · Biology"   },
];

const centres = [
  { name: "Kapurbawdi",       slug: "kapurbawdi",       note: "NEET coaching near Ghodbunder Road"     },
  { name: "Majiwada",         slug: "majiwada",         note: "NEET classes in central Thane West"     },
  { name: "Highland Dhokali", slug: "highland-dhokali", note: "NEET coaching near Dhokali junction"    },
  { name: "Lodha Amara",      slug: "lodha-amara",      note: "NEET coaching near Kasarvadavali"       },
  { name: "Kasheli",          slug: "kasheli",          note: "NEET coaching near Bhiwandi Road"       },
  { name: "Gokul Nagar",      slug: "gokul-nagar",      note: "NEET coaching near Wagle Estate"        },
];

const centreNames = centres.map((c) => c.name);

const stats = [
  { val: "24+",  label: "NEET Qualifiers in 2025"    },
  { val: "NEET", label: "Qualified Teaching Faculty"  },
  { val: "24+",  label: "Years of NEET Coaching"      },
  { val: "6",    label: "NEET Centres in Thane"       },
];

export default function page() {
  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        
        .gold-gradient { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .neet-gradient { background: linear-gradient(135deg, #f43f5e, #be185d); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .neet-text { background: linear-gradient(135deg, #f43f5e, #fb7185); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
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
        .marquee-track { display:flex; animation: marquee 18s linear infinite; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .pulse-dot::before { content:''; position:absolute; inset:0; border-radius:9999px; background:inherit; animation: pulse-ring 2s ease-out infinite; }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:1} 100%{transform:scale(1.8);opacity:0} }
      `}</style>

     

      <section
        className="clip-hero min-h-[72vh] flex items-center relative overflow-hidden pt-24 pb-36"
        style={{ background: "linear-gradient(135deg, #1a0010 0%, #4c0519 40%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        
        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">🩺</span>
          <div><div className="font-semibold">NEET-Qualified Faculty</div><div className="text-white/60 text-xs">Physics · Chemistry · Biology</div></div>
        </div>
        <div className="float-anim absolute bottom-48 right-28 hidden lg:flex items-center gap-2 bg-rose-600/80 backdrop-blur-md rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">📗</span>
          <div><div className="font-semibold">NCERT-First Approach</div><div className="text-white/80 text-xs">85%+ NEET from NCERT</div></div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
            

            <div className="inline-flex items-center gap-2 bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}>
              <span className="relative w-2 h-2 bg-rose-400 rounded-full pulse-dot" />
              NEET Coaching · Thane
            </div>

           
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              NEET Coaching<br />
              in <span className="neet-text">Thane</span> —<br />
              <span className="gold-text">Saraswati Educare</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}>
              The most comprehensive <strong className="text-white/90">NEET coaching in Thane</strong> — built for students aiming for MBBS and BDS seats. NCERT-first approach, NEET-qualified faculty, bi-weekly mock tests and 6 centres across Thane West.
            </p>

            <div className="flex flex-wrap gap-4" style={{ animation: "fadeIn 0.9s ease 0.7s both" }}>
              <a href="/contact"
                className="shine-btn neet-gradient text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-rose-500/30 hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free NEET Demo Class
              </a>
              <a href="tel:+91XXXXXXXXXX"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 text-base">
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-950 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="font-display text-4xl lg:text-5xl font-black neet-text">{s.val}</div>
              <div className="text-gray-400 text-xs mt-2 font-medium tracking-wide">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-rose-600 text-xs font-bold tracking-widest uppercase bg-rose-50 border border-rose-200 px-4 py-1.5 rounded-full">
                What Sets Us Apart
              </span>
              
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                What Makes Our<br />
                <span className="neet-text">NEET Coaching in Thane</span> Different
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
                NEET coaching in Thane is offered by multiple institutes — but not all NEET coaching in Thane is equal. Our approach is built around NCERT mastery first, application practice second — matching the actual pattern of the NTA NEET exam.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full group">
                  <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-200">
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

     
      <section className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a0010 0%, #4c0519 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-rose-400 text-xs font-bold tracking-widest uppercase mb-3">NEET By the Numbers</p>
              <h2 className="font-display text-2xl lg:text-3xl text-white">
                Why NCERT Mastery is the Core of Our NEET Coaching in Thane
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ncertStats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="font-display text-2xl lg:text-3xl font-black text-rose-400 mb-2">{s.val}</div>
                  <div className="text-gray-400 text-xs leading-snug">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-rose-400 text-xs font-bold tracking-widest uppercase bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full">
                Programmes
              </span>
             
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5">
                NEET Coaching Programmes<br />
                in <span className="neet-text">Thane</span> at Saraswati Educare
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programmes.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-hover bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-full group hover:border-rose-500/30 transition-all duration-200">
                  <div className={`h-1.5 w-full bg-gradient-to-r ${p.color}`} />
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <div className={`inline-block bg-gradient-to-r ${p.color} text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2`}>
                          {p.tag}
                        </div>
                        <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                        <p className="text-gray-500 text-xs font-medium mt-0.5">{p.subtitle}</p>
                      </div>
                      <span className="text-3xl">{p.icon}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.desc}</p>
                    <div className="space-y-2">
                      {p.points.map((pt, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${p.color} shrink-0`} />
                          {pt}
                        </div>
                      ))}
                    </div>
                    <a href="/contact"
                      className={`mt-6 inline-flex items-center gap-2 bg-gradient-to-r ${p.color} text-white text-xs font-semibold px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200`}>
                      Book Demo for This Programme →
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CENTRES ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-rose-600 text-xs font-bold tracking-widest uppercase bg-rose-50 border border-rose-200 px-4 py-1.5 rounded-full">
                Our Locations
              </span>
              {/* H2 */}
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                NEET Coaching near Kapurbawdi,<br />
                <span className="neet-text">Majiwada & Gokul Nagar</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                Instead of travelling to Mumbai for NEET coaching, students in Thane can access the same faculty quality at our six Thane centres — NEET coaching near Kapurbawdi, NEET classes near Majiwada, NEET coaching at Gokul Nagar.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {centres.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <a href={`/centres/${c.slug}`}
                  className="card-hover flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 group hover:border-rose-200 hover:bg-rose-50/20 transition-all duration-200">
                  <div className="w-12 h-12 neet-gradient rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {c.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{c.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{c.note}</div>
                    <div className="text-rose-600 text-xs mt-1 font-medium">View NEET batches →</div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO TEXT + INTERNAL LINKS ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            {/* H2 — CTA + keyword */}
            <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mb-6 text-center">
              NEET 2026 Coaching in Thane —{" "}
              <span className="neet-text">Enrol Now</span>
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 text-center max-w-2xl mx-auto">
              <p>
                NEET 2026 preparation begins the day you enrol. Do not wait for Class 12 to start your <strong>NEET coaching in Thane</strong>. Saraswati Educare recommends starting NEET coaching from Class 11 for the best results — giving students 2 full years to master NCERT and build exam stamina.
              </p>
              <p>
                Book a free NEET demo class at any Saraswati Educare centre in Thane today. <strong>NEET coaching in Thane</strong> has never been more accessible — or more result-oriented. Join Thane's most trusted NEET coaching institute since 2002.
              </p>
            </div>

            {/* Internal links */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              {[
                { label: "View NEET Course Details",    href: "/courses#neet"    },
                { label: "See NEET Results",             href: "/results"         },
                { label: "Download Free NEET Resources", href: "/students-hub"    },
                { label: "Find Your NEET Centre",        href: "/centres"         },
              ].map((l, i) => (
                <a key={i} href={l.href}
                  className="text-sm font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-4 py-2 rounded-full hover:bg-rose-100 transition-colors duration-200">
                  {l.label} →
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-8 overflow-hidden" style={{ background: "#be185d" }}>
        <div className="marquee-track whitespace-nowrap">
          {[...centreNames, ...centreNames, ...centreNames, ...centreNames].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-4 mr-10 text-white font-bold text-sm uppercase tracking-widest">
              <span className="w-2 h-2 bg-white/60 rounded-full inline-block" />{c} — NEET Coaching
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
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
              🩺 NEET 2026 — Admissions Open
            </div>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Start Your NEET Journey<br />in Thane — First Class Free
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Limited NEET seats across all 6 Thane centres. Book your free demo today and experience NEET coaching built around NCERT mastery and real exam strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact"
                className="shine-btn bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free NEET Demo Class
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