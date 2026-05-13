"use client"
import { useState, useRef, useEffect } from "react";


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


const centre = {
  name:        "Majiwada",
  slug:        "majiwada",
  tagline:     "Central Thane West · Majiwada",
  heroDesc:    "The Saraswati Educare Majiwada coaching centre is centrally located in Majiwada, Thane West, serving students from Majiwada, Kolbad, Lodha Splendora, Vasant Vihar, Brahmand and Eastern Express Highway areas. Students from nearby schools in Majiwada regularly choose our Majiwada coaching centre for 11th and 12th science, IIT JEE and NEET preparation.",
  address:     "Address to be provided by client — Majiwada, Thane West",
  landmark:    "Near Majiwada Junction, Thane West",
  phone:       "+91 XXXXX XXXXX",
  whatsapp:    "https://wa.me/91XXXXXXXXXX",
  email:       "majiwada@saraswatieducare.com",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7!2d72.96!3d19.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjiwada!5e0!3m2!1sen!2sin!4v1",
  color:       "from-blue-500 to-indigo-500",
  bgLight:     "bg-blue-50",
  borderLight: "border-blue-200",
  textAccent:  "text-blue-600",
  nearbyAreas: ["Kolbad", "Lodha Splendora", "Vasant Vihar", "Brahmand", "Eastern Express Highway", "Thane West"],
  courses: [
    { name: "Foundation (Class 7–10)",  icon: "🏗️", desc: "CBSE, ICSE & Maharashtra State Board" },
    { name: "11th & 12th Science",      icon: "📖", desc: "PCM, PCB, PCMB — HSC & CBSE"         },
    { name: "IIT JEE Mains & Advanced", icon: "🎯", desc: "2-Year Integrated & 1-Year Intensive" },
    { name: "NEET UG",                  icon: "🩺", desc: "Physics, Chemistry, Biology"          },
    { name: "MHT-CET",                  icon: "🏆", desc: "Engineering & Pharmacy streams"       },
    { name: "Olympiad Preparation",     icon: "⭐", desc: "NSO, IMO, NTSE, KVPY"                 },
  ],
  stats: [
    { val: "20+", label: "Years at This Centre" },
    { val: "45+", label: "Batches per Year"      },
    { val: "30",  label: "Max Batch Size"        },
    { val: "6",   label: "Courses Offered"       },
  ],
  toppers: [
    { name: "Rahul Vishwakarma", exam: "NEET UG",   score: "418 / 720", year: "2021", initials: "RV", color: "from-rose-400 to-pink-500"     },
    { name: "Aisha Khan",        exam: "HSC Board",  score: "96.40%",    year: "2022", initials: "AK", color: "from-blue-400 to-indigo-500"   },
    { name: "Siddharth Pawar",   exam: "MHT-CET",    score: "97.45 %ile",year: "2022", initials: "SP", color: "from-violet-400 to-purple-500" },
  ],
  faqs: [
    { q: "Where is the Majiwada coaching centre located?",                        a: "Our Majiwada coaching centre is located near Majiwada Junction in Thane West, easily accessible from Lodha Splendora, Brahmand and the Eastern Express Highway. Exact address will be updated shortly — please call or WhatsApp us." },
    { q: "Which courses are available at Majiwada?",                              a: "All six Saraswati Educare programmes are available at our Majiwada coaching centre: Foundation (Class 7–10), 11th-12th Science, IIT JEE, NEET UG, MHT-CET and Olympiad coaching." },
    { q: "How do I book a free demo class at the Majiwada coaching centre?",      a: "Call us, WhatsApp us or fill the form on this page. We will schedule your free demo class at our Majiwada centre within 24 hours — no fees, no commitment." },
    { q: "Is Majiwada coaching centre suitable for NEET aspirants?",              a: "Yes. The Majiwada centre has dedicated NEET batches with NEET-qualified faculty covering Physics, Chemistry, Botany and Zoology with special NCERT-mastery sessions." },
    { q: "Do coaching classes in Majiwada run on weekends?",                      a: "Yes. Weekend batches are available at select timings at the Majiwada coaching centre to accommodate students with school schedules or working parents." },
  ],
  hours: [
    { day: "Monday – Saturday", time: "8:00 AM – 8:00 PM" },
    { day: "Sunday",            time: "9:00 AM – 1:00 PM" },
  ],
};

