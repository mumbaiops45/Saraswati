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


const pcmSubjects = [
  { icon: "⚛️",  subject: "Physics",   desc: "Mechanics, Electrostatics, Optics, Modern Physics — full HSC + JEE/MHT-CET coverage. Dedicated Physics specialist only.",  color: "from-blue-500 to-indigo-500"   },
  { icon: "🧪",  subject: "Chemistry", desc: "Physical, Organic and Inorganic Chemistry — IUPAC nomenclature, name reactions, equilibrium and electrochemistry.", color: "from-emerald-500 to-teal-500"  },
  { icon: "📐",  subject: "Maths",     desc: "Calculus, Algebra, Trigonometry, Coordinate Geometry — chapter-by-chapter with JEE and MHT-CET problem sets.", color: "from-amber-500 to-orange-500"  },
];

const pcbSubjects = [
  { icon: "⚛️",  subject: "Physics",   desc: "NEET-focused Physics covering all high-weightage chapters — taught alongside NCERT with application-level MCQ practice.", color: "from-blue-500 to-indigo-500"   },
  { icon: "🧪",  subject: "Chemistry", desc: "NCERT Chemistry with NEET pattern MCQs — Organic reactions, Inorganic trends and Physical Chemistry numericals.", color: "from-emerald-500 to-teal-500"  },
  { icon: "🌿",  subject: "Biology",   desc: "Botany + Zoology — NCERT line-by-line, diagram practice, classification drilling and NEET previous year Biology MCQs.", color: "from-rose-500 to-pink-500"     },
];

const criticalPoints = [
  { icon: "📈", title: "Sudden Syllabus Jump — We Bridge It",          desc: "The Class 10 to Class 11 transition is one of the biggest academic jumps students face. Our 11th 12th coaching in Thane begins with a dedicated bridge module that fills every gap." },
  { icon: "⚖️", title: "Board + Competitive — Both Handled",            desc: "Our 11th and 12th science coaching in Thane integrates HSC board preparation with JEE, NEET and MHT-CET — so students never study the same concept twice for different exams." },
  { icon: "👥", title: "Small Batches — No One Left Behind",             desc: "Class 11 and 12 are too important for large, impersonal batches. Every Saraswati Educare 11th 12th coaching batch in Thane is capped at 30 students." },
  { icon: "📲", title: "Fortnightly Parent Communication",               desc: "Monthly parent-teacher meets, WhatsApp updates and real-time result sharing keep families fully informed throughout the academic year." },
  { icon: "📋", title: "Fortnightly Tests — Board + Competitive Pattern",desc: "Alternate tests simulate HSC board answer patterns and JEE/NEET MCQ patterns — so students are prepared for both simultaneously from Day 1." },
  { icon: "🎓", title: "Subject Specialists — Not Generalists",          desc: "A different expert teacher for each subject. The Physics teacher teaches only Physics. The Maths teacher teaches only Maths. No compromises on subject mastery." },
];

const streamCompare = [
  {
    stream: "Science PCM",
    label: "Physics · Chemistry · Mathematics",
    icon: "⚙️",
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    border: "border-blue-200",
    textAccent: "text-blue-700",
    targets: ["HSC Maharashtra Board / CBSE", "IIT JEE Mains & Advanced", "MHT-CET (Engineering)", "B.E. / B.Tech Admissions"],
    desc: "Our 11th and 12th PCM coaching in Thane is taught by dedicated subject specialists for Physics, Chemistry and Mathematics. JEE Mains and MHT-CET preparation is integrated into the board syllabus — giving students maximum output from every study hour.",
  },
  {
    stream: "Science PCB",
    label: "Physics · Chemistry · Biology",
    icon: "🩺",
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50",
    border: "border-rose-200",
    textAccent: "text-rose-700",
    targets: ["HSC Maharashtra Board / CBSE", "NEET UG Preparation", "MHT-CET (Pharmacy / PCB)", "B.Pharm / MBBS / BDS Admissions"],
    desc: "Our 11th and 12th PCB coaching in Thane covers Botany and Zoology with NCERT mastery at the core. NEET preparation is woven into the board syllabus — Biology diagram practice, MCQ drilling and NCERT revision are built into every week.",
  },
  {
    stream: "Science PCMB",
    label: "Physics · Chemistry · Maths + Biology",
    icon: "🔬",
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    border: "border-violet-200",
    textAccent: "text-violet-700",
    targets: ["Maximum flexibility — JEE + NEET both", "MHT-CET (both PCM and PCB)", "B.E. / B.Tech + B.Pharm options open", "Recommended for undecided students"],
    desc: "Can't decide between Engineering and Medicine? Our PCMB coaching in Thane keeps both options open. Students study all four subjects — Physics, Chemistry, Maths and Biology — with targeted exam preparation for JEE, NEET and MHT-CET.",
  },
];

