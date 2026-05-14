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
  { icon: "🎓", title: "Faculty Who Cracked JEE Themselves",    desc: "Our IIT JEE coaching in Thane is taught by IITians — not just subject teachers. They know the strategy, not just the syllabus." },
  { icon: "📐", title: "Full Mains + Advanced Coverage",         desc: "Most coaching in Thane covers only Mains. We take every student through the complete JEE journey including Advanced-level problem solving." },
  { icon: "📋", title: "Weekly Mock Tests — NTA Pattern",        desc: "Chapter tests every week. Full-length mocks monthly. Detailed analysis after every test to track rank improvement." },
  { icon: "👥", title: "Small Batches — Max 30 Students",        desc: "IIT JEE coaching in Thane with individual attention. Questions welcomed. Doubts resolved. No student left behind." },
  { icon: "📄", title: "PYQ Sessions — Previous Year Papers",    desc: "Dedicated sessions on 10 years of JEE previous year questions — the most reliable predictor of exam performance." },
  { icon: "📍", title: "6 JEE Centres Across Thane West",        desc: "JEE coaching near Kapurbawdi, Majiwada, Ghodbunder Road and more — no long commute required." },
];

const programmes = [
  {
    tag: "2-YEAR",
    title: "Integrated JEE Coaching",
    subtitle: "Class 11 + 12",
    desc: "Start IIT JEE coaching in Thane alongside your board syllabus. Build concepts from scratch, develop problem-solving speed and enter Class 12 with a full JEE foundation already in place.",
    points: ["Full JEE Mains + Advanced syllabus", "Board exam technique built in parallel", "Bi-weekly mock tests from day one", "Suitable for Class 11 students"],
    color: "from-emerald-500 to-teal-500",
    icon: "📗",
  },
  {
    tag: "1-YEAR",
    title: "Intensive JEE Coaching",
    subtitle: "Class 12 / New Joiners",
    desc: "Accelerated IIT JEE coaching in Thane for students entering Class 12. Complete syllabus coverage in 8 months with extra focus on high-weightage chapters and exam strategy.",
    points: ["Rapid syllabus completion", "High-weightage chapter prioritisation", "Weekly full-length JEE mock tests", "Doubt sessions 3x per week"],
    color: "from-blue-500 to-indigo-500",
    icon: "📘",
  },
  {
    tag: "DROPPER",
    title: "JEE Dropper Batch",
    subtitle: "Drop Year Students",
    desc: "Dedicated IIT JEE coaching in Thane for students taking a drop year. Structured revision, rank improvement strategy and the mental conditioning needed for a second attempt.",
    points: ["Focused revision — no reteaching basics", "Rank improvement programme", "Peer group of serious JEE aspirants", "Counselling and exam strategy sessions"],
    color: "from-amber-500 to-orange-500",
    icon: "🔁",
  },
  {
    tag: "CRASH",
    title: "JEE Crash Course",
    subtitle: "3-Month Intensive",
    desc: "Last-push IIT JEE coaching in Thane for students who need concentrated preparation in the final 3 months before JEE Mains. High-intensity. High-output.",
    points: ["3-month sprint format", "Focus on most-tested chapters", "Daily mock tests in final month", "Available at all 6 Thane centres"],
    color: "from-rose-500 to-pink-500",
    icon: "🚀",
  },
];

const facultyHighlights = [
  { val: "IITians",     desc: "Physics & Maths faculty from IITs"    },
  { val: "NITians",     desc: "Chemistry specialists from NITs"        },
  { val: "5+ Years",    desc: "Minimum JEE coaching experience"        },
  { val: "Full-Time",   desc: "No visiting faculty — ever"             },
];

const centres = [
  { name: "Kapurbawdi",       slug: "kapurbawdi",       note: "JEE coaching near Ghodbunder Road"       },
  { name: "Majiwada",         slug: "majiwada",         note: "JEE coaching in central Thane West"      },
  { name: "Highland Dhokali", slug: "highland-dhokali", note: "JEE coaching near Dhokali junction"      },
  { name: "Lodha Amara",      slug: "lodha-amara",      note: "JEE coaching near Kasarvadavali"         },
  { name: "Kasheli",          slug: "kasheli",          note: "JEE coaching near Bhiwandi Road"         },
  { name: "Gokul Nagar",      slug: "gokul-nagar",      note: "JEE coaching near Wagle Estate"          },
];