const allCentres = [
  { name: "Kapurbawdi",       slug: "kapurbawdi"       },
  { name: "Majiwada",         slug: "majiwada"         },
  { name: "Highland Dhokali", slug: "highland-dhokali" },
  { name: "Lodha Amara",      slug: "lodha-amara"      },
  { name: "Kasheli",          slug: "kasheli"          },
  { name: "Gokul Nagar",      slug: "gokul-nagar"      },
];

const initialForm = { studentName: "", parentName: "", mobile: "", grade: "", board: "", message: "" };

export default function Page() {
  const [form, setForm]           = useState(initialForm);
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq]     = useState(null);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.studentName.trim()) e.studentName = "Required";
    if (!form.parentName.trim())  e.parentName  = "Required";
    if (!form.mobile.trim() || !/^[6-9]\d{9}$/.test(form.mobile.trim())) e.mobile = "Enter valid 10-digit number";
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
      errors[f] ? "border-rose-400 focus:ring-2 focus:ring-rose-100" : "border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
    }`;

  const selectCls = (f) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none transition-all duration-200 appearance-none ${
      errors[f] ? "border-rose-400 focus:ring-2 focus:ring-rose-100" : "border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
    }`;

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
        @keyframes shine  { 0%,100%{left:-75%} 50%{left:125%} }
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .float-anim { animation: float 5s ease-in-out infinite; }
        .clip-hero  { clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%); }
        .marquee-track { display:flex; animation: marquee 18s linear infinite; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .faq-body { overflow:hidden; transition: max-height 0.4s ease, opacity 0.3s ease; }
        select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 12px center; background-size:16px; padding-right:36px; }
        @keyframes successPop { 0%{transform:scale(0.8);opacity:0} 70%{transform:scale(1.05)} 100%{transform:scale(1);opacity:1} }
        .success-pop { animation: successPop 0.5s ease both; }
      `}</style>

     

      {/* ── HERO ── */}
      <section className="clip-hero min-h-[68vh] flex items-center relative overflow-hidden pt-24 pb-32"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}>
        <div className="absolute top-10 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">📍</span>
          <div><div className="font-semibold">{centre.landmark}</div><div className="text-white/60 text-xs">Thane West</div></div>
        </div>
        <div className="float-anim absolute bottom-44 right-28 hidden lg:flex items-center gap-2 bg-amber-500/90 rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">🎓</span>
          <div><div className="font-semibold">Free Demo Class</div><div className="text-white/80 text-xs">No commitment required</div></div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-white/40 mb-5" style={{ animation: "fadeIn 0.6s ease 0.1s both" }}>
              <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
              <span>/</span><span className="text-white/60">Centres</span>
              <span>/</span><span className="text-amber-400">{centre.name}</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}>
              📍 {centre.tagline}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}>
              Coaching Classes in<br /><span className="gold-text">{centre.name}</span>, Thane West
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}>
              {centre.heroDesc}
            </p>

            <div className="flex flex-wrap gap-3" style={{ animation: "fadeIn 0.9s ease 0.7s both" }}>
              <a href="#demo-form"
                className="shine-btn gold-gradient text-white font-bold px-7 py-4 rounded-full shadow-2xl shadow-amber-500/30 hover:scale-105 transition-transform duration-200 text-sm">
                📅 Book Free Demo at {centre.name}
              </a>
              <a href={`tel:${centre.phone}`}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-7 py-4 rounded-full hover:bg-white/20 transition-all duration-200 text-sm">
                📞 Call This Centre
              </a>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-gray-950 py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {centre.stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="font-display text-4xl lg:text-5xl font-black gold-text">{s.val}</div>
              <div className="text-gray-400 text-xs mt-2 font-medium tracking-wide">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CENTRE INFO + MAP ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <span className={`text-xs font-bold tracking-widest uppercase ${centre.bgLight} ${centre.borderLight} border ${centre.textAccent} px-4 py-1.5 rounded-full`}>
                Centre Details
              </span>
              <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mt-5 mb-4">
                Expert IIT JEE, NEET &<br />Board Coaching at{" "}
                <span className="gold-text">{centre.name}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our coaching classes in {centre.name} are one of the most sought-after programmes in Thane West.
                Students attending the {centre.name} coaching centre benefit from IITian and NEET-qualified faculty,
                small batch sizes capped at 30 and a rigorous test series aligned to the latest exam patterns.
                The {centre.name} coaching centre is the go-to choice for families in{" "}
                {centre.nearbyAreas.slice(0, 3).join(", ")} and surrounding areas.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: "📍", label: "Address",    val: centre.address    },
                  { icon: "📌", label: "Landmark",   val: centre.landmark   },
                  { icon: "📞", label: "Phone",      val: centre.phone      },
                  { icon: "✉️", label: "Email",      val: centre.email      },
                  { icon: "🕐", label: "Mon – Sat",  val: "8:00 AM – 8:00 PM" },
                  { icon: "🕐", label: "Sunday",     val: "9:00 AM – 1:00 PM" },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl px-5 py-3.5 border border-gray-100">
                    <span className="text-lg mt-0.5 shrink-0">{row.icon}</span>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{row.label}</div>
                      <div className="text-gray-800 font-medium text-sm">{row.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={`tel:${centre.phone}`}
                  className={`shine-btn bg-gradient-to-r ${centre.color} text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md hover:scale-105 transition-transform duration-200`}>
                  📞 Call {centre.name}
                </a>
                <a href={centre.whatsapp} className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md hover:scale-105 transition-transform duration-200">
                  💬 WhatsApp
                </a>
                <a href="#" className="bg-gray-100 text-gray-700 font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  🗺️ Get Directions
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-96 lg:h-[480px] bg-gray-100 relative">
                <iframe
                  title={`Saraswati Educare ${centre.name} Map`}
                  src={centre.mapEmbedUrl}
                  width="100%" height="100%"
                  style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2 border border-gray-100">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${centre.color}`} />
                  <span className="text-gray-900 font-semibold text-xs">Saraswati Educare — {centre.name}</span>
                </div>
                <p className="absolute bottom-3 left-0 right-0 text-center text-gray-400 text-xs italic">
                  * Replace map embed URL with actual {centre.name} location
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className={`text-xs font-bold tracking-widest uppercase ${centre.bgLight} ${centre.borderLight} border ${centre.textAccent} px-4 py-1.5 rounded-full`}>
                Courses Available
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5">
                Programmes at <span className="gold-text">{centre.name}</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centre.courses.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-200">{c.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-base mb-1.5">{c.name}</h3>
                  <p className="text-gray-400 text-sm">{c.desc}</p>
                  <div className={`mt-5 w-8 h-1 rounded-full bg-gradient-to-r ${centre.color} group-hover:w-16 transition-all duration-300`} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEARBY AREAS ── */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl lg:text-3xl text-gray-900">
                Coaching Classes Near <span className="gold-text">{centre.name}</span>
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Students from these areas attend our {centre.name} coaching centre regularly.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-3 justify-center">
              {centre.nearbyAreas.map((area, i) => (
                <span key={i} className={`${centre.bgLight} ${centre.borderLight} border ${centre.textAccent} font-semibold text-sm px-4 py-2 rounded-full`}>
                  📍 {area}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TOPPERS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className={`text-xs font-bold tracking-widest uppercase ${centre.bgLight} ${centre.borderLight} border ${centre.textAccent} px-4 py-1.5 rounded-full`}>
                Results
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5">
                Toppers from <span className="gold-text">{centre.name}</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {centre.toppers.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-hover text-center bg-white rounded-2xl border border-gray-100 shadow-md p-7 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color}`} />
                  <div className={`w-16 h-16 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-5 shadow-lg`}>{t.initials}</div>
                  <div className={`inline-block bg-gradient-to-r ${t.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>{t.exam}</div>
                  <div className="font-display text-2xl font-bold text-gray-900 mb-1">{t.score}</div>
                  <div className="text-gray-400 text-sm mb-3">{t.year}</div>
                  <div className="text-gray-800 font-semibold text-sm">{t.name}</div>
                  <div className="text-amber-600 text-xs mt-1 font-medium">📍 {centre.name} Centre</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-8 italic">
            * Placeholder data. Client to provide verified topper details for {centre.name} centre.
          </p>
        </div>
      </section>

      {/* ── DEMO FORM ── */}
      <section id="demo-form" className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">Book a Demo</span>
              <h2 className="font-display text-3xl lg:text-4xl text-white mt-5">
                Book a Free Demo at<br /><span className="gold-text">{centre.name}</span>
              </h2>
              <p className="text-gray-500 mt-3 text-sm">No fees. No commitment. We respond within 2 hours.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {submitted ? (
                <div className="success-pop text-center py-8">
                  <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center text-3xl mx-auto mb-5 shadow-xl shadow-amber-300/30">✅</div>
                  <h3 className="font-display text-xl text-gray-900 mb-2">Demo Booked!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs mx-auto">
                    We've received your request for the <strong>{centre.name}</strong> centre and will call <strong>{form.parentName}</strong> within 2 hours.
                  </p>
                  <button onClick={() => { setForm(initialForm); setSubmitted(false); }} className="text-amber-600 text-sm font-medium underline underline-offset-2">
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
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Mobile Number <span className="text-rose-500">*</span></label>
                      <input name="mobile" value={form.mobile} onChange={handle} placeholder="10-digit number" maxLength={10} inputMode="numeric" className={inputCls("mobile")} />
                      {errors.mobile && <p className="text-rose-500 text-xs mt-1">{errors.mobile}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Class / Grade <span className="text-rose-500">*</span></label>
                      <select name="grade" value={form.grade} onChange={handle} className={selectCls("grade")}>
                        <option value="">Select class</option>
                        {["Class 7","Class 8","Class 9","Class 10","11th PCM","11th PCB","12th PCM","12th PCB","JEE Mains","JEE Advanced","NEET","MHT-CET","Other"].map(o => <option key={o}>{o}</option>)}
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
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Preferred Centre</label>
                      <input value={centre.name} readOnly className={`w-full bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-sm font-semibold ${centre.textAccent}`} />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Message (Optional)</label>
                      <textarea name="message" value={form.message} onChange={handle} rows={3} placeholder="Any questions or specific requirements..." className={`${inputCls("message")} resize-none`} />
                    </div>
                  </div>
                  <button type="submit" className="shine-btn w-full gold-gradient text-white font-bold py-4 rounded-xl mt-5 text-base shadow-xl shadow-amber-300/30 hover:scale-[1.02] transition-transform duration-200">
                    📅 Book My Free Demo at {centre.name} →
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-3">No fees. No commitment. 2-hour response guaranteed.</p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className={`text-xs font-bold tracking-widest uppercase ${centre.bgLight} ${centre.borderLight} border ${centre.textAccent} px-4 py-1.5 rounded-full`}>FAQ</span>
              <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mt-5">
                Questions About Our<br /><span className="gold-text">{centre.name}</span> Coaching Centre
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-3">
            {centre.faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${openFaq === i ? `${centre.bgLight} ${centre.borderLight}` : "border-gray-100 bg-white hover:border-gray-200"}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
                    <span className="text-gray-900 font-medium text-sm leading-snug">{faq.q}</span>
                    <span className={`text-amber-500 text-xl shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className="faq-body" style={{ maxHeight: openFaq === i ? "200px" : "0", opacity: openFaq === i ? 1 : 0 }}>
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-blue-100 pt-4">{faq.a}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER CENTRES ── */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl text-gray-900">Other <span className="gold-text">Saraswati Educare</span> Centres in Thane</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {allCentres.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <a href={`/centres/${c.slug}`}
                  className={`card-hover block text-center p-4 rounded-2xl border transition-all duration-200 ${
                    c.slug === centre.slug
                      ? `${centre.bgLight} ${centre.borderLight} border`
                      : "bg-white border-gray-100 hover:border-amber-200 hover:bg-amber-50/30"
                  }`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-2 shadow-sm ${c.slug === centre.slug ? `bg-gradient-to-r ${centre.color}` : "gold-gradient"}`}>
                    {c.slug === centre.slug ? "✓" : "S"}
                  </div>
                  <div className={`font-semibold text-xs ${c.slug === centre.slug ? centre.textAccent : "text-gray-700"}`}>{c.name}</div>
                  {c.slug === centre.slug && <div className="text-blue-500 text-xs mt-0.5">You are here</div>}
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-8 bg-amber-500 overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          {[...allCentres, ...allCentres, ...allCentres, ...allCentres].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-4 mr-10 text-white font-bold text-sm uppercase tracking-widest">
              <span className="w-2 h-2 bg-white/60 rounded-full inline-block" />{c.name}
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
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Join Coaching Classes in<br />{centre.name}, Thane Today
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Limited seats at our {centre.name} coaching centre. Book a free demo — no commitment, no pressure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#demo-form" className="shine-btn bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free Demo at {centre.name}
              </a>
              <a href={centre.whatsapp} className="bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-200 text-base">
                💬 WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

    
    </div>
  );
}