const centres = [
  { name: "Kapurbawdi",       slug: "kapurbawdi",       area: "Ghodbunder Road, Pokhran Road students" },
  { name: "Majiwada",         slug: "majiwada",         area: "Majiwada, Kolbad, Vasant Vihar students" },
  { name: "Highland Dhokali", slug: "highland-dhokali", area: "Dhokali, Naupada, Panchpakhadi students" },
  { name: "Lodha Amara",      slug: "lodha-amara",      area: "Lodha properties, Kasarvadavali students" },
  { name: "Kasheli",          slug: "kasheli",          area: "Kasheli, Bhiwandi Road, Manpada students" },
  { name: "Gokul Nagar",      slug: "gokul-nagar",      area: "Gokul Nagar, Wagle Estate, Teen Hath Naka" },
];

const centreNames = centres.map((c) => c.name);

const stats = [
  { val: "#1",    label: "Most Enrolled Programme at Saraswati Educare" },
  { val: "3",     label: "Subject Specialists — One per Subject"         },
  { val: "24+",   label: "Years of 11th–12th Coaching in Thane"         },
  { val: "6",     label: "Centres Across Thane West"                     },
];

export default function page() {
  const [activeStream, setActiveStream] = useState("PCM");

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        
        .gold-gradient  { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .hsc-gradient   { background: linear-gradient(135deg, #0369a1, #1d4ed8); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hsc-text  { background: linear-gradient(135deg, #38bdf8, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
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
        .stream-tab { transition: all 0.25s ease; }
      `}</style>


    
      <section
        className="clip-hero min-h-[72vh] flex items-center relative overflow-hidden pt-24 pb-36"
        style={{ background: "linear-gradient(135deg, #001233 0%, #023e8a 40%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

       
        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">📖</span>
          <div><div className="font-semibold">PCM · PCB · PCMB</div><div className="text-white/60 text-xs">All streams available</div></div>
        </div>
        <div className="float-anim absolute bottom-48 right-28 hidden lg:flex items-center gap-2 bg-blue-600/80 backdrop-blur-md rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">🎓</span>
          <div><div className="font-semibold">Subject Specialists</div><div className="text-white/80 text-xs">One teacher per subject</div></div>
        </div>

        <div className="max-w-7xl px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}>
              <span className="relative w-2 h-2 bg-blue-400 rounded-full pulse-dot" />
              11th & 12th Science · Thane
            </div>

          
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              11th & 12th Science<br />
              Coaching in <span className="hsc-text">Thane</span> —<br />
              <span className="gold-text">Saraswati Educare</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}>
              Our most enrolled programme. <strong className="text-white/90">11th and 12th science coaching in Thane</strong> designed to ace HSC boards and competitive exams simultaneously — PCM, PCB and PCMB streams, subject specialists for every subject, 6 centres across Thane West.
            </p>

            <div className="flex flex-wrap gap-4" style={{ animation: "fadeIn 0.9s ease 0.7s both" }}>
              <a href="/contact"
                className="shine-btn hsc-gradient text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-blue-500/30 hover:scale-105 transition-transform duration-200 text-base">
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

      <section className="bg-gray-950 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="font-display text-3xl lg:text-4xl font-black hsc-text leading-tight">{s.val}</div>
              <div className="text-gray-400 text-xs mt-2 font-medium tracking-wide leading-snug">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

     
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full">
                Choose Your Stream
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                PCM · PCB · PCMB —<br />
                <span className="hsc-text">All Streams Covered in Thane</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
                Our 11th and 12th science coaching in Thane is available for all three science streams. Select your stream below to see what's included.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="flex justify-center gap-3 mb-10">
              {["PCM", "PCB", "PCMB"].map((stream) => (
                <button key={stream} onClick={() => setActiveStream(stream)}
                  className={`stream-tab px-6 py-3 rounded-full text-sm font-bold border ${
                    activeStream === stream
                      ? stream === "PCM"  ? "bg-blue-600 text-white border-transparent shadow-lg"
                        : stream === "PCB" ? "bg-rose-600 text-white border-transparent shadow-lg"
                        : "bg-violet-600 text-white border-transparent shadow-lg"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  }`}>
                  {stream}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {streamCompare.map((s) => {
            const shortStream = s.stream.split(" ")[1];
            if (shortStream !== activeStream) return null;
            return (
              <AnimatedSection key={s.stream}>
                <div className={`rounded-3xl border ${s.border} ${s.bgLight} p-8 lg:p-10 max-w-4xl mx-auto`}>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className={`inline-block bg-gradient-to-r ${s.color} text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4`}>
                        {s.stream}
                      </div>
                      <div className={`text-xs font-semibold ${s.textAccent} mb-4 uppercase tracking-wide`}>{s.label}</div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-6">{s.desc}</p>
                      <a href="/contact"
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${s.color} text-white font-semibold px-6 py-3 rounded-full text-sm hover:scale-105 transition-transform duration-200 shadow-md`}>
                        Book Free Demo for {shortStream} →
                      </a>
                    </div>
                    <div className="md:w-56 shrink-0">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Exam Targets</div>
                      <div className="space-y-2">
                        {s.targets.map((t, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${s.color} shrink-0`} />
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

     
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full">
                PCM Stream
              </span>
          
              <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mt-5 mb-3">
                PCM Coaching for Engineering Students —<br />
                <span className="hsc-text">11th & 12th Thane</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                Dedicated subject specialists for Physics, Chemistry and Mathematics. JEE Mains and MHT-CET preparation integrated into the board syllabus.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pcmSubjects.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-7 h-full group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform duration-200`}>
                    {s.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{s.subject}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  <div className={`mt-5 w-8 h-1 rounded-full bg-gradient-to-r ${s.color} group-hover:w-16 transition-all duration-300`} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-rose-600 text-xs font-bold tracking-widest uppercase bg-rose-50 border border-rose-200 px-4 py-1.5 rounded-full">
                PCB Stream
              </span>
             
              <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mt-5 mb-3">
                PCB Coaching for Medical Students —<br />
                <span className="neet-text">11th & 12th Thane</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                NCERT mastery integrated with board prep. Physics, Chemistry and Biology — Botany + Zoology — for HSC boards and NEET UG simultaneously.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pcbSubjects.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-7 h-full group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform duration-200`}>
                    {s.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{s.subject}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  <div className={`mt-5 w-8 h-1 rounded-full bg-gradient-to-r ${s.color} group-hover:w-16 transition-all duration-300`} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
                Why It Matters
              </span>
             
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5 mb-4">
                Why 11th & 12th is the<br />
                <span className="hsc-text">Most Critical Phase</span> — and How We Handle It
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
                Class 11 and 12 are the two most consequential years of a student's academic life. Our 11th 12th coaching in Thane is built specifically around the unique challenges of this phase.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {criticalPoints.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="card-hover bg-white/5 border border-white/10 rounded-2xl p-7 h-full group hover:border-blue-500/30 transition-all duration-200">
                  <div className="w-12 h-12 bg-blue-500/15 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-200">
                    {p.icon}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
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
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full">
                Our Locations
              </span>
            
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                11th & 12th Coaching in Thane —<br />
                <span className="hsc-text">Available at 6 Centres</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                Whether you live near Ghodbunder Road, Pokhran, Vasant Vihar or near any Lodha property in Thane — there is a Saraswati Educare 11th 12th coaching centre near you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {centres.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <a href={`/centres/${c.slug}`}
                  className="card-hover flex items-start gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 group hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-200">
                  <div className="w-12 h-12 hsc-gradient rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {c.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{c.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5 leading-snug">{c.area}</div>
                    <div className="text-blue-600 text-xs mt-1.5 font-medium">View 11th–12th batches →</div>
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
              Book Your Free Demo for{" "}
              <span className="hsc-text">11th & 12th Coaching in Thane</span>
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 text-center max-w-2xl mx-auto">
              <p>
                Book your free demo class for <strong>11th and 12th science coaching in Thane</strong> at Saraswati Educare today. Walk into any of our 6 centres, sit in a class and experience the quality for yourself — no fees, no commitment.
              </p>
              <p>
                Our <strong>11th 12th coaching in Thane</strong> is the most enrolled programme at Saraswati Educare because it delivers on both fronts — HSC board results and competitive exam scores. Join Thane's most trusted coaching institute since 2002.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              {[
                { label: "View 11th–12th Course Details",  href: "/courses#hsc"     },
                { label: "See Board Exam Results",          href: "/results"         },
                { label: "Download HSC Resources",          href: "/students-hub"    },
                { label: "Find Your Nearest Centre",        href: "/centres"         },
              ].map((l, i) => (
                <a key={i} href={l.href}
                  className="text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-200">
                  {l.label} →
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

    
      <section className="py-8 overflow-hidden" style={{ background: "#1d4ed8" }}>
        <div className="marquee-track whitespace-nowrap">
          {[...centreNames, ...centreNames, ...centreNames, ...centreNames].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-4 mr-10 text-white font-bold text-sm uppercase tracking-widest">
              <span className="w-2 h-2 bg-white/60 rounded-full inline-block" />{c} — 11th & 12th Science Coaching
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
              📖 Admissions Open — Class 11 & 12 · 2026–27
            </div>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Make Class 11 & 12 Count —<br />Book Your Free Demo Today
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Limited seats across all 6 centres for 11th and 12th science coaching in Thane. PCM, PCB and PCMB available. First class is completely free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact"
                className="shine-btn bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free 11th–12th Demo
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