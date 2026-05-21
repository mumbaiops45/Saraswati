"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { categories, posts } from "../data/data";

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


function CardImage({ src, alt, color, tagBg, tag, readTime, height = "h-48", emoji = "📖" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`${height} relative overflow-hidden shrink-0`}>
      {!failed && src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${color}`}>
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-[6rem]">{emoji}</span>
          </div>
        </div>
      )}

   
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* bottom badges */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        {tag && (
          <span className={`${tagBg} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
            {tag}
          </span>
        )}
        {readTime && (
          <span className="text-white/80 text-xs bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
            {readTime}
          </span>
        )}
      </div>
    </div>
  );
}


function catEmoji(cat) {
  return { jee: "🎯", neet: "🩺", mhtcet: "🏆", board: "📜", stories: "⭐", parent: "👨‍👩‍👧" }[cat] ?? "📖";
}

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
        className="min-h-[65vh] flex items-center relative overflow-hidden pt-24 pb-32"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}
      >
        <div className="absolute top-10 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className=" absolute top-36 right-16 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white text-sm shadow-xl">

          <div>
            <div className="font-semibold">15 Posts / Month</div>
            <div className="text-white/60 text-xs">Faculty-reviewed content</div>
          </div>
        </div>
        <div className="absolute bottom-44 right-28 hidden lg:flex items-center gap-2 bg-amber-500/90 rounded-2xl px-4 py-3 text-white text-sm shadow-xl" style={{ animationDelay: "1.5s" }}>

          <div>
            <div className="font-semibold">6 Categories</div>
            <div className="text-white/80 text-xs">JEE · NEET · MHT-CET & more</div>
          </div>
        </div>

        <div className="max-w-7xl px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
              style={{ animation: "fadeIn 0.8s ease 0.2s both" }}>
              Blog & Study Guides
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl text-white leading-[1.1] mb-6"
              style={{ animation: "fadeIn 0.9s ease 0.3s both" }}>
              Expert Study Guides<br />& <span className="gold-text">Exam Strategies</span><br />for Thane Students
            </h1>
            <p className="text-white text-md leading-relaxed max-w-2xl"
              style={{ animation: "fadeIn 0.9s ease 0.5s both" }}>
              JEE preparation, NEET tips, MHT-CET strategy, board exam guides and parent resources — written by faculty who have been coaching Thane students since 2002.
            </p>

            <div className="mt-8 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 max-w-xl"
              style={{ animation: "fadeIn 0.9s ease 0.7s both" }}>
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
                <div className="card-hover bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden h-full group cursor-pointer flex flex-col">
                  <CardImage
                    src={featuredPosts[0]?.image}
                    alt={featuredPosts[0]?.title}
                    color={featuredPosts[0]?.color}
                    tagBg={featuredPosts[0]?.tagBg}
                    tag={featuredPosts[0]?.tag}
                    height="h-64"
                    emoji={catEmoji(featuredPosts[0]?.cat)}
                  />
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-display text-xl lg:text-2xl text-gray-900 font-bold mb-3 leading-snug group-hover:text-amber-600 transition-colors duration-200 line-clamp-2">
                      {featuredPosts[0]?.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{featuredPosts[0]?.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>✍️ {featuredPosts[0]?.author}</span>
                      <div className="flex items-center gap-3">
                        <span>📅 {featuredPosts[0]?.date}</span>
                        <span>⏱ {featuredPosts[0]?.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

            
              <div className="flex flex-col gap-6">
                {featuredPosts.slice(1).map((post, i) => (
                  <AnimatedSection key={post.id} delay={0.1 + i * 0.08}>
                    <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden group cursor-pointer flex flex-col h-full">
                      <CardImage
                        src={post.image}
                        alt={post.title}
                        color={post.color}
                        tagBg={post.tagBg}
                        tag={post.tag}
                        height="h-40"
                        emoji={catEmoji(post.cat)}
                      />
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-amber-600 transition-colors duration-200 line-clamp-2 flex-1">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mt-auto">
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
                      <CardImage
                        src={post.image}
                        alt={post.title}
                        color={post.color}
                        tagBg={post.tagBg}
                        tag={post.tag}
                        readTime={post.readTime}
                        height="h-48"
                        emoji={catEmoji(post.cat)}
                      />

                     
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
              style={{ top: `${20 + i * 12}%`, left: `${5 + i * 16}%`, animation: `float ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}
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
                 Book Your Free Demo
              </a>
              <a href="#" className="bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-200 text-base">
                 WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}