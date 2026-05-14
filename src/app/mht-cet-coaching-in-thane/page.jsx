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
const whyPoints = [
  { icon: "📋", title: "Maharashtra Board Syllabus — 100% Aligned",   desc: "Our MHT-CET coaching in Thane is built on the Maharashtra State Board Class 11–12 curriculum — the exact syllabus MHT-CET tests. No irrelevant material." },
  { icon: "🏆", title: "Dedicated MHT-CET Faculty",                   desc: "Faculty who understand Maharashtra's CET pattern, marking scheme and PCM/PCB splits — not generic national coaching content." },
  { icon: "📊", title: "Fortnightly Full-Length Mock Tests",           desc: "Full-length MHT-CET mock tests every two weeks, aligned to the latest CET Cell paper pattern with detailed score analysis." },
  { icon: "📄", title: "10 Years of MHT-CET PYQ Sessions",            desc: "Previous year MHT-CET paper sessions with chapter-wise question frequency analysis — know exactly what CET Cell repeats every year." },
  { icon: "👥", title: "Small Batches — Max 30 Students",              desc: "MHT-CET coaching in Thane with individual attention. Every student tracked, every doubt resolved." },
  { icon: "📍", title: "6 MHT-CET Centres Across Thane West",         desc: "MHT-CET coaching near Kapurbawdi, Majiwada, Ghodbunder Road and more — no long commute needed." },
];

const programmes = [
  {
    tag: "2-YEAR",
    title: "Integrated MHT-CET + 11th–12th",
    subtitle: "Class 11 + 12",
    desc: "The most effective MHT-CET coaching in Thane — integrated with your 11th and 12th board preparation. Study the Maharashtra Board syllabus once and ace both HSC and MHT-CET together.",
    points: ["Full PCM / PCB coverage aligned to Maharashtra State Board", "MHT-CET mock tests begin from Class 12 Semester 1", "HSC board exam technique built in parallel", "Best results — 2 years of consistent preparation"],
    color: "from-violet-500 to-purple-500",
    icon: "📗",
  },
  {
    tag: "STANDALONE",
    title: "MHT-CET Coaching for Class 12",
    subtitle: "Class 12 Students",
    desc: "Standalone MHT-CET coaching in Thane for students who want dedicated CET preparation alongside their existing school or coaching programme.",
    points: ["Focused CET-pattern preparation", "Rapid syllabus revision and chapter prioritisation", "Fortnightly mock tests from Month 1", "Flexible batch timings available"],
    color: "from-blue-500 to-indigo-500",
    icon: "📘",
  },
  {
    tag: "CRASH",
    title: "MHT-CET Crash Course",
    subtitle: "Last-Minute Intensive",
    desc: "3-month high-intensity MHT-CET coaching in Thane for students in the final stretch before the exam. Maximum output in minimum time — strategic chapter selection, daily practice and mock tests.",
    points: ["High-impact chapters only — based on PYQ frequency", "Daily practice questions — PCM or PCB", "Mock test every week in the final month", "Available at all 6 Thane centres"],
    color: "from-amber-500 to-orange-500",
    icon: "🚀",
  },
  {
    tag: "MOCK SERIES",
    title: "MHT-CET Mock Test Series",
    subtitle: "For Self-Studiers",
    desc: "A dedicated MHT-CET mock test series for students who are self-studying but want structured testing and detailed analysis. Sit the test, get analysis, identify gaps.",
    points: ["Full-length CET Cell pattern mock tests", "Detailed subject-wise performance analysis", "Chapter-wise gap identification report", "Available standalone — no full course required"],
    color: "from-emerald-500 to-teal-500",
    icon: "📋",
  },
];

const cetFacts = [
  { val: "PCM",  label: "For Engineering aspirants — Physics, Chemistry, Maths" },
  { val: "PCB",  label: "For Pharmacy & Health Sciences — Physics, Chemistry, Biology" },
  { val: "200",  label: "Questions — 100 marks total in latest CET pattern" },
  { val: "100%", label: "Maharashtra Board Class 11–12 syllabus — same as MHT-CET" },
];

const centres = [
  { name: "Kapurbawdi",       slug: "kapurbawdi",       note: "MHT-CET coaching near Ghodbunder Road"    },
  { name: "Majiwada",         slug: "majiwada",         note: "MHT-CET classes in central Thane West"    },
  { name: "Highland Dhokali", slug: "highland-dhokali", note: "MHT-CET coaching near Dhokali junction"   },
  { name: "Lodha Amara",      slug: "lodha-amara",      note: "MHT-CET coaching near Kasarvadavali"      },
  { name: "Kasheli",          slug: "kasheli",          note: "MHT-CET coaching near Bhiwandi Road"      },
  { name: "Gokul Nagar",      slug: "gokul-nagar",      note: "MHT-CET coaching near Wagle Estate"       },
];

