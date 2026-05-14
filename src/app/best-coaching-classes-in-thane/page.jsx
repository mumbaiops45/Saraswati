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
  { icon: "🎓", title: "IITian & NEET-Qualified Faculty",   desc: "Full-time subject specialists — no visiting faculty, no shortcuts." },
  { icon: "👥", title: "Small Batches — Max 30 Students",   desc: "Every student is seen, heard and helped — not just passed along." },
  { icon: "📋", title: "Weekly Tests + Monthly Reporting",   desc: "Consistent assessment and transparent parent communication every month." },
  { icon: "🔍", title: "Individual Doubt-Solving Sessions",  desc: "One-on-one doubt resolution built into every programme." },
  { icon: "📍", title: "6 Centres Across Thane West",        desc: "Kapurbawdi, Majiwada, Highland Dhokali, Lodha Amara, Kasheli, Gokul Nagar." },
  { icon: "🏆", title: "24 Years of Verified Results",       desc: "10,000+ alumni. Real toppers. No inflated claims." },
];

const courses = [
  { label: "Best coaching for IIT JEE in Thane",        sub: "JEE Mains and Advanced",            icon: "🎯", color: "from-emerald-500 to-teal-500",  href: "/courses#jee"       },
  { label: "Best NEET coaching classes in Thane",       sub: "NEET UG preparation",               icon: "🩺", color: "from-rose-500 to-pink-500",      href: "/courses#neet"      },
  { label: "Best MHT-CET coaching in Thane",            sub: "Maharashtra Engineering Entrance",   icon: "🏆", color: "from-violet-500 to-purple-500",  href: "/courses#mhtcet"    },
  { label: "Best 11th & 12th coaching in Thane",        sub: "Science stream coaching",            icon: "📖", color: "from-blue-500 to-indigo-500",    href: "/courses#hsc"       },
  { label: "Best foundation coaching in Thane",         sub: "Class 7, 8, 9, 10",                 icon: "🏗️", color: "from-amber-500 to-orange-500",   href: "/courses#foundation"},
  { label: "Best Olympiad coaching in Thane",           sub: "NSO, IMO, NTSE, KVPY",              icon: "⭐", color: "from-yellow-500 to-amber-400",   href: "/courses#olympiad"  },
];

const centres = [
  "Kapurbawdi", "Majiwada", "Highland Dhokali",
  "Lodha Amara", "Kasheli", "Gokul Nagar",
];

const stats = [
  { val: "24+",    label: "Years in Thane"         },
  { val: "10,000+",label: "Students Coached"       },
  { val: "6",      label: "Centres in Thane West"  },
  { val: "90%+",   label: "Board Pass Rate"        },
];