const stats = [
  { val: "28+",  label: "JEE Qualifiers in 2025"    },
  { val: "IITian", label: "Faculty Teaching JEE"    },
  { val: "24+",  label: "Years of JEE Coaching"     },
  { val: "6",    label: "JEE Centres in Thane"      },
];

const centreNames = centres.map((c) => c.name);

export default function page() {
  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        .gold-gradient { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .jee-gradient  { background: linear-gradient(135deg, #10b981, #0f766e); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .jee-text  { background: linear-gradient(135deg, #10b981, #5eead4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
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
        style={{ background: "linear-gradient(135deg, #022c22 0%, #064e3b 40%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-teal-500/8  rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

       
        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">🎯</span>
          <div><div className="font-semibold">IITian Faculty</div><div className="text-white/60 text-xs">JEE Mains + Advanced</div></div>
        </div>
        <div className="float-anim absolute bottom-48 right-28 hidden lg:flex items-center gap-2 bg-emerald-500/80 backdrop-blur-md rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">📍</span>
          <div><div className="font-semibold">6 JEE Centres</div><div className="text-white/80 text-xs">Across Thane West</div></div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
           
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}>
              <span className="relative w-2 h-2 bg-emerald-400 rounded-full pulse-dot" />
              IIT JEE Coaching · Thane
            </div>

          
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              IIT JEE Coaching<br />
              in <span className="jee-text">Thane</span> —<br />
              Taught by <span className="gold-text">IITians</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}>
              Saraswati Educare offers the most structured <strong className="text-white/90">IIT JEE coaching in Thane</strong> — with IITian faculty, full JEE Mains and Advanced syllabus, weekly mock tests and 24 years of proven results across 6 centres in Thane West.
            </p>

            <div className="flex flex-wrap gap-4" style={{ animation: "fadeIn 0.9s ease 0.7s both" }}>
              <a href="/contact"
                className="shine-btn jee-gradient text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-emerald-500/30 hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free JEE Demo Class
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
              <div className="font-display text-4xl lg:text-5xl font-black jee-text">{s.val}</div>
              <div className="text-gray-400 text-xs mt-2 font-medium tracking-wide">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

     
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full">
                Why Choose Us
              </span>
             
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                Why Choose Saraswati Educare<br />
                for <span className="jee-text">IIT JEE Coaching in Thane</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
                The best IIT JEE coaching in Thane is not the one with the biggest banner on the highway. It is the one where an IITian teacher sits across from your child and personally explains thermodynamics until it clicks.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full group">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-200">
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

      
      <section className="py-16 bg-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3">Faculty Standards</p>
              <h2 className="font-display text-2xl lg:text-3xl text-white">
                Our IIT JEE Faculty in Thane
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facultyHighlights.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="font-display text-2xl font-black text-emerald-400 mb-2">{f.val}</div>
                  <div className="text-gray-400 text-xs leading-snug">{f.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
                Full Coverage
              </span>
             
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5 mb-4">
                JEE Mains <span className="text-white/40">&</span> Advanced —<br />
                Both Covered in Our{" "}
                <span className="jee-text">IIT JEE Coaching Thane</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
                Most coaching institutes in Thane prepare students only for JEE Mains. At Saraswati Educare, our IIT JEE coaching programme takes every student through the complete JEE journey.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "JEE Mains",
                label: "NTA Pattern",
                color: "from-emerald-500 to-teal-500",
                points: [
                  "Full NTA syllabus — Physics, Chemistry, Maths",
                  "Chapter-wise tests aligned to NTA question types",
                  "Formula sessions and PYQ analysis",
                  "Monthly full-length Mains mock tests",
                ],
              },
              {
                title: "JEE Advanced",
                label: "IIT Pattern",
                color: "from-amber-500 to-orange-500",
                points: [
                  "Advanced-level problem solving — multi-concept questions",
                  "Paragraph and integer-type question practice",
                  "IITian faculty explains Advanced-specific strategies",
                  "10 years of JEE Advanced PYQ sessions",
                ],
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-hover bg-white/5 border border-white/10 rounded-2xl p-8 h-full group hover:border-emerald-500/30 transition-all duration-200">
                  <div className={`inline-block bg-gradient-to-r ${item.color} text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5`}>
                    {item.label}
                  </div>
                  <h3 className="font-display text-2xl text-white font-bold mb-5">{item.title}</h3>
                  <div className="space-y-3">
                    {item.points.map((p, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className={`w-5 h-5 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shrink-0 mt-0.5`}>
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed">{p}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`mt-6 w-10 h-1 rounded-full bg-gradient-to-r ${item.color} group-hover:w-20 transition-all duration-300`} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full">
                Programmes
              </span>
           
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5">
                JEE Coaching Programmes<br />
                at Our <span className="jee-text">Thane Centres</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programmes.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-full group">
                  <div className={`h-1.5 w-full bg-gradient-to-r ${p.color}`} />
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <div className={`inline-block bg-gradient-to-r ${p.color} text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2`}>
                          {p.tag}
                        </div>
                        <h3 className="font-display text-xl font-bold text-gray-900">{p.title}</h3>
                        <p className="text-gray-400 text-xs font-medium mt-0.5">{p.subtitle}</p>
                      </div>
                      <span className="text-3xl">{p.icon}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                    <div className="space-y-2">
                      {p.points.map((pt, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-gray-600">
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

     
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full">
                Locations
              </span>
            
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                IIT JEE Coaching Near You —<br />
                <span className="jee-text">6 Centres Across Thane</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                Every student in Thane West can access Saraswati Educare's IIT JEE coaching without a long commute.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {centres.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <a href={`/centres/${c.slug}`}
                  className="card-hover flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 group hover:border-emerald-200 hover:bg-emerald-50/20 transition-all duration-200">
                  <div className="w-12 h-12 jee-gradient rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {c.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{c.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{c.note}</div>
                    <div className="text-emerald-600 text-xs mt-1 font-medium">View JEE batches →</div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mb-6 text-center">
              Book a Free Demo for{" "}
              <span className="jee-text">IIT JEE Coaching in Thane</span>
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 text-center max-w-2xl mx-auto">
              <p>
                Book your free demo class for <strong>IIT JEE coaching at Saraswati Educare</strong> today. Walk into any centre, sit in a JEE class and judge for yourself. Our IIT JEE coaching in Thane starts with a free session — no fees, no commitment.
              </p>
              <p>
                Join Saraswati Educare: Thane's most trusted <strong>IIT JEE coaching institute since 2002</strong>. When parents in Thane West search for JEE coaching near Kapurbawdi, Majiwada or Ghodbunder Road, they find Saraswati Educare at the top — because our results earn our reputation.
              </p>
            </div>

          
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              {[
                { label: "View JEE Course Details", href: "/courses#jee"    },
                { label: "See JEE Results",          href: "/results"        },
                { label: "Find Your JEE Centre",     href: "/centres"        },
                { label: "Download JEE Resources",   href: "/students-hub"   },
              ].map((l, i) => (
                <a key={i} href={l.href}
                  className="text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full hover:bg-emerald-100 transition-colors duration-200">
                  {l.label} →
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

     
      <section className="py-8 bg-emerald-600 overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          {[...centreNames, ...centreNames, ...centreNames, ...centreNames].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-4 mr-10 text-white font-bold text-sm uppercase tracking-widest">
              <span className="w-2 h-2 bg-white/60 rounded-full inline-block" />{c} — IIT JEE Coaching
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
            <div className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/30">
              🎯 IIT JEE 2026 — Admissions Open
            </div>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Start Your IIT JEE Journey<br />in Thane — First Class Free
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Limited JEE seats at all 6 Thane centres. Book your free demo today and experience IIT JEE coaching taught by those who have been there.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact"
                className="shine-btn bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free JEE Demo Class
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