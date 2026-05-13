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

const milestones = [
  { year: "2002", event: "Saraswati Educare founded in Thane West by Mr. Dilip Singh" },
  { year: "2005", event: "Opened second centre to meet growing parent demand" },
  { year: "2010", event: "First IIT JEE selection from Saraswati Educare batch" },
  { year: "2014", event: "Expanded to 4 centres across Thane" },
  { year: "2018", event: "Crossed 5,000 students coached milestone" },
  { year: "2022", event: "Awarded Best CBSE Coaching Classes in Thane by Government of Maharashtra" },
  { year: "2024", event: "Opened 6th centre at Gokul Nagar, reaching all major Thane West localities" },
  { year: "2025", event: "10,000+ students milestone achieved" },
];

const values = [
  {
    icon: "📐",
    title: "Academic Rigour",
    desc: "We do not dilute syllabi or lower expectations. We build students up to meet them.",
  },
  {
    icon: "🎯",
    title: "Individual Attention",
    desc: "Small batches mean every student is seen, heard and helped — not just passed along.",
  },
  {
    icon: "🤝",
    title: "Parent Partnership",
    desc: "We consider parents co-teachers. Regular reporting and open communication are non-negotiable.",
  },
  {
    icon: "✅",
    title: "Honest Results",
    desc: "We do not inflate result claims. Every topper featured on our results page is a real student with verifiable credentials.",
  },
  {
    icon: "🔄",
    title: "Consistent Improvement",
    desc: "Our faculty updates teaching methodologies, question banks and test formats every year in alignment with exam pattern changes.",
  },
];

const centres = ["Kapurbawdi", "Majiwada", "Highland Dhokali", "Lodha Amara", "Kasheli", "Gokul Nagar"];

