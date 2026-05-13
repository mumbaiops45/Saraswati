"use client"
import { useEffect, useRef, useState } from "react";


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

const stats = [
  { value: "24+", label: "Years of Excellence" },
  { value: "10,000+", label: "Students Coached" },
  { value: "6", label: "Centres in Thane" },
  { value: "90%+", label: "Board Pass Rate" },
];

const features = [
  {
    icon: "🎓",
    title: "Expert Faculty",
    desc: "IITians, NITians and NEET-qualified educators who bring subject mastery and exam strategy to every class. Full-time teaching staff only.",
  },
  {
    icon: "👥",
    title: "Small Batch Sizes",
    desc: "We limit batch sizes to ensure every student gets individual attention. Doubts are resolved. No student is left behind.",
  },
  {
    icon: "🏆",
    title: "Proven Results",
    desc: "Year after year, our students feature in JEE Main, JEE Advanced, NEET and HSC merit lists.",
  },
  {
    icon: "📍",
    title: "6 Convenient Centres",
    desc: "Coaching centres at Kapurbawdi, Majiwada, Highland Dhokali, Lodha Amara, Kasheli and Gokul Nagar.",
  },
  {
    icon: "📚",
    title: "Complete Courses",
    desc: "From Class 7 Foundation to JEE Advanced — every stage of a student's journey under one roof.",
  },
  {
    icon: "📲",
    title: "Parent-Friendly Communication",
    desc: "WhatsApp updates, monthly parent-teacher meets and real-time result sharing keep parents fully informed.",
  },
];

const courses = [
  {
    tag: "FOUNDATION",
    title: "Class 7 – 10",
    desc: "CBSE, ICSE and Maharashtra State Board",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
  },
  {
    tag: "JUNIOR & SENIOR",
    title: "11th & 12th Science",
    desc: "Physics, Chemistry, Maths, Biology",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
  },
  {
    tag: "COMPETITIVE",
    title: "JEE / NEET / MHT-CET",
    desc: "JEE Mains, JEE Advanced, NEET UG, MHT-CET, Olympiads",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
  },
  {
    tag: "BOARD EXCELLENCE",
    title: "HSC & SSC",
    desc: "Board exam specialisation with toppers coaching programme",
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
  },
];

const toppers = [
  {
    name: "Deva Vishwakarma",
    exam: "IIT JEE Mains",
    score: "AIR 2,92,659",
    year: "2021",
    centre: "Kapurbawdi",
    initials: "DV",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "Rahul Vishwakarma",
    exam: "NEET UG",
    score: "418 / 720",
    year: "2021",
    centre: "Majiwada",
    initials: "RV",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Rahul Singh",
    exam: "MHT-CET",
    score: "98.99 Percentile",
    year: "2021",
    centre: "Gokul Nagar",
    initials: "RS",
    color: "from-emerald-400 to-teal-500",
  },
];

const testimonials = [
  {
    review:
      "My son was struggling with Physics in Class 11. Within three months of joining Saraswati Educare, his confidence completely transformed. He cleared MHT-CET with 97 percentile. Best coaching in Thane.",
    author: "Parent",
    centre: "Kapurbawdi Centre",
  },
  {
    review:
      "We researched every coaching institute in Thane West before choosing Saraswati Educare. The faculty quality, batch size and personal attention is unmatched. My daughter is now preparing for NEET 2026 with full confidence.",
    author: "Parent",
    centre: "Majiwada Centre",
  },
  {
    review:
      "Saraswati Educare gave my son the foundation he needed for JEE. The study material is excellent and the mock tests helped him understand exactly where he stood.",
    author: "Parent",
    centre: "Gokul Nagar Centre",
  },
];

const centres = [
  "Kapurbawdi",
  "Majiwada",
  "Highland Dhokali",
  "Lodha Amara",
  "Kasheli",
  "Gokul Nagar",
];


