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
const courses = [
  { icon: "🎯", title: "IIT JEE Coaching in Kapurbawdi Thane",        sub: "JEE Mains & Advanced — IITian faculty",              color: "from-emerald-500 to-teal-500",  href: "/courses#jee"        },
  { icon: "🩺", title: "NEET Coaching in Kapurbawdi Thane",            sub: "2-year & 1-year NEET programmes",                    color: "from-rose-500 to-pink-500",      href: "/courses#neet"       },
  { icon: "🏆", title: "MHT-CET Coaching Classes Kapurbawdi",          sub: "PCM & PCB — Maharashtra Board aligned",              color: "from-violet-500 to-purple-500",  href: "/courses#mhtcet"     },
  { icon: "📖", title: "11th & 12th Science Coaching Kapurbawdi",      sub: "PCM, PCB, PCMB — HSC & CBSE",                       color: "from-blue-500 to-indigo-500",    href: "/courses#hsc"        },
  { icon: "🏗️", title: "Foundation Coaching Class 7–10 Kapurbawdi",   sub: "CBSE, ICSE & Maharashtra State Board",               color: "from-amber-500 to-orange-500",   href: "/courses#foundation" },
  { icon: "⭐", title: "Olympiad Preparation Kapurbawdi",               sub: "NSO, IMO, NTSE, KVPY",                               color: "from-yellow-500 to-amber-400",   href: "/courses#olympiad"   },
];

const whyPoints = [
  { icon: "🎓", title: "IITian Faculty for JEE",           desc: "Our coaching classes in Kapurbawdi Thane have IITian and NITian educators teaching JEE Physics, Chemistry and Mathematics — full-time, no substitutes." },
  { icon: "🩺", title: "NEET-Qualified Teachers",           desc: "NEET and Biology faculty at our Kapurbawdi coaching classes hold NEET qualifications and science postgraduate degrees." },
  { icon: "👥", title: "Small Batches — Max 30",            desc: "Every coaching class in Kapurbawdi Thane is capped at 30 students. No student gets lost. Every doubt gets resolved." },
  { icon: "📲", title: "WhatsApp Parent Updates",           desc: "Real-time progress updates, test results and academic reports sent directly to parents every week via WhatsApp." },
  { icon: "📋", title: "Weekly Tests — Every Subject",      desc: "Consistent weekly assessment keeps students sharp and helps faculty identify gaps before they become problems." },
  { icon: "🏆", title: "24 Years of Verified Results",      desc: "Saraswati Educare coaching classes in Kapurbawdi Thane have produced JEE qualifiers, NEET scorers and HSC toppers year after year." },
];

const nearbyAreas = [
  "Kapurbawdi Junction",  "Ghodbunder Road",   "Brahmand",
  "Pokhran Road",         "Vartak Nagar",       "Majiwada",
  "CP Goenka School area","Lake City Mall area","Thane West",
];

const otherCentres = [
  { name: "Majiwada",         slug: "majiwada"         },
  { name: "Highland Dhokali", slug: "highland-dhokali" },
  { name: "Lodha Amara",      slug: "lodha-amara"      },
  { name: "Kasheli",          slug: "kasheli"          },
  { name: "Gokul Nagar",      slug: "gokul-nagar"      },
];

const stats = [
  { val: "22+", label: "Years at Kapurbawdi Centre"    },
  { val: "6",   label: "Courses Available"             },
  { val: "30",  label: "Max Students Per Batch"        },
  { val: "100%",label: "Full-Time Faculty Only"        },
];

const initialForm = { studentName: "", parentName: "", mobile: "", grade: "", board: "" };