export default function pages() {
  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        
        .gold-gradient { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
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
        className="clip-hero min-h-[70vh] flex items-center relative overflow-hidden pt-24 pb-36"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/8  rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        
        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">🏆</span>
          <div><div className="font-semibold">Thane's #1 Choice</div><div className="text-white/60 text-xs">Since 2002</div></div>
        </div>
        <div className="float-anim absolute bottom-48 right-28 hidden lg:flex items-center gap-2 bg-amber-500/90 rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">📍</span>
          <div><div className="font-semibold">6 Centres</div><div className="text-white/80 text-xs">Across Thane West</div></div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
           
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}>
              <span className="relative w-2 h-2 bg-amber-400 rounded-full pulse-dot" />
              Admissions Open · 2026–27
            </div>

           
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              Best Coaching Classes<br />
              in <span className="gold-text">Thane</span> —<br />
              Saraswati Educare
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}>
              If you are searching for the <strong className="text-white/90">best coaching classes in Thane</strong> for your child, your search ends here. Saraswati Educare is Thane's most established and trusted coaching institute — 24 years of results, six centres, 10,000+ students coached.
            </p>

            <div className="flex flex-wrap gap-4" style={{ animation: "fadeIn 0.9s ease 0.7s both" }}>
              <a href="/contact"
                className="shine-btn gold-gradient text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-amber-500/30 hover:scale-105 transition-transform duration-200 text-base">
                📅 Book a Free Demo Class
              </a>
              <a href="tel:+91XXXXXXXXXX"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 text-base">
                📞 Call Now
              </a>
              <a href="/centres"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 text-base">
                📍 Find Nearest Centre
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-950 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="font-display text-4xl lg:text-5xl font-black gold-text">{s.val}</div>
              <div className="text-gray-400 text-xs mt-2 font-medium tracking-wide">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

     
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Why Choose Us
              </span>
             
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                Why Saraswati Educare is the<br />
                <span className="gold-text">Best Coaching Class in Thane</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
                Parents searching for the best coaching classes in Thane often ask us: what makes you different? The answer is simple. While newer coaching institutes in Thane come and go, Saraswati Educare has been consistently delivering results since 2002. Our 10,000+ alumni are our testimonials.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full group">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-200">
                    {p.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                Our Standards
              </span>
             
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5 mb-4">
                What the <span className="gold-text">Best Coaching Classes</span><br />
                in Thane Should Offer
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm">
                The best coaching class in Thane is not the one with the flashiest advertisements — it is the one that delivers results year after year. Here is what Saraswati Educare provides to every student.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: "01", title: "IITian & NEET-Qualified Faculty",       desc: "Every teacher at the best coaching in Thane must know their subject deeply. Our full-time IITian and NEET-qualified educators bring exam mastery and real insight." },
              { num: "02", title: "Small Batches of Under 30 Students",    desc: "The best coaching classes in Thane ensure individual attention. We cap every batch at 30 students so no child gets lost in a crowd." },
              { num: "03", title: "Weekly Tests — Every Single Week",      desc: "Consistent testing is what separates the best coaching institute in Thane from ordinary ones. Our weekly tests identify weaknesses before they become problems." },
              { num: "04", title: "Monthly Parent Reporting",              desc: "The best coaching class in Thane treats parents as partners. Our monthly reports keep every parent fully informed about their child's progress." },
              { num: "05", title: "Individual Doubt-Solving Sessions",     desc: "No question goes unanswered at Saraswati Educare. Scheduled doubt sessions are built into every programme at our best coaching classes in Thane." },
              { num: "06", title: "24 Years of Verifiable Results",        desc: "The best coaching in Thane must be able to prove its claims. Our result pages show real students with real scores — not marketing copy." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="card-hover flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-amber-500/30 hover:bg-white/8 transition-all duration-200">
                  <div className="font-display text-3xl font-black gold-text shrink-0 w-10">{item.num}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
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
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Our Locations
              </span>
             
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                Best Coaching Classes in Thane<br />
                <span className="gold-text">Across All 6 Centres</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
                Our best coaching classes in Thane are available at six convenient locations across Thane West. No matter which part of Thane you live in, the best coaching class in Thane is within reach.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {centres.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <a href={`/centres/${c.toLowerCase().replace(/ /g, "-")}`}
                  className="card-hover block text-center bg-white rounded-2xl border border-gray-100 shadow-sm p-5 group hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-200">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-200">
                    {c[0]}
                  </div>
                  <div className="font-semibold text-gray-900 text-xs leading-snug">{c}</div>
                  <div className="text-amber-600 text-xs mt-1 font-medium">View Centre →</div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.1}>
            <p className="text-center text-gray-400 text-sm mt-8 leading-relaxed">
              Unlike single-centre coaching institutes in Thane, <strong className="text-gray-700">Saraswati Educare brings the best coaching experience to your neighbourhood</strong> — across all 6 centres in Thane West.
            </p>
          </AnimatedSection>
        </div>
      </section>

   
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Courses
              </span>
            
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5">
                Courses at Thane's<br />
                <span className="gold-text">Best Coaching Classes</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <a href={c.href}
                  className="card-hover block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 group h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-200`}>
                    {c.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 leading-snug">{c.label}</h3>
                  <p className="text-gray-400 text-sm">{c.sub}</p>
                  <div className={`mt-4 w-8 h-1 rounded-full bg-gradient-to-r ${c.color} group-hover:w-16 transition-all duration-300`} />
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
              Join the <span className="gold-text">Best Coaching Classes in Thane</span><br />— Book Your Free Demo
            </h2>
            <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-5 text-center">
              <p>
                Book a free demo class at any of our six centres and experience why Saraswati Educare is consistently rated as the <strong>best coaching institute in Thane</strong> by thousands of parents. The best coaching class in Thane does not cost you anything to experience — your first class is completely free.
              </p>
              <p>
                Join Saraswati Educare — Thane's <strong>best coaching classes</strong> since 2002. When Thane parents want the best coaching class for their child, they do not gamble — they choose the institute with 24 years of proof.
              </p>
            </div>

          
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              {[
                { label: "View All Courses",     href: "/courses"  },
                { label: "See Our Results",      href: "/results"  },
                { label: "Find Your Centre",     href: "/centres"  },
                { label: "About Saraswati Educare", href: "/about" },
              ].map((l, i) => (
                <a key={i} href={l.href}
                  className="text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full hover:bg-amber-100 transition-colors duration-200">
                  {l.label} →
                </a>
              ))}
            </div>
          </AnimatedSection>
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
            <div className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/30">
              🎉 Admissions Open for 2026–27
            </div>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Experience the Best Coaching<br />Classes in Thane — Free
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Limited seats across all 6 centres. Book a free demo class today — no commitment, no pressure. Join Thane's best coaching institute since 2002.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact"
                className="shine-btn bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 text-base">
                📅 Book a Free Demo Class
              </a>
              <a href="tel:+91XXXXXXXXXX"
                className="bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-200 text-base">
                📞 Call Now
              </a>
              <a href="/centres"
                className="bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-200 text-base">
                📍 Find Your Nearest Centre
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      
    </div>
  );
}