export default function Page() {
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
        .timeline-line::before {
          content: ''; position: absolute; left: 50%; top: 0; bottom: 0;
          width: 2px; background: linear-gradient(to bottom, #f59e0b, #d97706, transparent);
          transform: translateX(-50%);
        }
        @media (max-width: 768px) {
          .timeline-line::before { left: 20px; }
        }
        .marquee-track { display:flex; animation: marquee 18s linear infinite; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>

    
      <section className="clip-hero min-h-[70vh] flex items-center relative overflow-hidden pt-24 pb-32"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}>

        <div className="absolute top-10 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

     
        <div className="float-anim absolute top-32 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">🏛️</span>
          <div>
            <div className="font-semibold">Est. 2002</div>
            <div className="text-white/60 text-xs">Thane's First Choice</div>
          </div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}
            >
              Our Story
            </div>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-5xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              24 Years of{" "}
              <span className="gold-text">Building Toppers</span>
              <br />in Thane
            </h1>
            <p
              className="text-white/70 text-lg leading-relaxed max-w-2xl"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}
            >
              From a single classroom to six centres and 10,000+ students — this is the story of Thane's most trusted coaching institute.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
            <AnimatedSection delay={0}>
              <div className="relative">
                <div className="bg-gray-950 rounded-3xl p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl" />
                
                  <div className="font-display text-[9rem] font-black gold-text leading-none select-none opacity-20 absolute -top-4 -right-4">
                    24
                  </div>
                  <div className="relative z-10 space-y-6">
                    {[
                      { num: "2002", label: "Founded in Thane West" },
                      { num: "6", label: "Centres Across Thane" },
                      { num: "10,000+", label: "Students Coached" },
                      { num: "24", label: "Years of Excellence" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0">
                        <div className="font-display text-3xl font-bold gold-text w-28 shrink-0">{item.num}</div>
                        <div className="text-gray-400 text-sm">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              
                <div className="absolute -bottom-4 -right-4 w-24 h-24 gold-gradient rounded-2xl opacity-20 rotate-12" />
              </div>
            </AnimatedSection>

           
            <AnimatedSection delay={0.15}>
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Our Story
              </span>
              <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mt-5 mb-6">
                How Saraswati Educare Became{" "}
                <span className="gold-text">Thane's Premier</span> Coaching Institute
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Saraswati Educare was founded in 2002 by <strong className="text-gray-900">Mr. Dilip Singh</strong>, a passionate educator who believed that every student in Thane deserved access to quality coaching without travelling to Mumbai or Pune.
                </p>
                <p>
                  What began as a single coaching class in Thane West grew steadily as results spoke louder than advertising. Parents told other parents. Students brought their siblings. One centre became two, then three, then six.
                </p>
                <p>
                  Today, Saraswati Educare operates six coaching centres across Thane — at <strong className="text-gray-900">Kapurbawdi, Majiwada, Highland Dhokali, Lodha Amara, Kasheli and Gokul Nagar</strong> — serving students from Class 7 through competitive exams. Our founding principle remains unchanged: <em>results through rigour, delivered with care.</em>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Founder
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5">
                Meet Our <span className="gold-text">Founder</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5">
               
                <div className="md:col-span-2 bg-gray-950 flex flex-col items-center justify-center py-14 px-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />
                  <div className="w-32 h-32 gold-gradient rounded-full flex items-center justify-center text-white text-5xl font-bold font-display shadow-2xl relative z-10 mb-6">
                    D
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="font-display text-xl text-white font-bold">Mr. Dilip Singh</div>
                    <div className="text-amber-400 text-sm mt-1">Founder & Director</div>
                    <div className="text-gray-500 text-xs mt-1">Saraswati Educare</div>
                    <div className="mt-4 inline-block bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs px-3 py-1 rounded-full">
                      Est. 2002
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs mt-4 italic relative z-10 text-center">
                    [Client to provide founder photo]
                  </p>
                </div>
              
                <div className="md:col-span-3 p-10 flex flex-col justify-center">
                  <div className="text-amber-500 text-5xl font-serif leading-none mb-4">"</div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Mr. Dilip Singh founded Saraswati Educare with the conviction that Thane students are as capable as any IIT-city student — they simply needed the right guidance.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm mb-8">
                    An educator by passion and training, Mr. Singh built Saraswati Educare on three principles: rigorous academics, genuine care for every student, and consistent transparency with parents.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Rigorous Academics", "Genuine Care", "Transparent Communication"].map((tag, i) => (
                      <span key={i} className="text-xs font-semibold bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

  
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                Vision & Mission
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5">
                What <span className="gold-text">Drives</span> Us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                label: "VISION",
                icon: "🔭",
                color: "from-amber-500 to-orange-600",
                text: "To be the most trusted and results-driven coaching institute in Thane — preparing every student, from Class 7 to JEE Advanced and NEET, with the knowledge, discipline and confidence to achieve their highest potential.",
              },
              {
                label: "MISSION",
                icon: "🚀",
                color: "from-blue-500 to-indigo-600",
                text: "To deliver structured, personalised and academically rigorous coaching that transforms Thane students into board toppers, JEE qualifiers and NEET achievers — within their own neighbourhood, without compromise.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-hover relative bg-white/5 border border-white/10 rounded-2xl p-8 h-full group overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className={`inline-block bg-gradient-to-r ${item.color} text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5`}>
                    {item.label}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
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
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Our Values
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5">
                The Principles That <span className="gold-text">Guide Us</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className={`card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full ${i === 4 ? "lg:col-start-2" : ""}`}>
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-2xl mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                  Our Faculty
                </span>
                <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mt-5 mb-6">
                  Faculty That Makes <span className="gold-text">the Difference</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At Saraswati Educare, our faculty is our greatest asset. Every teacher on our team is a subject specialist with a minimum of five years of teaching experience, a strong personal result track record, and genuine passion for the subjects they teach.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We employ only <strong className="text-gray-900">full-time faculty</strong> — no visiting teachers, no lecture sharing, no compromise on consistency.
                </p>
                <p className="text-amber-600 text-sm italic border-l-2 border-amber-400 pl-4">
                  Individual faculty profiles with names, qualifications and photos coming soon.
                </p>
              </div>

           
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "IITians", icon: "🎓", desc: "Top IIT graduates teaching Maths & Physics" },
                  { label: "NITians", icon: "⚗️", desc: "NIT alumni handling Chemistry & PCM" },
                  { label: "NEET Qualifiers", icon: "🩺", desc: "Biology experts with medical backgrounds" },
                  { label: "M.Sc / M.Tech", icon: "🔬", desc: "Subject specialists with post-grad mastery" },
                  { label: "HSC Gold Medallists", icon: "🥇", desc: "Board exam toppers who know the pattern" },
                  { label: "5+ Years Exp.", icon: "📅", desc: "Only experienced, full-time educators" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="card-hover bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
                    style={{
                      opacity: 0,
                      animation: `fadeInUp 0.5s ease ${0.1 + i * 0.07}s forwards`,
                    }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                    <div className="text-gray-400 text-xs leading-snug">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

     
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                Milestones
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5">
                Our <span className="gold-text">Journey</span> Through the Years
              </h2>
            </div>
          </AnimatedSection>

      
          <div className="relative timeline-line">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <div className={`relative flex items-center mb-10 ${isLeft ? "flex-row" : "flex-row-reverse"} md:flex-row md:flex-none`}>
                  
                    <div className={`w-full md:w-5/12 ${isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10 md:ml-auto"}`}>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors duration-200">
                        <div className="font-display text-2xl font-bold gold-text mb-2">{m.year}</div>
                        <p className="text-gray-300 text-sm leading-relaxed">{m.event}</p>
                      </div>
                    </div>

                    
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 gold-gradient rounded-full shadow-lg shadow-amber-500/30 items-center justify-center z-10">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>

                  
                    <div className="hidden md:block w-5/12" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <p className="text-center text-gray-600 text-xs mt-8 italic">
            * Dates and milestones to be verified and updated by client
          </p>
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
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Be Part of the Saraswati Educare Story
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Admissions open for 2026–27. Limited seats across all 6 centres.
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