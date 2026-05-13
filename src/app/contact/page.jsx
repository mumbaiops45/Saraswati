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

const centres = [
  { name: "Kapurbawdi",       icon: "🏫", phone: "+91 XXXXX XXXXX", address: "Address to be provided by client, Kapurbawdi, Thane West", color: "from-amber-500 to-orange-500",  border: "border-amber-200",  bg: "bg-amber-50"  },
  { name: "Majiwada",         icon: "🏫", phone: "+91 XXXXX XXXXX", address: "Address to be provided by client, Majiwada, Thane West",   color: "from-blue-500 to-indigo-500",   border: "border-blue-200",   bg: "bg-blue-50"   },
  { name: "Highland Dhokali", icon: "🏫", phone: "+91 XXXXX XXXXX", address: "Address to be provided by client, Highland Dhokali, Thane",color: "from-emerald-500 to-teal-500",  border: "border-emerald-200",bg: "bg-emerald-50"},
  { name: "Lodha Amara",      icon: "🏫", phone: "+91 XXXXX XXXXX", address: "Address to be provided by client, Lodha Amara, Thane",     color: "from-rose-500 to-pink-500",     border: "border-rose-200",   bg: "bg-rose-50"   },
  { name: "Kasheli",          icon: "🏫", phone: "+91 XXXXX XXXXX", address: "Address to be provided by client, Kasheli, Thane",         color: "from-violet-500 to-purple-500", border: "border-violet-200", bg: "bg-violet-50" },
  { name: "Gokul Nagar",      icon: "🏫", phone: "+91 XXXXX XXXXX", address: "Address to be provided by client, Gokul Nagar, Thane",     color: "from-yellow-500 to-amber-400",  border: "border-yellow-200", bg: "bg-yellow-50" },
];

const faqs = [
  { q: "Is the demo class free?",             a: "Yes. 100% free. No fees collected. No commitment required. Simply attend, experience our teaching and decide." },
  { q: "What is the minimum age for admission?", a: "We admit students from Class 7 onwards across all our 6 centres in Thane." },
  { q: "Do you offer weekend batches?",        a: "Yes. Weekend-only batches are available at select centres for working parents' convenience." },
  { q: "Do you provide study material?",       a: "Yes. All enrolled students receive custom printed workbooks, formula sheets and question banks — included in the course fee." },
  { q: "Is there a scholarship test?",         a: "Yes. Students can appear for the Saraswati Educare Merit Scholarship Test and earn fee waivers of up to 50% based on performance." },
];

const centreNames = ["Kapurbawdi", "Majiwada", "Highland Dhokali", "Lodha Amara", "Kasheli", "Gokul Nagar", "Any Centre"];

const initialForm = {
  studentName: "", parentName: "", mobile: "", email: "",
  grade: "", board: "", centre: "", source: "", message: "",
};

