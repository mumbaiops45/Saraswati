
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


const jeeResults = [
  { name: "Deva Vishwakarma", score: "AIR 2,92,659", year: "2021", centre: "Kapurbawdi", college: "NIT Surat — Mechanical Engg.", initials: "DV" },
  { name: "Aryan Mehta", score: "AIR 1,84,230", year: "2022", centre: "Majiwada", college: "NIT Nagpur — Civil Engg.", initials: "AM" },
  { name: "Priya Sharma", score: "AIR 3,10,450", year: "2023", centre: "Gokul Nagar", college: "BITS Pilani — B.Pharm", initials: "PS" },
  { name: "Rohit Patil", score: "AIR 98,760", year: "2024", centre: "Lodha Amara", college: "IIT Dhanbad — Mining Engg.", initials: "RP" },
  { name: "Sneha Kulkarni", score: "AIR 2,50,100", year: "2023", centre: "Kasheli", college: "VJTI Mumbai — IT", initials: "SK" },
  { name: "Karan Desai", score: "AIR 1,62,000", year: "2022", centre: "Highland Dhokali", college: "COEP Pune — Comp. Engg.", initials: "KD" },
];

const neetResults = [
  { name: "Rahul Vishwakarma", score: "418 / 720", year: "2021", centre: "Majiwada", college: "Government Medical College, Nagpur", initials: "RV" },
  { name: "Ananya Joshi", score: "521 / 720", year: "2022", centre: "Kapurbawdi", college: "Grant Medical College, Mumbai", initials: "AJ" },
  { name: "Mohit Sawant", score: "489 / 720", year: "2023", centre: "Gokul Nagar", college: "B.J. Medical College, Pune", initials: "MS" },
  { name: "Riya Nair", score: "553 / 720", year: "2024", centre: "Lodha Amara", college: "Seth GS Medical College, Mumbai", initials: "RN" },
  { name: "Tejas More", score: "445 / 720", year: "2022", centre: "Kasheli", college: "Dr. DY Patil Medical College", initials: "TM" },
  { name: "Pooja Rane", score: "502 / 720", year: "2023", centre: "Highland Dhokali", college: "KEM Hospital, Mumbai", initials: "PR" },
];

const mhtcetResults = [
  { name: "Rahul Singh", score: "98.99 Percentile", year: "2021", centre: "Gokul Nagar", initials: "RS" },
  { name: "Siddharth Pawar", score: "97.45 Percentile", year: "2022", centre: "Majiwada", initials: "SP" },
  { name: "Kavya Thakur", score: "96.80 Percentile", year: "2023", centre: "Kapurbawdi", initials: "KT" },
  { name: "Aman Gupta", score: "99.12 Percentile", year: "2024", centre: "Lodha Amara", initials: "AG" },
  { name: "Shreya Bhatt", score: "95.60 Percentile", year: "2022", centre: "Kasheli", initials: "SB" },
  { name: "Nikhil Deshpande", score: "98.20 Percentile", year: "2023", centre: "Highland Dhokali", initials: "ND" },
];

const hscResults = [
  { name: "Aisha Khan", score: "96.40%", year: "2022", board: "Maharashtra HSC", centre: "Majiwada", initials: "AK" },
  { name: "Dev Shukla", score: "94.80%", year: "2023", board: "CBSE", centre: "Kapurbawdi", initials: "DS" },
  { name: "Simran Oberoi", score: "97.20%", year: "2024", board: "Maharashtra HSC", centre: "Gokul Nagar", initials: "SO" },
  { name: "Vivek Naik", score: "93.60%", year: "2022", board: "CBSE", centre: "Kasheli", initials: "VN" },
  { name: "Deepa Pillai", score: "95.80%", year: "2023", board: "Maharashtra HSC", centre: "Lodha Amara", initials: "DP" },
  { name: "Harsh Tiwari", score: "98.00%", year: "2024", board: "CBSE", centre: "Highland Dhokali", initials: "HT" },
];

const trendData = [
  { year: "2018", jee: 4, neet: 3, hsc: 12 },
  { year: "2019", jee: 6, neet: 5, hsc: 18 },
  { year: "2020", jee: 7, neet: 6, hsc: 22 },
  { year: "2021", jee: 10, neet: 9, hsc: 28 },
  { year: "2022", jee: 14, neet: 12, hsc: 35 },
  { year: "2023", jee: 18, neet: 15, hsc: 42 },
  { year: "2024", jee: 22, neet: 19, hsc: 50 },
  { year: "2025", jee: 28, neet: 24, hsc: 60 },
];