function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.5);
  const started = useRef(false);
  useEffect(() => {
    if (inView && !started.current) {
      started.current = true;
      const num = parseInt(target.replace(/\D/g, ""));
      const duration = 1800;
      const steps = 60;
      const increment = num / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= num) { setCount(num); clearInterval(timer); }
        else setCount(Math.floor(current));
      }, duration / steps);
    }
  }, [inView, target]);
  const plus = target.includes("+") ? "+" : "";
  const pct = target.includes("%") ? "%" : "";
  return <span ref={ref}>{count}{plus}{pct}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
        .hero-bg {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%);
        }
        .gold-gradient { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
        .shine-btn {
          position: relative; overflow: hidden;
        }
        .shine-btn::after {
          content: ''; position: absolute; top: -50%; left: -75%; width: 50%; height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          animation: shine 3s infinite;
        }
        @keyframes shine { 0%,100%{left:-75%} 50%{left:125%} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:1} 100%{transform:scale(1.6);opacity:0} }
        .float-anim { animation: float 4s ease-in-out infinite; }
        .pulse-dot::before {
          content:''; position:absolute; inset:0; border-radius:9999px;
          background: inherit; animation: pulse-ring 2s ease-out infinite;
        }
        .marquee-track { display:flex; animation: marquee 18s linear infinite; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .clip-hero { clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%); }
        .testimonial-card { backdrop-filter: blur(10px); }
      `}</style>

   
      <section className="hero-bg clip-hero min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Background orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-32 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />

       
        <div className="float-anim absolute top-32 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">🏆</span>
          <div>
            <div className="font-semibold">24 Years Strong</div>
            <div className="text-white/60 text-xs">Est. 2002</div>
          </div>
        </div>
        <div className="float-anim absolute bottom-48 right-24 hidden lg:flex items-center gap-2 bg-amber-500/90 backdrop-blur-md rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">🎯</span>
          <div>
            <div className="font-semibold">10,000+ Students</div>
            <div className="text-white/80 text-xs">Coached & Placed</div>
          </div>
        </div>

        <div className="max-w-7xl  px-16 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}
            >
              <span className="relative w-2 h-2 bg-amber-400 rounded-full pulse-dot" />
              Admissions Open · 2026–27 Batch
            </div>

            <h1
              className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-7xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeInUp 0.9s ease 0.3s both" }}
            >
              Thane's Most{" "}
              <span className="gold-text">Trusted</span>{" "}
              Coaching for
              <br />
              <span className="gold-text">IIT JEE, NEET</span>
              <br />& MHT-CET
            </h1>

            <p
              className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
              style={{ animation: "fadeInUp 0.9s ease 0.5s both" }}
            >
              Saraswati Educare has been helping students in Thane crack IIT JEE, NEET, MHT-CET and board exams since 2002. Six centres. IITian faculty. 24 years of consistent results.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{ animation: "fadeInUp 0.9s ease 0.7s both" }}
            >
              <a href="#" className="shine-btn gold-gradient text-white font-semibold px-8 py-4 rounded-full shadow-2xl shadow-amber-500/30 text-base hover:scale-105 transition-transform duration-200">
                📅 Book a Free Demo Class
              </a>
              <a href="#" className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 text-base">
                📍 Find Your Nearest Centre
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-gray-950 py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="gold-text font-display text-4xl lg:text-5xl font-black">
                <Counter target={s.value} />
              </div>
              <div className="text-gray-400 text-sm mt-2 font-medium tracking-wide">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── WHY SECTION ── */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Why Saraswati Educare
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                Why Thane Parents Choose{" "}
                <span className="gold-text">Saraswati Educare</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                A Legacy of Academic Excellence Since 2002 — over two decades, thousands of families across Thane have trusted us with their children's academic futures.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-2xl mb-5">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                Courses Overview
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5 mb-4">
                Courses Offered at{" "}
                <span className="gold-text">Saraswati Educare</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-hover relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-8 h-full group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className={`inline-block bg-gradient-to-r ${c.color} text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4`}>
                    {c.tag}
                  </div>
                  <h3 className="font-display text-white text-2xl lg:text-3xl font-bold mb-2">
                    {c.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                  <div className={`mt-6 w-10 h-1 rounded-full bg-gradient-to-r ${c.color} group-hover:w-20 transition-all duration-300`} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CENTRES MARQUEE ── */}
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

      {/* ── TOPPERS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Results Showcase
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                Our <span className="gold-text">Toppers</span> Speak
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                JEE, NEET and Board Results that define Saraswati Educare
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toppers.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="card-hover text-center bg-white rounded-3xl border border-gray-100 shadow-lg p-8 relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color}`} />
                  <div className={`w-20 h-20 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg`}>
                    {t.initials}
                  </div>
                  <div className={`inline-block bg-gradient-to-r ${t.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                    {t.exam}
                  </div>
                  <div className="font-display text-2xl font-bold text-gray-900 mb-1">{t.score}</div>
                  <div className="text-gray-400 text-sm mb-4">{t.year}</div>
                  <div className="text-gray-900 font-semibold">{t.name}</div>
                  <div className="text-amber-600 text-xs mt-1 font-medium">📍 {t.centre}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-gradient-to-br from-gray-950 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                Testimonials
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5">
                What Parents & Students Say About{" "}
                <span className="gold-text">Saraswati Educare</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-hover testimonial-card bg-white/5 border border-white/10 rounded-2xl p-7 h-full relative">
                  <div className="text-amber-400 text-4xl font-serif leading-none mb-4">"</div>
                  <p className="text-gray-300 leading-relaxed text-sm mb-6">{t.review}</p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 gold-gradient rounded-full flex items-center justify-center text-white text-xs font-bold">
                        P
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{t.author}</div>
                        <div className="text-amber-400/80 text-xs">{t.centre}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/30">
              🎉 Admissions Open for 2026–27
            </div>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-6 leading-tight">
              Secure Your Child's Spot in<br />Thane's Most Trusted Coaching
            </h2>
            <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Limited seats available across all 6 centres. Book a free demo class today — no commitment, no pressure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Your Free Demo
              </a>
              <a href="#" className="bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-200 text-base">
                💬 WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div>
                <div className="font-display font-bold text-white">Saraswati Educare</div>
                <div className="text-amber-500 text-xs">Est. 2002 · Thane's Premier Coaching</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-500 text-sm">
              {centres.map((c) => (
                <span key={c} className="hover:text-amber-400 transition-colors cursor-pointer">{c}</span>
              ))}
            </div>
            <div className="text-gray-600 text-xs text-center md:text-right">
              © 2026 Saraswati Educare.<br />All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}