export default function Page() {
  const [form, setForm]       = useState(initialForm);
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCentre, setActiveCentre] = useState(0);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.studentName.trim()) e.studentName = "Student name is required";
    if (!form.parentName.trim())  e.parentName  = "Parent name is required";
    if (!form.mobile.trim() || !/^[6-9]\d{9}$/.test(form.mobile.trim())) e.mobile = "Enter a valid 10-digit mobile number";
    if (!form.grade)   e.grade  = "Please select a class";
    if (!form.board)   e.board  = "Please select a board";
    if (!form.centre)  e.centre = "Please select a preferred centre";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-200 ${
      errors[field]
        ? "border-rose-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
        : "border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
    }`;

  const selectClass = (field) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none transition-all duration-200 appearance-none ${
      errors[field]
        ? "border-rose-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
        : "border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
    }`;

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
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
        .tab-scroll::-webkit-scrollbar { display:none; }
        .faq-body { overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s ease; }
        select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 12px center; background-size:16px; padding-right:36px; }
        @keyframes successPop { 0%{transform:scale(0.8);opacity:0} 70%{transform:scale(1.05)} 100%{transform:scale(1);opacity:1} }
        .success-pop { animation: successPop 0.5s ease both; }
      `}</style>

  
      <section
        className="clip-hero min-h-[62vh] flex items-center relative overflow-hidden pt-24 pb-32"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/8  rounded-full blur-3xl pointer-events-none" />

        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">⚡</span>
          <div><div className="font-semibold">2-Hour Response</div><div className="text-white/60 text-xs">During school hours</div></div>
        </div>
        <div className="float-anim absolute bottom-44 right-28 hidden lg:flex items-center gap-2 bg-amber-500/90 rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">🎓</span>
          <div><div className="font-semibold">Free Demo Class</div><div className="text-white/80 text-xs">No commitment required</div></div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}>
              Contact Us
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}>
              Book a <span className="gold-text">Free Demo</span><br />Class Today
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}>
              Walk into any of our 6 centres in Thane or fill in the form below. We respond within 2 hours during school hours.
            </p>

        
            <div className="flex flex-wrap gap-3 mt-8" style={{ animation: "fadeIn 0.9s ease 0.7s both" }}>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/20 transition-all duration-200">
                📞 Call Now
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" className="flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/40 text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-[#25D366]/30 transition-all duration-200">
                💬 WhatsApp Us
              </a>
              <span className="flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2.5 rounded-full">
                🕐 Mon–Sat 8AM–8PM · Sun 9AM–1PM
              </span>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

           
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 lg:p-10">
                  {submitted ? (
                    <div className="success-pop text-center py-10">
                      <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl shadow-amber-300/30">
                        ✅
                      </div>
                      <h3 className="font-display text-2xl text-gray-900 mb-3">Demo Class Booked!</h3>
                      <p className="text-gray-500 leading-relaxed mb-6 max-w-sm mx-auto">
                        Thank you, <strong>{form.parentName}</strong>! We have received your enquiry for <strong>{form.studentName}</strong> and will call you within 2 hours.
                      </p>
                      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-800 mb-6 text-left max-w-sm mx-auto">
                        <div className="font-semibold mb-2">What happens next?</div>
                        <ol className="space-y-1 list-decimal list-inside text-amber-700">
                          <li>Our team calls you within 2 hours</li>
                          <li>We confirm your demo class slot</li>
                          <li>Walk in at your preferred centre</li>
                          <li>Experience the class — zero pressure</li>
                        </ol>
                      </div>
                      <button onClick={() => { setForm(initialForm); setSubmitted(false); }}
                        className="text-amber-600 text-sm font-medium underline underline-offset-2 hover:text-amber-700">
                        Submit another enquiry
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                          Enquiry Form
                        </span>
                        <h2 className="font-display text-2xl lg:text-3xl text-gray-900 mt-4 mb-1">
                          Book Your <span className="gold-text">Free Demo</span>
                        </h2>
                        <p className="text-gray-400 text-sm">Fill in the details below — we'll take it from there.</p>
                      </div>

                      <form onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                         
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                              Student Name <span className="text-rose-500">*</span>
                            </label>
                            <input name="studentName" value={form.studentName} onChange={handle}
                              placeholder="e.g. Aryan Sharma"
                              className={inputClass("studentName")} />
                            {errors.studentName && <p className="text-rose-500 text-xs mt-1">{errors.studentName}</p>}
                          </div>

                         
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                              Parent Name <span className="text-rose-500">*</span>
                            </label>
                            <input name="parentName" value={form.parentName} onChange={handle}
                              placeholder="e.g. Rajesh Sharma"
                              className={inputClass("parentName")} />
                            {errors.parentName && <p className="text-rose-500 text-xs mt-1">{errors.parentName}</p>}
                          </div>

                       
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                              Mobile Number <span className="text-rose-500">*</span>
                            </label>
                            <input name="mobile" value={form.mobile} onChange={handle}
                              placeholder="10-digit mobile number" maxLength={10} inputMode="numeric"
                              className={inputClass("mobile")} />
                            {errors.mobile && <p className="text-rose-500 text-xs mt-1">{errors.mobile}</p>}
                          </div>

                        
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                              Email Address
                            </label>
                            <input name="email" value={form.email} onChange={handle} type="email"
                              placeholder="optional"
                              className={inputClass("email")} />
                          </div>

                         
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                              Class / Grade <span className="text-rose-500">*</span>
                            </label>
                            <select name="grade" value={form.grade} onChange={handle} className={selectClass("grade")}>
                              <option value="">Select class</option>
                              {["Class 7","Class 8","Class 9","Class 10","11th PCM","11th PCB","12th PCM","12th PCB","JEE Mains","JEE Advanced","NEET","MHT-CET","Other"].map(o => (
                                <option key={o}>{o}</option>
                              ))}
                            </select>
                            {errors.grade && <p className="text-rose-500 text-xs mt-1">{errors.grade}</p>}
                          </div>

                        
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                              Board <span className="text-rose-500">*</span>
                            </label>
                            <select name="board" value={form.board} onChange={handle} className={selectClass("board")}>
                              <option value="">Select board</option>
                              {["CBSE","ICSE","Maharashtra State Board"].map(o => (
                                <option key={o}>{o}</option>
                              ))}
                            </select>
                            {errors.board && <p className="text-rose-500 text-xs mt-1">{errors.board}</p>}
                          </div>

                        
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                              Preferred Centre <span className="text-rose-500">*</span>
                            </label>
                            <select name="centre" value={form.centre} onChange={handle} className={selectClass("centre")}>
                              <option value="">Select centre</option>
                              {centreNames.map(o => <option key={o}>{o}</option>)}
                            </select>
                            {errors.centre && <p className="text-rose-500 text-xs mt-1">{errors.centre}</p>}
                          </div>

                        
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                              How Did You Hear About Us?
                            </label>
                            <select name="source" value={form.source} onChange={handle} className={selectClass("source")}>
                              <option value="">Select source</option>
                              {["Google","Friend / Family Referral","School","WhatsApp","Other"].map(o => (
                                <option key={o}>{o}</option>
                              ))}
                            </select>
                          </div>

                         
                          <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                              Message (Optional)
                            </label>
                            <textarea name="message" value={form.message} onChange={handle} rows={3}
                              placeholder="Any specific questions or requirements..."
                              className={`${inputClass("message")} resize-none`} />
                          </div>
                        </div>

                        <button type="submit"
                          className="shine-btn w-full gold-gradient text-white font-bold py-4 rounded-xl mt-6 text-base shadow-xl shadow-amber-300/30 hover:scale-[1.02] transition-transform duration-200">
                          📅 Book My Free Demo Class →
                        </button>
                        <p className="text-center text-gray-400 text-xs mt-3">
                          No fees. No commitment. We respond within 2 hours.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2 space-y-6">
             
              <AnimatedSection delay={0.1}>
                <div className="bg-gray-950 rounded-2xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center text-lg">🕐</div>
                    <div>
                      <div className="font-semibold text-white text-sm">Business Hours</div>
                      <div className="text-gray-500 text-xs">All 6 Centres</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: "Monday – Saturday", time: "8:00 AM – 8:00 PM" },
                      { day: "Sunday",            time: "9:00 AM – 1:00 PM" },
                    ].map((h, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                        <span className="text-gray-300 text-sm">{h.day}</span>
                        <span className="text-amber-400 font-semibold text-sm">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

            
              <AnimatedSection delay={0.15}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Quick Contact</div>
                  <div className="space-y-3">
                    <a href="tel:+91XXXXXXXXXX"
                      className="flex items-center gap-3 bg-gray-50 hover:bg-amber-50 border border-gray-100 hover:border-amber-200 rounded-xl px-4 py-3 transition-all duration-200 group">
                      <span className="text-xl">📞</span>
                      <div>
                        <div className="text-xs text-gray-400">Call Us</div>
                        <div className="text-gray-800 font-semibold text-sm group-hover:text-amber-700">+91 XXXXX XXXXX</div>
                      </div>
                    </a>
                    <a href="https://wa.me/91XXXXXXXXXX"
                      className="flex items-center gap-3 bg-[#f0fdf4] hover:bg-[#dcfce7] border border-green-100 hover:border-green-300 rounded-xl px-4 py-3 transition-all duration-200 group">
                      <span className="text-xl">💬</span>
                      <div>
                        <div className="text-xs text-gray-400">WhatsApp Us</div>
                        <div className="text-gray-800 font-semibold text-sm group-hover:text-green-700">+91 XXXXX XXXXX</div>
                      </div>
                    </a>
                    <a href="mailto:info@saraswatieducare.com"
                      className="flex items-center gap-3 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl px-4 py-3 transition-all duration-200 group">
                      <span className="text-xl">✉️</span>
                      <div>
                        <div className="text-xs text-gray-400">Email Us</div>
                        <div className="text-gray-800 font-semibold text-sm group-hover:text-blue-700">info@saraswatieducare.com</div>
                      </div>
                    </a>
                  </div>
                </div>
              </AnimatedSection>

            
              <AnimatedSection delay={0.2}>
                <div className="gold-gradient rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="text-3xl mb-3">🏆</div>
                    <div className="font-display text-xl font-bold mb-1">24 Years of Trust</div>
                    <div className="text-white/80 text-sm leading-relaxed">
                      Over 10,000 students coached. 6 centres across Thane. Admissions open for 2026–27.
                    </div>
                    <div className="mt-4 flex items-center gap-4 text-sm font-semibold">
                      <span>✅ Free Demo</span>
                      <span>✅ No Obligation</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Our Locations
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5">
                Find a Centre <span className="gold-text">Near You</span>
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
                Six coaching centres across Thane West — so there's always one close to home.
              </p>
            </div>
          </AnimatedSection>

       
          <AnimatedSection delay={0.05}>
            <div className="tab-scroll flex overflow-x-auto gap-3 pb-4 mb-8 justify-start lg:justify-center">
              {centres.map((c, i) => (
                <button key={i} onClick={() => setActiveCentre(i)}
                  className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeCentre === i
                      ? "gold-gradient text-white border-transparent shadow-lg scale-105"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  }`}>
                  {c.name}
                </button>
              ))}
            </div>
          </AnimatedSection>

        
          {centres.map((c, i) =>
            activeCentre === i ? (
              <AnimatedSection key={i}>
                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className={`h-3 w-full bg-gradient-to-r ${c.color}`} />
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{c.name}</div>
                        <div className="text-gray-400 text-sm">Saraswati Educare — Thane</div>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center text-2xl shadow-md`}>
                        🏫
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {[
                        { icon: "📍", label: "Address",       val: c.address },
                        { icon: "📞", label: "Phone",         val: c.phone   },
                        { icon: "🕐", label: "Hours (Mon–Sat)", val: "8:00 AM – 8:00 PM" },
                        { icon: "🕐", label: "Hours (Sunday)", val: "9:00 AM – 1:00 PM"  },
                      ].map((row, j) => (
                        <div key={j} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="text-xs text-gray-400 mb-1">{row.icon} {row.label}</div>
                          <div className="text-gray-800 font-medium text-sm">{row.val}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a href={`tel:${c.phone}`}
                        className={`shine-btn bg-gradient-to-r ${c.color} text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md hover:scale-105 transition-transform duration-200`}>
                        📞 Call This Centre
                      </a>
                      <a href="https://wa.me/91XXXXXXXXXX"
                        className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md hover:scale-105 transition-transform duration-200">
                        💬 WhatsApp
                      </a>
                      <a href="#"
                        className="bg-gray-100 text-gray-700 font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200">
                        🗺️ Get Directions
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-400 text-xs mt-4 italic">
                  * Address and phone to be updated by client
                </p>
              </AnimatedSection>
            ) : null
          )}

        
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {centres.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <button
                  onClick={() => setActiveCentre(i)}
                  className={`card-hover w-full text-center p-4 rounded-2xl border transition-all duration-200 ${
                    activeCentre === i
                      ? `${c.bg} ${c.border} border shadow-sm`
                      : "bg-white border-gray-100 shadow-sm hover:border-gray-200"
                  }`}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center text-lg mx-auto mb-2 shadow-sm`}>
                    🏫
                  </div>
                  <div className="text-gray-900 font-semibold text-xs">{c.name}</div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                FAQ
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5">
                Common <span className="gold-text">Questions</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  openFaq === i ? "border-amber-500/30 bg-white/5" : "border-white/10 bg-white/5 hover:border-white/20"
                }`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  >
                    <span className="text-white font-medium text-sm leading-snug">{faq.q}</span>
                    <span className={`text-amber-400 text-xl shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  <div className="faq-body" style={{ maxHeight: openFaq === i ? "200px" : "0", opacity: openFaq === i ? 1 : 0 }}>
                    <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-8 bg-amber-500 overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          {[...centres.map(c=>c.name), ...centres.map(c=>c.name), ...centres.map(c=>c.name), ...centres.map(c=>c.name)].map((c, i) => (
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
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Admissions Open<br />for 2026–27 Batch
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Limited seats across all 6 centres. Book a free demo today — no commitment, no pressure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="shine-btn bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 text-base">
                📅 Book Your Free Demo
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" className="bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-200 text-base">
                💬 WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

  
     
    </div>
  );
}