const tabs = [
  { id: "jee", label: "IIT JEE", icon: "🎯", color: "from-emerald-500 to-teal-500", tagBg: "bg-emerald-500" },
  { id: "neet", label: "NEET UG", icon: "🩺", color: "from-rose-500 to-pink-500", tagBg: "bg-rose-500" },
  { id: "mhtcet", label: "MHT-CET", icon: "🏆", color: "from-violet-500 to-purple-500", tagBg: "bg-violet-500" },
  { id: "hsc", label: "HSC Board", icon: "📜", color: "from-blue-500 to-indigo-500", tagBg: "bg-blue-500" },
];

const resultMap = { jee: jeeResults, neet: neetResults, mhtcet: mhtcetResults, hsc: hscResults };

const cardColors = {
  jee: "from-emerald-500 to-teal-500",
  neet: "from-rose-500 to-pink-500",
  mhtcet: "from-violet-500 to-purple-500",
  hsc: "from-blue-500 to-indigo-500",
};

const centres = ["Kapurbawdi", "Majiwada", "Highland Dhokali", "Lodha Amara", "Kasheli", "Gokul Nagar"];


function TrendChart() {
  const maxVal = 60;
  const [ref, inView] = useInView(0.2);
  return (
    <div ref={ref} className="overflow-x-auto">
      <div className="min-w-[640px]">
     
        <div className="flex items-center gap-6 mb-8 justify-center">
          {[
            { label: "JEE Qualifiers", color: "bg-emerald-500" },
            { label: "NEET Qualifiers", color: "bg-rose-500" },
            { label: "HSC Toppers (90%+)", color: "bg-blue-500" },
          ].map((l, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${l.color}`} />
              <span className="text-gray-400 text-xs">{l.label}</span>
            </div>
          ))}
        </div>

     
        <div className="flex items-end gap-3 h-52">
          {trendData.map((d, i) => (
            <div key={d.year} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex items-end gap-1 h-44">
                {[
                  { val: d.jee, color: "bg-emerald-500" },
                  { val: d.neet, color: "bg-rose-500" },
                  { val: d.hsc, color: "bg-blue-500" },
                ].map((bar, j) => (
                  <div
                    key={j}
                    className={`flex-1 ${bar.color} rounded-t-md transition-all duration-1000 ease-out`}
                    style={{
                      height: inView ? `${(bar.val / maxVal) * 100}%` : "0%",
                      transitionDelay: `${i * 0.06 + j * 0.02}s`,
                      minHeight: inView ? "4px" : "0px",
                    }}
                  />
                ))}
              </div>
              <span className="text-gray-500 text-xs">{d.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [activeTab, setActiveTab] = useState("jee");
  const [filterCentre, setFilterCentre] = useState("All");
  const [filterYear, setFilterYear] = useState("All");

  const currentResults = resultMap[activeTab];
  const currentColor = cardColors[activeTab];
  const currentTab = tabs.find((t) => t.id === activeTab);

  const years = ["All", ...Array.from(new Set(currentResults.map((r) => r.year))).sort().reverse()];
  const filteredResults = currentResults.filter((r) => {
    const centreOk = filterCentre === "All" || r.centre === filterCentre;
    const yearOk = filterYear === "All" || r.year === filterYear;
    return centreOk && yearOk;
  });

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
        .marquee-track { display:flex; animation: marquee 18s linear infinite; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .results-enter { animation: resultsIn 0.35s ease both; }
        @keyframes resultsIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .tab-scroll::-webkit-scrollbar { display:none; }
      `}</style>

      <section
        className="clip-hero min-h-[65vh] flex items-center relative overflow-hidden pt-24 pb-32"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">🏆</span>
          <div>
            <div className="font-semibold">Real Results</div>
            <div className="text-white/60 text-xs">Not Marketing Numbers</div>
          </div>
        </div>
        <div className="float-anim absolute bottom-44 right-28 hidden lg:flex items-center gap-2 bg-amber-500/90 rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">📊</span>
          <div>
            <div className="font-semibold">24 Years of Data</div>
            <div className="text-white/80 text-xs">2002 – 2026</div>
          </div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}
            >
              Our Results
            </div>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-5xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              Proof That{" "}
              <span className="gold-text">Saraswati</span>
              <br />
              <span className="gold-text">Educare</span> Delivers
            </h1>
            <p
              className="text-white/70 text-lg leading-relaxed max-w-2xl"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}
            >
              Numbers do not lie. Below is the record of Saraswati Educare students who cracked the exams that matter — compiled from actual results, not marketing materials.
            </p>
          </div>
        </div>
      </section>

  
      <section className="bg-gray-950 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "28+", label: "JEE Qualifiers in 2025", color: "from-emerald-500 to-teal-400" },
            { val: "24+", label: "NEET Qualifiers in 2025", color: "from-rose-500 to-pink-400" },
            { val: "60+", label: "HSC Toppers in 2025", color: "from-blue-500 to-indigo-400" },
            { val: "99.12", label: "Highest MHT-CET Percentile", color: "from-violet-500 to-purple-400" },
          ].map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className={`font-display text-4xl lg:text-5xl font-black bg-gradient-to-r ${s.color} bg-clip-text`}
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {s.val}
              </div>
              <div className="text-gray-400 text-xs mt-2 font-medium tracking-wide">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

 
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                Student Results
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-gray-900 mt-5">
                Our <span className="gold-text">Toppers</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="tab-scroll flex overflow-x-auto gap-3 pb-4 mb-8 justify-start lg:justify-center">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setActiveTab(t.id); setFilterCentre("All"); setFilterYear("All"); }}
                  className={`shrink-0 flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeTab === t.id
                      ? `${t.tagBg} text-white border-transparent shadow-lg scale-105`
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>


          <AnimatedSection delay={0.15}>
            <div className="flex flex-wrap gap-3 mb-8 items-center">
              <span className="text-gray-500 text-sm font-medium">Filter by:</span>
              <select
                value={filterCentre}
                onChange={(e) => setFilterCentre(e.target.value)}
                className="text-sm border border-gray-200 rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:border-amber-400 bg-white"
              >
                <option value="All">All Centres</option>
                {centres.map((c) => <option key={c}>{c}</option>)}
              </select>
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="text-sm border border-gray-200 rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:border-amber-400 bg-white"
              >
                {years.map((y) => <option key={y}>{y}</option>)}
              </select>
              {(filterCentre !== "All" || filterYear !== "All") && (
                <button
                  onClick={() => { setFilterCentre("All"); setFilterYear("All"); }}
                  className="text-sm text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2"
                >
                  Clear filters
                </button>
              )}
              <span className="text-gray-400 text-sm ml-auto">{filteredResults.length} results shown</span>
            </div>
          </AnimatedSection>

    
          <div key={activeTab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 results-enter">
            {filteredResults.length > 0 ? filteredResults.map((r, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
               
                <div className={`h-1.5 w-full bg-gradient-to-r ${currentColor}`} />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 bg-gradient-to-br ${currentColor} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0`}>
                      {r.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{r.name}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{r.centre} Centre</div>
                    </div>
                  </div>

                  <div className={`inline-block bg-gradient-to-r ${currentColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                    {currentTab?.label}
                  </div>

                  <div className="font-display text-2xl font-bold text-gray-900 mb-1">{r.score}</div>
                  <div className="text-gray-400 text-sm mb-3">Year: {r.year}</div>

                  {r.college && (
                    <div className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-600 border border-gray-100">
                      🎓 {r.college}
                    </div>
                  )}
                  {r.board && (
                    <div className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-600 border border-gray-100">
                      📋 {r.board}
                    </div>
                  )}
                </div>
              </div>
            )) : (
              <div className="col-span-3 text-center py-16 text-gray-400">
                <div className="text-4xl mb-4">🔍</div>
                <p>No results match the selected filters. Try changing the centre or year.</p>
              </div>
            )}
          </div>

          <AnimatedSection delay={0.1}>
            <p className="text-center text-gray-400 text-xs mt-10 italic">
              * Placeholder data shown above. Client to provide verified student names, scores, years and colleges.
            </p>
          </AnimatedSection>
        </div>
      </section>

  
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
                Year-on-Year Trend
              </span>
              <h2 className="font-display text-3xl lg:text-5xl text-white mt-5">
                Consistent <span className="gold-text">Growth</span> Every Year
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
                JEE qualifiers, NEET scorers and HSC toppers from Saraswati Educare — 2018 to 2025.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
              <TrendChart />
            </div>
          </AnimatedSection>

          <p className="text-center text-gray-600 text-xs mt-6 italic">
            * Chart data to be updated with verified figures from client
          </p>
        </div>
      </section>

    
      <section className="py-12 bg-amber-50 border-y border-amber-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-amber-600 text-2xl mb-3">📋</div>
          <h3 className="font-display text-xl text-gray-900 mb-3">Our Commitment to Honest Results</h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
            Saraswati Educare does not inflate result claims. Every student featured on this page is a real student with verifiable credentials. We believe transparent, honest results are the foundation of a coaching institute's credibility — and the reason parents in Thane have trusted us since 2002.
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
              Your Child's Name<br />Could Be on This Page
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