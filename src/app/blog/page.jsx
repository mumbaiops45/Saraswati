

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


const categories = [
  { id: "all",      label: "All Posts",       icon: "📚", color: "from-amber-500 to-orange-500",   tagBg: "bg-amber-500"  },
  { id: "jee",      label: "IIT JEE",         icon: "🎯", color: "from-emerald-500 to-teal-500",   tagBg: "bg-emerald-500"},
  { id: "neet",     label: "NEET UG",          icon: "🩺", color: "from-rose-500 to-pink-500",      tagBg: "bg-rose-500"   },
  { id: "mhtcet",   label: "MHT-CET",          icon: "🏆", color: "from-violet-500 to-purple-500",  tagBg: "bg-violet-500" },
  { id: "board",    label: "Board Exam Tips",  icon: "📜", color: "from-blue-500 to-indigo-500",    tagBg: "bg-blue-500"   },
  { id: "parent",   label: "Parent Guides",    icon: "👨‍👩‍👧", color: "from-orange-500 to-amber-500",   tagBg: "bg-orange-500" },
  { id: "stories",  label: "Success Stories",  icon: "⭐", color: "from-yellow-500 to-amber-400",   tagBg: "bg-yellow-500" },
];

const posts = [
  {
    id: 1,
    cat: "jee",
    title: "How to Prepare for IIT JEE from Thane: A Complete Roadmap for 2026",
    excerpt: "A step-by-step month-by-month preparation plan tailored for students in Thane — covering syllabus, test series, time allocation and how to balance board exams simultaneously.",
    author: "IITian Faculty, Saraswati Educare",
    date: "May 2, 2026",
    readTime: "8 min read",
    featured: true,
    tag: "IIT JEE",
    color: "from-emerald-500 to-teal-500",
    tagBg: "bg-emerald-500",
  },
  {
    id: 2,
    cat: "neet",
    title: "NEET 2026 Preparation Strategy for Thane Students — Month-by-Month Guide",
    excerpt: "Everything a NEET aspirant in Thane needs: subject-wise weightage, NCERT strategy, mock test frequency and how to avoid the most common NEET preparation mistakes.",
    author: "NEET Faculty, Saraswati Educare",
    date: "Apr 28, 2026",
    readTime: "9 min read",
    featured: true,
    tag: "NEET UG",
    color: "from-rose-500 to-pink-500",
    tagBg: "bg-rose-500",
  },
  {
    id: 3,
    cat: "mhtcet",
    title: "MHT-CET vs JEE vs NEET: Which Exam Should Your Child Prioritise?",
    excerpt: "A clear, unbiased comparison of all three exams — difficulty level, syllabus overlap, seat availability and career outcomes — to help Thane parents make the right choice.",
    author: "Academic Team, Saraswati Educare",
    date: "Apr 20, 2026",
    readTime: "7 min read",
    featured: true,
    tag: "MHT-CET",
    color: "from-violet-500 to-purple-500",
    tagBg: "bg-violet-500",
  },
  {
    id: 4,
    cat: "board",
    title: "Best Study Schedule for Class 11 Science Students in Thane",
    excerpt: "A practical, day-by-day timetable for Class 11 students balancing school, coaching and self-study — built by faculty who have seen what actually works over 24 years.",
    author: "Academic Team, Saraswati Educare",
    date: "Apr 15, 2026",
    readTime: "6 min read",
    featured: false,
    tag: "Board Exams",
    color: "from-blue-500 to-indigo-500",
    tagBg: "bg-blue-500",
  },
  {
    id: 5,
    cat: "parent",
    title: "10 Things Parents Should Ask Before Choosing a Coaching Class in Thane",
    excerpt: "Most parents regret not asking these questions before enrolling. Faculty qualifications, batch sizes, result transparency, refund policies — a complete parent checklist.",
    author: "Mr. Dilip Singh, Founder",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    featured: false,
    tag: "Parent Guide",
    color: "from-orange-500 to-amber-500",
    tagBg: "bg-orange-500",
  },
  {
    id: 6,
    cat: "jee",
    title: "How Small Batch Sizes Improve JEE Results: The Saraswati Educare Approach",
    excerpt: "Data from 24 years of JEE coaching shows a direct link between batch size and student outcome. Here's why we cap every batch at 30 students — and why it matters for your child.",
    author: "IITian Faculty, Saraswati Educare",
    date: "Apr 5, 2026",
    readTime: "6 min read",
    featured: false,
    tag: "IIT JEE",
    color: "from-emerald-500 to-teal-500",
    tagBg: "bg-emerald-500",
  },
  {
    id: 7,
    cat: "jee",
    title: "Physics Preparation Tips for JEE Mains 2026 — From Our IITian Faculty",
    excerpt: "Chapter-wise weightage, most-tested topic clusters, common mistakes in Physics and a revision strategy that our IITian faculty has refined over years of JEE coaching in Thane.",
    author: "Physics Faculty, Saraswati Educare",
    date: "Mar 30, 2026",
    readTime: "10 min read",
    featured: false,
    tag: "IIT JEE",
    color: "from-emerald-500 to-teal-500",
    tagBg: "bg-emerald-500",
  },
  {
    id: 8,
    cat: "neet",
    title: "NCERT for NEET: Why 85% of NEET Questions Come from NCERT and How to Exploit It",
    excerpt: "A subject-wise breakdown of how NEET uses NCERT content, which chapters are over-represented and a focused NCERT revision plan that our NEET faculty swears by.",
    author: "Biology Faculty, Saraswati Educare",
    date: "Mar 25, 2026",
    readTime: "8 min read",
    featured: false,
    tag: "NEET UG",
    color: "from-rose-500 to-pink-500",
    tagBg: "bg-rose-500",
  },
  {
    id: 9,
    cat: "mhtcet",
    title: "MHT-CET 2026 Paper Pattern, Syllabus and Preparation Strategy",
    excerpt: "Everything you need to know about MHT-CET 2026 — updated paper pattern, syllabus differences from JEE, marking scheme and a month-wise strategy from Saraswati Educare.",
    author: "MHT-CET Faculty, Saraswati Educare",
    date: "Mar 20, 2026",
    readTime: "7 min read",
    featured: false,
    tag: "MHT-CET",
    color: "from-violet-500 to-purple-500",
    tagBg: "bg-violet-500",
  },
  {
    id: 10,
    cat: "board",
    title: "How to Score 90%+ in HSC Maharashtra Board Physics and Chemistry",
    excerpt: "Answer-writing technique, chapter-wise marks analysis, how to use 15 minutes of reading time wisely and the revision schedule our HSC toppers actually followed.",
    author: "HSC Faculty, Saraswati Educare",
    date: "Mar 15, 2026",
    readTime: "7 min read",
    featured: false,
    tag: "Board Exams",
    color: "from-blue-500 to-indigo-500",
    tagBg: "bg-blue-500",
  },
  {
    id: 11,
    cat: "parent",
    title: "Foundation Coaching for Class 9 and 10: Why Starting Early Changes Everything",
    excerpt: "Students who start foundation coaching in Class 9 consistently outperform late starters in JEE and NEET. Here's the data — and what parents in Thane should do right now.",
    author: "Academic Team, Saraswati Educare",
    date: "Mar 10, 2026",
    readTime: "6 min read",
    featured: false,
    tag: "Parent Guide",
    color: "from-orange-500 to-amber-500",
    tagBg: "bg-orange-500",
  },
  {
    id: 12,
    cat: "stories",
    title: "Success Story: How Deva Vishwakarma Cracked JEE from Kapurbawdi, Thane",
    excerpt: "A first-person account of preparation, struggles, faculty support and the mindset shift that helped a Kapurbawdi student qualify JEE Mains in 2021 from Saraswati Educare.",
    author: "Saraswati Educare Team",
    date: "Mar 5, 2026",
    readTime: "5 min read",
    featured: false,
    tag: "Success Story",
    color: "from-yellow-500 to-amber-400",
    tagBg: "bg-yellow-500",
  },
  {
    id: 13,
    cat: "parent",
    title: "Olympiad Preparation for Class 7-10 Students in Thane: A Complete Guide",
    excerpt: "NSO, IMO, NTSE, KVPY — what each Olympiad offers, how to prepare, and why Olympiad training gives students a long-term edge in JEE and NEET beyond just the certificate.",
    author: "Foundation Faculty, Saraswati Educare",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    featured: false,
    tag: "Parent Guide",
    color: "from-orange-500 to-amber-500",
    tagBg: "bg-orange-500",
  },
  {
    id: 14,
    cat: "parent",
    title: "How to Choose Between JEE Coaching Institutes in Thane: A Parent's Checklist",
    excerpt: "With dozens of options in Thane West, how do parents make the right call? A 12-point checklist — faculty, results transparency, batch size, location and hidden fee traps to avoid.",
    author: "Mr. Dilip Singh, Founder",
    date: "Feb 22, 2026",
    readTime: "7 min read",
    featured: false,
    tag: "Parent Guide",
    color: "from-orange-500 to-amber-500",
    tagBg: "bg-orange-500",
  },
  {
    id: 15,
    cat: "jee",
    title: "Time Management for JEE and Board Exams Simultaneously: Expert Strategy",
    excerpt: "The most common reason students underperform in both JEE and boards is poor time allocation. Our faculty shares the exact weekly timetable that top-performing students use.",
    author: "IITian Faculty, Saraswati Educare",
    date: "Feb 15, 2026",
    readTime: "9 min read",
    featured: false,
    tag: "IIT JEE",
    color: "from-emerald-500 to-teal-500",
    tagBg: "bg-emerald-500",
  },
];