export default function KapurbawdiCoachingClasses() {
  const [form, setForm]           = useState(initialForm);
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);

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
        .kap-gradient  { background: linear-gradient(135deg, #d97706, #b45309); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .kap-text  { background: linear-gradient(135deg, #f59e0b, #fb923c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
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
      `}</style>

    
      <section
        className="clip-hero min-h-[72vh] flex items-center relative overflow-hidden pt-24 pb-36"
        style={{ background: "linear-gradient(135deg, #1c0a00 0%, #78350f 45%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        {/* Floating badges */}
        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">📍</span>
          <div><div className="font-semibold">Kapurbawdi Junction</div><div className="text-white/60 text-xs">Ghodbunder Road, Thane West</div></div>
        </div>
        <div className="float-anim absolute bottom-48 right-28 hidden lg:flex items-center gap-2 bg-amber-600/80 backdrop-blur-md rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">🎓</span>
          <div><div className="font-semibold">Free Demo Class</div><div className="text-white/80 text-xs">Walk in Mon–Sat 8AM–8PM</div></div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
            

            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}>
              <span className="relative w-2 h-2 bg-amber-400 rounded-full pulse-dot" />
              Kapurbawdi · Thane West
            </div>

            {/* H1 */}
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              Best Coaching Classes<br />
              in <span className="kap-text">Kapurbawdi</span>,<br />
              <span className="gold-text">Thane</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}>
              Saraswati Educare's <strong className="text-white/90">coaching classes in Kapurbawdi Thane</strong> offer IIT JEE, NEET, MHT-CET and 11th–12th science coaching for CBSE and Maharashtra Board students — IITian faculty, small batches, 22+ years at this centre.
            </p>

            <div className="flex flex-wrap gap-4" style={{ animation: "fadeIn 0.9s ease 0.7s both" }}>
              <a href="#demo-form"
                className="shine-btn gold-gradient text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-amber-500/30 hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free Demo at Kapurbawdi
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
              <div className="font-display text-4xl lg:text-5xl font-black kap-text">{s.val}</div>
              <div className="text-gray-400 text-xs mt-2 font-medium tracking-wide">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── WHY PARENTS CHOOSE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Why Parents Choose Us
              </span>
              {/* H2 */}
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                Why Parents in <span className="kap-text">Kapurbawdi</span><br />
                Choose Saraswati Educare
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
                Parents looking for coaching classes near Kapurbawdi circle in Thane prefer Saraswati Educare because of our faculty quality, individual attention and transparent communication — standards maintained consistently across all 6 centres.
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
                  <h3 className="font-semibold text-gray-900 text-base mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Available Courses
              </span>
              {/* H2 */}
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5 mb-4">
                Courses at Our<br />
                <span className="kap-text">Kapurbawdi Coaching Centre</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">
                All six Saraswati Educare programmes are available at our coaching classes in Kapurbawdi Thane.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <a href={c.href}
                  className="card-hover block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 group h-full hover:border-amber-200 transition-all duration-200">
                  <div className={`w-12 h-12 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-200`}>
                    {c.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1">{c.title}</h3>
                  <p className="text-gray-400 text-xs">{c.sub}</p>
                  <div className={`mt-4 w-8 h-1 rounded-full bg-gradient-to-r ${c.color} group-hover:w-16 transition-all duration-300`} />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION + MAP + FORM ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Location info */}
            <AnimatedSection>
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Location
              </span>
              {/* H2 */}
              <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mt-5 mb-5">
                Location of Our<br />
                <span className="kap-text">Kapurbawdi Coaching Classes</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our <strong>coaching classes in Kapurbawdi Thane</strong> are conveniently located near Kapurbawdi Junction on Ghodbunder Road — easily accessible from Brahmand, Pokhran, Vartak Nagar, Majiwada and all surrounding Thane West localities. Students from CP Goenka School, Lake City Mall area and surroundings regularly attend our Kapurbawdi coaching classes.
              </p>

              {/* Info cards */}
              <div className="space-y-3 mb-7">
                {[
                  { icon: "📍", label: "Address",    val: "To be provided by client — near Kapurbawdi Junction, Thane West" },
                  { icon: "📞", label: "Phone",      val: "+91 XXXXX XXXXX"  },
                  { icon: "🕐", label: "Mon – Sat",  val: "8:00 AM – 8:00 PM" },
                  { icon: "🕐", label: "Sunday",     val: "9:00 AM – 1:00 PM" },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                    <span className="text-base mt-0.5 shrink-0">{row.icon}</span>
                    <div>
                      <div className="text-xs text-amber-700 font-semibold uppercase tracking-wide mb-0.5">{row.label}</div>
                      <div className="text-gray-800 font-medium text-sm">{row.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nearby areas */}
              <div className="mb-6">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Students from nearby areas</div>
                <div className="flex flex-wrap gap-2">
                  {nearbyAreas.map((area, i) => (
                    <span key={i} className="bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="tel:+91XXXXXXXXXX"
                  className="shine-btn gold-gradient text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md hover:scale-105 transition-transform duration-200">
                  📞 Call Kapurbawdi
                </a>
                <a href="https://wa.me/91XXXXXXXXXX"
                  className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md hover:scale-105 transition-transform duration-200">
                  💬 WhatsApp
                </a>
                <a href="#"
                  className="bg-gray-100 text-gray-700 font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  🗺️ Get Directions
                </a>
              </div>
            </AnimatedSection>

            {/* Map embed */}
            <AnimatedSection delay={0.12}>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-80 lg:h-[420px] bg-gray-100 relative">
                <iframe
                  title="Saraswati Educare Kapurbawdi Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7!2d72.96!3d19.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zKapurbawdi!5e0!3m2!1sen!2sin!4v1"
                  width="100%" height="100%"
                  style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2 border border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                  <span className="text-gray-900 font-semibold text-xs">Saraswati Educare — Kapurbawdi</span>
                </div>
                <p className="absolute bottom-3 left-0 right-0 text-center text-gray-400 text-xs italic">
                  * Update with actual Kapurbawdi location map embed
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── DEMO FORM ── */}
      <section id="demo-form" className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                Book a Demo
              </span>
              {/* H2 */}
              <h2 className="font-display text-3xl lg:text-4xl text-white mt-5">
                Book a Free Demo at Our<br />
                <span className="kap-text">Kapurbawdi Coaching Centre</span>
              </h2>
              <p className="text-gray-500 mt-3 text-sm">
                Walk in Monday to Saturday 8AM–8PM, or fill the form below. We respond within 2 hours.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {submitted ? (
                <div className="success-pop text-center py-8">
                  <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center text-3xl mx-auto mb-5 shadow-xl shadow-amber-300/30">✅</div>
                  <h3 className="font-display text-xl text-gray-900 mb-2">Demo Booked!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto mb-5">
                    We've received your request for the <strong>Kapurbawdi</strong> centre and will call <strong>{form.parentName}</strong> within 2 hours.
                  </p>
                  <button onClick={() => { setForm(initialForm); setSubmitted(false); }}
                    className="text-amber-600 text-sm font-medium underline underline-offset-2">
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
                      <input value="Kapurbawdi" readOnly className="w-full bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm font-semibold text-amber-700" />
                    </div>
                  </div>
                  <button type="submit"
                    className="shine-btn w-full gold-gradient text-white font-bold py-4 rounded-xl mt-5 text-base shadow-xl shadow-amber-300/30 hover:scale-[1.02] transition-transform duration-200">
                    📅 Book My Free Demo at Kapurbawdi →
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-3">No fees. No commitment. 2-hour response guaranteed.</p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SEO TEXT ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 text-center max-w-2xl mx-auto">
              <p>
                Our <strong>coaching classes in Kapurbawdi Thane</strong> welcome walk-in enquiries Monday to Saturday from 8 AM to 8 PM. Experience our teaching style, meet our faculty and see our facilities — before committing to anything.
              </p>
              <p>
                As the most trusted <strong>coaching institute in Kapurbawdi Thane</strong>, Saraswati Educare has been serving families in this locality for over two decades. Join the thousands of students from Kapurbawdi, Brahmand, Pokhran and Ghodbunder Road who have trusted us with their academic future.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              {[
                { label: "View All Courses",          href: "/courses"                 },
                { label: "See Our Results",            href: "/results"                 },
                { label: "Other Thane Centres",        href: "/centres"                 },
                { label: "Download Free Resources",    href: "/students-hub"            },
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

      {/* ── OTHER CENTRES ── */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl text-gray-900">
                Other <span className="gold-text">Saraswati Educare</span> Centres in Thane
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherCentres.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <a href={`/centres/${c.slug}`}
                  className="card-hover block text-center bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-200 group">
                  <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-2 shadow-sm group-hover:scale-110 transition-transform duration-200">
                    S
                  </div>
                  <div className="text-gray-700 font-semibold text-xs">{c.name}</div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-8 overflow-hidden gold-gradient">
        <div className="marquee-track whitespace-nowrap">
          {["Kapurbawdi","Majiwada","Highland Dhokali","Lodha Amara","Kasheli","Gokul Nagar",
            "Kapurbawdi","Majiwada","Highland Dhokali","Lodha Amara","Kasheli","Gokul Nagar"].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-4 mr-10 text-white font-bold text-sm uppercase tracking-widest">
              <span className="w-2 h-2 bg-white/60 rounded-full inline-block" />{c}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-block bg-amber-500/15 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              📍 Kapurbawdi · Ghodbunder Road · Thane West
            </div>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Join Coaching Classes in<br />
              <span className="kap-text">Kapurbawdi, Thane</span> Today
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Limited seats available. Walk in Monday to Saturday 8AM–8PM or book online. First class is completely free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#demo-form"
                className="shine-btn gold-gradient text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-amber-500/20 hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Free Demo at Kapurbawdi
              </a>
              <a href="tel:+91XXXXXXXXXX"
                className="bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/15 transition-all duration-200 text-base">
                📞 Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

   
    </div>
  );
}