const centreNames = centres.map((c) => c.name);

const stats = [
  { val: "99.12", label: "Highest MHT-CET Percentile"      },
  { val: "State", label: "Board-Aligned Curriculum"         },
  { val: "24+",   label: "Years Coaching MHT-CET in Thane" },
  { val: "6",     label: "MHT-CET Centres in Thane"        },
];

export default function MHTCETCoachingThane() {
  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        .gold-gradient   { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .cet-gradient    { background: linear-gradient(135deg, #7c3aed, #6d28d9); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .cet-text  { background: linear-gradient(135deg, #a78bfa, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
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

     

      {/* ── HERO ── */}
      <section
        className="clip-hero min-h-[72vh] flex items-center relative overflow-hidden pt-24 pb-36"
        style={{ background: "linear-gradient(135deg, #1e0040 0%, #3b0764 40%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        {/* Floating badges */}
        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">🏆</span>
          <div><div className="font-semibold">Maharashtra Board Aligned</div><div className="text-white/60 text-xs">PCM & PCB both available</div></div>
        </div>
        <div className="float-anim absolute bottom-48 right-28 hidden lg:flex items-center gap-2 bg-violet-600/80 backdrop-blur-md rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">📊</span>
          <div><div className="font-semibold">99.12 Percentile</div><div className="text-white/80 text-xs">Highest MHT-CET from Thane</div></div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-violet-500/15 border border-violet-500/30 text-violet-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}>
              <span className="relative w-2 h-2 bg-violet-400 rounded-full pulse-dot" />
              MHT-CET Coaching · Thane
            </div>

            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              MHT-CET Coaching<br />
              in <span className="cet-text">Thane</span> —<br />
              <span className="gold-text">Saraswati Educare</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}>
              Dedicated <strong className="text-white/90">MHT-CET coaching in Thane</strong> for engineering and pharmacy aspirants — Maharashtra Board aligned syllabus, PCM and PCB streams, fortnightly mock tests and 6 centres across Thane West.
            </p>

            <div className="flex flex-wrap gap-4" style={{ animation: "fadeIn 0.9s ease 0.7s both" }}>
              <a href="/contact"
                className="shine-btn cet-gradient text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-violet-500/30 hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free MHT-CET Demo Class
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
              <div className="font-display text-4xl lg:text-5xl font-black cet-text">{s.val}</div>
              <div className="text-gray-400 text-xs mt-2 font-medium tracking-wide">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-violet-600 text-xs font-bold tracking-widest uppercase bg-violet-50 border border-violet-200 px-4 py-1.5 rounded-full">
                Our Approach
              </span>
              
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                Why <span className="cet-text">MHT-CET Coaching in Thane</span><br />
                at Saraswati Educare Works
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
                Unlike national coaching chains that focus only on JEE patterns, Saraswati Educare's MHT-CET coaching in Thane is tailored to the Maharashtra Board Class 11 and 12 syllabus — the same syllabus MHT-CET tests. Our students study smart, targeted content that directly improves their CET score.
              </p>
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

      
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-violet-400 text-xs font-bold tracking-widest uppercase bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 rounded-full">
                PCM & PCB
              </span>
              <h2 className="font-display text-3xl lg:text-4xl text-white mt-5 mb-4">
                MHT-CET Coaching for Both<br />
                <span className="cet-text">Engineering & Pharmacy</span> Aspirants
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                stream: "PCM — Engineering",
                label: "Physics · Chemistry · Maths",
                color: "from-violet-500 to-purple-500",
                icon: "⚙️",
                desc: "MHT-CET coaching in Thane for students targeting B.E. / B.Tech admissions in Maharashtra. Full PCM coverage aligned to Maharashtra Board Class 11–12 syllabus.",
                targets: ["B.E. / B.Tech (all branches)", "Architecture (NATA + PCM)", "Polytechnic diploma upgrades", "B.Sc. Engineering programmes"],
              },
              {
                stream: "PCB — Pharmacy & Health",
                label: "Physics · Chemistry · Biology",
                color: "from-rose-500 to-pink-500",
                icon: "💊",
                desc: "MHT-CET coaching in Thane for students targeting B.Pharm, Pharm.D and allied health sciences. NCERT Biology integrated with Maharashtra Board syllabus.",
                targets: ["B.Pharm / Pharm.D", "B.Sc. Agriculture", "B.Sc. Nursing", "Allied Health Sciences (AHS)"],
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-hover bg-white/5 border border-white/10 rounded-2xl p-8 h-full group hover:border-violet-500/30 transition-all duration-200">
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-2xl shadow-md shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className={`inline-block bg-gradient-to-r ${item.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-1`}>
                        {item.stream}
                      </div>
                      <div className="text-gray-400 text-xs">{item.label}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">{item.desc}</p>
                  <div className="space-y-2">
                    {item.targets.map((t, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color} shrink-0`} />
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className={`mt-6 w-10 h-1 rounded-full bg-gradient-to-r ${item.color} group-hover:w-20 transition-all duration-300`} />
                </div>
              </AnimatedSection>
            ))}
          </div>

         
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {cetFacts.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="font-display text-2xl font-black text-violet-400 mb-2">{f.val}</div>
                  <div className="text-gray-400 text-xs leading-snug">{f.label}</div>
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
              <span className="text-violet-600 text-xs font-bold tracking-widest uppercase bg-violet-50 border border-violet-200 px-4 py-1.5 rounded-full">
                Programme Options
              </span>
            
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5">
                MHT-CET Coaching<br />
                <span className="cet-text">Programme Details — Thane</span>
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
                    <div className="space-y-2 mb-5">
                      {p.points.map((pt, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${p.color} shrink-0`} />
                          {pt}
                        </div>
                      ))}
                    </div>
                    <a href="/contact"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${p.color} text-white text-xs font-semibold px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200`}>
                      Book Demo for This Programme →
                    </a>
                  </div>
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
              <span className="text-violet-600 text-xs font-bold tracking-widest uppercase bg-violet-50 border border-violet-200 px-4 py-1.5 rounded-full">
                Our Locations
              </span>
              
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                MHT-CET Coaching Available at<br />
                <span className="cet-text">All 6 Thane Centres</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                MHT-CET coaching near Kapurbawdi, MHT-CET classes in Majiwada, MHT-CET coaching near Ghodbunder Road — all available at Saraswati Educare. Book a free demo at the centre nearest to you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {centres.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <a href={`/centres/${c.slug}`}
                  className="card-hover flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 group hover:border-violet-200 hover:bg-violet-50/20 transition-all duration-200">
                  <div className="w-12 h-12 cet-gradient rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {c.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{c.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{c.note}</div>
                    <div className="text-violet-600 text-xs mt-1 font-medium">View MHT-CET batches →</div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mb-6 text-center">
              Book a Free <span className="cet-text">MHT-CET Demo Class</span> in Thane
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 text-center max-w-2xl mx-auto">
              <p>
                Book a free <strong>MHT-CET demo class</strong> at any Saraswati Educare centre in Thane today. MHT-CET coaching in Thane has never been more accessible — experienced faculty, Maharashtra Board aligned content, full PCM and PCB coverage and six centres to choose from.
              </p>
              <p>
                Saraswati Educare's <strong>MHT-CET coaching in Thane</strong> has produced students with percentiles above 98 and 99 — consistently, year after year. Join Thane's most trusted MHT-CET coaching institute since 2002.
              </p>
            </div>

           
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              {[
                { label: "View MHT-CET Course Details",    href: "/courses#mhtcet"  },
                { label: "See MHT-CET Results",             href: "/results"         },
                { label: "Download MHT-CET Resources",      href: "/students-hub"    },
                { label: "Find Your MHT-CET Centre",        href: "/centres"         },
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

     
      <section className="py-8 overflow-hidden" style={{ background: "#6d28d9" }}>
        <div className="marquee-track whitespace-nowrap">
          {[...centreNames, ...centreNames, ...centreNames, ...centreNames].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-4 mr-10 text-white font-bold text-sm uppercase tracking-widest">
              <span className="w-2 h-2 bg-white/60 rounded-full inline-block" />{c} — MHT-CET Coaching
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
              🏆 MHT-CET 2026 — Admissions Open
            </div>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Start Your MHT-CET Journey<br />in Thane — First Class Free
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Limited MHT-CET seats across all 6 Thane centres. Maharashtra Board aligned coaching, PCM and PCB both available. Book your free demo today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact"
                className="shine-btn bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free MHT-CET Demo
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