const centres = ["Kapurbawdi", "Majiwada", "Highland Dhokali", "Lodha Amara", "Kasheli", "Gokul Nagar"];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  const featuredPosts = posts.filter((p) => p.featured);
  const filteredPosts = posts.filter((p) => {
    const catMatch = activeCategory === "all" || p.cat === activeCategory;
    const searchMatch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch && !p.featured;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const activeCat = categories.find((c) => c.id === activeCategory);

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
       
        .gold-gradient { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
        .shine-btn { position: relative; overflow: hidden; }
        .shine-btn::after {
          content:''; position:absolute; top:-50%; left:-75%; width:50%; height:200%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);
          transform:skewX(-20deg); animation:shine 3s infinite;
        }
        @keyframes shine { 0%,100%{left:-75%} 50%{left:125%} }
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .float-anim { animation: float 5s ease-in-out infinite; }
        .clip-hero { clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%); }
        .marquee-track { display:flex; animation: marquee 18s linear infinite; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .tab-scroll::-webkit-scrollbar { display:none; }
        .posts-grid { animation: fadeUp 0.4s ease both; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .search-input:focus { outline: none; border-color: #f59e0b; box-shadow: 0 0 0 3px rgba(245,158,11,0.15); }
        .line-clamp-2 { display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
        .line-clamp-3 { display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }
      `}</style>

      


      <section
        className="clip-hero min-h-[65vh] flex items-center relative overflow-hidden pt-24 pb-32"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/8  rounded-full blur-3xl pointer-events-none" />

        <div className="float-anim absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">
          <span className="text-2xl">✍️</span>
          <div>
            <div className="font-semibold">15 Posts / Month</div>
            <div className="text-white/60 text-xs">Faculty-reviewed content</div>
          </div>
        </div>
        <div className="float-anim absolute bottom-44 right-28 hidden lg:flex items-center gap-2 bg-amber-500/90 rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>
          <span className="text-2xl">📖</span>
          <div>
            <div className="font-semibold">6 Categories</div>
            <div className="text-white/80 text-xs">JEE · NEET · MHT-CET & more</div>
          </div>
        </div>

        <div className="max-w-7xl  px-16">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}
            >
              Blog & Study Guides
            </div>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-5xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}
            >
              Expert Study Guides<br />& <span className="gold-text">Exam Strategies</span><br />for Thane Students
            </h1>
            <p
              className="text-white/70 text-lg leading-relaxed max-w-2xl"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}
            >
              JEE preparation, NEET tips, MHT-CET strategy, board exam guides and parent resources — written by faculty who have been coaching Thane students since 2002.
            </p>

        
            <div
              className="mt-8 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 max-w-xl"
              style={{ animation: "fadeIn 0.9s ease 0.7s both" }}
            >
              <svg className="w-4 h-4 text-white/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles — JEE, NEET, MHT-CET..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(9); }}
                className="bg-transparent text-white placeholder-white/40 text-sm flex-1 search-input border-0"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-white/50 hover:text-white text-lg leading-none">×</button>
              )}
            </div>
          </div>
        </div>
      </section>

      
      {activeCategory === "all" && searchQuery === "" && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                    Featured
                  </span>
                  <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mt-4">
                    Must-Read <span className="gold-text">Articles</span>
                  </h2>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             
              <AnimatedSection delay={0} className="lg:col-span-2">
                <div className="card-hover bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden h-full group cursor-pointer">
                 
                  <div className={`h-56 bg-gradient-to-br ${featuredPosts[0].color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <span className="text-[8rem]">🎯</span>
                    </div>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-5 left-6">
                      <span className={`${featuredPosts[0].tagBg} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        {featuredPosts[0].tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl lg:text-2xl text-gray-900 font-bold mb-3 leading-snug group-hover:text-amber-600 transition-colors duration-200 line-clamp-2">
                      {featuredPosts[0].title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{featuredPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>✍️ {featuredPosts[0].author}</span>
                      <div className="flex items-center gap-3">
                        <span>📅 {featuredPosts[0].date}</span>
                        <span>⏱ {featuredPosts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

             
              <div className="flex flex-col gap-6">
                {featuredPosts.slice(1).map((post, i) => (
                  <AnimatedSection key={post.id} delay={0.1 + i * 0.08}>
                    <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden group cursor-pointer h-full">
                      <div className={`h-32 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <span className="text-[5rem]">{post.cat === "neet" ? "🩺" : "🏆"}</span>
                        </div>
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-3 left-4">
                          <span className={`${post.tagBg} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                            {post.tag}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-amber-600 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span>{post.date}</span>
                          <span>·</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      
      <section className={`py-20 ${activeCategory === "all" && searchQuery === "" ? "bg-gray-50" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <span className="text-amber-600 text-xs font-bold tracking-widest uppercase bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
                  All Articles
                </span>
                <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mt-4">
                  Browse by <span className="gold-text">Category</span>
                </h2>
              </div>
              <div className="text-gray-400 text-sm">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
                {activeCategory !== "all" ? ` in ${activeCat?.label}` : ""}
                {searchQuery ? ` matching "${searchQuery}"` : ""}
              </div>
            </div>
          </AnimatedSection>

         
          <AnimatedSection delay={0.05}>
            <div className="tab-scroll flex overflow-x-auto gap-3 pb-4 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setVisibleCount(9); }}
                  className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeCategory === cat.id
                      ? `${cat.tagBg} text-white border-transparent shadow-lg scale-105`
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>

  
          {visiblePosts.length > 0 ? (
            <>
              <div key={activeCategory + searchQuery} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 posts-grid">
                {visiblePosts.map((post, i) => (
                  <AnimatedSection key={post.id} delay={i * 0.06}>
                    <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden cursor-pointer group h-full flex flex-col">
                    
                      <div className={`h-40 bg-gradient-to-br ${post.color} relative overflow-hidden shrink-0`}>
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <span className="text-[6rem]">{post.cat === "jee" ? "🎯" : post.cat === "neet" ? "🩺" : post.cat === "mhtcet" ? "🏆" : post.cat === "board" ? "📜" : post.cat === "stories" ? "⭐" : "👨‍👩‍👧"}</span>
                        </div>
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <span className={`${post.tagBg} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                            {post.tag}
                          </span>
                          <span className="text-white/70 text-xs bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                     
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-semibold text-gray-900 leading-snug mb-3 group-hover:text-amber-600 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                          <span className="truncate max-w-[60%]">✍️ {post.author.split(",")[0]}</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

       
              {visibleCount < filteredPosts.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount((v) => v + 6)}
                    className="shine-btn gold-gradient text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
                  >
                    Load More Articles →
                  </button>
                  <p className="text-gray-400 text-xs mt-3">
                    Showing {visibleCount} of {filteredPosts.length} articles
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-medium text-gray-600 mb-2">No articles found</p>
              <p className="text-sm">Try a different category or search term.</p>
              <button
                onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                className="mt-6 gold-gradient text-white font-semibold px-6 py-3 rounded-full text-sm hover:scale-105 transition-transform duration-200"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>

     
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
              Stay Updated
            </span>
            <h2 className="font-display text-3xl lg:text-4xl text-white mt-5 mb-4">
              Get Study Tips & Exam<br />Guides <span className="gold-text">Directly</span>
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
              New articles every week — JEE strategies, NEET tips, MHT-CET updates and board exam guides. Written by our faculty, reviewed for accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email or WhatsApp number"
                className="flex-1 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <button className="shine-btn gold-gradient text-white font-semibold px-6 py-3 rounded-full text-sm hover:scale-105 transition-transform duration-200 shrink-0">
                Subscribe →
              </button>
            </div>
            <p className="text-gray-600 text-xs mt-4">No spam. Unsubscribe anytime.</p>
          </AnimatedSection>
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
            <div key={i} className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{ top:`${20+i*12}%`, left:`${5+i*16}%`, animation:`float ${3+i*0.5}s ease-in-out infinite`, animationDelay:`${i*0.4}s` }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-bold mb-5 leading-tight">
              Ready to Turn Strategy<br />into Results?
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Book a free demo class at any of our 6 Thane centres — and let our faculty guide your child personally.
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